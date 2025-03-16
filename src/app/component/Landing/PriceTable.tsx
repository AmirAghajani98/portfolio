"use-client";

import Link from "next/link";
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
          <h2 className="sm:text-4xl text-2xl sm:w-[50%] text-center mx-auto sm:pb-10 pb-4 font-bold border-b border-slate-500 dark:border-slate-600 dark:text-gray-200 text-gray-950 md:text-4xl font-sans">
            Choose your plan
          </h2>
          {/* <p className="text-gray-500 text-center leading-6 mb-9">
            7 Days free trial. No credit card required.
          </p> */}
          {/* <div className="flex justify-center items-center">
            <label className="min-w-[3.5rem] text-xl relative text-gray-900 mr-4 font-medium">
              Bill Monthly
            </label>
            <input
              type="checkbox"
              id="basic-with-description"
              className="relative shrink-0 w-11 h-6 p-0.5 bg-indigo-100 checked:bg-none checked:bg-indigo-100 rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:border-blue-600 appearance-none before:inline-block before:w-5 before:h-5 before:bg-indigo-600 checked:before:bg-indigo-600 before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:transition before:ease-in-out before:duration-200"
            />
            <label className="relative min-w-[3.5rem] font-medium text-xl text-gray-500 ml-4 ">
              Bill Yearly
            </label>
          </div> */}
        </div>
        <div className="space-y-8 lg:grid lg:grid-cols-3 lg:space-y-0 lg:items-center mx-auto w-[90%]">
          <div className="flex justify-stretch items-stretch flex-col mx-auto w-10/12 text-gray-900 rounded-2xl bg-gray-50 p-6 sm:pb-6 sm:pt-9 sm:px-8 sm:h-[720px] transition-all duration-500 hover:bg-gray-100">
            <h3 className="font-mono text-2xl font-bold mb-3">
              Personal or Small Business Website
            </h3>
            <div className="flex items-center mb-6">
              <span className="font-manrope mr-2 text-5xl font-medium">
                $299 – $650
              </span>
              <span className="text-lg text-gray-500 font-mono">/ project</span>
            </div>
            <ul className="mb-12 space-y-6 text-left text-lg text-gray-600 font-sans">
              <li className="flex items-center space-x-4">
                <span>
                  Ideal for: Freelancers, small businesses, startups needing an
                  online presence.
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <WrenchScrewdriverIcon className="h-6 w-6 text-gray-500" />
                <span>WordPress installation & theme setup</span>
              </li>
              <li className="flex items-center space-x-2">
                <DocumentTextIcon className="h-6 w-6 text-gray-500" />
                <span>3-5 pages (Home, About, Services,...)</span>
              </li>
              <li className="flex items-center space-x-2">
                <DevicePhoneMobileIcon className="h-6 w-6 text-gray-500" />
                <span>Mobile-responsive design</span>
              </li>
              <li className="flex items-center space-x-2">
                <ArrowTrendingUpIcon className="h-6 w-6 text-gray-500" />
                <span>Basic SEO setup</span>
              </li>
              <li className="flex items-center space-x-2">
                <EnvelopeIcon className="h-6 w-6 text-gray-500" />
                <span>Contact form integration</span>
              </li>
              <li className="flex items-center space-x-2">
                <ClipboardDocumentIcon className="h-6 w-6 text-gray-500" />
                <span>Blog setup (optional)</span>
              </li>
            </ul>
            <Link
              href="/"
              className="w-full py-2.5 px-5 bg-indigo-600 font-mono shadow-sm rounded-full transition-all duration-500 text-base text-white font-semibold text-center mx-auto hover:bg-indigo-700"
            >
              Purchase Plan
            </Link>
          </div>
          <div className="flex flex-col mx-auto w-11/12 text-gray-900 rounded-2xl bg-gray-50 p-6 xl:py-6 xl:px-4 transition-all duration-500 hover:bg-gray-100">
            <div className="uppercase bg-gradient-to-r from-indigo-600 to-violet-600 rounded-t-2xl p-3 text-center text-white font-sans">
              MOST POPULAR
            </div>
            <div className="p-6 xl:py-6 xl:px-8">
              <h3 className="font-mono text-2xl font-bold mb-3">
                Corporate & Medium Business Website
              </h3>
              <div className="flex items-center mb-6">
                <span className="font-manrope text-5xl font-medium text-indigo-600">
                  $800 – $1,700
                </span>
                <span className="text-lg text-gray-500 font-mono">
                  / project
                </span>
              </div>
              <ul className="mb-12 space-y-6 text-left text-lg font-sans">
                <li className="flex items-center space-x-4">
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
                href="/"
                className="py-2.5 px-5 w-full bg-indigo-600 font-mono shadow-sm rounded-full transition-all duration-500 text-base text-white font-semibold text-center block mx-auto hover:bg-indigo-700"
              >
                Purchase Plan
              </Link>
            </div>
          </div>
          <div className="flex flex-col mx-auto w-10/12 text-gray-900 rounded-2xl bg-gray-50 p-6 xl:py-9 xl:px-8 transition-all duration-500 hover:bg-gray-100">
            <h3 className="font-mono text-2xl font-bold mb-3">
              E-Commerce & Large Business Website
            </h3>
            <div className="flex items-center mb-6">
              <span className="font-manrope text-5xl">$2,500 – $4,000</span>
              <span className="text-lg text-gray-500 font-mono">/project</span>
            </div>
            <ul className="mb-12 space-y-6 text-left text-lg text-gray-600 font-sans">
              <li className="flex items-center space-x-4">
                <span>
                  Ideal for: Online stores, large businesses, or complex custom
                  websites.
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <ShoppingCartIcon className="h-6 w-6 text-gray-500" />
                <span>WooCommerce setup & product listing</span>
              </li>
              <li className="flex items-center space-x-2">
                <DocumentTextIcon className="h-6 w-6 text-gray-500" />
                <span>Custom product pages & checkout</span>
              </li>
              <li className="flex items-center space-x-2">
                <BanknotesIcon className="h-6 w-6 text-gray-500" />
                <span>Payment gateway integration (PayPal, etc...)</span>
              </li>
              <li className="flex items-center space-x-2">
                <BoltIcon className="h-6 w-6 text-gray-500" />
                <span>Advanced speed optimization</span>
              </li>
              <li className="flex items-center space-x-2">
                <EnvelopeIcon className="h-6 w-6 text-gray-500" />
                <span>Email marketing & automation setup</span>
              </li>
              <li className="flex items-center space-x-2">
                <DocumentChartBarIcon className="h-6 w-6 text-gray-500" />
                <span>Inventory management system</span>
              </li>
              <li className="flex items-center space-x-2">
                <ShieldCheckIcon className="h-6 w-6 text-gray-500" />
                <span>Security, backups & performance monitoring</span>
              </li>
            </ul>
            <Link
              href="javascript:;"
              className="py-2.5 px-5 bg-indigo-600 font-mono shadow-sm rounded-full transition-all duration-500 text-base text-white font-semibold text-center w-full mx-auto hover:bg-indigo-700"
            >
              Purchase Plan
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
