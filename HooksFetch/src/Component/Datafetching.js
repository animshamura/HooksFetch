import React,{useState,useEffect} from 'react'
import axios from 'axios'
function Datafetching() {
    const [posts, setPosts] = useState([])
    useEffect(()=> {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            console.log(res)
            setPosts(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    },[])
  return (
    <div>
      <ui>
        {
            posts.map(post => <li key={post.id}>{post.title}</li>)
        }
      </ui>
    </div>
  )
}

export default Datafetching
