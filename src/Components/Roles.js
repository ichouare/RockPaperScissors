import React , {useContext} from 'react'
import '../globalStyle.css'
import Roles from '../images/image-rules-bonus.svg'
import Close from '../images/icon-close.svg'
import GContext from '../Context'

const Role = () => {
 
 const {setRoles} = useContext(GContext)

  return (
    <section className='roles bg-body d-flex flex-column align-items-center justify-content-evenly'>
    <h2 className="t text-uppercase ">rules</h2>
    <img src={Roles} alt='roles' />
    <button type="button" className="btn"  onClick={()=> setRoles(false)}>
    <img src={Close} alt="close"  />
    </button>
    
    </section >
  )
}

export default Role