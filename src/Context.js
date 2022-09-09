import { createContext , useState } from "react";

const GContext = createContext({});


const  randomImg = () => {
  return Math.floor(Math.random() * 5);
}




export const DataProvider = ({children}) => {
    const [Count , setCount ] = useState(0);
    const [roles , setRoles] = useState(true)
    const [idImg , setImgId] = useState('')
    const [Player , setPlayer] = useState(true)
    const randomIMG =  randomImg() 
    const [Message , setMessage] = useState('')

const WinFunction = (idImg , randomIMG) => {
  switch(idImg) {
    case 0 :if(randomIMG === 1 || randomIMG ===  4){
     setMessage('you win!!');
     setCount(Count + 1);
    }
         else if(randomIMG ===  3 || randomIMG ===  2){
          setMessage('you lose!!');
    }
    else if(randomIMG ===  0){
      setMessage("it's a tie !!");
    }
    break;
    case 1 :if(randomIMG == 2 || randomIMG == 4){
     setMessage('you win!!');
     setCount(Count + 1);
    }
         else if(randomIMG == 3 || randomIMG == 0){
          setMessage('you lose!!');
    }
    else if(randomIMG == 1){
      setMessage("it's a tie !!");
    }
    break;
    case 2 :if(randomIMG == 0 || randomIMG == 3){
     setMessage('you win!!');
     setCount(Count + 1);
    }
         else if(randomIMG == 1 || randomIMG == 4){
          setMessage('you lose!!');
    }
    else if(randomIMG == 2){
      setMessage("it's a tie !!");
    }
    break;
    case 3 :if(randomIMG === 1){
      setMessage('you win!!');
     setCount(Count + 1);
    }
         else if(randomIMG == 2 || randomIMG == 0){
          setMessage('you lose!!');
         } 
    else if(randomIMG == 3){
      setMessage("it's a tie !!");
    }
    break;
    case 4 :if(randomIMG == 0 || randomIMG == 2){
     setMessage('you win!!');
     setCount(Count + 1);
    }
         else if(randomIMG == 3 || randomIMG == 1){
          setMessage('you lose!!');
    }
    else if(randomIMG == 4){
      setMessage("it's a tie !!");
    }
    break;
  }
}
       return  (
    <GContext.Provider value={{Count , roles , setCount , setRoles , idImg , setImgId , randomIMG , Message , setMessage , Player , setPlayer , WinFunction , randomImg}} >
    {children}
     </GContext.Provider>
   ) 
}

export default GContext