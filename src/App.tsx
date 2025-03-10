import { useNavigate } from 'react-router'
import Perro from './assets/perro.png'

export default function App() {

  const navigate=useNavigate()
  return (
    <div style={{backgroundImage:`url(${Perro})`}} className='w-scren h-screen bg-contain bg-no-repeat object-contain '  >
      <div className='divide-transparent flex justify-center items-center w-auto h-auto border-2 border-pink-600 rounded-md shadow-md'>
      <form className='flex flex-col justify-end p-10'>
      <p className='font-bold text-lg text-center bg-gradient-to-br from-lime-400 via-teal-300 to-pink-500 text-white p-2 border-transparent rounded-lg'>Bienvenido a<br/>LINA TOPSHINE</p>
        <p className='font-bold pb-4 pt-8 text-teal-700'>Nombre de Usuario:</p>
        <input type="text" name="name" className='p-2 border-2 border-pink-600 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-lime-600 focus:border-transparent ...">
  '/>
        <p className=' font-bold py-4 text-teal-700'>Contraseña:</p>
        <input type="password" name='' className='p-2 border-2 border-pink-600 rounded-md shadow-md  focus:outline-none focus:ring-2 focus:ring-lime-600 focus:border-transparent ...">
  ">
  '/>
        <hr className='h-px my-4 '/>
        <button onClick={()=>navigate('/Carta')} className="bg-pink-600 hover:bg-pink-500 text-white font-bold py-2 px-4 rounded">
          Entrar
        </button>
      </form>
      </div>
    </div>
  )
}
