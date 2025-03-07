import { useNavigate } from 'react-router'
import Perro from './assets/perro.png'

export default function App() {

  const navigate=useNavigate()
  return (
    <div style={{backgroundImage:`url(${Perro})`}} className='w-scren h-screen bg-contain bg-no-repeat object-contain '  >
      <div className='bg-pink-300 w-30% h-50% absolute right-10 top-10 border border-amber-700 rounded-md shadow-md'>
      <form className='p-50 m-50'>
        <p className='font-bold'>Nombre:</p>
        <input type="text" name="name" />
        <p className='font-bold'>Clave</p>
        <input type="password" value="Submit"/>
        <hr className=''/>
        <button onClick={()=>navigate('/Carta')} className="bg-pink-500 hover:bg-pink-400 text-white font-bold py-2 px-4 rounded">
          Entrar
        </button>
      </form>
      </div>
    </div>
  )
}
