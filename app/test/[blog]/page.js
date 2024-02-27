import { notFound } from 'next/navigation'
import React from 'react'

const BlogPage = ({searchParams}) => {
  if(searchParams.error === "true"){
    throw new Error("This is an error")
  }
  if(searchParams.test === "true"){
    notFound()
  }
  return (
    <div>BlogPage</div>
  )
}

export default BlogPage