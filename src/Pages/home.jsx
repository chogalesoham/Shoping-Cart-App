import Product from "../Componats/product";
import SideBar from "../Componats/side-bar";
import { CartState } from "../Context/context";

const Home = () => {
  const {
    state: { products },
    prodcutdState: { byRating, byFastDelivery, byStock, sort, searchQuery },
  } = CartState();

  const transformProducts = () => {
    let sortedProducts = products;

    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }
    if (!byStock) {
      sortedProducts = sortedProducts.filter((prod) => prod.isStock);
    }
    if (byFastDelivery) {
      sortedProducts = sortedProducts.filter((prod) => prod.fastDelivery);
    }

    if (byRating) {
      sortedProducts = sortedProducts.filter(
        (prod) => prod.ratings >= byRating
      );
    }

    if (searchQuery) {
      sortedProducts = sortedProducts.filter((prod) =>
        prod.name.toLowerCase().includes(searchQuery)
      );
    }

    return sortedProducts;
  };

  return (
    <div className="flex items-center gap-4">
      <SideBar />
      <div className="py-5 pr-3 w-[75%] h-[88vh] overflow-y-auto">
        {transformProducts().length === 0 ? (
          <div className="flex items-center justify-center w-full h-full">
            <h1 className="text-3xl font-bold text-gray-700 bg-gray-100 px-6 py-3 rounded-lg shadow-md">
              🚫 No Products Found!
            </h1>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 flex-wrap">
            {transformProducts().map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
