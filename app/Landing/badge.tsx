import Image from "next/image";
import check from "../../public/check.svg";
export function Badge ({icon,title} : {icon: string, title: string} ) {
    return (
        <div>
            <div className="h-[3rem] w-max lg:h-[58px] pl-5 pr-10 py-3.5 bg-white rounded-full justify-center items-center gap-[7px] inline-flex">
                <div className="w-[30px] h-[30px] relative" >
                    <Image width={"30"} height={"30"} src={check} alt={"icon"}/>
                </div>
                <div className="text-neutral-800 text-[1rem] font-semibold font-['Segoe UI']">{title}</div>
            </div>
        </div>
    )
}