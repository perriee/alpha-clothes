import React from "react";

const ProductDetails = ({ product, onClose }) => {
  const onWhatsApp = () => {
    const phoneNumber = '6285123456789'; // Ganti dengan nomor WhatsApp Anda
    const message = `Hello, I'm interested in your ${product.title}.`;

    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
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
        <p className="mb-4">{product.description}</p>
        {/* Add specific details for each product */}
        {product.id === 1 && (
          <div>
            <p>Specific detail 1 for KORSA</p>
            <p>Specific detail 2 for KORSA</p>
          </div>
        )}
        {product.id === 2 && (
          <div>
            <p>Specific detail 1 for KAOS</p>
            <p>Specific detail 2 for KAOS</p>
          </div>
        )}
        {product.id === 3 && (
          <div>
            <p>Specific detail 1 for JAKET</p>
            <p>Specific detail 2 for JAKET</p>
          </div>
        )}
        {product.id === 4 && (
          <div>
            <p>Specific detail 1 for LANYARD</p>
            <p>Specific detail 2 for LANYARD</p>
          </div>
        )}
        {product.id === 5 && (
          <div>
            <p>Specific detail 1 for TOTEBAG</p>
            <p>Specific detail 2 for TOTEBAG</p>
          </div>
        )}
        {product.id === 6 && (
          <div>
            <p>Specific detail 1 for TOPI</p>
            <p>Specific detail 2 for TOPI</p>
          </div>
        )}
        {product.id === 7 && (
          <div>
            <p>Specific detail 1 for MUG</p>
            <p>Specific detail 2 for MUG</p>
          </div>
        )}
        {product.id === 8 && (
          <div>
            <p>Specific detail 1 for GANCI</p>
            <p>Specific detail 2 for GANCI</p>
          </div>
        )}
        {product.id === 9 && (
          <div>
            <p>Specific detail 1 for JERSEY</p>
            <p>Specific detail 2 for JERSEY</p>
          </div>
        )}
        {product.id === 10 && (
          <div>
            <p>Specific detail 1 for ROMPI</p>
            <p>Specific detail 2 for ROMPI</p>
          </div>
        )}
        {product.id === 11 && (
          <div>
            <p>Specific detail 1 for ID CARD</p>
            <p>Specific detail 2 for ID CARD</p>
          </div>
        )}
        {product.id === 12 && (
          <div>
            <p>Specific detail 1 for HOODIE</p>
            <p>Specific detail 2 for HOODIE</p>
          </div>
        )}

        <div className="flex justify-between">
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
