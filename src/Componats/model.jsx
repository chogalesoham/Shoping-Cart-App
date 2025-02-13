import { RxCross2 } from "react-icons/rx";

const Model = ({ model, setModel }) => {
  return (
    <div className=" absolute top-12 right-0  p-5 min-w-3xs bg-white z-10 rounded-lg shadow">
      <span
        onClick={() => setModel(!model)}
        className=" bg-black absolute top-2 right-2 p-1 rounded-lg cursor-pointer"
      >
        <RxCross2 className=" text-xl text-white" />
      </span>
      <h2>Model Is Empmty !</h2>
    </div>
  );
};

export default Model;
