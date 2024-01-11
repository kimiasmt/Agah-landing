'use client';
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.svg";
import section1 from "@/public/section1.svg";
import {Badge} from "@/app/Landing/badge";
import arrow from "@/public/arrow.svg";
import section2 from "@/public/section2.svg";
import {SubmitHandler, useForm} from "react-hook-form";

export default function Landing() {
    let badgeList = [
        "Cursus Integer",
        "Integer Consequat ",
        "Tellus Euismod Pellentesque",
        "Aliquot Tristique",
        "Pellentesque Tempus",
        "Mauris Fermentum Praesent"
    ]
    type Inputs = {
        name: string
        phoneNumber: string
    }
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)
    return (
        <div className="min-h-screen pt-[3rem] lg:pt-[3rem] bg-secondary " style={{"clipPath" : 'polygon(0 0, 100% 0, 100% 100%, 0 110%)'}}>
            <div className={" bg-white w-full px-[1.25rem] rounded-[313px] flex flex-row justify-start lg:justify-center h-[4.5rem] lg:h-[96px]"}>
                <Image src={logo} alt={"logo"}/>
            </div>
            <div className={" px-[1.25rem]  lg:flex lg:flex-row justify-end "}>
                <div className={"w-[21.87rem] lg:hidden"}>
                    <Image src={section1} alt={"section1-image"}/>
                </div>
                <div className={"lg:flex lg:flex-col lg:w-1/2 mt-3 lg:mt-[7.19rem] lg:ml-[15.5rem]"}>
                    <h5 className="text-primary text-[1rem] lg:text-3xl font-bold font-['Segoe UI'] uppercase">risus praesent vulputate </h5>
                    <h1 className="text-neutral-800 text-[2.25rem] lg:text-[80px] font-bold font-['Segoe UI'] lg:leading-[90px] mb-[2rem] lg:mb-[3.75rem]">Cursus Integer
                        <br/>
                        Consequat Tristique.
                    </h1>
                    <div  className={"w-2/3 mb-[3.75rem]"}>
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
            <div className={"min-h-screen bg-primary h-full"} style={{"clipPath": 'polygon(0 30%, 100% 0%, 100% 70%, 0% 100%)'}}>
                <div className={" px-[1.25rem]  lg:flex lg:flex-row justify-end "}>
                    <div className={"w-[21.87rem] lg:hidden"}>
                        <Image src={section2} alt={"section2-image"}/>
                    </div>
                    <div className={"lg:flex lg:flex-col  lg:w-1/2 mt-3 lg:mt-[18rem] lg:ml-[15.5rem]"}>
                        <form className={"flex flex-col gap-3"} onSubmit={handleSubmit(onSubmit)}>
                            <label htmlFor={"name"}  className={"text-lg font-bold"}  >Name</label>
                            {errors.name && <span>This field is required</span>}
                            <input id={"name"} className={"p-4 rounded-2xl max-w-md"} defaultValue="test" {...register("name")} />
                            <label htmlFor={"phoneNumber"}    className={"text-lg font-bold"} >phoneNumber</label>
                            <input className={"p-4 rounded-2xl max-w-md"} {...register("phoneNumber", { required: true })} />
                        {errors.phoneNumber && <span>This field is required</span>}
                            <input className="bg-black rounded-full text-white max-w-md p-3.5 w-full text lg:text-neutral-800 lg:text-2xl font-bold font-['Segoe UI']" type={"submit"}/>

                        {/*<input type="submit" />*/}
                        </form>
                    </div>
                    <div className={"hidden lg:block lg:w-[44.6rem] lg:mr-[10rem]"}>
                        <Image src={section2} alt={"section1-image"}/>
                    </div>
                </div>

            </div>
        </div>
    )
}