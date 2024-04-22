import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { API_OPTIONS } from '../utils/constants'
import { addTrailerVideo } from '../utils/moviesSlice'

const useTrailerVideo = (movieId) => {
    //fetch trailer video && storing the trailer in store 
    const dispatch = useDispatch()
    const getMovieVideos = async ()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US', API_OPTIONS)
        const json = await data.json()
        const filterData = json.results.filter((video) => video.type === "Trailer")
        const trailer = filterData.length ? filterData[0] : json.results[0]
        // console.log(trailer);
        dispatch(addTrailerVideo(trailer)) // 1st method of dynamic trailer key
        // setTrailerKey(trailer.key) 2nd method of dynamic trailer key - in which we have to make state component
  }

    useEffect(()=>{
        getMovieVideos();
    },[])
}

export default useTrailerVideo