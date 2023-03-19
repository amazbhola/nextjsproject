import Image from "next/image"

export const getStaticPaths = async () => {
  const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`)
  const data = await res.json()
  const paths = data.results?.map((movie: { id: { toString: () => any; }; }) => ({ params: { movie: movie.id.toString() } }))
  return {
    paths:[...paths],
    fallback: Boolean, // can also be true or 'blocking'
  }
}
export const getStaticProps = async (context: any) => {
  const { movie } = context.params
  const res = await fetch(`https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`)
  const data = await res.json()
  return {
    props: {
      data
    }
  }
}


export interface IsingleMovieProps {
  page: number,
  total_pages: number,
  total_results: number
  data: any,
  id: number,
  title: string,
  poster_path: string,
  release_date: string,
  vote_average: number,
  overview: string
  genres: [],
  production_countries: [],
  production_companies: [],
}

export default function singleMovie(props: { data: { runtime: any; title: any; release_date: any; overview: any; backdrop_path: any; poster_path: any; genres: any; production_countries: any; }; }) {
  const { runtime, title, release_date, overview, backdrop_path,poster_path,genres,production_countries } = props.data
  const imagePath = 'https://image.tmdb.org/t/p/original';
  const styles = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(${imagePath + backdrop_path})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundcolor: '#000000',
    color: '#ffffff',
    height: '80vh',
  }

  return (
    <div className="bg-gray-900 shadow">
      <div className='px-12 py-10 text-gray-100 mx-8 gap-9 flex flex-col md:flex-row justify-evenly items-center w-full '>
        <div>
        <Image src={imagePath + poster_path} alt={title} width={400} height={400} />
        </div>
        <div className="w-full h-full p-8 bg-cover bg-gradient-to-r from-cyan-500 to-blue-500 space-y-8" style={styles}>
          <h2 className="text-2xl font-medium">{title}</h2>
          <h3>Relase Date : {release_date}</h3>
          <p className="text-sm"> Category : {
            genres && genres.map((genre: any, index: number) => {
              return <span key={index} className="text-gray-100 bg-gray-600 p-1 mr-2">{genre.name}</span>
            })
          }</p>
          <p>{overview}</p>
          <h3>Runtime : {runtime}</h3>
          <h3>Production Countries : {production_countries.map((country: any, index: number) => {
            return <span key={index} className="p-1 mr-2">{country.name}</span>
          })}
          </h3>
        </div>
      </div>
    </div>
  );
}
