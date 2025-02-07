import React from 'react'
import SectionHeading from './SectionHeading'
import { projectsData } from '@/lib/data'
import Project from './Project'

export default function Projects() {
  return (
    <section id='services' className='scroll-mt-28'>
        
        <SectionHeading>Services</SectionHeading>
        <div>
            
            {
                projectsData.map((project, index)=>(
                    <React.Fragment key={index} >
                        <Project  {...project} />
                    </React.Fragment>
                ))
            }
        </div>
    </section>
  )
}
