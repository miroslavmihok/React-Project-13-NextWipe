import { forwardRef, useEffect, useRef } from "react";
import img from "../../assets/photos/bg-desc.jpg";

const ServerModal = forwardRef(function ServerModal({ server, onClose }, ref) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dialogRef.current && !dialogRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <dialog
      ref={ref}
      className="text-[#E6DBD1] bg-[#1F1F1D] p-[2rem] max-w-3xl"
    >
      <div
        ref={dialogRef}
        className="w-full h-[12rem] flex flex-col justify-between px-[1rem] pt-[0.5rem]"
        style={{ background: `url(${img}) no-repeat bottom/cover` }}
      >
        <form method="dialog" className="flex justify-end">
          <button className="font-['Poppins'] outline-0">
            <i className="fa-solid fa-xmark text-4xl"></i>
          </button>
        </form>
        <h2 className="font-['Poppins'] font-extrabold text-[1.2rem] text-center mb-6">
          {server.name}
        </h2>
      </div>
      <div className="w-full bg-[#222320] px-[2rem] py-[1rem]">
        <p className="font-['Poppins'] leading-7 mb-6">
          {server.rust_description}
        </p>
        <p className="font-['Poppins']">{server.rust_url}</p>
      </div>
    </dialog>
  );
});

export default ServerModal;
