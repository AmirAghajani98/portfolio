import { XMarkIcon } from "@heroicons/react/24/outline";
import React, { useRef } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDownload: (file: string) => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onDownload }) => {
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
          <h3 className="font-bold font-mono text-lg">
            Select Resume to Download
          </h3>
          <div className="flex justify-around space-x-4 mt-8">
            <button
              className="bg-slate-600 rounded-xl p-2 text-sm hover:shadow font-mono"
              onClick={() => onDownload("/resume/en-resume.pdf")}
            >
              En-Resume
            </button>
            <button
              className="bg-slate-600 rounded-xl p-2 text-sm hover:shadow font-mono"
              onClick={() => onDownload("/resume/fa-resume.pdf")}
            >
              Fa-Resume
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Modal;
