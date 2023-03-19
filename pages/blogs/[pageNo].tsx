export async function getStaticPaths() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json()
  const paths = data.map((post: { id: { toString: () => any; }; }) => ({ params: { pageNo: post.id.toString() } }))
  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  }
}

export async function getStaticProps(context: any) {
  const pageNo = context.params.pageNo
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${pageNo}`)
  const data = await res.json()
  return {
    // Passed to the page component as props
    props: { data },
  }
}

interface BlogProps {
  data: {
    id: number,
    title: string,
    body: string,
    userId: number
  }
}

const pageNo = ({data}:BlogProps) => {
  const {id,title,body} = data;
  return (
    <div>
      <div key={id} className="bg-gray-400 p-4 shadow flex flex-row gap-5 items-center mx-52">
          <h1 className="bg-gray-900 text-gray-100 rounded-full py-1 px-2 w-6 self-end ">{id}</h1>
          <div>
              <h1 className="hover:underline cursor-pointer text-2xl">{title}</h1>
            <p>{body}</p>
          </div>
        </div>
    </div>
  )
}

export default pageNo
