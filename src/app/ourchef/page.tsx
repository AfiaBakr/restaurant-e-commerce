"use client";

import react from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import Image from "next/image";


const items = [
    { id: 1, img: "/our chef/Tahmina Rumi.png", title: "Tahmina Rumi", lable: "Chef" },
    { id: 2, img: "/our chef/Jorina Begum.png", title: "Jorina Begum", lable: "Chef" },
    { id: 3, img: "/our chef/M.Mohammad.png", title: "M.Mohammad", lable: "Chef" },
    { id: 4, img: "/our chef/Munna Kathy.png", title: "Munna Kathy", lable: "Chef" },
    { id: 5, img: "/our chef/Tahmina Rumi.png", title: "Tahmina Rumi", lable: "Chef" },
    { id: 6, img: "/our chef/Bisnu devgon.png", title: "Bisnu devgon", lable: "Chef" },
    { id: 7, img: "/our chef/Motin Molladsf.png", title: "Motin Molladsf", lable: "Chef" },
    { id: 8, img: "/our chef/William Rumi.png", title: "William Rumi", lable: "Chef" },
    { id: 9, img: "/our chef/Kets william roy.png", title: "Kets william roy", lable: "Chef" },
    { id: 10, img: "/our chef/Mahmud kholil.png", title: "Mahmud kholil", lable: "Chef" },
    { id: 11, img: "/our chef/Ataur Rahman.png", title: "Ataur Rahman", lable: "Chef" },
    { id: 12, img: "/our chef/Monalisa holly.png", title: "Monalisa holly", lable: "Chef" },
  ];


const OurChef =()=>{
    return(
        
        <div className=" bg-white ">
           <header className="bg-cover bg-center h-52 flex flex-col text-center" style={{ backgroundImage: "url('/menu pic/headerpc.png')" }}>
                      <h1 className="text-3xl lg:text-5xl font-bold text-white tracking-wide mt-16">Our Chef</h1>
                      <div className="flex items-center justify-center text-sm lg:text-2xl">
                      <h1 className="text-white">Home</h1><MdKeyboardArrowRight className="text-white"/><h1 className="text-[#ff9f0d]"><u>Chef</u></h1>
                      </div>      
            </header>                    
                

{/* Grid of staff */}
                <section className="w-screen h-[5556px] lg:w-[1320px] lg:h-[1389px] my-[180px] ml-[50px] lg:ml-[200px] ">
                    <div className=" items-center justify-center">
                <div className="   grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {items.map((item) => (
                    <div key={item.id}>
{/* Image  */}
                    <Image
                    src={item.img}
                    alt={item.lable}
                    width={312}
                    height={380}
                    className=" object-cover"
                     />

{/* Overlay label */}
                    <div className ="w-[312px] pt-4 text-center flex-col h-20 bottom-0 left-0 bg-white ">
                        <h3 className=" font-semibold text-xl">{item.title}</h3>
                        <h3 className="text-slate-500 text-base">{item.lable}</h3>
                    </div>
                    </div>))} 
                    </div>                               
                    </div>                        
                    </section>
        </div>
    )
};

export default OurChef
