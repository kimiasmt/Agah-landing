import './section1.scss'
import Image from "next/image";
import section1 from "@/public/section1.svg";
import {Badge} from "@/app/Landing/badge";
import arrow from "@/public/arrow.svg";


export default function Section1 () {
    let badgeList = [
        "Cursus Integer",
        "Integer Consequat ",
        "Tellus Euismod Pellentesque",
        "Aliquot Tristique",
        "Pellentesque Tempus",
        "Mauris Fermentum Praesent"
    ]
    return (
            <div className={" px-[1.25rem] lg:items-center  lg:flex lg:flex-row justify-end "}>
                <div className={"w-[21.87rem] lg:hidden"}>
                    <Image src={section1} alt={"section1-image"}/>
                </div>
                <div className={"lg:flex lg:flex-col lg:w-1/2 mt-3 lg:mt-[7.19rem] lg:ml-[15.5rem]"}>
                    <h5 className="text-primary text-[1rem] lg:text-3xl font-bold font-['Segoe UI'] uppercase">risus praesent vulputate </h5>
                    <h1 className=" lg:w-[52rem] text-[2rem] lg:text-[80px] whitespace-nowrap font-bold font-['Segoe UI'] lg:leading-[90px] mb-[2rem] lg:mb-[3.75rem]">Cursus Integer
                        <br/>
                        <div className={"flex flex-row "}>
                            <div>Consequat</div>
                            <div className={'typewriter'}>Tristique.</div>
                        </div>
                    </h1>
                    <div  className={"w-3/4 mb-[3.75rem]"}>
                        <div className={"flex flex-row flex-wrap gap-[.87rem] "}>
                            {badgeList.map((item:string) =>
                            { return(
                                <Badge title={item} icon={"../../public/check.svg"} key={item}/>)})
                            }
                        </div>
                    </div>
                    <div className="w-full lg:w-80 lg:h-20 h-[3.7rem] px-10 pt-4 pb-5 lg:px-12 lg:pt-5 lg:pb-6 bg-primary rounded-full justify-between items-center inline-flex">
                        <button className="w-full text lg:text-neutral-800 lg:text-2xl font-bold font-['Segoe UI']">Lorem Ipsum</button>
                        <Image src={arrow} className="w-7 h-7 relative" alt={'arrow'}/>
                    </div>
                </div>
                <div className={"hidden lg:block lg:w-[44.6rem] lg:mr-[10rem]"}>
                    <Image src={section1} alt={"section1-image"}/>
                </div>  
            </div>
    )
}