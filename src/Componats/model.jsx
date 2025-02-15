import { FaTrashAlt } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { CartState } from "../Context/context";
import { Link } from "react-router-dom";

const Model = ({ model, setModel }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  return (
    <div className=" absolute top-12 right-0  p-5 min-w-3xs bg-white z-10 rounded-lg shadow">
      <span
        onClick={() => setModel(false)}
        className="bg-black absolute top-2 right-2 p-1 rounded-lg cursor-pointer hover:bg-gray-800 transition"
      >
        <RxCross2 className="text-xl text-white" />
      </span>

      {cart.length > 0 ? (
        <>
          {cart.map((c) => (
            <div
              key={c.id}
              className=" flex items-center justify-between shadow m-2 p-3 gap-2 rounded-lg "
            >
              <img
                className=" h-10 w-10 object-cover rounded-full"
                src={c.image}
              />
              <div>
                <p className=" text-md line-clamp-1">{c.name}</p>
                <p className=" text-green-500 font-bold">₹{c.price}</p>
              </div>
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
          <Link to="/cart">
            <button
              onClick={() => setModel(!model)}
              className="mt-3 w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition duration-300 disabled:bg-gray-400"
            >
              Go To Carts
            </button>
          </Link>
        </>
      ) : (
        <h2>Cart Is Empmty !</h2>
      )}
    </div>
  );
};

export default Model;
