import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'

const MainContainer = () => {
    const movies = useSelector(store => store.movies?.NowPlayingMovies)
    if(!movies) return ;

    const mainMovie = movies[1];
    // console.log(mainMovie);
    const {title,overview,id} = mainMovie;
  return (
    <div>
        <VideoTitle title ={title} overview ={overview} />
        <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer