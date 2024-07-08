"use client"
import Image from "next/image";
import image1 from "./assets/pic1.png"
import axios from "axios";
import { useEffect } from "react";

export default function Home() {
  const fetchExampleCollections = async () => {
    try {
      const response = await axios.get('http://localhost:1337/api/new',{
         headers:{
          Authorization:`Bearer fa0571c67cf6ff9ad67b31c6861e570b9e13f94d8001893b4a802c2b999cc140627f8753428fb7a88af4b8a39f6a6060e540625ce1f31fd1bc1d1ab0c83165edfe9157759b2fdd3b8b1711a7a5bea8f620d563094ea8c8c5ab16f3d837e5317af9a0cb74c6822d546c6c3b1feafb0695dd0db97f1890ba8fad0afc533a76c5a4`
         }
      });
      console.log("r",response)
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
   
  useEffect(()=>{
     fetchExampleCollections();
  },[])
  
  return (
       <div className=" w-full h-screen ">
             <p className=" uppercase p-4  font-bold  flex justify-center text-red-600">Why Choose us</p>
             <p className="  flex justify-center text-2xl font-extrabold">We Different from others</p>
             <p className=" mx-auto mt-2 max-w-[37%] text-slate-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
             <div className=" mt-4 flex justify-center">
                   <Image src={image1} className=" h-[30rem] w-[50rem]"/>
             </div>
       </div>
  );
}
