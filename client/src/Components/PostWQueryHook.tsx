import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import usePost from '../hooks/usePost';

interface Post {
    id: number,
    title: string,
    body: string,
}

const PostWQueryHook = () => {


    
    const {data: posts, error} = usePost();

  return (
    <>
    {error ? <p>{error.message}</p>: null}
        {posts?.map(item => (
            <li key={item.id}>{item.title}</li>
        ))}
    </>
  )
}

export default PostWQueryHook