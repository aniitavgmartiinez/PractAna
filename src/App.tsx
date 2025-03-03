export default function App() {
  return (
    <div className="flex  justify-center items-center bg-pink-500 text-pink-100 h-screen">
      <div
        id="Card"
        className="flex flex-col justify-end w-52 h-64 p-4 relative  bg-fuchsia-100 rounded-md shadow-lg shadow-lime-300 "
      >
        <div className="bg-blue-400 w-44 h-24 absolute -top-5 rounded-lg shadow-lg text-transparent">
          .
        </div>
        <h1 className="text-lime-600">Wolcome</h1>
        <p className="text-lime-800">
          Una plataforma digital que te pemitira interactuar con tu tienda de
          ropa
        </p>

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Button
        </button>
      </div>
    </div>
  );
}
