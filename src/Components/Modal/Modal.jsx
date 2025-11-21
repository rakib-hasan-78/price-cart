import React from "react";
import { useProduct } from "../../Utilities/Hooks/CustomContext/CustomContext";
import SuccessAnimation from './../SuccessAnimation/SuccessAnimation';
import Line from '../../assets/Line 2.png';

const Modal = ({cName}) => {
  const {totals} = useProduct()
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
      <dialog id="my_modal_3" className="modal secondary-bg-gradient-nav">
        <div className="modal-box relative">
          

          {/* Close button (X) */}
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-black/25 hover:text-black">
              ✕
            </button>
          </form>
          <div className="w-full flex flex-col items-center">
          {/* Modal content */}
          <SuccessAnimation />
          <h3 className="font-bold xxs:text-sm md:text-base lg:text-lg xl:text-2xl pb-4 text-black">Payment Successfully</h3>
          <img src={Line} alt="border-img" />
          <p className="py-4 text-black/25">Thanks For Purchasing</p>
          <p className="text-black/25">Total:{totals.grandTotal.toFixed(2)}</p>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
