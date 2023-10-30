// require("dotenv").config();
// const { fetchMongoDBData } = require("./mongoDBAPI");

// const formatTimeDifference = (timeDifference) => {
//   const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
//   const hours = Math.floor(
//     (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
//   );
//   const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
//   return `${days}d ${hours}h ${minutes}min`;
// };

// const fetchServerData = async (server) => {
//   const { server_id, group_size, wipe_cycle } = server;

//   // Log rate limits before sending the request
//   console.log("Rate Limits before request:");
//   console.log(`Limit: ${rateLimitLimit}, Remaining: ${rateLimitRemaining}`);

//   const response = await fetch(
//     `https://api.battlemetrics.com/servers/${server_id}`,
//     {
//       headers: {
//         Authorization: `Bearer ${process.env.BATTLEMETRICS_API_KEY}`,
//       },
//     }
//   );

//   // Log rate limits after receiving the response
//   rateLimitLimit = parseInt(response.headers.get("X-Rate-Limit-Limit"), 10);
//   rateLimitRemaining = parseInt(response.headers.get("X-Rate-Limit-Remaining"), 10);
//   console.log("Rate Limits after request:");
//   console.log(`Limit: ${rateLimitLimit}, Remaining: ${rateLimitRemaining}`);

//   // if not success status
//   if (response.status !== 200) {
//     console.error(`Error fetching server data for server_id ${server_id}. Status: ${response.status}`);
//     return null;
//   }

//   // response parsed and converted into Javascript object
//   const data = await response.json();

//   // double check if data exists and has data and attributes properties
//   if (data && data.data && data.data.attributes) {
//     const { name, country } = data.data.attributes;
//     const { rust_type, rust_last_wipe } = data.data.attributes.details;
//     const next_wipe = new Date(rust_last_wipe);
//     next_wipe.setDate(next_wipe.getDate() + wipe_cycle);

//     // Calculating the time difference between current time and next_wipe
//     const currentTime = new Date();
//     const timeDifference = next_wipe - currentTime;

//     // Formating the rust_last_wipe date as "dd/mm/yyyy"
//     const formattedLastWipe = new Intl.DateTimeFormat("en-GB").format(
//       new Date(rust_last_wipe)
//     );

//     return {
//       server_id,
//       name,
//       type: rust_type,
//       country,
//       group_size,
//       last_wipe: formattedLastWipe,
//       next_wipe:
//         timeDifference > 0 ? formatTimeDifference(timeDifference) : "Now",
//     };
//   } else {
//     console.error(`Incomplete or unexpected response for server_id ${server_id}`);
//     return null; // Handle this case as needed
//   }
// };

// let rateLimitLimit = 0;
// let rateLimitRemaining = 0;

// const fetchCombinedServerData = async () => {
//   try {
//     const mongoDBServerData = await fetchMongoDBData();

//     // Dynamically import p-limit to work with ES Modules
//     const { default: pLimit } = await import("p-limit");
//     const limit = pLimit(30); // Limit to 15 concurrent requests

//     const combinedServerData = await Promise.all(
//       mongoDBServerData.map((server) =>
//         limit(() => fetchServerData(server))
//       )
//     );

//     // Filter out any null entries (error cases)
//     const filteredCombinedServerData = combinedServerData.filter((entry) => entry !== null);

//     return filteredCombinedServerData;
//   } catch (error) {
//     console.error("Error fetching combined server data:", error);
//     throw error;
//   }
// };

// module.exports = {
//   fetchCombinedServerData,
// };

require("dotenv").config();
const { fetchMongoDBData } = require("./mongoDBAPI");

const formatTimeDifference = (timeDifference) => {
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  return `${days}d ${hours}h ${minutes}min`;
};

const fetchCombinedServerData = async () => {
  try {
    const mongoDBServerData = await fetchMongoDBData();

    // Extract server_ids from the MongoDB data
    const desiredServerIds = mongoDBServerData.map(
      (server) => server.server_id
    );
    console.log(desiredServerIds);

    // Make a single request to fetch information for all servers
    const response = await fetch(
      `https://api.battlemetrics.com/servers?filter[ids][whitelist]=${desiredServerIds.join(
        ","
      )}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.BATTLEMETRICS_API_KEY}`,
        },
      }
    );

    if (response.status !== 200) {
      console.error("Error fetching server data. Status:", response.status);
      return [];
    }

    // Parse the response data into a JavaScript object
    const data = await response.json();

    if (data && Array.isArray(data.data)) {
      // Process the data and create an array of server objects
      const combinedServerData = data.data.map((serverData) => {
        const { id, attributes } = serverData;
        const { name, country } = attributes;
        const { rust_type, rust_last_wipe } = attributes.details;

        const matchingMongoDBServer = mongoDBServerData.find(
          (server) => server.server_id === id
        );
        const group_size = matchingMongoDBServer
          ? matchingMongoDBServer.group_size
          : null;
        const wipe_cycle = matchingMongoDBServer
          ? matchingMongoDBServer.wipe_cycle
          : null;

        const next_wipe = new Date(rust_last_wipe);
        next_wipe.setDate(next_wipe.getDate() + wipe_cycle);

        // Calculating the time difference between current time and next_wipe
        const currentTime = new Date();
        const timeDifference = next_wipe - currentTime;

        // Formating the rust_last_wipe date as "dd/mm/yyyy"
        const formattedLastWipe = new Intl.DateTimeFormat("en-GB").format(
          new Date(rust_last_wipe)
        );

        // Other server-specific data processing goes here...

        return {
          server_id: id,
          name,
          type: rust_type,
          country,
          group_size,
          last_wipe: formattedLastWipe,
          next_wipe:
            timeDifference > 0 ? formatTimeDifference(timeDifference) : "Now",
        };
      });

      return combinedServerData;
    } else {
      console.error("Incomplete or unexpected response from Battlemetrics.");
      return [];
    }
  } catch (error) {
    console.error("Error fetching combined server data:", error);
    throw error;
  }
};

module.exports = {
  fetchCombinedServerData,
};
