"use client"

import SectionHeading from "./SectionHeading";
import SectionDivider from "./SectionDivider";
import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
  import "react-vertical-timeline-component/style.min.css";
import { processData } from "@/lib/data";
import React from "react";

export default function Process() {
  return (
        <section id="process" className="text-gray-700 text-center">
                <SectionDivider/>
                <SectionHeading>Our Process</SectionHeading>
                <VerticalTimeline lineColor="">
                    {
                        processData.map((process,index)=>(
                            <React.Fragment key={index}>
                                <VerticalTimelineElement
                                contentStyle={{
                                    background:"#f3f4f6",
                                    boxShadow:"none",
                                    border:"1px solid rgba(0,0,0,0.05)",
                                    textAlign: "left",
                                    padding: "1.3rem 2rem",
                                }}
                                contentArrowStyle={{
                                    borderRight: "0.8rem solid $9ca3af"
                                }}
                                date={process.date}
                                icon={process.icon}
                                iconStyle={{
                                    background: "white",
                                    fontSize: "1.5rem",
                                }}
                                >
                                    <h3 className="text-xl font-semibold capitalize">{process.title}</h3>
                                    <p className="!mt-0">{process.location}</p>
                                    <p>{process.description}</p>
                                </VerticalTimelineElement>
                            </React.Fragment>
                        ))
                    }
                </VerticalTimeline>
                
        </section>
  )
}
