import Link from "next/link"
import "../globals.css"

export const Card = ({title, description, id}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4">
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{title}</div>
      <p className="text-gray-700 text-base">{description}</p>
      <Link href={"/blogs/"+id} className="text-blue-800">
        View
    </Link>
    </div>
  </div>
    )
}
