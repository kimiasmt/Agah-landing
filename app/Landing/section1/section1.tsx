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
        <div className={"section1"}>
            <div className={"section1__image"}>
                <Image src={section1} alt={"section1-image"}/>
            </div>
            <div className={"section1__container"}>
                <h5 className={"section1__subtitle"}>risus praesent vulputate </h5>
                <h1 className={"section1__title"}>Cursus Integer
                    <br/>
                    <div className={"flex flex-row "}>
                        <div>Consequat</div>
                        <div className={'typewriter'}>Tristique.</div>
                    </div>
                </h1>
                <div  className={"section1__badge-list"}>
                    <div className={"section1__badge-container"}>
                        {badgeList.map((item:string) =>
                        { return(
                            <Badge title={item} icon={"../../public/check.svg"} key={item}/>)})
                        }
                    </div>
                </div>
                <div className="section1__button-container">
                    <button className="section1__button">Lorem Ipsum</button>
                    <Image src={arrow} className="w-7 h-7 relative" alt={'arrow'}/>
                </div>
            </div>
            <div className={"section1__image-web"}>
                <Image src={section1} alt={"section1-image"}/>
            </div>
        </div>

    )
}