import React, { useState } from 'react';
import { CardReview } from '../Card/CardReview';
import { Button, Modal, Textarea } from 'flowbite-react';

const Review = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div className="flex flex-col py-16 px-28">
        <div className="text-4xl font-semibold text-center pb-10 tracking-wide text-slate-700">
          <span className="font-bold text-slate-800">Review</span> Customer
        </div>
        <div className="flex flex-wrap gap-10 justify-center">
          <CardReview
            name={'Dionisius'}
            comment={
              'Kaos dari Alpha Clothes sungguh nyaman dipakai sehari-hari. Desainnya trendy dan kualitasnya luar biasa'
            }
          />
          <CardReview
            name={'Dionisius'}
            comment={
              'Kaos dari Alpha Clothes sungguh nyaman dipakai sehari-hari. Desainnya trendy dan kualitasnya luar biasa'
            }
          />
          <CardReview
            name={'Dionisius'}
            comment={
              'Kaos dari Alpha Clothes sungguh nyaman dipakai sehari-hari. Desainnya trendy dan kualitasnya luar biasa'
            }
          />
          <CardReview
            name={'Dionisius'}
            comment={
              'Kaos dari Alpha Clothes sungguh nyaman dipakai sehari-hari. Desainnya trendy dan kualitasnya luar biasa'
            }
          />
          <CardReview
            name={'Dionisius'}
            comment={
              'Kaos dari Alpha Clothes sungguh nyaman dipakai sehari-hari. Desainnya trendy dan kualitasnya luar biasa'
            }
          />
        </div>
        <div className="flex items-center justify-center mt-10 gap-5">
          <div
            className="px-12 py-3 rounded-xl cursor-pointer bg-[#FFD233] text-slate-800 transition-all hover:scale-105 font-semibold"
            onClick={() => setOpenModal(true)}
          >
            Berikan Review
          </div>
        </div>
      </div>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Berikan Review</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <form action="#">
              <Textarea id="review" placeholder="Tuliskan review kamu..." required rows={4} />
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button className="bg-sky-500" onClick={() => setOpenModal(false)}>
            Submit
          </Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Review;
