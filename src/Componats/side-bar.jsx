import Reting from "./reting";
import { CartState } from "../Context/context";

const SideBar = () => {
  const {
    prodcutdState: { byRating, byFastDelivery, byStock, sort },
    prodcutDispatch,
  } = CartState();

  return (
    <div className="w-[25%] bg-gray-900 h-[83vh] text-white p-6 m-6 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Filter Products</h1>
      <hr />
      <div className="space-y-3 my-4">
        <div className="flex items-center gap-2">
          <input
            onChange={() =>
              prodcutDispatch({
                type: "SORT_BY_PRICE",
                payload: "lowToHigh",
              })
            }
            checked={sort === "lowToHigh"}
            type="radio"
            name="sort"
            className="accent-blue-500"
          />
          <label className="cursor-pointer">Ascending</label>
        </div>

        <div className="flex items-center gap-2">
          <input
            onChange={() =>
              prodcutDispatch({
                type: "SORT_BY_PRICE",
                payload: "highToLow",
              })
            }
            checked={sort === "highToLow"}
            type="radio"
            name="sort"
            className="accent-blue-500"
          />
          <label className="cursor-pointer">Descending</label>
        </div>

        <div className="flex items-center gap-2">
          <input
            onChange={() =>
              prodcutDispatch({
                type: "FILTER_BY_STOCK",
              })
            }
            checked={byStock}
            type="checkbox"
            className="accent-blue-500"
          />
          <label className="cursor-pointer">Include Out of Stock</label>
        </div>

        <div className="flex items-center gap-2">
          <input
            onChange={() =>
              prodcutDispatch({
                type: "FILTER_BY_DELIVERY",
              })
            }
            checked={byFastDelivery}
            type="checkbox"
            className="accent-blue-500"
          />
          <label className="cursor-pointer">Fast Delivery Only</label>
        </div>

        <div className="mt-4 flex items-center gap-2">
          <span className="text-lg">Rating : </span>{" "}
          <Reting
            reting={byRating}
            onClick={(i) =>
              prodcutDispatch({
                type: "FILTER_BY_RATING",
                payload: i + 1,
              })
            }
          />
        </div>

        <button
          onClick={() =>
            prodcutDispatch({
              type: "CLEAR_FILTERS",
            })
          }
          className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
        >
          Clear Filters
        </button>
      </div>
    </div>
  );
};

export default SideBar;
