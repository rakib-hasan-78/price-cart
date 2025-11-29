import React from 'react';
import Modal from './../Modal/Modal';
import { useProduct } from '../../Utilities/Hooks/CustomContext/CustomContext';

const Invoice = ({ setDrawer }) => {
  const { totals } = useProduct();

  return (
    <div className='w-full h-auto flex items-center justify-center p-3'>
      <div className='xxs:w-11/12 xlg:w-6/12 h-auto flex flex-col items-center justify-center border border-dashed p-3 rounded-3xl bg-violet-700 text-white'>
        <h3 className='text-2xl font-extrabold'>Invoice:</h3>

        <div className='xlg:w-full flex flex-col items-start justify-start'>
          <div className='w-full grid grid-cols-[1fr_auto] gap-2 items-center'>
            <h4>Sub-total :</h4>
            <h4>$ {totals.subTotal.toFixed(2)}</h4>
          </div>
          <div className='w-full grid grid-cols-[1fr_auto] gap-2 items-center'>
            <h4>Shipping charge :</h4>
            <h4>$ {totals.totalShipmentCharge.toFixed(2)}</h4>
          </div>
          <div className='w-full grid grid-cols-[1fr_auto] gap-2 items-center'>
            <h4>VAT (12.5%) :</h4>
            <h4>$ {totals.totalTaxRate.toFixed(2)}</h4>
          </div>
          <div className='w-full grid grid-cols-[1fr_auto] gap-2 items-center'>
            <h4>Grand total :</h4>
            <h4>$ {totals.grandTotal.toFixed(2)}</h4>
          </div>
        </div>

        {/* Pass setDrawer down to Modal */}
        <Modal cName="btn-primary" setDrawer={setDrawer} />
      </div>
    </div>
  );
};

export default Invoice;
