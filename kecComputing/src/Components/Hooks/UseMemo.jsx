import { useState } from "react"

var slowFunction = (number) =>{
    for(let i=0;i<10000000000;i++){}
    return number * 2
}


var UseMemo=()=>{

    var[num,setNum]=useState(0)
    var[theme,setTheme]=useState(true)

    var darklight = {
    backgroundColor: theme?"black":"white",
    color:theme ?"white":"black"
   }

   var doublingANumber = () =>{
      return slowFunction(num)
   }

    return(
        <section>
            <h1>
                This is UseMemo Component
            </h1>
            <input type="number" value={num} onChange={(e)=> setNum(e.target.value)}/>
            <button onClick={()=>setTheme(theme = !theme)}>Toggle</button>
            <h2 style={darklight}>{doublingANumber()}</h2>
        </section>
    )
}

export default UseMemo;