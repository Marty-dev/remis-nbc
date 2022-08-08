import React from "react";
import Link from "next/link";

import { Logo, CzechFlag, UkFlag } from "@components";

export const Header: React.FC = () => {
    return (
        <div className="flex justify-around">
            <Logo />
            <div className="flex pt-7 text-base font-bold space-x-12">
                <Link href="/" className="border-x-2 hover:border-green-700">
                    <a>Domů</a>
                </Link>
                <Link href="/" className="border-x-2 hover:border-green-700">
                    <a>Segmenty</a>
                </Link>
                <Link href="/" className="border-x-2 hover:border-green-700">
                    <a>Servis</a>
                </Link>
                <Link href="/" className="border-x-2 hover:border-green-700">
                    <a>O nás</a>
                </Link>
                <Link href="/" className="border-x-2 hover:border-green-700">
                    <a>Kontakty</a>
                </Link>
                <Link href="/" className="border-x-2 hover:border-green-700">
                    <a>Kariéra</a>
                </Link>
                <Link
                    href="/"
                    className="special-bg-color border-4 border-black px-4 ml-10"
                >
                    <a>Navázat spojení!</a>
                </Link>
            </div>
            <div className="flex flex-col pt-2">
                <CzechFlag />
                <UkFlag />
            </div>
        </div>
    );
};
