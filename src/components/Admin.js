import handler from "@/pages/api/hello"
import Link from "next/link"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css'
import {SwiperCore, Pagination, Navigation, Autoplay } from 'swiper';
export default function Admin() {
    return (

        <section className="bg-gray-50 min-h-screen flex items-center  justify-center ">

            <div className=" bg-gray-400 flex rounded-3xl shadow-lg max-w-4xl py-1 mt-7 mb-7 " >

                <div className="md:w-1/2 px-16 ">

                    <h2 className="font-bold text-2xl text-[#002D74] ">Login</h2>
                    <p className="text-sm mt-4 "> if you are already a member please login</p>

                    <form onSubmit="handle" className="flex flex-col gap-4 ">
                        <input type="text" name="email" placeholder="Enter Email" className=" p-2 mt-8 rounded-xl bg-white border border-slate-300  text-sm shadow-sm placeholder-slate:500  focus:outline-none  focus:ring-1 focus:ring-sky-500" />


                        <div className=" ">
                            
                            <input className="p-2 mt-3 w-full rounded-xl bg-white border border-slate-300  text-sm shadow-sm placeholder-slate:500  focus:outline-none focus:ring-1 focus:ring-sky-500 " type="password" name="password" id="pas" placeholder="Enter Password" />
                           

                        </div>
                        <button className="bg-[#002D74] rounded-xl text-white py-2"  >Login</button>
                    </form>
                    <div className="mt-10  grid grid-cols-3 items-center text-gray-500">
                        <hr className=" border-gray-900 " />
                        <p className="text-center text-gray-900">or</p>
                        <hr className=" border-gray-900 " />

                    </div>

                    <button className="bg-white border py-2 w-full  rounded-xl mt-5  flex justify-center items-center t " >       <svg xmlns="http://www.w3.org/2000/svg"  width="25" height="25" fill="currentColor" className="bi bi-google " viewBox="0 0 16 16" >
                        <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                    </svg>
                        Login with google
                    </button>
                    <p className="mt-5 text-xs border-b py-4 border-gray underline "> <a href={"/"}>Forgot Your Password? </a></p>
                    <div className="text-xs  flex justify-between py-5">

                        <p> Dont have an account?
                        <button className="py-2 px-5 bg-white  border rounded-2xl mx-5 text-gray-900   border-slate-300  text-sm shadow-sm   focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 ">Register</button></p> 
                    </div>
                </div>


                <div className="w-1/2  md:block hidden  ">
                   
                <Swiper 
      slidesPerView={1}
      loop={true}
      spaceBetween={60}
      centeredSlides={true}
      autoplay={{ delay: 3000 
        
        
      }}
      
      
     
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
      >
      <SwiperSlide> {slide()}</SwiperSlide>
      <SwiperSlide> {slide1()}</SwiperSlide>
      <SwiperSlide> {slide3()}</SwiperSlide>
      
     
    </Swiper>
    </div>
                </div>

           



        </section>
    )
}
function slide(){
    return(
      
      < div className=" h-fit">
       <img className=" rounded-2xl h-screen " src="/OIP.jfif" alt=""  />
      </div>
    )
  }
  function slide1(){
    return(
      
      < div className=" h-fit">
       <span><img className=" rounded-2xl h-screen  " src="/uu.jpg" alt=""  /></span>
      </div>
    )
  }
  function slide2(){
    return(
      
      < div className=" h-fit">
       <img className=" rounded-2xl h-screen  " src="/um.jpg!d" alt=""  />
      </div>
    )
  }
  function slide3(){
    return(
      
      < div className=" h-fit">
       <img className=" rounded-2xl h-screen  " src="/th.jfif" alt=""  />
      </div>
    )
  }
  
  
