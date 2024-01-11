import Image from 'next/image'
import logo from '../public/logo.svg';
import section1  from '../public/section1.svg';
import section2  from '../public/section2.svg';
import {Badge} from "@/app/Landing/badge";
import arrow  from '../public/arrow.svg';
import {FormEvent} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import Landing from "@/app/Landing/page";
export default function Home() {

  return (
        <main>
            <Landing/>
        </main>
  )
}
