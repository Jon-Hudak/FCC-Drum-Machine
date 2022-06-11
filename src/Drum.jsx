import { useEffect } from "react";

export default function Drum({
  letter,
  id,
  executeKey,
  sound,
  keyPressed,
  handleDrum,
  setKeyPressed,
  setDrumId
}) {
  useEffect(()=> {
    if (keyPressed === executeKey) {
      plays();
      
    }
      
      
    })
  
 const  plays= ()=>{
  let audio=document.getElementById(letter);
  
  audio.currentTime = 0;
    audio.play();
    setDrumId(id)
    
  setKeyPressed("");
}
  return (
    <>
      
      <div onClick={()=>plays()} id={id} className="border drum-pad">
        {letter} <audio className="clip" id={letter} src={sound}></audio>
      </div>
    </>
  );
}
