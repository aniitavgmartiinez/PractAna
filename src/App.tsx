import { useNavigate } from 'react-router'
import Perro from './assets/perro.png'

export default function App() {

  const navigate=useNavigate()
  return (
    <div style={{backgroundImage:`url(${Perro})`}} className='flex  justify-center items-center w-scren h-screen bg-contain bg-no-repeat object-contain '  >
      <div className='divide-transparent flex justify-center items-center w-1/4 h-2/4 border border-pink-600 rounded-md shadow-md'>
      <p className='font-bold'>Bienvenido</p>
      <form className='flex flex-col justify-end'>
        <p className='font-bold pb-4 text-teal-700'>Nombre:</p>
        <input type="text" name="name" className='border border-pink-600 rounded-md shadow-md'/>
        <p className='font-bold py-4 text-teal-700'>Clave</p>
        <input type="password" name='' className='border border-pink-600 rounded-md shadow-md'/>
        <hr className='h-px my-4 '/>
        <button onClick={()=>navigate('/Carta')} className="bg-pink-600 hover:bg-pink-500 text-white font-bold py-2 px-4 rounded">
          Entrar
        </button>
      </form>
      <p>Lina Top Shine</p>
      </div>
    </div>
  )
}
