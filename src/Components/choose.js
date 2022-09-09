import React , {useState , useEffect , useContext , useCallback} from 'react'
import Lizard from '../images/icon-lizard.svg'
import paper from '../images/icon-paper.svg'
import rock from '../images/icon-rock.svg'
import scissors from '../images/icon-scissors.svg'
import spock from '../images/icon-spock.svg'
import '../globalStyle.css'
import GContext from '../Context'




const ArrImg = [{
    id:'img-1',
    image:scissors,
    border: 'hsl(39, 89%, 49%)'
    
},
{
    id:'img-2',
    image:paper,
    border: 'hsl(230, 89%, 65%)' 
} 
, 
{
    id:'img-3',
    image:rock,
    border: 'hsl(349, 70%, 56%)'
}
, {
    id:'img-4',
    image:Lizard,
    border:'hsl(261, 72%, 63%)'
    }

 , {
    id:'img-5',
    image:spock,
    border:'hsl(189, 58%, 57%)'
} ] 

const Choose = ({toggle}) => {

  const {Count , idImg , setImgId , setPlayer , randomIMG,setMessage,  Message  , Player , WinFunction ,setRoles } = useContext(GContext)



const  randomImg = () => {
  return Math.floor(Math.random() * 5);
}



useEffect(()=> {
   WinFunction(idImg , 1)

},[Player])


  return (
    <>
   { (Player) ? 
    <div className=" play     px-2  d-flex  flex-wrap align-items-center justify-content-center     ">
    {
      ArrImg.map((item , index) => {
        const {image, id , border} = item;
     return <div onClick={()=>{ setImgId(index)
                              setPlayer(false)
                            } } style={{borderColor:`${border}`}} className='imgAnimate bg-body d-flex align-items-center justify-content-center p-1' id='img-1' id={id} key={index}> <img src={image}    /></div>
      }) 
    }
    </div>
     : <div className="picked flex-fill py-3   col-11 col-md-5 d-flex flex-column justify-content-evenly">
    <div className="  d-flex align-itmes-center justify-content-between  ">
    <div className="  w-50 d-flex  flex-column align-items-center justify-content-center">
    <article className=" bg-body rounded-cercle  d-flex  flex-cloumn align-items-center justify-content-center p-1 mb-3" style={{borderColor:`${ArrImg[idImg].border}`}} >
      <img src={ArrImg[idImg].image} alt="" />
    
    </article>
      <h1 className='fs-6 fw-bolder text-uppercase    ' >your picked</h1>
    </div>
     <div className=" w-50 d-flex  flex-column align-items-center justify-content-center">
    <article className=" bg-body d-flex flex-cloumn  align-items-center justify-content-center p-1 mb-3"  style={{borderColor:`${ArrImg[1].border}`}}>
     <img src={ArrImg[1].image} alt="" />
    
    </article>
     <h1 className=' w-100  fs-6 fw-bolder  text-uppercase text-center  '>the house picked</h1>
    </div>
    
    </div>
    <div className='w-100  d-flex flex-column align-items-center '>
    <p className='text-uppercase '>{Message} </p>
    <button onClick={()=>{ setPlayer(true) 
      setImgId('')
    }} type="button " className=" col-7 col-md-5 btn btn-light text-black-50 px-3  py-2 text-uppercase  lh-30 ">play again</button>
    </div>
     
     </div>}
    <div className='align-self-md-end px-5 '>
    <button onClick={() => setRoles(true)} type="button"  className="btn border   btn-outline-secondary  text-white border-white rounded-3 text-center text-uppercase lh-30  px-5 py-2">RULES</button>
    </div>
    </>
  )
}

export default Choose