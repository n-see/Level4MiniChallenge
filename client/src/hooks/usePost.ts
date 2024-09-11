import { useQuery } from "@tanstack/react-query"
import axios from "axios"

interface Post {
    id: number,
    title: string,
    body: string,
}

const usePost = () => {
    const fetchData = () => 
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.data)
        .catch(error => error)
    return useQuery<Post[], Error>({
        queryKey:['posts'],
        queryFn: fetchData
    })
}

export default usePost