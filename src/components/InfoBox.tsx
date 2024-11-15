import { type ReactNode } from "react";

// separate InfoBox into two individual box as the props are different
type HintBoxProps = {

    mode: 'hint';
    children: ReactNode
}

type WarningBoxProps = {
    mode: 'warning';
    severity: 'low' | 'medium' | 'high' | undefined;
    children: ReactNode
}

type InfoBoxProps = HintBoxProps | WarningBoxProps

export default function InfoBox( props: InfoBoxProps){

    // destructure props - in this level only need to destructure "mode & children" as this will belong to "HintBoxProps" only
    const {mode, children} = props;

    if(mode === "hint"){
        return(
            <aside className="infobox infobox-hint">
                {children}
            </aside>
        )
    }

    // if mode is "warning" then destructure "severity" props
    const {severity} = props;

    return(
        <aside className={`infobox infobox-warning warning--${severity}`}>
            <h2>Warning</h2>
            {children}
        </aside>
    )
}