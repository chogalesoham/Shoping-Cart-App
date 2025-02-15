import { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import Model from "./model";
import { Link } from "react-router-dom";
import { CartState } from "../Context/context";
// import { Link } from "react-router-dom";

const Header = () => {
  const [model, setModel] = useState(false);
  const {
    state: { cart },
    prodcutDispatch,
  } = CartState();
  return (
    <nav className="  bg-amber-50 shadow-lg py-4 px-4">
      <div className=" container mx-auto flex items-center justify-between relative">
        <Link to="/">
          <h1 className=" font-bold text-2xl underline">Shopin Cart</h1>
        </Link>
        <input
          onChange={(e) =>
            prodcutDispatch({
              type: "FILTER_BY_SEARCH",
              payload: e.target.value,
            })
          }
          className=" bg-white border border-gray-400 py-2 px-3 min-w-82 rounded-lg"
          type="text"
          placeholder="Search Your Products"
        />

        <div
          onClick={() => setModel(!model)}
          className=" cursor-pointer flex w-14  bg-amber-600 text-white items-center justify-center gap-1 py-2 px-3 rounded-lg text-xl font-bold"
        >
          <FaCartShopping />
          <p>{cart.length}</p>
        </div>
        {model && <Model model={model} setModel={setModel} />}
      </div>
    </nav>
  );
};

export default Header;
