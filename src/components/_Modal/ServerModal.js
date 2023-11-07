import { forwardRef } from "react";

const ServerModal = forwardRef(function ServerModal({server}, ref) {
  return (
    <dialog ref={ref} className="text-[#E6DBD1] bg-[#222320] p-[2rem] max-w-3xl">
      <h2 className="font-['Poppins'] font-bold text-center mb-6">{server.name}</h2>
      <p className="font-['Poppins'] mb-6">{server.rust_description}</p>
      <p className="font-['Poppins'] mb-6">{server.rust_url}</p>
      <form method="dialog">
        <button className="font-['Poppins']">Close</button>
      </form>
    </dialog>
  );
})

export default ServerModal;
