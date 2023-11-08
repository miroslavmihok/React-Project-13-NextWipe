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
      className="max-w-3xl bg-[#1F1F1D] p-[2rem] text-[#E6DBD1]"
    >
      <div
        ref={dialogRef}
        className="flex h-[12rem] w-full flex-col justify-between px-[1rem] pt-[0.5rem]"
        style={{ background: `url(${img}) no-repeat bottom/cover` }}
      >
        <form method="dialog" className="flex justify-end">
          <button className="font-['Poppins'] outline-0">
            <i className="fa-solid fa-xmark text-4xl"></i>
          </button>
        </form>
        <h2 className="mb-6 text-center font-['Poppins'] text-[1.2rem] font-extrabold">
          {server.name}
        </h2>
      </div>
      <div className="w-full bg-[#222320] px-[2rem] py-[1rem]">
        <p className="mb-6 font-['Poppins'] leading-7">
          {server.rust_description}
        </p>
        <p className="font-['Poppins']">{server.rust_url}</p>
      </div>
    </dialog>
  );
});

export default ServerModal;
