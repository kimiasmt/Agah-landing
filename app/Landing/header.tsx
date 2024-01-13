import Image from "next/image";
import logo from "@/public/logo.svg";
import flag from "@/public/flag.svg";

export default function Header () {
    return(
            <div className={"grid grid-cols-2 lg:grid-cols-3 bg-white px-[1.25rem] justify-between items-center rounded-[313px] lg:mx-[10rem] h-[4.5rem] lg:h-[96px]"}>
                <Image className={'lg:col-start-2 justify-self-center'} src={logo} alt={"logo"}/>
                <Image className={" justify-self-end"} src={flag} alt={"logo"}/>
            </div>
    )
}