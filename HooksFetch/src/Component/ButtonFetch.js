import React, {useEffect,useState} from 'react'
import axios from 'axios'
function ButtonFetch() {
    const [posts, setPost] = useState({})
    const [id, setId] = useState(1)
    const [idb, setIdb] = useState(1)
    const click = () => {
        setIdb(id)
    }
    useEffect(()=> {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idb}`)
        .then(res => {
            console.log(res)
            setPost(res.data)

        })
        .catch(err => {
            console.log(err)
        })
    },[idb])
  return (
    <div>
        <input type='text' value={id} onChange={e => setId(e.target.value)}/>
        <button type='button' onClick={click}>Fetch Data</button>
        <h1> {posts.title}</h1>
    </div>
  )
}

export default ButtonFetch
