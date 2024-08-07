import Image from "next/image";
import Intro from "./component/Intro";
import Projects from "./component/projects";
import SkillsSlider from "./component/SkillsSlider";

export default function Home() {
  return (
    <>
      <Intro />
      <main className="w-full py-10 sm:px-0 px-4 dark:opacity-100 opacity-95 backmain ">
        <div className="sm:flex flex-col-2 items-center justify-center h-full">
          <div className="sm:w-2/5 text-center m-auto">
            <div className="mx-auto my-[70px] z-50">
              <Image
                src="./img/profile.png"
                width={400}
                height={400}
                alt="Picture of the author"
                className="m-auto rounded-full shadow-md sm:block hidden shadow-cyan-500/50 z-50"
              />
            </div>
          </div>
          <div className="z-10 dark:z-10 dark:text-slate-100 text-[#121a23] dark:bg-slate-700 bg-slate-500 dark:bg-opacity-70 bg-opacity-70 sm:w-2/5 sm:text-justify text-start p-8 rounded-3xl mx-auto shadow-lg shadow-slate-600 border border-slate-400 dark:shadow-slate-900 dark:border-slate-800">
            <Image
              src="./img/profile.png"
              width={400}
              height={400}
              alt="Picture of the author"
              className="m-auto rounded-full mt-8 mb-16 w-60 sm:hidden shadow-md shadow-cyan-500/50 z-50"
            />
            <h1 className="text-3xl font-semibold mt-4 font-mono">
              What do I do
            </h1>
            <ul className="dark:text-slate-300">
              <li className="my-4 flex text-lg font-sans">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 mx-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 10.5v6m3-3H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                  />
                </svg>
                Technical Lead
              </li>
              <li className="my-8 flex text-lg font-sans">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 mx-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                  />
                </svg>
                Web Programming, Product development
              </li>
              <li className="my-8 flex text-lg font-sans">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 mx-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                  />
                </svg>
                Training, Coaching, internship Web Programming
              </li>
            </ul>
            <div className="mt-14 text-justify">
              <h1 className="text-3xl font-semibold mb-3 font-mono">
                About Me
              </h1>
              <p className="text-lg dark:text-slate-300 font-sans leading-9">
                I was born in Iran. I received my bachelors degree in business
                administration from QIAU. And I have been programming for two
                years. I like to understand the structure of everything and I
                always try to make the best use of the available tools. In terms
                of personality type, I am an introverted, intellectual and
                constructive person.
              </p>
            </div>
          </div>
          <div className="w-[5%]"></div>
        </div>
      </main>
      <Projects />
      <SkillsSlider />
    </>
  );
}
