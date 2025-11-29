import React, { useRef } from "react";
import { useProduct } from "../../Utilities/Hooks/CustomContext/CustomContext";
import SuccessAnimation from './../SuccessAnimation/SuccessAnimation';
import Line from '../../assets/Line 2.png';

const Modal = ({ cName, setDrawer }) => {
  const { totals, setCart, setWishList } = useProduct();
  const modalRef = useRef();

  const operationDoneHandler = () => {
    setCart([]);
    setWishList([]);
    setDrawer(null);
    if (modalRef.current) modalRef.current.close();
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <button
        className={`btn ${cName}`}
        onClick={() => modalRef.current && modalRef.current.showModal()}
      >
        Purchase
      </button>

      <dialog ref={modalRef} className="modal secondary-bg-gradient-nav">
        <div className="modal-box relative">
          {/* Close button */}
          <button
            onClick={operationDoneHandler}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-black/25 hover:text-black"
          >
            ✕
          </button>

          <div className="w-full flex flex-col items-center">
            <SuccessAnimation />
            <h3 className="font-bold text-xl pb-4">Payment Successfully</h3>
            <img src={Line} alt="line" />
            <p className="py-4 text-black/25">Thanks For Purchasing</p>
            <p className="text-black/25">
              Total: ${totals.grandTotal.toFixed(2)}
            </p>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
