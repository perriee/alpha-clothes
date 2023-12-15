import React from "react";
import about_kaos from "../../src/Components/Assets/gambar-fix/about-kaos.png";
import about_lanyard from "../../src/Components/Assets/gambar-fix/about-lanyard.png";
import about_review from "../../src/Components/Assets/gambar-fix/about-review.png";
import about_korsa from '../../src/Components/Assets/gambar-fix/about-korsa.png'

const About = () => {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900 mt-20">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-2xl xl:text-4xl dark:text-white">
              Specialis Pembuatan Clothing & Merchandise
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
              Selamat datang di [Nama Usaha Pembuatan Clothing & Merchandise],
              tempat di mana kreativitas bertemu dengan kualitas tinggi dalam
              pembuatan pakaian dan merchandise yang memukau. Sebagai spesialis
              dalam industri ini, kami memadukan keahlian teknis dengan inovasi
              desain untuk menghasilkan produk yang tidak hanya menarik secara
              visual tetapi juga mencerminkan jati diri merek Anda.
            </p>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src={about_kaos} alt="..." />
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-900 mt-20">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-8 lg:py-16 lg:grid-cols-12">
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex ">
            <img src={about_lanyard} alt="..." />
          </div>
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-4xl dark:text-white">
              Inovasi Dalam Desain
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl ">
              Kami menonjolkan inovasi dalam desain. Dari konsep yang menarik
              hingga pengaplikasian teknik terkini, kami bertekad untuk
              menciptakan pakaian yang tidak hanya fashion-forward tetapi juga
              merefleksikan karakter dan kepribadian Anda.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-900 mt-20">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-2xl xl:text-4xl dark:text-white">
              Pelayanan Pelanggan yang Luar Biasa
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl ">
              Kami tidak hanya menjual pakaian; kami membangun hubungan.
              Pelayanan pelanggan yang prima adalah inti dari bisnis kami. Tim
              Alpha Clothes siap membantu Anda dengan saran ahli, pengaturan
              pesanan khusus, dan memastikan pengalaman berbelanja Anda dengan
              kami adalah yang terbaik.
            </p>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src={about_review} alt="..." />
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-900 mt-20">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-8 lg:py-16 lg:grid-cols-12">
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src={about_korsa} alt="..." />
          </div>
          <div className="mr-auto place-self-center lg:col-span-7 ">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-4xl dark:text-white">
              Komitmen pada Kesenian dan Kreativitas
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Kami mempersembahkan koleksi yang tidak hanya mode, tetapi juga
              seni. Dengan mendukung para desainer lokal dan menggali
              kreativitas dalam setiap detail, Alpha Clothes memberikan
              penghormatan pada seni fashion dan karya kreatif.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
