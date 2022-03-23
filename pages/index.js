import React from "react"
import SocialLinks from "../components/socialLinks"
import Card from "../components/card"
import Image from 'next/image'
import profilePic from '../public/upic.jpg'
import projects from "../data/projects"
import bmprojs from "../data/bmproj"

export default function Home() {
  return (
    <div className="container mx-auto mt-5 pb-10 max-w-5xl pt-4 px-8 bg-black">
      <header className="text-amber-600">
        <div className="flex md:flex-row flex-col justify-center   md:gap-12">
          <div className="flex flex-col flex-1 py-8">
            <h1 className="text-7xl py-2  bg-clip-text font-sans ">
              Vlad Sofronov
            </h1>
            <SocialLinks />

            <div className="py-8 flex flex-col justify-center flex-1">
              <div className="text-gray-400 ">
                <p className=" ">
                  Product manager, frontend and web3 developer and BurningMan artist.
                </p>
                <p >
                  JavaScript, React, NextJS, TailwindCSS, Material-UI, Python, Solidity, MongoDB
                </p>
              </div>
            </div>
          </div>
          <div className="hidden md:block md:w-72 md:h-72 mx-auto">
            <Image className="rounded-full" src={profilePic} alt="Vlad Sofronov profile picture."/>
          </div>
        </div>
      </header>
      <main>
        <section>
          <h2 className="text-5xl py-2  bg-clip-text font-sans text-amber-600 ">
            Development projects
          </h2>
          <div className="my-5">
            {projects.map(item => <Card
              title={item.title}
              key={item.title}
              link={item.link}
              github={item.github}
              about={item.about}
              stack={item.stack}
            />)}
          </div>
        </section>
        <section>
          <h2 className="text-5xl py-2  bg-clip-text font-sans text-amber-600 ">
            BurningMan projects.
          </h2>
          <div className="my-5">
            {bmprojs.map(item => <Card
              title={item.title}
              link={item.link}
              github={item.github}
              about={item.about}
              stack={item.stack}
              key = {item.title}
            />)}
          </div>
        </section>
      </main>
      <footer>
        <p className="text-amber-600">
          Thanks for your attention! Feel free to reach out to me.
        </p>
      </footer>
    </div>
  )
}