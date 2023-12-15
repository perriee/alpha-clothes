import { Card } from "flowbite-react";
import React from "react";
import bintang from "../Assets/gambar-fix/bintang.png";

const Review = () => {
  return (
    <div className="flex flex-col mt-10 px-64">
      <div className="text-center text-2xl font-bold py-10 text-[64px]">
        Review Customer
      </div>
      <div className="grid grid-cols-3 gap-8 mt-10 ">
        <Card href="#" className="max-w-sm">
          <img className="w-[50%]" src={bintang} alt="" />
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Dionisius
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            "Kaos dari Alpha Clothes sungguh nyaman dipakai sehari-hari.
            Desainnya trendy dan kualitasnya luar biasa!"
          </p>
        </Card>
        <Card href="#" className="max-w-sm">
          <img className="w-[50%]" src={bintang} alt="" />
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Anas
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            "Korsa dari Alpha Clothes luar biasa! Saya suka desainnya yang
            elegan dan fungsional. Tidak pernah mengecewakan."
          </p>
        </Card>
        <Card href="#" className="max-w-sm">
          <img className="w-[50%]" src={bintang} alt="" />
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Diwan
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            "Lanyard Alpha Clothes sangat praktis! Bahan berkualitas dan desain
            yang menawan. Sangat membantu sehari-hari."
          </p>
        </Card>
        <Card href="#" className="max-w-sm">
          <img className="w-[50%]" src={bintang} alt="" />
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Nunung
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            "Kaos Alpha Clothes adalah favorit saya. Sangat nyaman dan cocok
            untuk berbagai acara. Saya merekomendasikannya!"
          </p>
        </Card>
        <Card href="#" className="max-w-sm">
          <img className="w-[50%]" src={bintang} alt="" />
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Asti
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            "Totebag Alpha Clothes adalah pilihan terbaik saya. Desainnya chic,
            dan bahan yang digunakan sangat awet. Cocok untuk kegiatan
            sehari-hari!"
          </p>
        </Card>
        <Card href="#" className="max-w-sm">
          <img className="w-[50%]" src={bintang} alt="" />
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Puji
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            "Jaket Alpha Clothes luar biasa! Kualitasnya tak terbantahkan dan
            desainnya sangat stylish. Sangat nyaman dipakai sehari-hari."
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Review;
