import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";


const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]">

    <LiIcon reference={ref} />

    <motion.div
      initial={{ y: 50 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring" }}
    >
      <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">{position}&nbsp;<a href={companyLink}
        target="_blank"
        className="text-primary dark:text-primaryDark capitalize">
        @{company}</a></h3>
      <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
        {time} | {address}
      </span>
      <p className="font-medium w-full md:text-sm">
        {work}
      </p>
    </motion.div>
  </li>

}

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll(
    {
      target: ref,
      offset: ["start end", "center start"]
    }
  );
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">

        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-1 w-[4px] h-full bg-dark origin-top dark:bg-light 
          md:w-[2px] md:left-[30px] xs:left-[20px]
          " />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2 ">
        <Details
            position="Full Stack Developer 2"
            company="Indian Institute of Technology Jammu"
            companyLink="https://www.iitjammu.ac.in/"
            time="August 2024 - Present"
            address="Remote"
            work="Working on RIPL live PSU managemnt System, developing various features for the website and enhancing user experience"
          />
          <Details
            position="Full Stack Developer (RISE UP 2024)"
            company="Indian Institute of Technology Jammu"
            companyLink="https://www.iitjammu.ac.in/"
            time="May 2024-July 2024"
            address="Onsite"
            work="I developed ReactJS and Firebase-based web apps for real-time data monitoring. The Smart Agriculture app tracks sensor data with past data viewing, graph plotting, and report downloads. The Power Monitoring app monitors temperature, leak, and mains voltage with past data, user, and device management. I also created a 10-page website for Rach Smart Solutions and a PSU management app for RIPL with live monitoring, Google Maps integration, and fault reporting."
          />
          <Details
            position="Contributor"
            company="GirlScript Summer of Code"
            companyLink="https://gssoc.girlscript.tech/"
            time="May 2023-Present"
            address=" Remote"
            work="As an opensource contributor, I am working on various front-end and back-end projects using ReactJs, 
            ViteJs, ExpressJS, MongoDB, NodeJS, Tailwind, Bootstrap and various other tools.Till now I have 
            contributed to total 4 projects and I am working on many others
            "
          />

          <Details
            position="SDE Intern"
            company="Abhyaz"
            companyLink="https://www.abhyaz.com/"
            time="Mar 2023- Apr 2023"
            address=" Remote"
            work="As an SDE Intern, I maintained and developed new features for the Abhyaz website, Integrated API's from the backend to the frontend.
            "
          />

          <Details
            position="Contributor"
            company="Hactoberfest"
            companyLink="https://hacktoberfest.com/"
            time="Oct 2022- Oct-2022"
            address="Remote"
            work="As an opensource contributor, I have contributed to various projects that involved developing and 
            enhancing front-end features using HTML, CSS, JavaScript, ReactJs, Tailwind, Bootstrap and various 
            other front-end tools. During this period I created more than 4 successful pull requests."
          />
        </ul>
      </div>
    </div>
  )
}

export default Experience;