import React from "react";
import Rating from "./reting";

const Product = ({ product }) => {
  return (
    <div className="border rounded-lg p-4 shadow-lg bg-white transition-transform duration-300 hover:scale-95">
      <img
        className="h-64 w-full object-cover rounded-md"
        src={product.image}
        alt={product.name}
      />
      <div className="mt-3">
        <h2 className="text-lg font-semibold line-clamp-1">{product.name}</h2>
        <div className=" flex items-center justify-start gap-3">
          <p className="text-gray-600 font-medium">₹{product.price}</p>
          <p className=" flex gap-[1px] items-center">
            <Rating reting={product.ratings} />
          </p>
        </div>

        {/* Fast Delivery Indicator */}
        {product.fastDelivery ? (
          <p className="text-sm text-green-500 font-medium">
            🚀 Fast Delivery Available
          </p>
        ) : (
          <p className="text-sm text-red-500 font-medium">
            Fast Delivery Not Available
          </p>
        )}

        <button
          className="mt-3 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300 disabled:bg-gray-400"
          disabled={!product.isStock}
        >
          {product.isStock ? "Add To Cart" : "Sold Out"}
        </button>
      </div>
    </div>
  );
};

export default Product;
