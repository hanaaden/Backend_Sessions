import axios from "axios"
import { useEffect, useState } from "react"


function DemoApp() {
    interface User {
    id : number,
    body : string,
    topic : string
}
     const [name , setName] = useState<User[]>([])

     const fetcher = async ()=>{
    const res = await axios.get("http://localhost:5000/courses")
    setName(res.data)

     }

     useEffect(()=>{
        fetcher()
     },[])
  return (
    <div>
        <p>
          <ul>
            {name.map((note => (
                <li key={note.id}>
                    <p>body:  {note.body}</p>
                    <p>Topic : {note.topic}</p>
                </li>
            )))

            }
          </ul>
        </p>
    </div>
  )
}

export default DemoApp