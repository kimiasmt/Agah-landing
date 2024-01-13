import Image from "next/image";
import logo from "@/public/logo.svg";
import flag from "@/public/flag.svg";

export default function Header () {
    return(
            <div className={"bg-white px-[1.25rem] justify-between items-center rounded-[313px] flex flex-row  lg:mx-[10rem] / lg:justify-between  h-[4.5rem] lg:h-[96px]"}>
                <Image src={logo} alt={"logo"}/>
                <Image src={flag} alt={"logo"}/>
            </div>
    )
}