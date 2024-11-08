import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { GithubIcon } from "@/components/Icons";
import Image from "next/image";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";


import project2 from "../../public/images/projects/NPS.png";
import project3 from "../../public/images/projects/Chatline.png";
import project4 from "../../public/images/projects/GoNews.png";
import project5 from "../../public/images/projects/OneCamOne.png";
import project6 from "../../public/images/projects/TravelAdvisor.png";
import project7 from "../../public/images/projects/CSmart.png";
import project8 from "../../public/images/projects/HarryPotter.png";
import project9 from "../../public/images/projects/AutoBee.png";
import project10 from "../../public/images/projects/TopHire.png";
import project11 from "../../public/images/projects/SayData.png";
import project12 from "../../public/images/projects/Speak.png";
import project13 from "../../public/images/projects/TextGo.png";



const FramerImage = motion(Image);


const FeaturedProjects = ({ type, title, summary, img, link, github }) => {

  return (
    <article className="w-full flex items-center justify-between relative rounded-3xl rounded-br-2xl border border-solid border-dark bg-light shadow-2xl p-12 
    dark:bg-dark dark:border-light
    lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
    ">

      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%]  rounded-[2.5rem] bg-dark rounded-br-3xl 
      dark:bg-light
      xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]
      " />

      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg 
        lg:w-full"
      >
        <FramerImage src={img} alt={title} className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes='(max-width: 768px) 100vw, 
          (max-width:1200px) 50vw,
          50vw'
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6 
      lg:w-full lg:pl-0 lg:pt-6
      ">
        <span className="text-primary font-medium text-xl dark:text-primaryDark 
        xs:text-base
        ">
          {type}</span>
        <Link href={link} target="_blank"
          className="hover:underline undeline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light 
          sm:text-sm
          ">
            {title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark 
        dark:text-light
        xm:text-sm
        ">{summary}</p>
        <div className="mt-2 flex tems-center">
          <Link href={github} target="_blank" className="w-10"> <GithubIcon /> </Link>
          <Link href={link} target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold 
            dark:bg-light dark:text-dark
            sm:px-4 sm:text-base
            "
          >Visit Project</Link>
        </div>
      </div>

    </article>
  )
}

const Project = ({ title, type, img, link, github, summary }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light
    xs:p-4
    ">

      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%]  rounded-[2rem] bg-dark rounded-br-3xl 
      dark:bg-light
      md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]
      " />

      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage src={img} alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary dark:text-primaryDark font-medium text-xl
        lg:text-lg md:text-base
        ">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline undeline-offset-2"
        >

          <h2 className="my-2 w-full text-left text-3xl font-bold
          lg:text-2xl 
          ">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark 
        dark:text-light
        xm:text-sm
        ">{summary}</p>

        <div className="w-full mt-2 flex tems-center justify-between">

          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline
            md:text-base
            "
          >Visit
          </Link>

          <Link href={github}
            target="_blank"
            className="w-8
            md:w-6
            ">
            {" "}
            <GithubIcon />
            {" "}
          </Link>
        </div>

      </div>

    </article>
  )
}

const Projects = () => {
  return (
    <>
      <Head>
        <title>Anirudh Salaria | Projects Page</title>
        <meta name="description" content="Anirudh Salaria | Full-Stack Software Engineer" />
      </Head>

      <TransitionEffect />

      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText text="Imagination Trumps Knowledge!"
            className="mb-16 
            lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32 
          xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0
          ">
            <div className="col-span-12">
              <FeaturedProjects

                title="YouTube-Clone"
                img={project2}
                summary="As the 2nd largest search engine next to Google, YouTube is one of the best ways to communicate to a wide audience, whether you're promoting programs or providing information to students.  
I present to you the Youtube clone built using React, Material-UI, and Rapid API. This is a web application that allows users to search and watch videos from YouTube. With React as the base for the frontend, Material-UI for the UI components, and Rapid API for the YouTube data API, it includes features such as pagination, dark mode, and responsive design. This project demonstrates my ability to use modern web technologies and API to create a user-friendly and functional web application."
                link="https://goyoutube.netlify.app/"
                github="https://github.com/anirudhsalaria/YouTube"
                type="Featured Project"
              />
            </div>

            <div className="col-span-6 
            sm:col-span-12">
              <Project
                title="Travel Advisor"
                img={project6}
                summary="From enquiring multiple agents, handling your luggage and family, looking for the best food to suppress your hunger, to getting lost while finding an escape for yourself, travelling to a new place throws up a number of hurdles your way.As an easy solution for all the mess, this Travel Advisor allows users to find Restaurants, Hotels and Attractions around them by automatically detecting the location and suggests the hotels and restaurants around you. Built using Reactjs, Material UI, GoogleMap API and Rapid API, you can also search for different places by using the searchbar or can simply navigate it directly using the map."
                link="https://mytravelgo.netlify.app/"
                github="https://github.com/anirudhsalaria/Travel-advisor"
                type="Project"
              />
            </div>
            <div className="col-span-6 
            sm:col-span-12">
              <Project
                title="GoNews"
                img={project4}
                summary="Created a news website using React, Bootstrap, and News API This is a web application that allows users to read daily news headlines from various sources and categories. I have used React for the front-end, Bootstrap for the UI framework, and News API for the news data API. I have also implemented features such as filtering and sorting."
                link="https://github.com/anirudhsalaria/GoNews"
                github="https://github.com/anirudhsalaria/GoNews"
                type="Project"
              />
            </div>
            <div className="col-span-6 
            sm:col-span-12">
              <Project
                title="OneCamOne"
                img={project5}
                summary="Created an online chatting room where people can come and chat. I have used Firebase for Google authentication, Vite-ReactJS for the frontend, and Tailwind CSS for the UI design. This is a web application that allows users to sign in with their Google account, join chat rooms, and send or receive messages in real-time."
                link="https://onecamone.netlify.app/"
                github="https://github.com/anirudhsalaria/VideoCall"
                type="Project"
              />
            </div>

            <div className="col-span-6 
            sm:col-span-12">
              <Project
                title="Chatline"
                img={project3}
                summary="Created an online chatting room where people can come and chat. I have used Firebase for Google authentication, Vite-ReactJS for the frontend, and Tailwind CSS for the UI design. This is a web application that allows users to sign in with their Google account, join chat rooms, and send or receive messages in real-time."
                link="https://wechatline.netlify.app/"
                github="https://github.com/anirudhsalaria/Chatline"
                type="Project"
              />
            </div>
            <div className="col-span-6 
            sm:col-span-12">
              <Project
                title="CSmart"
                img={project7}
                summary="Created a study material website, here you can find all the study material required to pass Btech CSE! I have used NextJs for the frontend, Tailwind CSS for the UI framework and Strapi CMS for the backend. All the content is stored on Strapi and it is deployed on Render."
                link="https://csmart.netlify.app/"
                github="https://github.com/anirudhsalaria/CSmart"
                type="Project"
              />
            </div>
            <div className="col-span-6 
            sm:col-span-12">
              <Project
                title="HarryPotter- Website"
                img={project8}
                summary="As a Harry Potter enthusiant with a passion for exploring the magic of Hogwarts, I created a theme based website based on the Harry Potter world, with images, fonts, colors, and animations that create a magical experience for the fellow Potterheads. The project is a frontend website from scratch using HTML and CSS. This is a web application that allows users to download Harry Potter books."
                link="https://anirudhsalaria.github.io/Harrypotter/"
                github="https://github.com/anirudhsalaria/Harrypotter"
                type="Project"
              />
            </div>

            <div className="col-span-6 
            sm:col-span-12">
              <Project
                title="AutoBee"
                img={project9}
                summary="Created a Car rental website using NextJs, Typescript, Tailwind css and rapid API. Using this website you 
                can search for different cars, filter them according to your need and see the per day prices for the same."
                link="https://github.com/anirudhsalaria/AutoBee"
                github="https://github.com/anirudhsalaria/AutoBee"
                type="Project"
              />
            </div>

            <div className="col-span-6 
            sm:col-span-12">
              <Project
                title="TopHire Website- Clone"
                img={project10}
                summary="Created the clone of TopHire Website - a leading company in recruitment using NextJs and Tailwind CSS, Tried to make the Website entirely simillar to the original one."
                link="https://tophire-clone.netlify.app/"
                github="https://github.com/anirudhsalaria/tophire_dashboard"
                type="Project"
              />
            </div>

            <div className="col-span-6 
            sm:col-span-12">
              <Project
                title="SayData- Dashboard"
                img={project11}
                summary="Created the Dashboard for SayData. I have used ReactJs for the frontend and Tailwind CSS for the UI Framework."
                link="https://dashboard-saydata.netlify.app/"
                github="https://github.com/anirudhsalaria/SayData"
                type="Project"
              />
            </div>

            <div className="col-span-6 
            sm:col-span-12">
              <Project
                title="Speak"
                img={project12}
                summary="Created a website using which people can convert there voice into text. I have used react-speech-recognition
                node package for the same"
                link="https://gospeak.netlify.app/"
                github="https://github.com/anirudhsalaria/Speak"
                type="Project"
              />
            </div>

            <div className="col-span-6 
            sm:col-span-12">
              <Project
                title="TextGo"
                img={project13}
                summary="This is a web application that allows users to manipulate their text easily and 
                efficiently. I have used React for the frontend and Bootstrap for the UI design. I 
                have also implemented features such as dark mode. "
                link="https://anirudhsalaria.github.io/TextGo/"
                github="https://github.com/anirudhsalaria/TextGo"
                type="Project"
              />
            </div>
            {/* <div className="col-span-6 sm:col-span-12">
              <Project
                title="Crypto Screener App"
                img={project1}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                local currency."
                link="/"
                github="/"
                type="Project"
              />
            </div>

            <div className="col-span-12">
              <FeaturedProjects

                title="Crypto Screener App"
                img={project1}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                local currency."
                link="/"
                github="/"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6 
            sm:col-span-12">
              <Project
                title="Crypto Screener App"
                img={project1}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                local currency."
                link="/"
                github="/"
                type="Project"
              />
            </div>
            <div className="col-span-6 
            sm:col-span-12">
              <Project
                title="Crypto Screener App"
                img={project1}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                local currency."
                link="/"
                github="/"
                type="Project"
              /> 
             </div> */}

          </div>
        </Layout>
      </main>

    </>
  )
}


export default Projects