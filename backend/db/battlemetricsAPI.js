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

    // server_ids from the MongoDB data
    const desiredServerIds = mongoDBServerData.map(
      (server) => server.server_id
    );

    const response = await fetch(
      `https://api.battlemetrics.com/servers?page[size]=20&filter[ids][whitelist]=${desiredServerIds.join(
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

    const data = await response.json();

    if (data && Array.isArray(data.data)) {
      const combinedServerData = data.data.map((serverData) => {
        const { id, attributes } = serverData;
        const { name, country } = attributes;
        const { rust_type, rust_last_wipe } = attributes.details;
        const { rust_description, rust_url } = attributes.details;

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

        return {
          server_id: id,
          name,
          type: rust_type,
          country,
          group_size,
          wipe_cycle,
          last_wipe: formattedLastWipe,
          next_wipe:
            timeDifference > 0 ? formatTimeDifference(timeDifference) : "Now",
          rust_description,
          rust_url,
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
