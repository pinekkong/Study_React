import React from 'react'; 

function Hello({color,name,pen,isSpecial}){
return <div style={{color}}>
    {isSpecial?<b>*</b>:null} 
    안녕하세요 {name} {pen}</div>
}

Hello.defaultProps={
    pen:'이름 없음'
}
export default Hello;