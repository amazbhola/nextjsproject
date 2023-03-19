import Movies from './Movies';
export const getStaticProps = async () => {
    const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`)
    const data = await res.json()
    return {
        props: {
            data
        }
    }
};

export default function Movie(props: any) {
    const { results} = props.data;
    return (
        <>
            <div className='mx-32 my-12 grid gap-16 grid-cols-fluid'>
                {results.map((movie: any) => (
                    <Movies
                        key={movie.id}
                        id={movie.id}
                        title={movie.title}
                        poster_path={movie.poster_path}
                        release_date={movie.release_date}
                        vote_average={movie.vote_average}
                        overview={movie.overview}
                    />
                ))}
            </div>
        </>
    );
}
