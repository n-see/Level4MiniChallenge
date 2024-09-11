import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

interface Post {
    id: number,
    title: string,
    body: string,
}

const PostWQuery = () => {


    const fetchData = () => 
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.data)
        .catch(error => error)
    
    const {data: posts, error} = useQuery<Post[], Error>({
        queryKey:['posts'],
        queryFn: fetchData
    })

    useEffect(() => {
        fetchData();
    }, [])
    


  return (
    <>
    {error ? <p>{error.message}</p>: null}
        {posts?.map(item => (
            <li key={item.id}>{item.title}</li>
        ))}
    </>
  )
}

export default PostWQuery