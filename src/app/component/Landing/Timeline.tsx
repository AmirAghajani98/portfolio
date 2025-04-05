import React from "react";
import {
  LightBulbIcon,
  ChartBarIcon,
  RectangleGroupIcon,
  PencilIcon,
  CodeBracketIcon,
  DocumentTextIcon,
  ShieldCheckIcon,
  BoltIcon,
  ChartBarSquareIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

const Timeline = () => {
  const steps = [
    {
      id: 1,
      title: "Needs & Goals",
      icon: "1",
      items: ["Define purpose", "Identify audience", "Determine features"],
      color: {
        bg: "bg-blue-100",
        text: "text-blue-600",
        border: "border-blue-500",
      },
      image: "./img/pack19.png",
    },
    {
      id: 2,
      title: "Research & Planning",
      icon: "2",
      items: ["Analyze competitors", "Define structure"],
      color: {
        bg: "bg-green-100",
        text: "text-green-600",
        border: "border-green-500",
      },
      image: "./img/pack11.png",
    },
    {
      id: 3,
      title: "Wireframing & Design",
      icon: "3",
      items: ["Create wireframes", "Design interface", "Choose branding"],
      color: {
        bg: "bg-orange-100",
        text: "text-orange-600",
        border: "border-orange-500",
      },
      image: "./img/pack17.png",
    },
    {
      id: 4,
      title: "Graphic Design",
      icon: "4",
      items: ["Design logo", "Create visuals"],
      color: {
        bg: "bg-yellow-100",
        text: "text-yellow-600",
        border: "border-yellow-500",
      },
      image: "./img/pack1.png",
    },
    {
      id: 5,
      title: "Development",
      icon: "5",
      items: ["Code/CMS setup", "Create pages", "Add features"],
      color: {
        bg: "bg-purple-100",
        text: "text-purple-600",
        border: "border-purple-500",
      },
      image: "./img/pack3.png",
    },
    {
      id: 6,
      title: "Content Creation",
      icon: "6",
      items: ["Write content", "Optimize SEO", "Add visuals"],
      color: {
        bg: "bg-pink-100",
        text: "text-pink-600",
        border: "border-pink-500",
      },
      image: "./img/pack14.png",
    },
    {
      id: 7,
      title: "Testing & Review",
      icon: "7",
      items: ["Test functionality", "Check speed", "Test security"],
      color: {
        bg: "bg-indigo-100",
        text: "text-indigo-600",
        border: "border-indigo-500",
      },
      image: "./img/pack4.png",
    },
    {
      id: 8,
      title: "Launch",
      icon: "8",
      items: ["Choose host/domain", "Go live"],
      color: {
        bg: "bg-red-100",
        text: "text-red-600",
        border: "border-red-500",
      },
      image: "./img/pack2.png",
    },
    {
      id: 9,
      title: "Optimization",
      icon: "9",
      items: ["SEO improvements", "Use analytics"],
      color: {
        bg: "bg-teal-100",
        text: "text-teal-600",
        border: "border-teal-500",
      },
      image: "./img/pack7.png",
    },
    {
      id: 10,
      title: "Maintenance",
      icon: "10",
      items: ["Update content", "Add features", "Regular backups"],
      color: {
        bg: "bg-gray-100",
        text: "text-gray-600",
        border: "border-gray-500",
      },
      image: "./img/pack6.png",
    },
  ];

  return (
    <div className="w-[95%] mx-auto p-0 font-sans mb-20">
      <h2 className="font-sans sm:text-4xl text-2xl sm:w-[50%] mx-auto pb-4 font-bold border-b border-slate-500 dark:border-slate-600 text-center text-slate-950 dark:text-slate-200">
        Website Creation Journey
      </h2>

      <div className="relative mx-auto mt-12">
        <div className="absolute left-1/2 transform -translate-x-full h-full w-0.5 bg-gradient-to-b from-blue-400 via-green-400 to-purple-400" />

        <div className="space-y-6">
          {steps.map((step, index) => {
            const isLeft = index % 2 === 1;
            const boxAlignment = isLeft ? "mr-[50%]" : "ml-[50%]";
            const imageAlignment = isLeft ? "ml-[50%]" : "mr-[50%]";
            const borderSide = isLeft ? "border-l-4" : "border-r-4";

            return (
              <div
                key={step.id}
                className="relative justify-center flex items-center"
              >
                <div
                  className={`${boxAlignment} ${step.color.bg} bg-opacity-90 p-3 rounded-lg shadow-md ${borderSide} ${step.color.border} w-[55%]`}
                >
                  <div className="flex items-center gap-1">
                    <div
                      className={`px-2 rounded-full ${step.color.bg} ${step.color.text}`}
                    >
                      {step.icon}
                    </div>
                    <h3 className={`font-bold ${step.color.text} font-sans`}>
                      {step.title}
                    </h3>
                  </div>
                  <ul className="list-disc pl-5 mt-2 text-sm text-gray-600 space-y-1">
                    {step.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div
                  className={`absolute ${imageAlignment} w-[45%] h-full top-0 flex items-center`}
                >
                  <div className="w-full mx-auto">
                    <Image
                      src={step.image}
                      alt={step.title}
                      width={100}
                      height={100}
                      className="w-[75%] h-auto object-cover mx-auto"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
