import Link from "next/link";
import data from "../../../../public/data.json"

export default function page({ params }) {
  const blogId = parseInt(params.blogId); 
  const blogData = data[blogId - 1];

  return (
    <div className='justify-center items-center h-screen'>
      <h1><strong>{blogData.title}</strong></h1>
      <p>{blogData.description}</p>
      <br></br>
      <p>by {blogData.author}</p>
      <br></br>
      <Link href="/blogs" className="text-blue-800">Go Back</Link>
    </div>
  )
}
