'use client'
import { useState } from "react";
import arrIcon from "@/public/icons/misc/options.svg"
import Image from "next/image";

  interface Option {
    value: string;
  }
  
  interface OptionProps {
    options: Option[];
    label: string
  }

const CategoryDropdown:React.FC<OptionProps> = ({options, label}) => {

    const [open, setOpen] = useState(false)

    return (
        <div className="relative   ">

  <div
    className="flex justify-center items-center  py-2 px-4 flex-1 border-2 border-gray-400 
    cursor-pointer hover:opacity-[0.9] transition duration-300 items-center"
    onClick={() => setOpen(!open)}
  >
    <label className="flex-1  gap-2 px-2 py-1 text-[0.9rem]  min-w-max">{label}</label>
    <Image alt="options button" src={arrIcon} className="w-6" />
  </div>


  {open && (
    <div className="absolute top-full left-0 mt-2 w-full flex flex-col gap-1 z-50">
      {options.map((option, index) => (
        <span
          key={index}
          className="flex justify-evenly items-center px-2 py-4 rounded-md opacity-[0.9] bg-primary text-white cursor-pointer hover:opacity-100"
        >
          {option.value}
        </span>
      ))}
    </div>
  )}
</div>
    )
    
}

export default CategoryDropdown