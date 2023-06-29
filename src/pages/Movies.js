import React from 'react'
import data from '../DataMovies'

export function Movies(){
    return (<div>
        <h2>Movies</h2>
        <ul className='movies-ul'>
            {data.map(movie => <li key={movie.id}>{movie.title} | {movie.desc}</li> )}
            </ul>
    </div>
     
    )
}