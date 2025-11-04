import React from "react";

const Modal = ({cName}) => {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* 🔘 Button to open modal */}
      <button
        className={`btn ${cName}`}
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        Purchase 
      </button>

      {/* 💡 Modal */}
      <dialog id="my_modal_3" className="modal bg-violet-600">
        <div className="modal-box relative bg-violet-600">
          {/* Close button (X) */}
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>

          {/* Modal content */}
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click on ✕ button to close.</p>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
