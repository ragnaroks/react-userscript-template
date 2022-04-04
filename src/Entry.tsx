import { useState } from "react";

function Entry() {
  const [show,showSetter] = useState<boolean>(false);

  return <div>
    <div style={{width:'4rem',height:'4rem',backgroundColor:'#1bc5bd',position:'fixed',right:'2rem',bottom:'2rem'}} onClick={function(){ showSetter(true) }} />
    {show && <div style={{width:'10rem',height:'10rem',backgroundColor:'#1bc5bd',margin:'0 auto'}} onClick={()=>{ showSetter(false) }} />}
  </div>;
}

export default Entry;
