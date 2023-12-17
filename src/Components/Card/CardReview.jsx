import { Card } from 'flowbite-react';
import React from 'react';
import bintang from '../Assets/gambar-fix/bintang.png';

export const CardReview = (props) => {
  return (
    <Card className="max-w-sm">
      <img className="w-[50%]" src={bintang} alt="" />
      <h5 className="text-2xl font-bold tracking-tight text-slate-800 dark:text-white">
        {props.name}
      </h5>
      <p className="font-normal text-slate-500">{props.comment}</p>
    </Card>
  );
};
