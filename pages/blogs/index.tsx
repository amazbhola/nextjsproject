import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json()
  return {
    props: {
      data
    }
  }
};

interface BlogProps {
  data: {
    id: number,
    title: string,
    body: string,
    userId: number
  }[]
}

const index = ({ data }: BlogProps) => {
  return (
    <div className="container mx-auto p-4 flex gap-4 flex-col">
      {data.slice(0, 5).map(post => (
        <div key={post.id} className="bg-gray-200 p-4 shadow flex flex-row gap-5 items-center">
          <h1 className="bg-teal-500 rounded-full inline-block px-2 py-1">{post.id}</h1>
          <div>
            <Link href={`/blogs/${post.id}`}>
              <h1 className="hover:underline cursor-pointer text-2xl">{post.title}</h1>
            </Link>
            <p>{post.body}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default index
