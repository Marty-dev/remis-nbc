import React from "react";
import Link from "next/link";

import { Logo, CzechFlag, UkFlag } from "@components";

export const Header: React.FC = () => {
    return (
        <div className="flex h-[5.313rem]">
            <Logo />
            <div className="flex place-items-center ml-[19.625rem] text-base font-bold gap-x-[4.688rem]">
                <Link href="/">
                    <a className="hover:border-[#2F7E81] hover:border-t-2 hover:border-b-2">Domů</a>
                </Link>
                <Link href="/">
                    <a className="hover:border-[#2F7E81] hover:border-t-2 hover:border-b-2">Segmenty</a>
                </Link>
                <Link href="/">
                    <a className="hover:border-[#2F7E81] hover:border-t-2 hover:border-b-2">Servis</a>
                </Link>
                <Link href="/">
                    <a className="hover:border-[#2F7E81] hover:border-t-2 hover:border-b-2">O nás</a>
                </Link>
                <Link href="/">
                    <a className="hover:border-[#2F7E81] hover:border-t-2 hover:border-b-2">Kontakty</a>
                </Link>
                <Link href="/">
                    <a className="hover:border-[#2F7E81] hover:border-t-2 hover:border-b-2">Kariéra</a>
                </Link>
            </div>
            <div className="flex place-items-center ml-[6.063rem] h-max[2.813rem]">
                <Link href="/">
                    <a className="special-bg-color shadow-[0_4_10_0_rgba(0, 0, 0, 0.125)] py-[0.813rem] px-[1.688rem]">
                        Navázat spojení!
                    </a>
                </Link>
            </div>
            <div className="flex flex-col pt-2">
                <CzechFlag />
                <UkFlag />
            </div>
        </div>
    );
};

