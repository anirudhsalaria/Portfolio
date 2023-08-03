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
                summary="Created a YouTube clone using React, Material-UI, and Rapid API. This is a web application that allows users to search and watch videos from YouTube. I have used React for the frontend, Material-UI for the UI components, and Rapid API for the YouTube data API. I have also implemented features such as pagination, dark mode, and responsive design. This project demonstrates my ability to use modern web technologies and API to create a user-friendly and functional web application."
                link="https://goyoutube.netlify.app/"
                github="https://github.com/anirudhsalaria/YouTube"
                type="Featured Project"
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
                title="GoNews"
                img={project3}
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
                img={project3}
                summary="Created an online chatting room where people can come and chat. I have used Firebase for Google authentication, Vite-ReactJS for the frontend, and Tailwind CSS for the UI design. This is a web application that allows users to sign in with their Google account, join chat rooms, and send or receive messages in real-time."
                link="https://onecamone.netlify.app/"
                github="https://github.com/anirudhsalaria/VideoCall"
                type="Project"
              />
            </div>
            <div className="col-span-6 
            sm:col-span-12">
              <Project
                title="Travel Advisor"
                img={project3}
                summary="Created a Travel Advisor website using Reactjs, Material UI, GoogleMap API and Rapid API. This is a web application that allow users to find Restaurants, Hotels and Attractions around them. This website will automatically detect your location and will suggest you the hotels and restaurants around you. You can also search for different places by using the searchbar or you can simply navigate it directly using the map."
                link="https://mytravelgo.netlify.app/"
                github="https://github.com/anirudhsalaria/Travel-advisor"
                type="Project"
              />
            </div>
            <div className="col-span-6 
            sm:col-span-12">
              <Project
                title="CSmart"
                img={project3}
                summary="Created a study material website, here you can find all the study material required to pass Btech CSE! I have used NextJs for the frontend, Tailwind CSS for the UI framework and Strapi CMS for the backend. All the content is stored on Strapi and it is deployed on Render."
                link="https://github.com/anirudhsalaria/CSmart"
                github="https://github.com/anirudhsalaria/CSmart"
                type="Project"
              />
            </div>
            <div className="col-span-6 
            sm:col-span-12">
              <Project
                title="HarryPotter- Website"
                img={project3}
                summary="Created a Harry Potter frontend website from scratch using HTML and CSS. This is a web application that allows users to download Harry Potter books. This website has a very good frontend that is appealing to all people. It has a theme based on the Harry Potter world, with images, fonts, colors, and animations that create a magical experience."
                link="https://anirudhsalaria.github.io/Harrypotter/"
                github="https://github.com/anirudhsalaria/Harrypotter"
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