import React from 'react';
import Modal from './../Modal/Modal';
import { useProduct } from '../../Utilities/Hooks/CustomContext/CustomContext';

const Invoice = () => {
    const {totals} = useProduct()
    return (
        <div className='w-full h-auto flex items-center justify-center p-3'>
            <div className='xxs:w-11/12 xlg:w-6/12 h-auto flex flex-col items-center justify-center border border-dashed p-3 rounded-3xl bg-violet-700 text-white'>
                <h3 className='text-2xl font-extrabold'>invoice:</h3>
                <div className='xlg:w-full flex flex-col items-start justify-start'>
                    <div className='w-full grid grid-cols-[1fr_auto] gap-2 items-center'>
                        <h4>sub-total :</h4>
                        <h4 className='col-span-1'> $ {totals.subTotal.toFixed(2)}</h4>
                    </div>
                    <div className='w-full grid grid-cols-[1fr_auto] gap-2 items-center'>
                        <h4>shipping charge :</h4>
                        <h4 className='col-span-1'> $ {totals.totalShipmentCharge.toFixed(2)}</h4>
                    </div>
                    <div className='w-full grid grid-cols-[1fr_auto] gap-2 items-center'>
                        <h4>vat (12.5%) :</h4>
                        <h4 className='col-span-1'> $ {totals.totalTaxRate.toFixed(2)}</h4>
                    </div>
                    <div className='w-full grid grid-cols-[1fr_auto] gap-2 items-center'>
                        <h4>grand total :</h4>
                        <h4 className='col-span-1'> $ {totals.grandTotal.toFixed(2)}</h4>
                    </div>
                </div>
                
                <Modal cName={`btn-primary`} />
            </div>
        </div>
    );
};

export default Invoice;