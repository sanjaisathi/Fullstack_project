import React from "react";
import './css/Form.css';
import { useState } from "react";

const Form = () => {
    const [formdata,setFormData]=useState({
        name:"",
        email:"",
        dob:""
    })

    const handleChange=((e)=>{
        const{name,value}=e.target;
        setFormData({
            ...formdata,
            [name]:value
        })
    })

    const handleSubmit = async(e)=>{
        e.preventDefault();
        try{
            const response  = await fetch('http://localhost:9001/form',{
                method: 'POST',
                headers:{
                    'Content-Type' : 'application/json'
                },
                body:JSON.stringify(formdata)
            })
            const result = await response.json()
        }catch(err){
            console.log(err);
        }
    }
    return (
        <footer className="footer">
            <div>
                <h2 style={{ textAlign: 'center', color: '', fontSize: '24px', marginBottom: '20px' }}>
                    "The future depends on what we do in the present."
                </h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input 
                            type="text" 
                            name="name" 
                            id="name"
                            value={formdata.name}
                            onChange={handleChange} 
                            placeholder="Enter your name" 
                            required 
                        />
                    </label>
                    <label>
                        EMAIL
                        <input 
                            type="text" 
                            name="email" 
                            id="email" 
                            value={formdata.email}
                            onChange={handleChange}
                            placeholder="Enter your Email" 
                            required 
                        />
                    </label>
                    <label>
                        Date of Birth
                        <input 
                            type="date" 
                            name="dob" 
                            id="dob" 
                            value={formdata.dob}
                            onChange={handleChange}
                            placeholder="Enter your DOB" 
                            required 
                        />
                    </label>
                    <button type="submit">Submit</button>
                </form>
                <p style={{ textAlign: 'center', marginTop: '20px', fontSize: '16px', color: '#555' }}>
                    
                </p>
            </div>
        </footer>
    );
};

export default Form;
