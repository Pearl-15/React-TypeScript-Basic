import { type ReactNode } from "react";

type InfoBoxProps = {
    mode: 'hint' | 'warning'; //using 2 "literal" type make it "union"
    children: ReactNode
}

export default function InfoBox( {mode, children}: InfoBoxProps){

    if(mode === "hint"){
        return(
            <aside>
                <h2>Hint</h2>
                {children}
            </aside>
        )
    }

    return(
        <aside>
            <h2>Warning</h2>
            {children}
        </aside>
    )
}