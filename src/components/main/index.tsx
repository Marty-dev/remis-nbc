import React from "react";
import Link from "next/link";
import { MainBackground } from "@components";

import { Button } from "@components";

export const Main: React.FC = () => {
    return (
        <div>
            <div className="flex justify-evenly">
                <div className="">
                    <h1>Vnitrostátní doprava</h1>
                    <p>Společnost Groeneveld-BEKA dodává to správné řešení pro každou dopravní aplikaci.<br/>
                        Nehledě na to, zda se jde o flotilu nákladních vozidel nebo vysokozdvižné vozíky ve<br/>
                        skladovací hale.
                    </p>
                    <p>Protože se skladovací haly od sebe velmi liší a systém Greensight lze perfektně<br/>
                        přizpůsobit, používá se často pro vnitrozávodní dopravu. Pro větší vysokozdvižné vozíky<br/>
                        dodává Groeneveld-BEKA širokou paletu kompaktních automatických
                    </p>
                </div>
                <div className="">
                    <h1>Kontaktujte nás!</h1>
                    <p>Zanechte nám zprávu přes kontaktní formulář a my se Vám obratem ozveme zpět.</p>
                    <Link href="/">
                        <a>Kontakt</a>
                    </Link>
                </div>
            </div>
            <MainBackground />
        </div>
    );
};
