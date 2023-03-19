import Image from 'next/image';
import Link from 'next/link';

export interface IMoviesProps {
    id: number;
    title: string;
    poster_path: string;
    release_date: string;
    vote_average: number;
    overview: string;
}

export default function Movies(props: IMoviesProps) {
    const { id, title, poster_path, release_date, vote_average, overview } = props;
    const imagePath = 'https://image.tmdb.org/t/p/original';
    return (
        <div>
            <div key={id} className="bg-gray-900 shadow">
                <div className='px-2 py-1 text-gray-100'>
                    <h1 className='text-xl font-medium'>{title}</h1>
                    <h2 className='text-sm'>{release_date}</h2>
                </div>
                <Link href={`/movie/${id}`}>
                    <Image
                        alt={title}
                        src={imagePath + poster_path}
                        width={400}
                        height={400}
                    />
                </Link>
            </div>
        </div>
    );
}
