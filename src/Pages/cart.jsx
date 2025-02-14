import { FaTrashAlt } from "react-icons/fa";
import { CartState } from "../Context/context";
import { useEffect, useState } from "react";
import Rating from "../Componats/reting";
const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  return (
    <div className=" flex justify-between">
      <div className=" container p-10">
        <h2 className=" text-4xl font-bold text-center my-5">Your All Carts</h2>
        {cart.map((c) => (
          <div
            key={c.id}
            className=" flex items-center justify-between shadow m-2 p-3 gap-2 rounded-lg border border-gray-300   "
          >
            <img
              className=" h-15 w-15 object-cover rounded-full"
              src={c.image}
            />
            <div>
              <p className=" text-md line-clamp-1">{c.name}</p>
              <p className=" text-green-500 font-bold">₹{c.price}</p>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <span className="text-lg">Rating : </span>{" "}
              <Rating reting={c.ratings} />
            </div>
            <select
              onChange={(e) =>
                dispatch({
                  type: "CHANGE_CART_QTY",
                  payload: {
                    id: c.id,
                    qty: e.target.value,
                  },
                })
              }
              value={c.qty}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {[...Array(c.isStock).keys()].map((x, indx) => (
                <option key={indx} value={x + 1} className="text-gray-700 p-1">
                  {x + 1}
                </option>
              ))}
            </select>

            <FaTrashAlt
              className=" cursor-pointer text-white bg-red-600 rounded-lg p-[5px] text-2xl "
              onClick={() => {
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: c,
                });
              }}
            />
          </div>
        ))}
      </div>

      <div className="w-[25%] bg-gray-900 h-[83vh] text-white p-6 m-6 rounded-lg shadow-lg flex flex-col justify-between">
        <div>
          <h1 className="text-2xl font-bold mb-4">
            Subtotal ({cart.length}) Items
          </h1>
          <hr />
        </div>
        <div className=" h-full flex flex-col items-start justify-start py-3">
          {cart.map((c, index) => (
            <div
              key={index}
              className="flex justify-between gap-4 p-4 border-b border-gray-300"
            >
              <span className="text-white font-medium line-clamp-1">
                {c.name}
              </span>
              <span className="text-green-500 font-semibold">₹{c.price}</span>
            </div>
          ))}
        </div>

        <div className="text-2xl font-bold mb-4">
          <hr />
          <h2 className=" mt-2">Total: ₹{total && total.toFixed(2)}</h2>
          <button className=" text-lg mt-4 w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition">
            Proceed To Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
