import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ServerSkeleton = ({ cards }) => {
  return Array(cards)
    .fill(0)
    .map((_, i) => (
      <div
        className="flex w-[100%] justify-start bg-[#312F2C] py-[0.8rem] max-sm:flex-col max-sm:justify-center"
        key={i}
      >
        <div className="flex w-[50%] min-w-[50%] max-w-[50%] max-sm:w-full max-sm:min-w-full max-sm:max-w-full max-sm:justify-center">
          <div className="ml-[5%] flex min-w-full max-w-full items-center justify-start gap-[2%] max-sm:ml-0 max-sm:min-w-full max-sm:max-w-full max-sm:px-[1rem]">
            <div className="mb-auto min-w-[6%] max-sm:hidden">
              <Skeleton containerClassName="flex-1" />
            </div>
            <div className="flex min-w-[87%] max-w-[87%] flex-col justify-between gap-[14px] max-sm:min-w-full">
              <Skeleton />
              <div className="flex justify-start gap-[10px] max-sm:justify-center">
                <Skeleton containerClassName="flex-1" />
              </div>
            </div>
          </div>
        </div>
        <div className="my-auto w-[25%] text-center max-sm:w-[100%]">
          <Skeleton width={150} />
        </div>
        <div className="flex w-[25%] items-center justify-center gap-[0.5rem] px-[0.25rem] max-sm:w-[100%]">
          <Skeleton containerClassName="flex-1" height={40} />
        </div>
      </div>
    ));
};

export default ServerSkeleton;
