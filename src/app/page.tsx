import Image from "next/image";
import Projects from "./component/projects";

export default function Home() {
  return (
    <main className="w-full bg-slate-400 dark:bg-black overflow-hidden p-10">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div className="sm:flex flex-col-2">
        <div className="sm:w-2/5 text-center m-auto">
          <h1 className="sm:text-6xl text-4xl font-bold dark:text-slate-100 text-[#121a23] font-sans">
            Amir Mohammad Aghajani
          </h1>
          <div className="mx-auto my-[70px] z-50">
            <Image
              src="./img/profile.png"
              width={400}
              height={400}
              alt="Picture of the author"
              className="m-auto rounded-full shadow-md shadow-cyan-500/50 z-50"
            />
          </div>
          <div className="dark:text-slate-100 text-[#121a23]">
            <h2 className="justify-center text-3xl font-bold hidden sm:flex font-mono">
              Connect with me
            </h2>
          </div>
          <div className="mt-8 justify-center mr-4 hidden sm:flex">
            <a
              href="mailto:amir.aghajani1377@gmail.com"
              target={"_blank"}
              className="mx-3"
            >
              <Image
                src="./img/2.png"
                width={50}
                height={50}
                alt="Picture of the author"
                className="m-2 p-2 bg-[#121a23] bg-opacity-10 dark:bg-slate-100 dark:bg-opacity-70 rounded-2xl hover:bg-opacity-20 shadow-inner shadow-slate-500 border-y border-slate-400 dark:shadow-slate-500"
              />
            </a>
            <a
              href="https://github.com/AmirAghajani98"
              target={"_blank"}
              className="mx-3"
            >
              <Image
                src="./img/7.png"
                width={50}
                height={50}
                alt="Picture of the author"
                className="m-2 p-2 bg-[#121a23] bg-opacity-10 dark:bg-slate-100 dark:bg-opacity-70 rounded-2xl hover:bg-opacity-20 shadow-inner shadow-slate-500 border-y border-slate-400 dark:shadow-slate-500"
              />
            </a>
            <a href="https://t.me/Amr431" target={"_blank"} className="mx-3">
              <Image
                src="./img/4.png"
                width={50}
                height={50}
                alt="Picture of the author"
                className="m-2 p-2 bg-[#121a23] bg-opacity-10 dark:bg-slate-100 dark:bg-opacity-70 rounded-2xl hover:bg-opacity-20 shadow-inner shadow-slate-500 border-y border-slate-400 dark:shadow-slate-500"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/amir-aghajani/"
              target={"_blank"}
              className="mx-3"
            >
              <Image
                src="./img/5.png"
                width={50}
                height={50}
                alt="Picture of the author"
                className="m-2 p-2 bg-[#121a23] bg-opacity-10 dark:bg-slate-100 dark:bg-opacity-70 rounded-2xl hover:bg-opacity-20 shadow-inner shadow-slate-500 border-y border-slate-400 dark:shadow-slate-500"
              />
            </a>
          </div>
        </div>
        <div className="z-10 dark:z-10 dark:text-slate-100 text-[#121a23] dark:bg-[#121a23] bg-slate-500 dark:bg-opacity-70 bg-opacity-70 sm:w-2/5 sm:text-justify text-start p-8 rounded-3xl mx-auto shadow-lg shadow-slate-600 border border-slate-400 dark:shadow-slate-900 dark:border-slate-800">
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
            <h1 className="text-3xl font-semibold mb-3 font-mono">About Me</h1>
            <p className="text-lg dark:text-slate-300 font-sans leading-9">
              I was born in Iran. I received my bachelors degree in business
              administration from QIAU. And I have been programming for two
              years. I like to understand the structure of everything and I
              always try to make the best use of the available tools. In terms
              of personality type, I am an introverted, intellectual and
              constructive person.
            </p>
          </div>
          <div className="mt-14 text-justify">
            <h1 className="text-3xl font-semibold mb-3 font-mono">Skills</h1>
            <p className="text-lg dark:text-slate-300 font-sans leading-9">
              React-js, Typescript, js, Next-Js, Html5, Css, Tailwind-Css,
              Polaris-Shopify, Wordpress, Elementor, Graphql, SQL, Database,
              Postgres, git, RESTful-web-API, Learning, Researching, Leadership,
              Technical-lead, Teamwork
            </p>
          </div>
          <div className="mt-14 sm:hidden flex justify-center dark:text-slate-100 text-[#121a23]">
            <h1 className="text-[26px] font-semibold mb-4 sm:hidden font-mono">
              Connect with me
            </h1>
          </div>
          <div className="flex justify-center mr-6 sm:mt-12 sm:hidden">
            <a
              href="mailto:amir.aghajani1377@gmail.com"
              target={"_blank"}
              className="m-1.5"
            >
              <Image
                src="./img/2.png"
                width={50}
                height={50}
                alt="Picture of the author"
                className="m-2 p-2 bg-[#121a23] bg-opacity-10 dark:bg-slate-100 dark:bg-opacity-50 rounded-2xl hover:bg-opacity-20"
              />
            </a>
            <a
              href="https://github.com/AmirAghajani98"
              target={"_blank"}
              className="m-1.5"
            >
              <Image
                src="./img/7.png"
                width={50}
                height={50}
                alt="Picture of the author"
                className="m-2 p-2 bg-[#121a23] bg-opacity-10 dark:bg-slate-100 dark:bg-opacity-50 rounded-2xl hover:bg-opacity-20"
              />
            </a>
            <a href="https://t.me/Amr431" target={"_blank"} className="m-1.5">
              <Image
                src="./img/4.png"
                width={50}
                height={50}
                alt="Picture of the author"
                className="m-2 p-2 bg-[#121a23] bg-opacity-10 dark:bg-slate-100 dark:bg-opacity-50 rounded-2xl hover:bg-opacity-20"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/amir-aghajani/"
              target={"_blank"}
              className="m-1.5"
            >
              <Image
                src="./img/5.png"
                width={50}
                height={50}
                alt="Picture of the author"
                className="m-2 p-2 bg-[#121a23] bg-opacity-10 dark:bg-slate-100 dark:bg-opacity-50 rounded-2xl hover:bg-opacity-20"
              />
            </a>
          </div>
        </div>
        <div className="w-[5%]"></div>
      </div>
      <Projects />
    </main>
  );
}
