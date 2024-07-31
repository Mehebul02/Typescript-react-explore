
import './App.css'
import User from './component/User'

function App() {
  

  return (
    <>
      <h1 className='user' style={{textAlign:'center',fontSize:'45px'}}>Use Menagement</h1>
      <User name='Mehebul Alif'father='Md. Ator Ali' mother='Mst.Supura Khatun' age={21} isRegister={true}/>
    </>
  )
}

export default App
