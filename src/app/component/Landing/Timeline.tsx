import React from "react";
import Image from "next/image";

const Timeline = () => {
  const steps = [
    {
      id: 1,
      title: "Needs & Goals",
      icon: "1",
      items: ["Define purpose", "Identify audience", "Determine features"],
      color: {
        bg: "bg-blue-300",
        lighttext: "text-blue-900",
        darktext: "text-blue-200",
        border: "border-blue-500",
      },
      image: "./img/pack10.png",
    },
    {
      id: 2,
      title: "Research & Planning",
      icon: "2",
      items: ["Analyze competitors", "Define structure"],
      color: {
        bg: "bg-gray-300",
        lighttext: "text-gray-900",
        darktext: "text-gray-400",
        border: "border-gray-500",
      },
      image: "./img/pack7.png",
    },
    {
      id: 3,
      title: "Wireframing & Design",
      icon: "3",
      items: ["Create wireframes", "Design interface", "Choose branding"],
      color: {
        bg: "bg-slate-300",
        lighttext: "text-slate-900",
        darktext: "text-slate-200",
        border: "border-slate-500",
      },
      image: "./img/pack9.png",
    },
    {
      id: 4,
      title: "Graphic Design",
      icon: "4",
      items: ["Design logo", "Create visuals"],
      color: {
        bg: "bg-amber-300",
        lighttext: "text-amber-900",
        darktext: "text-amber-300",
        border: "border-amber-500",
      },
      image: "./img/pack1.png",
    },
    {
      id: 5,
      title: "Development",
      icon: "5",
      items: ["Code/CMS setup", "Create pages", "Add features"],
      color: {
        bg: "bg-indigo-300",
        lighttext: "text-indigo-900",
        darktext: "text-indigo-300",
        border: "border-indigo-500",
      },
      image: "./img/pack3.png",
    },
    {
      id: 6,
      title: "Content Creation",
      icon: "6",
      items: ["Write content", "Optimize SEO", "Add visuals"],
      color: {
        bg: "bg-violet-300",
        lighttext: "text-violet-900",
        darktext: "text-violet-100",
        border: "border-violet-500",
      },
      image: "./img/pack8.png",
    },
    {
      id: 7,
      title: "Testing & Review",
      icon: "7",
      items: ["Test functionality", "Check speed", "Test security"],
      color: {
        bg: "bg-yellow-300",
        lighttext: "text-yellow-900",
        darktext: "text-yellow-400",
        border: "border-yellow-500",
      },
      image: "./img/pack4.png",
    },
    {
      id: 8,
      title: "Launch",
      icon: "8",
      items: ["Choose host/domain", "Go live"],
      color: {
        bg: "bg-blue-300",
        lighttext: "text-blue-900",
        darktext: "text-blue-100",
        border: "border-blue-500",
      },
      image: "./img/pack2.png",
    },
    {
      id: 9,
      title: "Optimization",
      icon: "9",
      items: ["SEO improvements", "Use analytics"],
      color: {
        bg: "bg-teal-300",
        lighttext: "text-teal-900",
        darktext: "text-teal-100",
        border: "border-teal-500",
      },
      image: "./img/pack6.png",
    },
    {
      id: 10,
      title: "Maintenance",
      icon: "10",
      items: ["Update content", "Add features", "Regular backups"],
      color: {
        bg: "bg-gray-300",
        lighttext: "text-gray-800",
        darktext: "text-gray-200",
        border: "border-gray-500",
      },
      image: "./img/pack5.png",
    },
  ];

  return (
    <div className="w-[95%] mx-auto p-0 font-sans mb-40 sm:hidden">
      <h2 className="font-sans sm:text-4xl text-2xl sm:w-[50%] mx-auto pb-4 font-bold border-b border-slate-500 dark:border-slate-600 text-center text-slate-950 dark:text-slate-200">
        Visual Guide to Building Your Perfect Website
      </h2>

      <div className="relative mx-auto mt-12">
        <div className="absolute left-1/2 transform -translate-x-full h-full w-0.5 bg-gradient-to-b from-blue-400 via-green-400 to-purple-400" />

        <div className="space-y-6">
          {steps.map((step, index) => {
            const isLeft = index % 2 === 1;
            const boxAlignment = isLeft ? "mr-[50%]" : "ml-[50%]";
            const imageAlignment = isLeft ? "ml-[50%]" : "mr-[50%]";
            const borderSide = isLeft
              ? "border-l-4 border-b-2"
              : "border-r-4 border-b-2";

            return (
              <div
                key={step.id}
                className="relative justify-center flex items-center"
              >
                <div
                  className={`${boxAlignment} bg-opacity-70 p-3 rounded-lg shadow-md ${borderSide} ${step.color.border} w-[55%]`}
                >
                  <div className="flex items-center gap-1">
                    <div
                      className={`px-2 rounded-full text-black ${step.color.bg}`}
                    >
                      {step.icon}
                    </div>
                    <p
                      className={`font-bold dark:${step.color.darktext} ${step.color.lighttext} opacity-100 font-sans`}
                    >
                      {step.title}
                    </p>
                  </div>
                  <ul className="list-disc pl-5 mt-2 text-sm dark:text-gray-200 text-slate-900 space-y-1">
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
