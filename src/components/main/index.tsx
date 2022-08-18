import React from "react";
import Link from "next/link";
import { MainBackground } from "@components";

import { Button } from "@components";

export const Main: React.FC = () => {
    return (
        <div className="background-image grid grid-cols-2 content-center place-content-evenly">
            <div className="my-8 bg-white">
                <h1 className="text-5xl font-bold special-color mb-16">Vnitrostátní doprava</h1>
                <p className="text-lg font-medium">Společnost Groeneveld-BEKA dodává to správné řešení pro každou dopravní aplikaci.
                    Nehledě na to, zda se jde o flotilu nákladních vozidel nebo vysokozdvižné vozíky ve
                    skladovací hale.
                </p>
                <p className="text-lg font-medium">Protože se skladovací haly od sebe velmi liší a systém Greensight lze perfektně
                    přizpůsobit, používá se často pro vnitrozávodní dopravu. Pro větší vysokozdvižné vozíky
                    dodává Groeneveld-BEKA širokou paletu kompaktních automatických
                </p>
            </div>
            <div className="my-8 bg-white">
                <h1 className="text-5xl font-bold special-color mb-16">Kontaktujte nás!</h1>
                <p className="text-xl font-normal special-color">Zanechte nám zprávu přes kontaktní formulář a my se Vám obratem ozveme zpět.</p>
                <Link href="/">
                    <a className="font-bold text-2xl special-color">Kontakt</a>
                </Link>
            </div>
        </div>
    );
};
