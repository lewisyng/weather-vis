import clsx from "clsx";
import { ReactNode } from "react";

export const BasicCard = ({
  icon,
  className,
  mainData,
  title,
}: {
  icon?: ReactNode;
  className?: string;
  mainData: number | string | ReactNode;
  title: string;
}) => {
  return (
    <div
      className={clsx(
        className,
        "shadow rounded-2xl p-4 transition-all bg-white flex flex-col"
      )}
    >
      <div className="flex items-center gap-2">
        {icon}
        {title && <p className="text-sm text-gray-700">{title}</p>}
      </div>

      <div className="flex flex-col mt-auto">
        <p className="text-gray-700 text-3xl text-left font-bold mt-4">
          {mainData}
        </p>

        {/* <div className="flex items-center text-green-500 text-sm">
                    <svg
                        width="20"
                        height="20"
                        fill="currentColor"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M1408 1216q0 26-19 45t-45 19h-896q-26 0-45-19t-19-45 19-45l448-448q19-19 45-19t45 19l448 448q19 19 19 45z"></path>
                    </svg>

                    <span>5.5%</span>

                    <span className="text-gray-400">vs last month</span>
                </div> */}
      </div>
    </div>
  );
};

export default BasicCard;
