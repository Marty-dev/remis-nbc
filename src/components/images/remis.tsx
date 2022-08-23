import React from "react";
import Image from "next/image";

export const Logo: React.FC = () => {
    return (
        <div className="py-[1.188rem] ml-[4.375rem] place-items-center">
            <Image
                src="/icons/remis-nbc-icon.svg"
                alt="remis-nbc"
                width="164"
                height="48"
            />
        </div>
    );
};
