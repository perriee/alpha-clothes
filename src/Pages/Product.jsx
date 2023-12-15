import React from "react";
import korsa from "../../src/Components/Assets/gambar-fix/product-korsa.png";
import kaos from "../../src/Components/Assets/gambar-fix/product-kaos.png";
import jaket from "../../src/Components/Assets/gambar-fix/product-jaket.png";
import lanyard from "../../src/Components/Assets/gambar-fix/product-lanyard.png";
import totebag from "../../src/Components/Assets/gambar-fix/product-totebag.png";
import topi from "../../src/Components/Assets/gambar-fix/product-topi.png";
import mug from "../../src/Components/Assets/gambar-fix/product-mug.png";
import ganci from "../../src/Components/Assets/gambar-fix/product-ganci.png";
import jersey from "../../src/Components/Assets/gambar-fix/product-jersey.png";
import rompi from "../../src/Components/Assets/gambar-fix/product-rompi.png";
import id_card from "../../src/Components/Assets/gambar-fix/product-idcard.png";
import hoodie from "../../src/Components/Assets/gambar-fix/product-hoodie.png";
import Footer from "../Components/Footer/Footer";
import DetailsKorsa from "../Pages/DetailsKorsa";


const Product = () => {
  return (
    <div className="flex flex-col mt-10 px-32">
      <h1 className="text-5xl font-bold text-center mb-20">YUK BELANJA</h1>
      {/* CARD CONTAINER */}
      <div className="grid grid-cols-3 gap-20  ">
        {/* CARD ITEM */}
        <div className=" rounded-xl flex flex-col gap-3 items-center justify-center w-[30rem]">
          <img src={korsa} alt="" className="bg-[#D9D9D9] p-10 rounded-3xl" />
          <h2 className="text-2xl font-bold">KORSA</h2>
          <p className="text-xl font-semibold">135k-150k</p>
          <p className="text-center px-20">
            "Aksesori elegan untuk sentuhan gaya yang berkelas, memadukan fungsi
            dan desain yang menarik."
          </p>
          <button onClick={DetailsKorsa} className="w-[120px] h-[50px] outline-none border-2 rounded-lg font-medium text-white bg-[#B31312] border-slate-600" >
            DETAILS
          </button>
        </div>
        {/* CARD ITEM */}
        <div className=" rounded-xl flex flex-col gap-3 items-center justify-center w-[30rem]">
          <img src={kaos} alt="" className=" bg-[#D9D9D9] p-10 rounded-3xl" />
          <h2 className="text-2xl font-bold">KAOS</h2>
          <p className="text-xl font-semibold">60k-80k</p>
          <p className="text-center px-20">
            "Kaos berkualitas tinggi dengan gaya modern dan kenyamanan luar
            biasa untuk gaya sehari-hari Anda."
          </p>
          <button className="w-[120px] h-[50px] outline-none border-2 rounded-lg font-medium text-white bg-[#B31312] border-slate-600">
            DETAILS
          </button>
        </div>
        {/* CARD ITEM */}
        <div className=" rounded-xl flex flex-col gap-3 items-center justify-center w-[30rem]">
          <img src={jaket} alt="" className=" bg-[#D9D9D9] p-10 rounded-3xl" />
          <h2 className="text-2xl font-bold">JAKET</h2>
          <p className="text-xl font-semibold">190K-210K</p>
          <p className="text-center px-20">
            "Kaos berkualitas tinggi dengan gaya modern dan kenyamanan luar
            biasa untuk gaya sehari-hari Anda."
          </p>
          <button className="w-[120px] h-[50px] outline-none border-2 rounded-lg font-medium text-white bg-[#B31312] border-slate-600">
            DETAILS
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-20  mt-10">
        {/* CARD ITEM */}
        <div className=" rounded-xl flex flex-col gap-3 items-center justify-center w-[30rem]">
          <img
            src={lanyard}
            alt=""
            className=" bg-[#D9D9D9] p-10 rounded-3xl"
          />
          <h2 className="text-2xl font-bold">TALI LANYARD</h2>
          <p className="text-xl font-semibold">15k-25k</p>
          <p className="text-center px-20">
            "Lanyard fungsional dengan desain menarik, cocok untuk kebutuhan
            sehari-hari dengan gaya."
          </p>
          <button className="w-[120px] h-[50px] outline-none border-2 rounded-lg font-medium text-white bg-[#B31312] border-slate-600">
            DETAILS
          </button>
        </div>
        {/* CARD ITEM */}
        <div className=" rounded-xl flex flex-col gap-3 items-center justify-center w-[30rem]">
          <img
            src={totebag}
            alt=""
            className=" bg-[#D9D9D9] p-10 rounded-3xl"
          />
          <h2 className="text-2xl font-bold">TOTEBAG</h2>
          <p className="text-xl font-semibold">45k-55k</p>
          <p className="text-center px-20">
            Praktis, modis, dan tahan lama untuk menemani kegiatan sehari-hari
            Anda dengan gaya.
          </p>
          <button className="w-[120px] h-[50px] outline-none border-2 rounded-lg font-medium text-white bg-[#B31312] border-slate-600">
            DETAILS
          </button>
        </div>
        {/* CARD ITEM */}
        <div className=" rounded-xl flex flex-col gap-4 items-center justify-center w-[30rem]">
          <img src={topi} alt="" className=" bg-[#D9D9D9] p-10 rounded-3xl" />
          <h2 className="text-2xl font-bold">TOPI</h2>
          <p className="text-xl font-semibold">15k-25k</p>
          <p className="text-center px-20">
            Desain trendy, nyaman dipakai, menambah kesan stylish pada
            penampilan Anda.
          </p>
          <button className="w-[120px] h-[50px] outline-none border-2 rounded-lg font-medium text-white bg-[#B31312] border-slate-600">
            DETAILS
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-20  mt-10 ">
        {/* CARD ITEM */}
        <div className=" rounded-xl flex flex-col gap-3 items-center justify-center w-[30rem]">
          <img src={mug} alt="" className=" bg-[#D9D9D9] p-10 rounded-3xl" />
          <h2 className="text-2xl font-bold">MUG</h2>
          <p className="text-xl font-semibold">25k-35k</p>
          <p className="text-center px-20">
            Mug berkualitas tinggi dengan desain unik, cocok untuk menemani
            waktu istirahat Anda.
          </p>
          <button className="w-[120px] h-[50px] outline-none border-2 rounded-lg font-medium text-white bg-[#B31312] border-slate-600">
            DETAILS
          </button>
        </div>
        {/* CARD ITEM */}
        <div className=" rounded-xl flex flex-col gap-1 items-center justify-center w-[30rem]">
          <img src={ganci} alt="" className=" bg-[#D9D9D9] p-10 rounded-3xl" />
          <h2 className="text-2xl font-bold">GANTUNGAN KUNCI</h2>
          <p className="text-xl font-semibold">7k-13k</p>
          <p className="text-center px-20">
            "Fungsional dan stylish, memudahkan penggunaan sehari-hari dengan
            sentuhan modern."
          </p>
          <button className="w-[120px] h-[50px] outline-none border-2 rounded-lg font-medium text-white bg-[#B31312] border-slate-600">
            DETAILS
          </button>
        </div>
        {/* CARD ITEM */}
        <div className=" rounded-xl flex flex-col gap-3 items-center justify-center w-[30rem]">
          <img src={jersey} alt="" className=" bg-[#D9D9D9] p-10 rounded-3xl" />
          <h2 className="text-2xl font-bold">JERSEY</h2>
          <p className="text-xl font-semibold">150k-170k</p>
          <p className="text-center px-20">
            "Jersey berkualitas tinggi, nyaman dipakai, dan menampilkan gaya
            sporty yang keren."
          </p>
          <button className="w-[120px] h-[50px] outline-none border-2 rounded-lg font-medium text-white bg-[#B31312] border-slate-600">
            DETAILS
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-20  mt-10 ">
        {/* CARD ITEM */}
        <div className=" rounded-xl flex flex-col gap-3 items-center justify-center w-[30rem]">
          <img src={rompi} alt="" className=" bg-[#D9D9D9] p-10 rounded-3xl" />
          <h2 className="text-2xl font-bold">ROMPI</h2>
          <p className="text-xl font-semibold">130k-150k</p>
          <p className="text-center px-20">
            " Rompi fashion-forward, menambahkan lapisan gaya pada pakaian Anda
            sehari-hari."
          </p>
          <button className="w-[120px] h-[50px] outline-none border-2 rounded-lg font-medium text-white bg-[#B31312] border-slate-600">
            DETAILS
          </button>
        </div>
        {/* CARD ITEM */}
        <div className=" rounded-xl flex flex-col gap-3 items-center justify-center w-[30rem]">
          <img
            src={id_card}
            alt=""
            className=" bg-[#D9D9D9] p-10 rounded-3xl"
          />
          <h2 className="text-2xl font-bold">ID-CARD</h2>
          <p className="text-xl font-semibold">10k-15k</p>
          <p className="text-center px-20">
            "ID card yang fungsional dan stylish untuk keperluan identifikasi
            dengan desain yang menarik."
          </p>
          <button className="w-[120px] h-[50px] outline-none border-2 rounded-lg font-medium text-white bg-[#B31312] border-slate-600">
            DETAILS
          </button>
        </div>
        {/* CARD ITEM */}
        <div className=" rounded-xl flex flex-col gap-3 items-center justify-center w-[30rem]">
          <img src={hoodie} alt="" className=" bg-[#D9D9D9] p-10 rounded-3xl" />
          <h2 className="text-2xl font-bold">HOODIE</h2>
          <p className="text-xl font-semibold">155k-165k</p>
          <p className="text-center px-20">
            "Hoodie yang nyaman, modis, dan cocok untuk gaya santai maupun
            aktifitas outdoor."
          </p>
          <button className="w-[120px] h-[50px] outline-none border-2 rounded-lg font-medium text-white bg-[#B31312] border-slate-600">
            DETAILS
          </button>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Product;
