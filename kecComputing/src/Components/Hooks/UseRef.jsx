//Referencing
//mostly like use state
//hiearchy use state => use ref => use effect

import { useRef,useState,useEffect } from "react";

var UseRef = () =>{
    /*var [text,setText] = useState("");
    var prevText = useRef()
    useEffect(()=>{
        prevText.current = text;
    },[text])
    return(
        <section>
            <h1>This is an example of useRef</h1>
            <input type="text" value={text} onChange={(e)=> setText(e.target.value)}/>
            <h2>My Current render is {text}</h2>
            <h3>My Previous Render is {prevText.current}</h3>
           
        </section>
    )
    */

    //task
    
    const [number, setNumber] = useState(""); 
    const prevNumber = useRef();

    useEffect(() => {
        prevNumber.current = number; 
    }, [number]);

    return (
        <section>
            <h1>This is an example of useRef</h1>
            <input 
                type="number" 
                value={number} 
                onChange={(e) => {
                    const value = e.target.value;
                    setNumber(value ? parseInt(value) + 1 : "");                 }}
            />
            <h2>My Current Render is {number}</h2>
            <h3>My Previous Render is {prevNumber.current}</h3>
        </section>
    );
}


export default UseRef;