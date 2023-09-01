"use client"

import Post from "../../components/Post"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { PostType } from "../../types/Posts"



//Fetch All posts
const fetchDetails = async (slug: string) => {
  const response = await axios.get(`/api/posts/${slug}`)
  return response.data
}

export default function PostDetail(url: URL) {
  const { data, isLoading } = useQuery<PostType>({
    queryKey: ["detail-post"],
    queryFn: () => fetchDetails(url.params.slug),
  })
  if (isLoading) return "Loading"
  return (
    <div>
 
    </div>
  )
}