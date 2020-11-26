import React,{useState} from 'react';

function InputSample(){
    const [inputs,setInputs] = useState({
        name:'',
        nickname:''
    })
    const {name,nickname} = inputs;

    const onChange=(e)=>{
        const{value,name}=e.target;
        setInputs({
            ...inputs,
            [name]:value
        })
    }
    const onReset=()=>{
        setInputs({
            name:'',
            nickname:'',
        })
    }
    return(
        <div>
            <input name='name' placeholder="이름" value={name} onChange={onChange}></input>
            <input name='nickname' placeholder="닉네임" value={nickname} onChange={onChange}></input>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {name} ({nickname})
            </div>
        </div>
    )
}

export default InputSample;