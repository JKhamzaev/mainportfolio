import React from "react"
import Image from "next/image"

const skills = [
  { skill: "Python" },
  { skill: "Java" },
  { skill: "C" },
  { skill: "Qiskit" },
  { skill: "Swift" },
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "React" },
  { skill: "Next.js" },
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Javlonbek and I am a{" "}
              <span className="font-bold">{"passionate"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span> student at the University of Rochester.
            </p>
            <br />
            <p>
            I am pursuing dual Bachelor of Science degrees in Computer Science and Business: 
            Finance. With a strong foundation in technology and problem-solving, 
            I enjoy tackling complex challenges and building innovative solutions 
            that have a meaningful impact.
            </p>
            <br />
            <p>
            I enjoy working on side projects like app development and exploring emerging technologies, 
            such as quantum computing. My diverse experiences—ranging from co-founding initiatives to 
            empower students in Uzbekistan, to securing scholarships for academic excellence—have shaped 
            my passion for using technology to solve real-world problems and empower others.
            </p>
            <br />
            <p>
             I have a wide range of hobbies and passions that keep me busy.
              From collecting coins and postal stamps, being watches and cars nerd, to playing chess,
              I am always seeking new experiences and love to keep myself
              engaged and learning new things.
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
            <Image
              src="/codinghand.png"
              alt=""
              width={325}
              height={325}
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
