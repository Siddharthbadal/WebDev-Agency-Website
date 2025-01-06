import Image from "next/image"
// type ProjectsProps = {
//     title:string;
//     description:string;
//     tags:string[];
//     imageUrl:string;
// }

import { projectsData } from "@/lib/data"

type ProjectsProps = (typeof projectsData)[number]

export default function Project({
    title,
    description,
    tags,
    imageUrl
}: ProjectsProps) 
{
    


  return (
    <section className="bg-gray-100 max-w-[45rem] border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[22rem] mb-3 sm:mb-8 group even:pl-8">
           <div className=" pt-4 pb-8 px-5 sm:pl-10 sm:pr-2 sm:pt-2 sm:max-w-[50%] flex flex-col h-full group-even:ml-[20rem]">
                <h3 className=" text-2xl font-semibold leading-relaxed tracking-wider text-gray-700">{title}</h3>
                <p className=" text-md leading-relaxed tracking-wider text-gray-600">{description}</p>
                <ul className="text-gray-600 flex flex-wrap mt-4 gap-2 sm:mt-auto">
                        {tags.map((tag, index) =>(
                            <li key={index} 
                            className="bg-gray-700/[0.7] px-3 py-1 uppercase tracking-normal text-white/80 rounded-full ">
                                {tag}
                            </li>
                        ))}
                </ul>
           </div>

           <Image 
            src={imageUrl}
            alt={'ProjectImg'}
            width={250}
            height={250}
            quality={99}
            className="absolute top-8 -right-40 w-[30rem] rounded-t-lg shadow-2xl 
            transition
            group-hover:scale-105
            group-even:right-[initial] 
            group-even:-left-40 

            group-hover:-translate-x-6 group-hover:translate-y-3 
            group-hover:-rotate-2 

            group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 
            group-even:group-hover:rotate-2 
            
            
            "
            />
    </section>
  )
}