import { useState } from 'react';
import { Movie } from '@/types/movieData';
import { Grid } from '@/components/materialUiComponents/MaterialUiComponents';
import Navbar from '@/components/mainview/navbar/Navbar';
import MovieList from '@/components/mainview/movieList/MovieList';
import useDeviceSize from '@/types/useDeviceSize';

export default function MainBoard({movieList}: {
    movieList: Array<Movie>
}) {

    const [width] = useDeviceSize();
    const [updatedMovieList, setUpdatedMovieList] = useState(movieList);
    const [hidePreview, setHidePreview] = useState(false);

    let searchedList: Array<Movie> = [];

    const onSearch = (searchValue: string) => {
        setHidePreview(true);
        if (searchValue === '') {
            setUpdatedMovieList(movieList);
        } else {
            searchedList = movieList.filter((movie) => {
                
                return movie.Title.toLowerCase().includes(searchValue.toLowerCase());
            });
            setUpdatedMovieList(searchedList);
        }
    }

    return (
        <Grid>
            {
                width > 768 && (
                    <Navbar onSearch={onSearch} />
                )
            }
            <MovieList moviesData={updatedMovieList} hidePreview={hidePreview} setHidePreview={setHidePreview}/>
        </Grid>
    )
}
