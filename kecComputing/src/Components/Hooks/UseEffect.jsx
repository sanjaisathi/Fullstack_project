import { useEffect, useState } from "react";
import axios from 'axios'

var UseEffect = () => {
    /* var [text,setText] = useState("kongu")
     useEffect(()=>{
        console.log(text);
        setText("KEC")
     },[text])
     return(
         <section>
             <h1>UseEffect example</h1>
             <input type="text" placeholder="Enter your text" value={text} onChange={(e)=>{setText(e.target.value)}}/>
             <h2>Text types is {text}</h2>
         </section>
     )*/
    /*var [post, setPost] = useState([])
    var [user, setUser] = useState([])
    var [photos,setPhoto] = useState([])

    useEffect(() => {
        axios
            .get('https://jsonplaceholder.typicode.com/posts/')
            .then((res) => {
                setPost(res.data)
            })
            .catch((err) => console.log(err))

    }, [])

    useEffect(()=>{
        axios
          .get('https://jsonplaceholder.typicode.com/users/')
          .then((res) => {
            setUser(res.data)
        })
        .catch((err) => console.log(err))
    })


    return (
        <section>
            <h1>Fetching data from Json Placeholder API</h1>
            <h2>Posts are </h2>
            <ol>
            {post.map((data) => {
                    return <li key={data.id}>{data.title}</li>; 
                })}
            </ol>
            <h2>Users are</h2>
            <ol>
            {user.map((data) => {
                    return <li key={data.id}>{data.name}{data.email}</li>; 
                })}
            </ol>
        </section>
    )

}
*/

    const [image, setImage] = useState("");

    useEffect(() => {
      
      axios.get("https://jsonplaceholder.typicode.com/photos/1")
        .then(response => {
          setImage(response.data.url);
        })
        .catch(error => {
          console.error("Error fetching the image:", error);
        });
    }, []);
  
    return (
      <div>
        <h1>Dummy API Image</h1>
        {image ? (
          <img src={image} alt="Fetched from API" style={{ width: "300px" }} />
        ) : (
          <p>Loading image...</p>
        )}
      </div>
    );

}

export default UseEffect;