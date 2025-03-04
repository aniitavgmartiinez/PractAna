import { useNavigate } from "react-router";

export default function Carta() {
  const navigate = useNavigate();

  return (
    <div className="flex  justify-center items-center bg-pink-200 h-screen">
      <div
        id="Card"
        className="flex flex-col justify-end w-52 h-64 p-4 relative  bg-yellow-200 rounded-md shadow-lg shadow-lime-300 "
      >
        <div className="bg-pink-300 border border-pink-600 w-44 h-24 absolute -top-5 rounded-lg shadow-lg text-transparent">
          .
        </div>
        <h1 className="text-lime-900 text-xl font-bold">Bienvenido</h1>
        <p className="text-black">
          Una plataforma digital de tu tienda de ropa
        </p>
        <hr className="h-px my-4 bg-yellow-400/50 border-0 dark:bg-gray-700 " />
        <button
          onClick={() => navigate("/")}
          className="bg-pink-500 hover:bg-pink-400 text-white font-bold py-2 px-4 rounded"
        >
          Button
        </button>
      </div>
    </div>
  );
}