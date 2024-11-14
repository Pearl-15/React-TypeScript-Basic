import { type PropsWithChildren } from "react"

type ImageObj = {
    src: string;
    alt: string;
}

type HeaderProps = PropsWithChildren<{ image: ImageObj}>;

export default function Header( {image , children}: HeaderProps){
    return(
        <header>
            <img src={image.src} alt={image.alt}/>
            
            {/* alternative way to use spread operator as using same key "src and alt" */}
            {/* <img {...image}/>  */}

            {children}
        </header>
    )
};