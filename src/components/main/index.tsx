import React from "react";
import Link from "next/link";
import { MainBackground } from "@components";

import { Button } from "@components";

export const Main: React.FC = () => {
    return (
        <div className="background-image grid grid-cols-2 gap-x-[5.625rem] place-content-end">
            <div className="border-b-2 border-[#2F7E81] bg-white ml-[8.25rem] h-max-[29.688rem] w-max-[57.813rem] mb-[6.25rem]">
                <h1 className="text-5xl font-bold special-color mt-[2.188rem] ml-[4.375rem] mb-[2.188rem]">Vnitrostátní doprava</h1>
                <hr />
                <p className="text-lg font-medium mb-4 ml-[4.375rem] mt-[2.188rem] mr-[4.375rem]">Společnost Groeneveld-BEKA dodává to správné řešení pro každou dopravní aplikaci.
                    Nehledě na to, zda se jde o flotilu nákladních vozidel nebo vysokozdvižné vozíky ve
                    skladovací hale.
                </p>
                <br />
                <p className="text-lg font-medium ml-[4.375rem] mb-[6.25rem] mr-[4.375rem]">Protože se skladovací haly od sebe velmi liší a systém Greensight lze perfektně
                    přizpůsobit, používá se často pro vnitrozávodní dopravu. Pro větší vysokozdvižné vozíky
                    Groeneveld-BEKA širokou paletu kompaktních automatických systémů.
                </p>
            </div>
            <div className="border-b-2 border-[#2F7E81] bg-white w-max-[33.063rem] h-max-[29.688rem] mr-[4.375rem] mb-[6.25rem]">
                <h1 className="text-5xl font-bold special-color mt-[2.188rem] ml-[4.375rem] mb-[2.188rem] pr-[4.375rem]">Kontaktujte nás!</h1>
                <hr />
                <p className="text-xl leading-10 font-normal special-color ml-[4.375rem] mt-[2.188rem]">Zanechte nám zprávu přes kontaktní formulář a my se Vám obratem ozveme zpět.</p>
                <Link href="/">
                    <a className="font-bold text-2xl special-color ml-[11.25rem] mb-[11.75rem]">Kontakt</a>
                </Link>
            </div>
        </div>
    );
};
