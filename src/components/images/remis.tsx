import React from "react";
import Image from "next/image";

export const Logo: React.FC = () => {
    return (
        <div className="pl-8 py-3">
            <Image
                src="/icons/remis-nbc-icon.svg"
                alt="remis-nbc"
                width="164"
                height="48"
            />
        </div>
    );
};
