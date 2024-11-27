"use client";

import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../component/LanguageSwitcher";
interface WorkExperience {
  company: string;
  role: string;
  duration: string;
  location: string;
  type: string;
  description: string;
  skills: string[];
}
interface Projects {
  title: string;
  description: string;
  link: string;
  skillA: string;
  skillB: string;
  skillC: string;
  skillD: string;
}

export default function resume() {
  const { t } = useTranslation();

  const workExperiences: WorkExperience[] = t("workExperiences.list", {
    returnObjects: true,
  }) as WorkExperience[];

  const interests: string[] = t("interests.list", {
    returnObjects: true,
  }) as string[];
  const projects: Projects[] = t("projects.list", {
    returnObjects: true,
  }) as Projects[];
  const { i18n } = useTranslation();

  const currentLocale = i18n.language;

  return (
    <main>
      <div className="m-4">
        <LanguageSwitcher />
      </div>
      <div className="flex justify-center content-center font-sans">
        <div
          lang={currentLocale}
          dir={currentLocale === "fa" ? "ltr" : "rtl"}
          className="border border-gray-600 rounded-xl font-sans shadow-md bg-slate-900 shadow-slate-400 py-10 px-10 w-3/5 mt-10 mb-10"
        >
          <ul className="flex flex-wrap justify-end gap-2">
            <li>
              <>
                <a
                  href="https://www.linkedin.com/in/amir-aghajani/"
                  target="blank"
                  className="bg-blue-600 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded"
                >
                  <svg
                    className="w-5 h-5 fill-current"
                    role="img"
                    viewBox="0 0 256 256"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path d="M218.123122,218.127392 L180.191928,218.127392 L180.191928,158.724263 C180.191928,144.559023 179.939053,126.323993 160.463756,126.323993 C140.707926,126.323993 137.685284,141.757585 137.685284,157.692986 L137.685284,218.123441 L99.7540894,218.123441 L99.7540894,95.9665207 L136.168036,95.9665207 L136.168036,112.660562 L136.677736,112.660562 C144.102746,99.9650027 157.908637,92.3824528 172.605689,92.9280076 C211.050535,92.9280076 218.138927,118.216023 218.138927,151.114151 L218.123122,218.127392 Z M56.9550587,79.2685282 C44.7981969,79.2707099 34.9413443,69.4171797 34.9391618,57.260052 C34.93698,45.1029244 44.7902948,35.2458562 56.9471566,35.2436736 C69.1040185,35.2414916 78.9608713,45.0950217 78.963054,57.2521493 C78.9641017,63.090208 76.6459976,68.6895714 72.5186979,72.8184433 C68.3913982,76.9473153 62.7929898,79.26748 56.9550587,79.2685282 M75.9206558,218.127392 L37.94995,218.127392 L37.94995,95.9665207 L75.9206558,95.9665207 L75.9206558,218.127392 Z M237.033403,0.0182577091 L18.8895249,0.0182577091 C8.57959469,-0.0980923971 0.124827038,8.16056231 -0.001,18.4706066 L-0.001,237.524091 C0.120519052,247.839103 8.57460631,256.105934 18.8895249,255.9977 L237.033403,255.9977 C247.368728,256.125818 255.855922,247.859464 255.999,237.524091 L255.999,18.4548016 C255.851624,8.12438979 247.363742,-0.133792868 237.033403,0.000790807055"></path>
                    </g>
                  </svg>
                </a>
              </>
            </li>
            <li>
              <>
                <a
                  href="https://github.com/AmirAghajani98"
                  target="blank"
                  className="bg-gray-700 p-2 font-medium text-white inline-flex items-center space-x-2 rounded"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    className="w-5"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </>
            </li>
            <li>
              <>
                <a
                  href="mailto:amir.aghajani1377@gmaol.com"
                  className="bg-red-600 p-2 font-medium text-white inline-flex items-center space-x-2 rounded"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    role="img"
                    className="w-5"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <path
                      fill="currentColor"
                      d="M12 13.065L1.36 6.224L1.347 17.81c0 .83.674 1.505 1.505 1.505h18.297c.83 0 1.505-.674 1.505-1.505V6.224L12 13.065z"
                    />
                    <path
                      fill="currentColor"
                      d="M22.68 5.313L12 13.935L1.36 5.313L1.347 3.812c0-.83.674-1.505 1.505-1.505h18.297c.83 0 1.505.674 1.505 1.505V5.313z"
                    />
                    <path
                      fill="red"
                      d="M1.36 6.224L12 13.935l10.64-7.711L22.68 3.812c0-.687-.375-1.285-.938-1.617L12 10.935L1.36 2.195A1.853 1.853 0 0 0 .397 3.812v2.412l.964.635z"
                    />
                  </svg>
                </a>
              </>
            </li>
          </ul>
          <div className="flex justify-between items-center">
            <div>
              <div className="bg-cover bg-no-repeat rounded-full h-52 w-52"></div>
            </div>
            <div className="grid justify-items-end">
              <h2 className="text-6xl font-extrabold"> {t("header.name")}</h2>
              <p className="text-2xl mt-5">{t("header.title")}</p>
              <p className="text-2xl mt-5"></p>
            </div>
          </div>
          <div className="flex gap-x-10 mt-4">
            <div className="w-2/6 text-auto ">
              <>
                <strong className="text-xl font-medium grid justify-items-end mb-6">
                  {t("contactDetails.title")}
                </strong>
                <ul className="mb-4 grid justify-items-end">
                  <li className="px-2 mt-1 mb-2 grid justify-items-end">
                    <strong className="mr-1">
                      {t("contactDetails.phonetitle")}
                    </strong>
                    <a href="tel:+821023456789" className="block">
                      {t("contactDetails.phone")}
                    </a>
                  </li>
                  <li className="px-2 grid justify-items-end">
                    <strong className="mr-1">
                      {t("contactDetails.emailtitle")}
                    </strong>
                    <a href="mailto:" className="block">
                      {t("contactDetails.email")}
                    </a>
                  </li>
                  <li className="px-2 mt-1 grid justify-items-end">
                    <strong className="mr-1">
                      {t("contactDetails.locationtitle")}
                    </strong>
                    <span className="block">
                      {t("contactDetails.location")}
                    </span>
                  </li>
                </ul>
              </>
              <>
                <strong className="text-xl font-medium grid justify-items-end mt-10 mb-6">
                  {t("skills.title")}
                </strong>
                <ul className="mt-2 mb-10 grid grid-cols-2 justify-items-end">
                  <li className="px-2 mt-1">HTML</li>
                  <li className="px-2 mt-1">CSS</li>
                  <li className="px-2 mt-1">JavaScript</li>
                  <li className="px-2 mt-1">TypeScript</li>
                  <li className="px-2 mt-1">React</li>
                  <li className="px-2 mt-1">React Ruter</li>
                  <li className="px-2 mt-1">Next.js</li>
                  <li className="px-2 mt-1">Graphql</li>
                  <li className="px-2 mt-1">Sql</li>
                  <li className="px-2 mt-1">Tailwind-Css</li>
                  <li className="px-2 mt-1">BootStrap</li>
                  <li className="px-2 mt-1">Wordpress</li>
                  <li className="px-2 mt-1">Postgres</li>
                  <li className="px-2 mt-1">Git</li>
                  <li className="px-2 mt-1">Github</li>
                  <li className="px-2 mt-1">Github-Actions</li>
                  <li className="px-2 mt-1">JWt</li>
                  <li className="px-2 mt-1">ApoloGraphql</li>
                  <li className="px-2 mt-1">Codegen</li>
                  <li className="px-2 mt-1">EsLint</li>
                  <li className="px-2 mt-1">Nvm</li>
                  <li className="px-2 mt-1">Npm</li>
                  <li className="px-2 mt-1">Yarn</li>
                </ul>
              </>
              <>
                <strong className="text-xl font-medium grid justify-items-end">
                  {t("further.title")}
                </strong>
                <ul className="mt-2 mb-10 grid justify-items-end">
                  <li className="px-2 mt-1"> {t("further.firstname")}</li>
                  <li className="px-2 mt-1"> {t("further.secondname")}</li>
                </ul>
              </>
              <>
                <strong className="text-xl font-medium grid justify-items-end">
                  Currently learning
                </strong>
                <ul className="mt-2 mb-10 grid justify-items-end">
                  <li className="px-2 mt-1">About Web Accessibility</li>
                  <li className="px-2 mt-1">and User Experience</li>
                </ul>
              </>
              <>
                <strong className="text-xl font-medium grid justify-items-end">
                  {t("interests.title")}
                </strong>
                <ul className="mt-2 grid justify-items-end">
                  {interests.map((interest, index) => (
                    <li key={index} className="px-2 mt-1">
                      {interest}
                    </li>
                  ))}
                </ul>
              </>
            </div>
            <div className="w-4/6 grid justify-items-end">
              <div>
                <h3 className="text-2xl pb-1 border-b font-semibold grid justify-items-end">
                  {t("about.title")}
                </h3>
                <p className="grid justify-items-end mt-4 text-xs">
                  {t("about.content")}
                </p>
              </div>
              <div>
                <h2 className="text-2xl mt-6 pb-1 border-b font-semibold grid justify-items-end">
                  {t("projects.title")}
                </h2>
                <ul className="mt-1">
                  {projects.map((project, index) => (
                    <li key={index} className="py-2 grid">
                      <div className="flex justify-between my-1">
                        <p className="flex">
                          <span className="bg-gray-600 text-white px-2 py-1 ml-1 text-xs rounded">
                            {project.skillA}
                          </span>
                          <span className="bg-gray-600 text-white px-2 py-1 ml-1 text-xs rounded">
                            {project.skillB}
                          </span>
                          <span className="bg-gray-600 text-white px-2 py-1 ml-1 text-xs rounded">
                            {project.skillC}
                          </span>
                          <span className="bg-gray-600 text-white px-2 py-1 ml-1 text-xs rounded">
                            {project.skillD}
                          </span>
                        </p>
                        <strong className="grid justify-items-end">
                          {project.title}
                        </strong>
                      </div>
                      <>
                        <ul className="flex mb-2 justify-items-end">
                          <li>
                            <a
                              href={project.link}
                              className="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded"
                            >
                              Live
                            </a>
                          </li>
                        </ul>
                      </>
                      <p className="text-xs grid justify-items-end">
                        {project.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full">
                <h2 className="text-2xl mt-6 pb-1 border-b font-semibold grid justify-items-end">
                  {t("workExperiences.title")}
                </h2>
                <ul className="mt-2 grid">
                  {workExperiences.map((experience, index) => (
                    <li key={index} className="py-4 grid justify-items-end">
                      <p className="flex justify-between items-center text-sm my-2">
                        {experience.duration}
                        <strong className="text-lg">
                          {experience.company}
                        </strong>
                      </p>
                      <p className="flex justify-between text-base gap-x-2 font-medium">
                        <span className="font-light">
                          {experience.location}
                        </span>
                        {experience.role}
                      </p>

                      <p className="text-base mb-2">{experience.description}</p>
                      <strong>{t("skills.title")}:</strong>
                      <div className="mt-1 text-xs grid grid-cols-2 justify-items-end w-[80%]">
                        {experience.skills.map((skill, i) => (
                          <span key={i}>
                            {skill}
                            {i !== experience.skills.length - 1 && ", "}
                          </span>
                        ))}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="w-full">
                <h2 className="w-full text-2xl mt-6 pb-1 border-b font-semibold grid justify-items-end">
                  {t("education.title")}
                </h2>
                <ul className="mt-2">
                  <li className="pt-2 grid justify-items-end">
                    <p className="flex justify-between text-sm gap-x-2">
                      {t("education.duration")}
                      <strong className="text-base">
                        {t("education.university")}
                      </strong>
                    </p>
                    <p className="flex justify-between text-sm">
                      {t("education.grade")}
                    </p>
                    <p className="flex justify-between text-sm">
                      {t("education.field-study")}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <footer className="mt-6">
            <p className="bg-gray-600 text-white text-center text-xs pt-2"></p>
            <p className="bg-gray-600 text-white text-center text-sm pb-2"></p>
          </footer>
        </div>
      </div>
    </main>
  );
}
