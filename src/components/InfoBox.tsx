import { type ReactNode } from "react";

type InfoBoxProps = {
    mode: 'hint' | 'warning'; //using 2 "literal" type make it "union"
    children: ReactNode
}

export default function InfoBox( {mode, children}: InfoBoxProps){

    if(mode === "hint"){
        return(
            <aside className="infobox infobox-hint">
                {children}
            </aside>
        )
    }

    return(
        <aside className="infobox infobox-warning warning--low">
            <h2>Warning</h2>
            {children}
        </aside>
    )
}