import Image from "next/image";
import section2 from "@/public/section2.svg";
import {SubmitHandler, useForm} from "react-hook-form";
import {useState} from "react";
import './form-container.scss'


export default function FormContainer () {
    const [formCompleted,setFormCompleted] = useState(false)
    type Inputs ={
        name: string
        phoneNumber: string
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        try {
            const res = await fetch('https://reqres.in/api/users', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'content-type': 'application/json'
                }
            })
            console.log(res)
            if (res.ok) {
                setFormCompleted(true);
            } else {
                console.log("Oops! Something is wrong.")
            }
        } catch (error) {
            console.log(error)
        }
    }
    return(
        <div className={"section2"}>
                <div className={"section2__image"}>
                    <Image src={section2} alt={"section2-image"}/>
                </div>
                <div className={"section2__form-container"}>
                    {!formCompleted && <form className={"flex flex-col  gap-3"} onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor={"name"}  className={"text-lg font-bold"}  >Name</label>
                        {errors.name && <span>This field is required</span>}
                        <input id={"name"} className={"section2__input"} defaultValue="test" {...register("name")} />
                        <label htmlFor={"phoneNumber"}    className={"text-lg font-bold"} >phoneNumber</label>
                        <input className={"section2__input"} {...register("phoneNumber", { required: true })} />
                        {errors.phoneNumber && <span>This field is required</span>}
                        <input
                            className="bg-black rounded-full text-white max-w-md p-3.5 w-full text lg:text-neutral-800 lg:text-2xl font-bold font-['Segoe UI']"
                            type={"submit"}/>

                    </form>}
                    {formCompleted && <div className={"font-bold text-lg rounded-full bg-white "}>
                        Thanks for Joining us
                    </div>}
                </div>
                <div className={"hidden lg:block lg:w-[44.6rem] lg:mr-[10rem]"}>
                    <Image src={section2} alt={"section1-image"}/>
                </div>
        </div>
    )
}