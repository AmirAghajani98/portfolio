"use client";

import { Progress } from "./Progress";

const SkillsProgress = () => {
  return (
    <div className="flex justify-evenly gap-4 z-50 w-full dark:opacity-100 opacity-95 h-auto mx-auto py-10 backmain">
      <Progress value={90} name="HTML" />
      <Progress value={95} name="CSS" />
      <Progress value={80} name="JavaScript" />
      <Progress value={75} name="TypeScript" />
      <Progress value={70} name="Next.js" />
      <Progress value={80} name="React.js" />
      <Progress value={70} name="GraphQL" />
      <Progress value={60} name="PostgreSQL" />
      <Progress value={80} name="Tailwind CSS" />
      <Progress value={70} name="WordPress" />
      <Progress value={90} name="Git" />
    </div>
  );
};

export default SkillsProgress;
