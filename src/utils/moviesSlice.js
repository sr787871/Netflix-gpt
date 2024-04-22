import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
        name : "movies",
        initialState : {
            NowPlayingMovies : null,
            PopularMovies : null,
            trailerVideo : null,
            TopRatedMovies : null,
            UpcomingMovies : null,
            TrendingMovies : null,
        },
        reducers : {
            addNowPlayingMovies : (state , action)=>{
                state.NowPlayingMovies = action.payload
            },
            addTrailerVideo : (state,action)=>{
                state.trailerVideo = action.payload
            },
            addPopularMovies : (state , action)=>{
                state.PopularMovies = action.payload
            },
            addTopRatedMovies : (state , action)=>{
                state.TopRatedMovies = action.payload
            },
            addUpcomingMovies : (state , action) =>{
                state.UpcomingMovies = action.payload
            },
            addTrendingMovies : (state , action) =>{
                state.TrendingMovies = action.payload
            }
        }
})

export const {addNowPlayingMovies,addTrailerVideo,addPopularMovies,addTopRatedMovies,addUpcomingMovies,addTrendingMovies} = moviesSlice.actions;
export default moviesSlice.reducer;