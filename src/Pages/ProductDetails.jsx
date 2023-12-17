import React from "react";

const ProductDetails = ({ product, onClose }) => {
  const onWhatsApp = () => {
    const phoneNumber = "6285713389415";
    const message = `Halo, saya ingin konsultasi terkait pemesanan ${product.title}.`;

    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappLink, "_blank");
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="bg-white p-8 rounded-md flex flex-col items-center">
        <img
          src={product.image}
          alt={product.title}
          className="mb-4 rounded-lg"
        />
        <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
        <p className="text-xl font-semibold mb-2">{product.price}</p>
        <p className="mb-4 rounded-lg ">{product.description}</p>
        {/* Add specific details for each product */}
        {product.id === 1 && (
          <div className="text-center">
            <p>Bahan : American, Nagata</p>
            <p>
              Spesifikasi dan Fasilitas :4 Bordir Jepang (Rapi Padat), Sudah
              Lengan Panjang, Non Variasi, Jahitan double, Kerah dengan kain
              keras, Bisa bawa sample, Free Konsultasi & design
            </p>
            <p>
              Charge : Tambah Titik Bordir +5k, Tambah size XL Keatas +10k,
              Lengan pendek 5k, Variasi Mayor Minor? Ask, Under 24 pcs? Ask
            </p>
          </div>
        )}
        {product.id === 2 && (
          <div>
            <p className="text-center">
              Spesifikasi dan Fasilitas : Cotton Combed 30s, Plastisol Doff /
              Glossy, Jahitan Rantai, Sablon 2 Sisi (A3) S&K, 4 Warna Tinta,
              Bisa bawa sample, Free Konsultasi
            </p>
            <p className="text-center">
              Charge : Lengan Panjang Biasa +7k, Lengan Panjang Rib +10k, Tambah
              Jumlah warna +2k, Tambah Size lebih dari XL + 5k (Kelipatan), Naik
              24s +5k (24 Pcs), Custom nama +5k, Under 24 pcs +5k, Diskon ? Ask
            </p>
          </div>
        )}
        {product.id === 3 && (
          <div className="text-center">
            <p>
              Bahan : Micro , Milky , Baby Kanvas Spesifikasi : , Bordir Jepang
              4 Titik (Rapi Padat) , Non Variasi , Jahitan double , Bisa bawa
              sample , Free Konsultasi & design , Kancing Snap Besi , Tali serut
              , Furing Asahi
            </p>
            <p>
              Charge :Tambah Titik Bordir +5k , Resleting +5k , Tambah size XL
              Keatas +10k , Variasi Mayor Minor? Ask , Under 24 pcs? Ask
            </p>
          </div>
        )}
        {product.id === 4 && (
          <div className="text-center">
            <p>
              Spesifikasi : Bahan Tali Tissue 2,5 cm , Panjang total 70 cm ,
              Full Print Full color , Opsional Stoper / Vinyl , Pengait / Buckle
              aluminium anti karat , Minimal order 24 pcs
            </p>
            <p>
              Charge : Under 24pcs ? ASK , Potongan 24pcs++ ? Ask , Nego Paket?
              Ask
            </p>
          </div>
        )}
        {product.id === 5 && (
          <div className="text-center">
            <p>Bahan : Kanvas, Blacu, American</p>
            <p>
              Spesifikasi : Minimal pembuatan 15 pcs, Pembayaran DP 50%,
              Pelunasan COD/Transfer/E-Wallet, Pengiriman luar daerah ongkir
              ditanggung customer, Mengisi Format yang diberikan Admin
            </p>
          </div>
        )}
        {product.id === 6 && (
          <div className="text-center">
            <p>Bahan : Ukuran sablon 13x7cm, Sablon DTF</p>
            <p>
              Spesifikasi :Harap chat terlebih dahulu untuk megetahui info
              stok produk, File berupa PNG, CDR (versi 2017), PDF (background
              wajib transparant), Jangan gunakan file SCREENSHOT, karna akan
              mempengaruhi hasil sablon, File yang diedit oleh kami silakan
              order iklan charge edit, Kami akan konfirmasi apablia terkendala
              pada file, apabila chat kami tidak di tanggapi atau late respon
              itu kana mempengaruhi antrian cetak dan proses.
            </p>
          </div>
        )}
        {product.id === 7 && (
          <div className="text-center">
            <p>Bahan : Keramik, desain tidak ada batasan warna</p>
            <p>
              Spesifikasi : Minimal pembuatan 12 pcs, Pembayaran DP 50%,
              Pelunasan COD/Transfer/E-Wallet, Pengiriman luar daerah ongkir
              ditanggung customer, Mengisi Format yang diberikan Admin
            </p>
          </div>
        )}
        {product.id === 8 && (
          <div className="text-center">
            <p>Bahan: Akrilik </p>
            <p>
              Spesifikasi : Akrilik Bening, Full Color UV Printing, Laser
              Cutting Rapi & Presisi, Minimal Order 12 Pcs
            </p>
            <p>
              Ukuran : Akrilik 1 sisi 16 cm², Akrilik 2 sisi 16 cm², Akrilik 1
              sisi 25 cm², Akrilik 2 sisi 25 cm², Pin Ganci 4,4 cm, Pin Ganci
              5,8 cm,
            </p>
          </div>
        )}
        {product.id === 9 && (
          <div className="text-center">
            <p>
              Spesifikasi : Dry-Fit Jarum / Milano, Full Color Printing,
              Sublimasi, Jahitan Rapi Kuat, Bisa bawa sample, Free Konsultasi,
              Free Design (S&K)
            </p>
            <p>
              Charge : Lengan Panjang +10k, Kerah polo Kancing +10k, Tambah Size
              lebih dari XL + 5k (Kelipatan), Under 24 pcs? Ask, Diskon ? Ask
            </p>
          </div>
        )}
        {product.id === 10 && (
          <div className="text-center">
            <p>Bahan : American , Rib Stok , Micro Taslan</p>
            <p>
              Spesifikasi dan Fasilitas : Bordir Jepang (Rapi Padat), Non
              Variasi, Kain Furing, Jahitan double, Kerah dengan kain keras,
              Bisa bawa sample, Free Konsultasi & design
            </p>
            <p>
              Charge : Tambah Titik Bordir +5k, Tambah size XL Keatas +10k,
              Variasi Mayor Minor? Ask, Under 24 pcs? Ask
            </p>
          </div>
        )}
        {product.id === 11 && (
          <div>
            <p>Spesifikasi : ID Card PVC 2 sisi dan Card Holder</p>
          </div>
        )}
        {product.id === 12 && (
          <div className="text-center">
            <p>
              Spesifikasi : Sablon 4 Warna Ukuran edang, 2 titik sablon, Non
              Variasi, Jahitan double, Bisa bawa sample, Free Konsultasi &
              design, Tali serut, Hoodie
            </p>
            <p>
              Charge : Tambah Titik Bordir +5k, Resleting +5k, Tambah size XL
              Keatas +10k, Warna sablon? Ask, Variasi Mayor Minor? Ask, Under 24
              pcs? Ask, Bahan lain? Ask
            </p>
          </div>
        )}

        <div className="flex justify-between gap-20 my-10">
          <button
            onClick={onClose}
            className="w-[120px] h-[50px] outline-none border-2 rounded-lg font-medium text-white bg-[#B31312] border-slate-600"
          >
            CLOSE
          </button>
          <button
            onClick={onWhatsApp}
            className="w-[120px] h-[50px] outline-none border-2 rounded-lg font-medium text-white bg-[#25D366] border-slate-600"
          >
            WHATSAPP
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
