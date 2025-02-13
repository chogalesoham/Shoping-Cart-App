import Product from "../Componats/product";
import SideBar from "../Componats/side-bar";
import { CartState } from "../Context/context";

const Home = () => {
  const {
    state: { products },
  } = CartState();
  console.log(products);

  return (
    <div className=" flex items-center gap-4">
      <SideBar />
      <div className=" py-5 pr-3 grid w-[75%] h-[88vh] overflow-y-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 flex-wrap">
        {products.map((product) => (
          <Product product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
