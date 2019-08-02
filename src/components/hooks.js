import React ,{useState} from 'react';


const InputElement =()=>{
const [inputText,setInputText] = useState("");
const [historyList,setHistoryList] = useState([]);

    return(
        <div>
        <input type="text"  onChange={(e)=>{
         setInputText(e.target.value);
         setHistoryList([...historyList,e.target.value])
        }} placeholder= "enter input" /><br />
        {inputText}
        <ul >
        {historyList.map((res)=>{
           return  <div>
            {res}
            </div>
        })}
        </ul>
     
    </div>

    ) 
     
}
export default InputElement;