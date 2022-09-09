import { useContext} from 'react'
import './globalStyle.css'
import './App.css'
import Logo from './images/logo-bonus.svg'
import Choose from './Components/choose'
import Roles from './Components/Roles'
import GContext from './Context'

function App() {
     
const {Count , roles} = useContext(GContext)
  return (
    <div className="App d-flex flex-column align-items-center justify-content-between py-3 text-white">
   
      <header className="col-10 col-md-5 px-2 py-3 border border-light  rounded-2   d-flex align-items-center justify-content-between ">
      <img src={Logo}  className='img-fluid'/>
      <div className="score text-dark d-flex flex-column align-items-center justify-content-center  bg-white px-3 py-2 rounded-1">
      <p className='m-0 p-0 text-uppercase  '>score</p>
      <span className="d-block m-0 p-0   d-flex  align-items-center justify-content-center   ">{Count}</span>
      </div>
      </header>
      {roles && <Roles  />}
      <Choose  />

    </div>
  );
}

export default App;
