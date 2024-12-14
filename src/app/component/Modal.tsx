import { XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React, { useRef } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
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
          <p className="font-bold font-mono text-lg">
            Select Resume to Download
          </p>
          <div className="flex justify-around space-x-4 mt-8">
            <Link
              href="/resume/en-resume.pdf"
              locale={false}
              rel="noopener noreferrer"
              target="_blank"
              download="resume-en.pdf"
              className="bg-slate-600 rounded-xl p-2 text-sm hover:shadow font-mono"
            >
              En-Resume
            </Link>
            <Link
              href="/resume/fa-resume.pdf"
              locale={false}
              rel="noopener noreferrer"
              target="_blank"
              download="resume-fa.pdf"
              className="bg-slate-600 rounded-xl p-2 text-sm hover:shadow font-mono"
            >
              Fa-Resume
            </Link>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Modal;
