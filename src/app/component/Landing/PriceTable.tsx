"use-client";

import Link from "next/link";
import Image from "next/image";
import {
  AcademicCapIcon,
  ArrowTrendingUpIcon,
  BanknotesIcon,
  BoltIcon,
  ChartBarIcon,
  ClipboardDocumentIcon,
  DevicePhoneMobileIcon,
  DocumentChartBarIcon,
  DocumentTextIcon,
  EnvelopeIcon,
  PaintBrushIcon,
  ShieldCheckIcon,
  ShoppingCartIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";

export default function Pricetable() {
  return (
    <section className="py-24">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="mb-12 ">
          <h2 className="sm:text-4xl text-2xl sm:w-[50%] text-center mx-auto pb-4 font-bold border-b border-slate-500 dark:border-slate-600 dark:text-gray-200 text-gray-950 md:text-4xl font-sans">
            Plans That Work for You
          </h2>
          <p className="pt-6 sm:text-lg font-sans text-center text-gray-700 dark:text-gray-300">
            Choose the perfect plan to grow your business and achieve your goals
          </p>
        </div>
        <div className="space-y-8 lg:grid lg:grid-cols-3 lg:space-y-0 lg:items-center mx-auto sm:w-[90%]">
          <div className="flex flex-col mx-auto sm:w-10/12 w-[95%] text-gray-900 dark:text-gray-200 rounded-2xl bg-slate-300 bg-opacity-80 dark:bg-slate-800 p-4 xl:py-9 xl:px-8 transition-all duration-500 hover:bg-gray-100">
            <h3 className="font-sans sm:text-3xl text-2xl font-bold mb-3 sm:text-left text-center border-b border-gray-700 sm:border-none">
              Personal or Small Business Website
            </h3>
            <div className="flex items-center mb-6 justify-center sm:justify-start">
              <span className="font-manrope text-4xl mr-2 sm:5xl dark:text-indigo-300 font-medium">
                $299 – $650
              </span>
              <span className="text-lg text-gray-500 dark:text-gray-300 font-mono">
                / project
              </span>
            </div>
            <ul className="mb-12 space-y-6 text-left sm:text-lg text-gray-700 dark:text-gray-400 font-sans">
              <li className="flex items-center space-x-4 text-center sm:text-left font-medium">
                <span>
                  Ideal for: Freelancers, small businesses, startups needing an
                  online presence.
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <WrenchScrewdriverIcon className="h-6 w-6 text-gray-500 dark:text-indigo-500" />
                <span>WordPress installation & theme setup</span>
              </li>
              <li className="flex items-center space-x-2">
                <DocumentTextIcon className="h-6 w-6 text-gray-500 dark:text-indigo-500" />
                <span>3-5 pages (Home, About, Services,...)</span>
              </li>
              <li className="flex items-center space-x-2">
                <DevicePhoneMobileIcon className="h-6 w-6 text-gray-500 dark:text-indigo-500" />
                <span>Mobile-responsive design</span>
              </li>
              <li className="flex items-center space-x-2">
                <ArrowTrendingUpIcon className="h-6 w-6 text-gray-500 dark:text-indigo-500" />
                <span>Basic SEO setup</span>
              </li>
              <li className="flex items-center space-x-2">
                <EnvelopeIcon className="h-6 w-6 text-gray-500 dark:text-indigo-500" />
                <span>Contact form integration</span>
              </li>
              <li className="flex items-center space-x-2">
                <ClipboardDocumentIcon className="h-6 w-6 text-gray-500 dark:text-indigo-500" />
                <span>Blog setup (optional)</span>
              </li>
            </ul>
            <Link
              href="/#contact"
              className="w-full py-2.5 px-5 bg-indigo-600 font-mono shadow-sm rounded-full transition-all duration-500 text-base text-white font-semibold text-center mx-auto hover:bg-indigo-700"
            >
              Learn More
            </Link>
          </div>
          <div className="flex flex-col mx-auto sm:w-11/12 w-[95%] text-gray-900 dark:text-gray-200 rounded-2xl bg-slate-300 bg-opacity-80 dark:bg-slate-800 p-4 xl:py-9 xl:px-6 transition-all duration-500 hover:bg-gray-100">
            <div className="uppercase bg-gradient-to-r from-indigo-600 via-violet-800 to-indigo-600 rounded-t-2xl p-3 mx-1 sm:mx-0 text-center text-white font-sans">
              MOST POPULAR
            </div>
            <div className="pt-4 xl:py-6 xl:px-8">
              <h3 className="font-sans sm:text-3xl text-2xl font-bold mb-3 sm:text-left text-center border-b border-gray-700 sm:border-none">
                Corporate & Medium Business Website
              </h3>
              <div className="flex items-center mb-6 sm:justify-start justify-center">
                <span className="font-manrope sm:text-5xl text-4xl mr-2 font-medium text-indigo-600 dark:text-indigo-500">
                  $800 – $1,700
                </span>
                <span className="sm:text-lg text-gray-500 dark:text-gray-300 font-mono">
                  / project
                </span>
              </div>
              <ul className="mb-12 space-y-6 text-left sm:text-lg font-sans dark:text-gray-300">
                <li className="flex items-center space-x-4 text-center sm:text-left font-medium">
                  <span>
                    Ideal for: Growing businesses needing a more advanced
                    website.
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <PaintBrushIcon className="h-6 w-6 text-indigo-600" />
                  <span>Custom or premium theme customization</span>
                </li>
                <li className="flex items-center space-x-2">
                  <DocumentTextIcon className="h-6 w-6 text-indigo-600" />
                  <span>10-15 pages (portfolio, blog, services, etc.)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <EnvelopeIcon className="h-6 w-6 text-indigo-600" />
                  <span>Advanced contact forms & lead capture</span>
                </li>
                <li className="flex items-center space-x-2">
                  <BoltIcon className="h-6 w-6 text-indigo-600" />
                  <span>Speed optimization & SEO-friendly setup</span>
                </li>
                <li className="flex items-center space-x-2">
                  <ChartBarIcon className="h-6 w-6 text-indigo-600" />
                  <span>Google Analytics & tracking integration</span>
                </li>
                <li className="flex items-center space-x-2">
                  <ShieldCheckIcon className="h-6 w-6 text-indigo-600" />
                  <span>Security & backup setup</span>
                </li>
                <li className="flex items-center space-x-2">
                  <AcademicCapIcon className="h-6 w-6 text-indigo-600" />
                  <span>Basic training on content updates</span>
                </li>
              </ul>
              <Link
                href="#contact"
                className="py-2.5 px-5 w-full bg-indigo-600 font-mono shadow-sm rounded-full transition-all duration-500 text-base text-white font-semibold text-center block mx-auto hover:bg-indigo-700"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="flex flex-col mx-auto sm:w-10/12 w-[95%] text-gray-900 dark:text-gray-200 rounded-2xl bg-slate-300 bg-opacity-80 dark:bg-slate-800 p-4 xl:py-9 xl:px-8 transition-all duration-500 hover:bg-gray-100">
            <h3 className="font-sans sm:text-3xl text-2xl font-bold mb-3 sm:text-left text-center border-b border-gray-700 sm:border-none">
              E-Commerce & Large Business Website
            </h3>
            <div className="flex items-center mb-6 sm:justify-start justify-center">
              <span className="font-manrope text-4xl mr-2 sm:5xl dark:text-indigo-300 font-medium">
                $2,500 – $4,000
              </span>
              <span className="sm:text-lg text-gray-500 dark:text-gray-300 font-mono">
                /project
              </span>
            </div>
            <ul className="mb-12 space-y-6 text-left sm:text-lg text-gray-700 dark:text-gray-400 font-sans">
              <li className="flex items-center space-x-4 text-center sm:text-left font-medium">
                <span>
                  Ideal for: Online stores, large businesses, or complex custom
                  websites.
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <ShoppingCartIcon className="h-6 w-6 text-gray-500 dark:text-indigo-500" />
                <span>WooCommerce setup & product listing</span>
              </li>
              <li className="flex items-center space-x-2">
                <DocumentTextIcon className="h-6 w-6 text-gray-500 dark:text-indigo-500" />
                <span>Custom product pages & checkout</span>
              </li>
              <li className="flex items-center space-x-2">
                <BanknotesIcon className="h-6 w-6 text-gray-500 dark:text-indigo-500" />
                <span>Payment gateway integration (PayPal, etc...)</span>
              </li>
              <li className="flex items-center space-x-2">
                <BoltIcon className="h-6 w-6 text-gray-500 dark:text-indigo-500" />
                <span>Advanced speed optimization</span>
              </li>
              <li className="flex items-center space-x-2">
                <EnvelopeIcon className="h-6 w-6 text-gray-500 dark:text-indigo-500" />
                <span>Email marketing & automation setup</span>
              </li>
              <li className="flex items-center space-x-2">
                <DocumentChartBarIcon className="h-6 w-6 text-gray-500 dark:text-indigo-500" />
                <span>Inventory management system</span>
              </li>
              <li className="flex items-center space-x-2">
                <ShieldCheckIcon className="h-6 w-6 text-gray-500 dark:text-indigo-500" />
                <span>Security, backups & performance monitoring</span>
              </li>
            </ul>
            <Link
              href="#contact"
              className="py-2.5 px-5 bg-indigo-600 font-mono shadow-sm rounded-full transition-all duration-500 text-base text-white font-semibold text-center w-full mx-auto hover:bg-indigo-700"
            >
              Learn More
            </Link>
          </div>
        </div>
        <div className="text-center font-mono pt-10 text-lg hover:underline text-gray-700 dark:text-gray-300">
          <Link href={"#contact"}>Need a Custom Plan?</Link>
        </div>
      </div>
      <div className="w-full justify-center hidden sm:block mt-40">
        <h2 className="font-sans sm:text-4xl text-2xl sm:w-[50%] mx-auto pb-4 font-bold border-b border-slate-500 dark:border-slate-600 text-center text-slate-950 dark:text-slate-200">
          Visual Guide to Building Your Perfect Website
        </h2>
        <Image
          loading="lazy"
          src={"./img/steps-light.png"}
          alt={"steps"}
          width={100}
          height={100}
          className="w-[70%] h-auto sm:mt-0 mt-10 mx-auto rounded-3xl block dark:hidden"
        />
        <Image
          loading="lazy"
          src={"./img/steps-dark.png"}
          alt={"steps"}
          width={100}
          height={100}
          className="w-[70%] h-auto sm:mt-0 mt-10 mx-auto rounded-3xl hidden dark:block"
        />
      </div>
    </section>
  );
}
