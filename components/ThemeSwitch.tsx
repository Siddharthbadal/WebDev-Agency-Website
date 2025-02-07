"use client"

import React, { useEffect, useState } from 'react'
import { BsMoon, BsSun } from 'react-icons/bs'

type Theme = "light" | "dark"

export default function ThemeSwitch() {
    const [theme, setTheme] = useState<Theme>("light");
    const toggleTheme = () =>{
        if(theme === "light"){
            setTheme("dark");
            window.localStorage.setItem("theme", "dark")
            document.documentElement.classList.add("dark")
        }else{
            setTheme("light");
            window.localStorage.setItem("theme", "dark")
            document.documentElement.classList.remove("dark")
        }
    };

    useEffect(()=>{
        const localTheme = window.localStorage.getItem('theme') as Theme | null;

        if(localTheme){
            setTheme(localTheme);
        } else if(window.matchMedia("(prefers-color-schema: dark)").matches){
                setTheme('dark');
        }
    }, []);




  return (
        <button className='fixed bottom-5 right-5 bg-gray-600 
        w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-50 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-110 transition'
            onClick={toggleTheme}
        >
            {
                theme === "light" ?    <BsSun  /> : <BsMoon />
            }
            
        </button>
  )
}
