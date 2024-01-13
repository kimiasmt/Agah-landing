import Image from "next/image";
import section2 from "@/public/section2.svg";
import {SubmitHandler, useForm} from "react-hook-form";
import {useState} from "react";
import './section2.scss'


export default function Section2 () {
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
                    {!formCompleted && <form className={"flex flex-col"} onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor={"name"}  className={"text-lg font-bold"}  >Name</label>
                        <div className={"section2__input-container"}>
                            <input id={"name"} className={"section2__input"} {...register("name",{ required: true })} />
                            {errors.name && <span>This field is required</span>}
                        </div>

                        <label htmlFor={"phoneNumber"}    className={"text-lg font-bold"} >phoneNumber</label>
                        <div className={"section2__input-container"}>
                            <input className={"section2__input"} {...register("phoneNumber", { required: true ,pattern: {
                                    value: /^09\d{9}$/,
                                    message: 'not correct',
                                }})} />
                            {errors.phoneNumber && <span>This field is required</span>}
                        </div>
                        <input
                            className="section2__submit "
                            type={"submit"}/>

                    </form>}
                    {formCompleted && <div className={"font-bold p-32 text-3xl rounded-xl bg-white text-center "}>
                            Thanks for Joining us
                    </div>}
                </div>
                <div className={"hidden lg:block lg:w-[44.6rem] lg:mr-[10rem]"}>
                    <Image src={section2} alt={"section1-image"}/>
                </div>
        </div>
    )
}