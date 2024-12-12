import { ArrowUturnLeftIcon, BackspaceIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <Link href={""}>
      <button
        className="flex sm:p-2.5 p-1.5 justify-start items-center bg-opacity-70 rounded-full dark:text-slate-200 text-slate-800 dark:hover:bg-slate-800 hover:bg-slate-400"
        onClick={handleGoBack}
      >
        <ArrowUturnLeftIcon className="h-5 w-5" />
      </button>
    </Link>
  );
};

export default BackButton;
