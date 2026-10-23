import type { ModalProps } from "../../types/sharedTypes";

export const Modal = ({children, onClose, open, title}: ModalProps) => {
  return (
    <dialog
      className={`h-fit border-5 rounded-xl border-gray-400 p-3 ${open ? "flex" : "none"} flex-col gap-3 fixed top-1/2 left-1/2 -translate-1/2`}
    >
      <div className="flex justify-between">
        <h2 className="m-auto text-center text-2xl font-bold">{title}</h2>
        <button
          className="border-2 w-10 h-10 rounded-xl text-xl p-1 bg-red-400 text-white self-start font-bold"
          onClick={onClose}
        >
          X
        </button>
      </div>
      <div className="flex flex-col gap-3">{children}</div>
    </dialog>
  );
}