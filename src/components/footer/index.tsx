import React from "react";
import Image from "next/image";

export const Footer: React.FC = () => {
    return (
        <div className="flex justify-evenly py-5 mx-5 border-t-2">
            <Image
                src="/icons/remis-nbc-icon.svg"
                alt="remis-nbc"
                width="164"
                height="48"
            />
            <div className="mx-3">
                <h2 className="mb-3 text-lg font-bold special-color">Dokumenty ke stažení</h2>
                <p className="text-sm font-semibold">GDPR<br/>
                    Obchodní podmínky
                </p>
                <p className="mt-3 text-sm font-semibold">Provozovatel webu:</p>
                <p className="special-color font-semibold"> REMIS-NBC spol. s r.o.</p>
            </div>
            <div className="mx-3">
                <h2 className="mb-3 text-lg font-bold special-color">Kontaktní informace</h2>
                <p className="text-sm flex font-semibold">
                    Tel:
                    <div className="special-color ml-1">+420 601 325 325</div>
                </p>
                <p className="text-sm flex font-semibold">
                    E-mail:
                    <div className="special-color ml-1">info@remis.cz</div>
                </p>
                <p className="mt-3 font-semibold">Sídlo společnosti:</p>
                <p className="text-sm special-color font-semibold">
                    náměstí Doktora Beneše 1056/1,<br/>
                    430 01 Chomutov <br/>
                    Česká republika
                </p>
            </div>
            <div className="mx-3">
                <h2 className="text-lg mb-3 font-bold special-color">Otevírací doba</h2>
                <div className="text-sm font-semibold">
                    <p>PO 7:00 - 15:30</p>
                    <p>ÚT 7:00 - 15:30</p>
                    <p>ST 7:00 - 15:30</p>
                    <p>ČT 7:00 - 15:30</p>
                    <p>PÁ 7:00 - 15:30</p>
                    <p>SO Zavřeno</p>
                    <p>NE Zavřeno</p>
                </div>
            </div>
        </div>
    );
};
