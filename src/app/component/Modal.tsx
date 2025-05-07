import { XMarkIcon } from "@heroicons/react/24/outline";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import React, { useRef } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const { i18n, t } = useTranslation();
  const isRTL = i18n.language === "fa";
  const currentLocale = i18n.language;
  const modalRef = useRef<HTMLDialogElement | null>(null);

  const openModal = () => {
    if (modalRef.current) modalRef.current.showModal();
  };
  const closeModal = () => {
    if (modalRef.current) modalRef.current.close();
    onClose();
  };
  if (isOpen) {
    openModal();
  }

  return (
    <>
      <dialog
        id=""
        className="mx-auto modal"
        ref={modalRef}
        onClick={closeModal}
      >
        <div
          className="justify-center text-center py-10 mx-auto mb-40 modal-box"
          onClick={(e) => e.stopPropagation()}
        >
          <form
            method="dialog"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 modal-backdrop"
          >
            <button
              onClick={closeModal}
              className="text-white bg-slate-700 rounded-full p-1"
            >
              <XMarkIcon width={20} />
            </button>
          </form>
          <p className="font-bold font-mono text-lg">{t("download.title")}</p>
          <div className="flex justify-around space-x-4 mt-8">
            <Link
              href="https://drive.google.com/uc?export=download&id=1U755tNXURHwnQwcFMu6OCV1_mNLhoRFD"
              locale={false ? undefined : undefined}
              rel="noopener noreferrer"
              target="_blank"
              className="p-2.5 sm:mr-1 sm:mt-0 mt-1 border-b text-sm sm:text-base sm:border-none border-slate-500 dark:border-b dark:border-slate-700 font-mono cursor-pointer shadow bg-gray-700 hover:shadow-slate-500 hover:bg-opacity-50 sm:rounded-lg rounded-t-lg"
            >
              {t("download.en")}
            </Link>
            <Link
              href="https://drive.google.com/uc?export=download&id=1hgNlWOuV1MJ54T9e6A9iBPXcnuRciIy6"
              locale={false ? undefined : undefined}
              rel="noopener noreferrer"
              target="_blank"
              download="resume-en.pdf"
              className="p-2.5 sm:mr-1 sm:mt-0 mt-1 border-b text-sm sm:text-base sm:border-none border-slate-500 dark:border-b dark:border-slate-700 font-mono cursor-pointer shadow bg-gray-700 hover:shadow-slate-500 hover:bg-opacity-50 sm:rounded-lg rounded-t-lg"
            >
              {t("download.fa")}
            </Link>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Modal;
