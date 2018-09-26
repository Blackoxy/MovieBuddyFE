import React from 'react'
import Movie from './Movie'

class MovieList extends React.Component {
    constructor (props) {
        super(props)
        this.state = {

        }
    }
    render (){
        return (

            <section className="move-list">

                <h3> Add Movies to your Watch List below: </h3>
                <ul className="listing listings"> {movies(this.props.data)} </ul>
            </section>
            )
    }
}
const movies = (data) => data.map(movie => {
    console.log('test')
    return <Movie    poster_path={movie.poster_path}
        title={movie.title}
        overview={movie.overview}
        popularity={movie.popularity}
    />
    })

export default MovieList;
