"use client";

import { ThemeToggle } from "@/components/ThemeToggle";
import Image from "next/image";
import pp from "../public/pp.jpg";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { Card } from "@/components/ui/card";
import { CardContent } from "@/components/ui/card";
import image1 from "../public/1.png"
import image2 from "../public/2.jpg"
import image3 from "../public/3.png"
import image4 from "../public/4.png"
import image5 from "../public/5.png"
import image6 from "../public/6.jpg"


export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      <div className="mx-auto max-w-xl px-4 py-20">
        <motion.header
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-between mb-12"
        >
          <div className="w-20 h-20 rounded-full overflow-hidden">
            <Image
              src={pp}
              alt="profile Picture"
              className="cursor-pointer transition-all duration-300 hover:scale-110"
            />
          </div>
          <ThemeToggle />
        </motion.header>

        <main className="space-y-10">
          <section className="space-y-10">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-1"
            >
              <h1 className="text-4xl font-bold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">
                Abhishek
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Learner & Person with Curious Mind{" "}
              </p>
              <p className="text-gray-600 dark:text-gray-400">Palwal Haryana</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-3"
            >
              <h2 className="text-lg font-semibold">
                Building Scalable Solutions For Tomorrow
              </h2>
              <p className="max-w-2xl text-sm text-gray-600 dark:text-gray-400">
                I am learning{" "}
                <span className="text-black dark:text-white">NEXT.JS</span>,{" "}
                <span className="text-black dark:text-white">TYPESCRIPT</span> and{" "}
                <span className="text-black dark:text-white">MYSQL</span>{" "}
                 I know some other technologies like{" "}
                <span className="text-black dark:text-white">
                  HTML, CSS, JAVASCRIPT, REACT, GIT, GITHUB, NODE.js and MONGODB
                </span>
              </p>

              {/* <p className="max-w-2xl text-sm text-gray-600 dark:text-gray-400">
                Beyond knoledge and experteses i have a problem with the system
                that system is currupt like rapper kurrupt things may not make
                sense right now maybe in future they certainly not{" "}
              </p> */}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-3"
            >
              <Button className="rounded-full bg-gradient-to-r from-rose-600 to-indigo-600 text-white transition-transform hover:scale-105">
                Resume
              </Button>
              <Link
                href="https://github.com/abhi2755"
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
              >
                <FaGithub className="w-6 h-6"></FaGithub>
              </Link>

              <Link
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
              >
                <FaLinkedin className="w-6 h-6"></FaLinkedin>
              </Link>

              <Link
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
              >
                <FaTwitter className="w-6 h-6"></FaTwitter>
              </Link>

              <Link
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
              >
                <FaYoutube className="w-6 h-6"></FaYoutube>
              </Link>
            </motion.div>
          </section>

          <motion.section
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">
              Experience
            </h2>
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    DEC20 - 2024
                  </p>
                  <p className="font-medium">Engineer</p>
                  <p className="text-blue-600 dark:to-blue-400">Company X</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                I was a Civil Engineer, i have done multiple civil engineering jobs {" "}
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    OCT24-present
                  </p>
                  <p className="font-medium">Engineer</p>
                  <p className="text-blue-600 dark:to-blue-400">Company X</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
               From past six months i am learning web development. I dont have experience as developer but i do know how things work. but i can tell you about this project how i build this portfolio website . In this website i use next.js as a framework, tailwind css shadcn for components, framer motion for smooth looking animation and vercel for deploying the website
               and i have other projects also which are not complete yet. and also i am learning how to make your own shell {" "}
              </p>
            </div>

            {/* <div className="space-y-8">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    July23-present
                  </p>
                  <p className="font-medium">Engineer</p>
                  <p className="text-blue-600 dark:to-blue-400">Company X</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                dicta consectetur quia, accusamus suscipit amet. Veritatis
                aliquam minus deserunt dicta dolorem eum voluptatem totam, unde
                aperiam. Eos cupiditate excepturi corrupti?{" "}
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    July23-present
                  </p>
                  <p className="font-medium">Engineer</p>
                  <p className="text-blue-600 dark:to-blue-400">Company X</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                dicta consectetur quia, accusamus suscipit amet. Veritatis
                aliquam minus deserunt dicta dolorem eum voluptatem totam, unde
                aperiam. Eos cupiditate excepturi corrupti?{" "}
              </p>
            </div> */}
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">
              Education
            </h2>

            <div className="space-y-2">
              <div className="flext items-center justify-between">
                <div className="space-y-1">
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    MAR09 - 2010
                  </p>
                  <p className="font-medium">STUDENT</p>
                  <p className="text-blue-600 dark:to-blue-400">HBSE</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                {" "}
               I have done My 10th from JJP SCHOOL of HBSE board with 80% marks
              </p>
            </div>

            <div className="space-y-2">
              <div className="flext items-center justify-between">
                <div className="space-y-1">
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    MAR11 - 2012
                   </p>
                  <p className="font-medium">STUDENT</p>
                  <p className="text-blue-600 dark:to-blue-400">HBSE</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                {" "}
                I have done My 12th from JJP SCHOOL of HBSE board with 80% marks
              </p>
            </div>

            <div className="space-y-2">
              <div className="flext items-center justify-between">
                <div className="space-y-1">
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    MAY12 - 2016
                  </p>
                  <p className="font-medium">ENGINEER</p>
                  <p className="text-blue-600 dark:to-blue-400">MDU</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                {" "}
               I have done my B.Tech in Civil Engineering from NGF college Of MDU university
              </p>
            </div>

            <div className="space-y-2">
              <div className="flext items-center justify-between">
                <div className="space-y-1">
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    MAY16 - 2018
                  </p>
                  <p className="font-medium">Engineer</p>
                  <p className="text-blue-600 dark:to-blue-400">SSC</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                {" "}
                I prepare for my ssc exams
              </p>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">
              Projects
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105 cursor-pointer">
                <CardContent className="p-4">
                  <Image src={image1} alt="Project1" className="rounded-lg mb-4"/> 
                  <div className="flex justify-between  items-center">
                    <div>
                      <h3 className="font-medium">Project 1</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Next.js Mysql Drizzle</p>
                    </div>
                    <Button variant="ghost" size="icon">➻</Button>
                  </div>
                </CardContent>
              </Card>


              <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105 cursor-pointer">
                <CardContent className="p-4">
                  <Image src={image2} alt="Project1" className="rounded-lg mb-4"/> 
                  <div className="flex justify-between  items-center">
                    <div>
                      <h3 className="font-medium">Project 2</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Next.js Mysql Drizzle</p>
                    </div>
                    <Button variant="ghost" size="icon">➻</Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105 cursor-pointer">
                <CardContent className="p-4">
                  <Image src={image3} alt="Project1" className="rounded-lg mb-4"/>
                  <div className="flex justify-between  items-center">
                    <div>
                      <h3 className="font-medium">Project 3</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Next.js Mysql Drizzle</p>
                    </div>
                    <Button variant="ghost" size="icon">➻</Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105 cursor-pointer">
                <CardContent className="p-4">
                  <Image src={image4} alt="Project1" className="rounded-lg mb-4"/> 
                  <div className="flex justify-between  items-center">
                    <div>
                      <h3 className="font-medium">Project 4</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Next.js Mysql Drizzle</p>
                    </div>
                    <Button variant="ghost" size="icon">➻</Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105 cursor-pointer">
                <CardContent className="p-4">
                  <Image src={image5} alt="Project1" className="rounded-lg mb-4"/>
                  <div className="flex justify-between  items-center">
                    <div>
                      <h3 className="font-medium">Project 5</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Next.js Mysql Drizzle</p>
                    </div>
                    <Button variant="ghost" size="icon">➻</Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105 cursor-pointer">
                <CardContent className="p-4">
                  <Image src={image6} alt="Project1" className="rounded-lg mb-4"/>
                  <div className="flex justify-between  items-center">
                    <div>
                      <h3 className="font-medium">Project 6</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Next.js Mysql Drizzle</p>
                    </div>
                    <Button variant="ghost" size="icon">➻</Button>
                  </div>
                </CardContent>
              </Card>

            </div>
            <p className="text-gray-500">© Abhishek 2024</p>
          </motion.section>
        </main>
      </div>
    </div>
  );
}
