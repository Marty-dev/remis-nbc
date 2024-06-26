import React from "react";
import Image from "next/image";

export const MainBackground: React.FC = () => {
    return (
        <Image
            className="background-half-white"
            src="/icons/pexels-anamul-rezwan-background.jpg"
            alt="czech-republic-flag"
            width="2560"
            height="1240"
        />
    );
};