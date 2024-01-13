'use client';
import { GoogleTagManager } from '@next/third-parties/google'
import Header from "@/app/Landing/header";
import Section1 from "@/app/Landing/section1/section1";
import Section2 from "@/app/Landing/section2/section2";
export default function Landing() {

    return (
        <div className="min-h-screen pt-[3rem] lg:pt-[3rem] bg-secondary " style={{"clipPath" : 'polygon(0 0, 100% 0, 100% 100%, 0 110%)'}}>
            <GoogleTagManager gtmId="GTM-MT64LBBH" />
            <Header/>
            <Section1/>
            <Section2/>
        </div>
    )
}