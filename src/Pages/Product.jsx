import React, { useState } from "react";
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
import ProductDetails from "./ProductDetails";


const Product = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 1,
      image: korsa,
      title: "KORSA",
      price: "135k-150k",
      description:
        "Aksesori elegan untuk sentuhan gaya yang berkelas, memadukan fungsi dan desain yang menarik.",
    },
    {
      id: 2,
      image: kaos,
      title: "KAOS",
      price: "60k-80k",
      description:
        "Kaos berkualitas tinggi dengan gaya modern dan kenyamanan luar biasa untuk gaya sehari-hari Anda.",
    },
    {
      id: 3,
      image: jaket,
      title: "JAKET",
      price: "190k-210k",
      description:
        "Kaos berkualitas tinggi dengan gaya modern dan kenyamanan luar biasa untuk gaya sehari-hari Anda.",
    },
    {
      id: 4,
      image: lanyard,
      title: " TALI LANYARD",
      price: "15k-25k",
      description:
        "Lanyard fungsional dengan desain menarik, cocok untuk kebutuhan sehari-hari dengan gaya.",
    },
    {
      id: 5,
      image: totebag,
      title: "TOTEBAG",
      price: "45k-55k",
      description:
        "Praktis, modis, dan tahan lama untuk menemani kegiatan sehari-hari Anda dengan gaya."
    },
    {
      id: 6,
      image: topi,
      title: "TOPI",
      price: "15k-25k",
      description:
        "Desain trendy, nyaman dipakai, menambah kesan stylish pada penampilan Anda.",
    },
    {
      id: 7,
      image: mug,
      title: "MUG",
      price: "25k-35k",
      description:
        "Mug berkualitas tinggi dengan desain unik, cocok untuk menemani waktu istirahat Anda.",
    },
    {
      id: 8,
      image: ganci,
      title: "GANTUNGAN KUNCI",
      price: "7k-13k",
      description:
        "Fungsional dan stylish, memudahkan penggunaan sehari-hari dengan sentuhan modern.",
    },
    {
      id: 9,
      image: jersey,
      title: "JERSEY",
      price: "150k-170k",
      description:
        "Jersey berkualitas tinggi, nyaman dipakai, dan menampilkan gaya sporty yang keren.",
    },
    {
      id: 10,
      image: rompi,
      title: "ROMPI",
      price: "130k-150k",
      description:
        " Rompi fashion-forward, menambahkan lapisan gaya pada pakaian Anda sehari-hari.",
    },
    {
      id: 11,
      image: id_card,
      title: "ID CARD",
      price: "10k-15k",
      description:
        "ID card yang fungsional dan stylish untuk keperluan identifikasi dengan desain yang menarik.",
    },
    {
      id: 12,
      image: hoodie,
      title: "HOODIE",
      price: "155k-165k",
      description:
        "Hoodie yang nyaman, modis, dan cocok untuk gaya santai maupun aktifitas outdoor.",
    },
  ];

  const openDetails = (product) => {
    setSelectedProduct(product);
  };

  const closeDetails = () => {
    setSelectedProduct(null);
  };

  const proceedToWhatsApp = () => {
    // Implement logic to proceed to WhatsApp
    console.log("Proceeding to WhatsApp...");
    closeDetails();
  };

  return (
    <div className="flex flex-col mt-10 px-32">
      <h1 className="text-5xl font-bold text-center mb-20">YUK BELANJA</h1>
      <div className="grid grid-cols-3 gap-20">
        {products.map((product) => (
          <div
            key={product.id}
            className="rounded-xl flex flex-col gap-3 items-center justify-center w-[30rem]"
          >
            <img
              src={product.image}
              alt={product.title}
              className="bg-[#D9D9D9] p-10 rounded-3xl"
            />
            <h2 className="text-2xl font-bold">{product.title}</h2>
            <p className="text-xl font-semibold">{product.price}</p>
            <p className="text-center px-20">{product.description}</p>
            <button
              onClick={() => openDetails(product)}
              className="w-[120px] h-[50px] outline-none border-2 rounded-lg font-medium text-white bg-[#B31312] border-slate-600"
            >
              DETAILS
            </button>
          </div>
        ))}
      </div>
      {selectedProduct && (
        <ProductDetails
          product={selectedProduct}
          onClose={closeDetails}
          onWhatsApp={proceedToWhatsApp}
        />
      )}
      <Footer />
    </div>
  );
};

export default Product;
