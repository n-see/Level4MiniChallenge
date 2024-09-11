import axios from 'axios'
import React, { useEffect, useState } from 'react'

interface Post {
    id: number,
    title: string,
    body: string,
}

const Post = () => {

    const [post, setPost] = useState<Post []>([])
    const [error, setError] = useState("")

    const fetchData = () => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(res => setPost(res.data))
        .catch(error => setError(error))
    }

    useEffect(() => {
        fetchData();
    }, [])
    


  return (
    <>
        {post.map(item => (
            <li key={item.id}>{item.title}</li>
        ))}
    </>
  )
}

export default Post