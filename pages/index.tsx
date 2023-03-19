export default function Home() {
  const styling = {
    backgroundImage: "url('https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80')",
    width:"100%",
    height:"100%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  }
  return (
    <>
      <div className='h-screen'>
        <div style={styling} className='flex items-center justify-center flex-col'>
          <h1 className='text-4xl font-semibold text-gray-100 capitalize drop-shadow'>
            Welcome to my Next Js App
          </h1>
          <h4 className='text-gray-900 font-bold text-2xl'>Love with JavaScript</h4>
        </div>
      </div>
    </>
  )
}
