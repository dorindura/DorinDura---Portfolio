import Navbar from "@/components/navbar/navbar";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faMailchimp } from "@fortawesome/free-brands-svg-icons/faMailchimp";
import { faM } from "@fortawesome/free-solid-svg-icons";
import { faBirthdayCake } from "@fortawesome/free-solid-svg-icons/faBirthdayCake";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons/faMailBulk";
import { faMailForward } from "@fortawesome/free-solid-svg-icons/faMailForward";
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { BirthdayCakeIcon } from "react-line-awesome";

export default function Resume() {
  return (
    <div className="">
      <div className="">
        <Navbar />
        <div className="px-20 py-8 max-sm-screen:px-0">
          <div className="text-4xl py-4 font-bold max-sm-screen:justify-center max-sm-screen:mx-auto max-sm-screen:flex">
            Resume
          </div>
          <div className="flex flex-row justify-center py-4 max-lg-screen:flex-col">
            <div className="flex flex-col w-64 width-resume-prof-sect2 bg-gray-200 py-4 rounded-s-lg max-lg-screen:rounded-xl max-lg-screen:justify-center max-lg-screen:mx-auto">
              <div className="text-4xl font-bold flex justify-center max-sm/3-screen:text-center">
                Dorin Dura
              </div>
              <div className="text-xl font-semibold flex justify-center py-2 max-sm/3-screen:text-center">
                Frontend Developer
              </div>
              <div className="flex justify-center py-4 bg-gray-700 w-56 width-resume-prof-sect h-10 rounded-xl items-center text-white font-semibold mx-auto my-4">
                CONTACT
              </div>
              <div className="flex flex-col justify-center mx-auto width-resume-prof-sect max-sm/3.5-screen:overflow-hidden">
                <div className="flex flex-row gap-4 py-2 max-w-56 width-resume-prof-sect max-sm/3.5-screen:text-center max-sm/3.5-screen:justify-center max-sm/3.5-screen:mx-auto">
                  <div className=" w-4 h-4">
                    <FontAwesomeIcon icon={faPhone} size="lg" />
                  </div>
                  <div className=" text-justify width-resume-prof-sect">
                    +40 745 498 572
                  </div>
                </div>
                <div className="flex flex-row gap-4 py-2 max-w-56 width-resume-prof-sect max-sm/3.5-screen:text-center max-sm/3.5-screen:justify-center max-sm/3.5-screen:mx-auto">
                  <div className=" w-4 h-4">
                    <FontAwesomeIcon icon={faMailBulk} size="lg" />
                  </div>
                  <div className=" text-justify width-resume-prof-sect">
                    duradorin11@yahoo.com
                  </div>
                </div>
                <a
                  className="flex flex-row gap-4 py-2 max-w-56 width-resume-prof-sect max-sm/3.5-screen:text-center max-sm/3.5-screen:justify-center max-sm/3.5-screen:mx-auto"
                  href="https://github.com/dorindura"
                >
                  <div className=" w-4 h-4">
                    <FontAwesomeIcon icon={faLinkedin} size="lg" />
                  </div>
                  <div className=" text-justify width-resume-prof-sect">
                    linkedin.com/in/dorin-dura-frontend-developer/
                  </div>
                </a>
                <a
                  className="flex flex-row gap-4 py-2 max-w-56 width-resume-prof-sect max-sm/3.5-screen:text-center max-sm/3.5-screen:justify-center max-sm/3.5-screen:mx-auto"
                  href="https://github.com/dorindura"
                >
                  <div className=" w-4 h-4">
                    <FontAwesomeIcon icon={faGithub} size="lg" />
                  </div>
                  <div className=" text-justify width-resume-prof-sect">
                    github.com/dorindura
                  </div>
                </a>
                <div className="flex flex-row gap-4 py-2 max-w-56 width-resume-prof-sect max-sm/3.5-screen:text-center max-sm/3.5-screen:justify-center max-sm/3.5-screen:mx-auto">
                  <div className=" w-4 h-4">
                    <FontAwesomeIcon icon={faBirthdayCake} size="lg" />
                  </div>
                  <div className=" text-justify width-resume-prof-sect">
                    +40 745 498 572
                  </div>
                </div>
              </div>

              <div className="flex justify-center py-4 bg-gray-700 w-56 width-resume-prof-sect h-10 rounded-xl items-center text-white font-semibold mx-auto my-4">
                EDUCATION
              </div>

              <div className="flex flex-col justify-center mx-auto">
                <div className="flex flex-col gap-4 py-2 max-w-60">
                  <div className="text-xl font-bold max-sm/3-screen:text-center">
                    Highschool
                  </div>
                  <div className="text-sm font-medium max-sm/3-screen:text-center">
                    National College "Avram Iancu"
                  </div>
                  <div className="text-sm font-medium max-sm/3-screen:text-center">
                    September 2019 - June 2023
                  </div>
                </div>
                <div className="flex flex-col gap-4 py-2 max-w-60">
                  <div className="text-xl font-bold max-sm/3-screen:text-center">
                    University of Petrosani
                  </div>
                  <div className="text-sm font-medium max-sm/3-screen:text-center">
                    Mechanical and Electrical Engineering
                  </div>
                  <div className="text-sm font-medium max-sm/3-screen:text-center">
                    2023-2027
                  </div>
                </div>
                <div className="flex flex-col gap-4 py-2 max-w-60">
                  <div className="text-xl font-bold max-sm/3-screen:text-center">
                    SkillBrain Trainee
                  </div>
                  <div className="text-sm font-medium max-sm/3-screen:text-center">
                    Frontend Developer Trainee
                  </div>
                  <div className="text-sm font-medium max-sm/3-screen:text-center">
                    June 2023 - November 2023
                  </div>
                </div>
              </div>

              <div className="flex justify-center py-4 bg-gray-700 w-56 width-resume-prof-sect h-10 rounded-xl items-center text-white font-semibold mx-auto my-4">
                SKILLS
              </div>

              <div className="flex flex-col justify-center mx-auto max-w-60">
                <div className="flex flex-row max-sm/3.5-screen:flex-col max-sm/3.5-screen:mx-auto">
                  <div className="w-28 flex justify-start max-sm/3.5-screen:justify-start">
                    <div className="flex flex-col max-sm/3.5-screen:justify-start">
                      <h3>• HTML</h3>
                      <h3>• CSS</h3>
                      <h3>• JavaScript</h3>
                      <h3>• React</h3>
                      <h3>• GitHub</h3>
                      <h3>• Git</h3>
                    </div>
                  </div>

                  <div
                    id="hr-resume"
                    className="flex justify-center max-sm/3.5-screen:hidden"
                  ></div>

                  <div className="w-28 flex justify-end max-sm/3.5-screen:justify-start">
                    <div className="flex flex-col justify-end max-sm/3.5-screen:justify-start">
                      <h3>• Next.Js</h3>
                      <h3>• TypeScript</h3>
                      <h3>• Angular</h3>
                      <h3>• TailwindCSS</h3>
                      <h3>• SCSS</h3>
                      <h3>• WordPress</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-96 width-resume-prof-sect bg-white rounded-e-lg max-lg-screen:rounded-xl max-lg-screen:justify-center max-lg-screen:mx-auto max-lg-screen:mt-4">
              <div className="px-4">
                <div className="mt-5 flex flex-row justify-between max-sm/2-screen:justify-center max-sm/3-screen:mx-auto max-sm/3-screen:text-center">
                  <div className="text-xl font-medium flex justify-start width-pghp-about max-sm/3-screen:justify-center max-sm/3-screen:mx-auto">
                    PROFILE
                  </div>
                  <div
                    id="hr-resume2"
                    className="h-1 flex m-auto float-end width-pghp-about max-sm/3-screen:hidden"
                  />
                </div>
                <div className="pt-2">
                  <p className="text-justify text-xs">
                    As a seasoned Frontend Developer, I excel in crafting
                    engaging, responsive websites and applications, blending
                    creative flair with technical acumen to transform complex
                    requirements into user-friendly solutions. My proficiency in
                    HTML, CSS, and JavaScript, coupled with frameworks like
                    React, Next.js, and Angular, empowers me to develop
                    intuitive, scalable front-end architectures that enhance
                    user experience. Known for my strong problem-solving
                    abilities and meticulous attention to detail, I ensure the
                    highest standards of responsive design and usability.
                  </p>
                </div>

                <div className="mt-4 flex flex-row justify-between max-sm/2-screen:justify-center max-sm/3-screen:mx-auto max-sm/3-screen:text-center">
                  <div className="text-xl font-medium flex justify-start width-pghp-about max-sm/3-screen:justify-center max-sm/3-screen:mx-auto">
                    EXPERIENCE
                  </div>
                  <div
                    id="hr-resume2"
                    className="h-1 flex m-auto float-end width-pghp-about max-sm/3-screen:hidden"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <div className="font-bold text-lg py-1 max-sm/3.5-screen:text-center">
                    Frontend Developer Freelancer
                  </div>
                  <div className="flex justify-end font-medium py-1 max-sm/3.5-screen:text-center max-sm/3.5-screen:justify-center">
                    February 2024 - Present
                  </div>
                  <div className="font-medium py-1 max-sm/3.5-screen:text-center">
                    Remote
                  </div>
                </div>
                <div className="text-justify text-xs">
                  <p>
                    • Engaged in direct discussions with clients to understand
                    project requirements and objectives.
                  </p>
                  <p>
                    • Collaborated closely with a client to design and develop a
                    car rental application.
                  </p>
                  <p>
                    • Played a key role in determining the design direction for
                    the application, focusing on user-friendly interfaces and
                    intuitive navigation.
                  </p>
                  <p>
                    • Selected appropriate technologies and frameworks based on
                    project needs and client preferences.
                  </p>
                  <p>
                    • Implemented a card-based interface to showcase various
                    cars available for rental, integrating essential details and
                    information for each vehicle.
                  </p>
                  <p>
                    • Delivered a high-quality, responsive frontend solution
                    that met the client's expectations and provided an optimal
                    user experience.
                  </p>
                  <p>
                    • Demonstrated flexibility and adaptability in responding to
                    client feedback and iterating on designs and functionalities
                    as needed.
                  </p>
                  <p>
                    • Successfully completed the project within the agreed
                    timeline and budget, contributing to client satisfaction and
                    positive feedback.
                  </p>
                </div>

                <div className="flex flex-col py-2">
                  <div className="font-bold text-lg py-1 max-sm/3.5-screen:text-center">
                    Frontend Developer Intern
                  </div>
                  <div className="flex justify-end font-medium py-1 max-sm/3.5-screen:justify-center max-sm/3.5-screen:text-center">
                    November 2023 - February 2024
                  </div>
                  <div className="font-medium py-1 max-sm/3.5-screen:text-center">
                    Jogga | Remote
                  </div>
                </div>
                <div className="text-justify text-xs max-lg-screen:pb-2">
                  <p>
                    • Delighted to announce my recent promotion at Jogga, where
                    I have advanced from React mastery to learning Next.js,
                    TypeScript, SCSS, and TailwindCSS.
                  </p>
                  <p>
                    • I actively contributed to team efforts beyond individual
                    tasks, providing assistance, sharing insights, and offering
                    guidance to teammates to foster a collaborative environment.
                  </p>
                  <p>
                    • I've also earned a certification in IT, focusing on
                    Frontend Development, to deepen my skills.
                  </p>
                  <p>
                    • Collaborating closely with colleagues using Agile
                    Methodology has been pivotal in driving project success.
                  </p>
                  <p>
                    • This journey has not only sharpened my technical skills
                    but also strengthened my capacity to excel in collaborative
                    environments.
                  </p>
                  <p>
                    • Looking forward to leveraging my skills as a Frontend
                    Developer to tackle new challenges and deliver outstanding
                    digital experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-row justify-center py-4 max-lg-screen:flex-col">
            <div className="flex flex-col w-64 width-resume-prof-sect2 bg-gray-200 py-4 rounded-s-lg max-lg-screen:rounded-xl max-lg-screen:justify-center max-lg-screen:mx-auto">
              <div className="flex justify-center py-4 bg-gray-700 w-56 width-resume-prof-sect h-10 rounded-xl items-center text-white font-semibold mx-auto my-4">
                SOFT SKILLS
              </div>

              <div className="text-justify text-xs w-48 width-resume-prof-sect justify-center flex mx-auto flex-col">
                <p className="">
                  •Strong organizational and time management skills.
                </p>
                <p className="">
                  •Detail-oriented and able to handle multiple tasks
                  simultaneously.
                </p>
                <p className="">•A fast learner and adaptable professional.</p>
                <p className="">
                  •I thrive in both independent and collaborative environments.
                </p>
                <p className="">
                  •Strong analytical and problemsolving skills.
                </p>
                <p className="">
                  •In leadership, I provide mentorship and motivation to drive
                  success.
                </p>
              </div>

              <div className="flex justify-center py-4 bg-gray-700 w-56 width-resume-prof-sect h-10 rounded-xl items-center text-white font-semibold mx-auto my-4">
                LANGUAGES
              </div>

              <div className="flex flex-col justify-center mx-auto">
                <div className="flex flex-col gap-4 py-2 max-w-60 width-resume-prof-sect max-sm/2-screen:justify-center max-sm/2-screen:mx-auto">
                  <div className="text-xl font-bold justify-center flex max-sm/2-screen:text-center max-sm/2-screen:mx-auto">
                    English - Advanced
                  </div>
                </div>
                <div className="flex flex-col gap-4 py-2 max-w-60 width-resume-prof-sect max-sm/2-screen:justify-center max-sm/2-screen:mx-auto">
                  <div className="text-xl font-bold justify-center flex max-sm/2-screen:text-center max-sm/2-screen:mx-auto">
                    Romanian - Native
                  </div>
                </div>
                <div className="flex flex-col gap-4 py-2 max-w-60 width-resume-prof-sect max-sm/2-screen:justify-center max-sm/2-screen:mx-auto">
                  <div className="text-xl font-bold justify-center flex max-sm/2-screen:text-center max-sm/2-screen:mx-auto">
                    French - Elementary
                  </div>
                </div>
              </div>

              <div className="flex justify-center py-4 bg-gray-700 w-56 width-resume-prof-sect h-10 rounded-xl items-center text-white font-semibold mx-auto my-4">
                COURSES
              </div>

              <div className="width-resume-prof-sect max-xl2-screen:flex max-xl2-screen:justify-center max-xl2-screen:mx-auto max-xl2-screen:flex-col">
                <p className="text-sm font-medium justify-center flex py-1 max-sm-screen:text-center">
                  Frontend Developer - SkillBrain.com
                </p>
                <p className="text-sm font-medium justify-center flex py-1 max-sm-screen:text-center">
                  JavaScript Course - Codefinity.com
                </p>
                <p className="text-sm font-medium justify-center flex py-1 max-sm-screen:text-center">
                  React Course - Codefinity.com
                </p>
                <p className="text-sm font-medium justify-center flex py-1 max-sm-screen:text-center">
                  Web Dev Course - Mimo.com
                </p>
              </div>

              <div className="flex justify-center py-4 bg-gray-700 w-56 width-resume-prof-sect h-10 rounded-xl items-center text-white font-semibold mx-auto my-4">
                HOBBIES
              </div>
              <div className="flex justify-center flex-col mx-auto">
                <p className="text-sm font-medium flex justify-center py-1 mx-auto text-center w-52 width-resume-prof-sect">
                  Semi-Pro Athlete - 5 x Mini Football U17 Champion
                </p>
                <p className="text-sm font-medium justify-center flex py-1 mx-auto text-center w-52 width-resume-prof-sect">
                  Three-Time Fastest Marathon Runner
                </p>
                <p className="text-sm font-medium justify-center flex py-1 mx-auto text-center w-48 width-resume-prof-sect">
                  Amateur Ping Pong and Bowling Player
                </p>
                <p className="text-sm font-medium justify-center flex py-1 mx-auto text-center w-52 width-resume-prof-sect">
                  Chess Enthusiast
                </p>
              </div>
            </div>

            <div className="flex flex-col w-96 width-resume-prof-sect bg-white rounded-e-lg max-lg-screen:rounded-xl max-lg-screen:justify-center max-lg-screen:mx-auto max-lg-screen:mt-4">
              <div className="px-4">
                <div className="flex flex-col py-2">
                  <div className="font-bold text-lg py-1 max-sm/3.5-screen:text-center">
                    Frontend Developer Junior
                  </div>
                  <div className="flex justify-end font-medium py-1 max-sm/3.5-screen:justify-center max-sm/3.5-screen:text-center">
                    June 2024 - November 2023
                  </div>
                  <div className="font-medium py-1 max-sm/3.5-screen:text-center">
                    SkillBrain | Remote
                  </div>
                </div>
                <div className="text-justify text-xs">
                  <p>
                    • Mastered HTML5 for structured and accessible web content,
                    emphasizing semantic markup and accessibility best
                    practices.
                  </p>
                  <p>
                    • Explored CSS3 to craft visually stunning and responsive
                    designs, utilizing advanced selectors and animations.
                  </p>
                  <p>
                    • Deepened JavaScript proficiency, covering core concepts
                    and advanced topics like asynchronous programming and DOM
                    manipulation.
                  </p>
                  <p>
                    • Utilized Object-Oriented Programming principles to
                    optimize code structure for improved maintainability and
                    scalability.
                  </p>
                  <p>
                    • Learned JSX and Virtual DOM concepts in React for
                    efficient rendering and seamless user experiences.
                  </p>
                  <p>
                    • Embraced React Hooks to develop reusable and maintainable
                    components.
                  </p>
                  <p>
                    • Skilled in Git for version control and GitHub for
                    collaboration workflows, facilitating effective team
                    collaboration.
                  </p>
                </div>

                <div className="mt-5 flex flex-row justify-between max-sm/2-screen:justify-center max-sm/3-screen:mx-auto max-sm/3-screen:text-center">
                  <div className="text-xl font-medium flex justify-start width-pghp-about max-sm/3-screen:justify-center max-sm/3-screen:mx-auto">
                    Technical Projects
                  </div>
                  <div
                    id="hr-resume2"
                    className="h-1 flex m-auto float-end width-pghp-about max-sm/3-screen:hidden"
                  />
                </div>

                <div className="font-medium text-sm py-2 max-sm/3.5-screen:text-center">
                  Jogga App
                </div>
                <div className="text-justify text-xs">
                  <p className="text-justify">
                    •Contributed to recreating the Jogga App with Next.js. 🔄
                  </p>
                  <p className="text-justify">
                    •Leveraged Next.js for SEO🌐, SSR🚀, and enhanced
                    performance. 💨
                  </p>
                  <p className="text-justify">
                    •Utilized Axios for efficient API data fetching, ensuring
                    reliability. 🚀
                  </p>
                  <p className="text-justify">
                    •Sped up project by 4 weeks. ⏩
                  </p>
                  <p className="text-justify">
                    •Developed reusable components for consistent project
                    development. 🛠
                  </p>
                  <p className="text-justify">
                    •Added custom colors for aesthetics. 🎨
                  </p>
                  <p className="text-justify">
                    •Ensured cross-browser compatibility. 🌐🔍
                  </p>
                  <p className="text-justify">
                    •Integrated Glide.js for enhanced user experience. 🖼️
                  </p>
                  <p className="text-justify">
                    •Integrated third-party APIs for engaging experiences. 📚
                  </p>
                  <p className="text-justify">
                    •Tested and resolved front-end issues. 🔍
                  </p>
                </div>

                <div className="font-medium text-sm py-2 max-sm/3.5-screen:text-center">
                  Car Rental App
                </div>
                <div className="text-justify text-xs max-lg-screen:pb-2">
                  <p>
                    •Leveraged Next.js for improved SEO performance through
                    server-side rendering and for reusable components. 🌐🚀
                  </p>
                  <p>•Employed Scss for advanced styling capabilities. 🎨</p>
                  <p>
                    •Leveraged Tailwind for rapid UI development and consistent
                    styling. ✨
                  </p>
                  <p>•Arrays of car details mocked for rental listings. 🚗</p>
                  <p>
                    •Utilized TypeScript interfaces for defining data structures
                    and enhancing code clarity. 📊
                  </p>
                  <p>
                    •Ensured type safety and minimized runtime errors through
                    TypeScript's static typing. ⚙
                  </p>
                  <p>
                    •Utilized Next.js routing for efficient page navigation and
                    management. 🛣
                  </p>
                  <p>
                    •Ensured consistency and reliability in data handling
                    processes through TypeScript's type checking. 📝🔍
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
