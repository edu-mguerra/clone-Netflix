import React from "react";
import './FreaturedMovie.css'


export default ({item}) => {
    let  firstDate = new Date(item.first_air_date)
    let genres = [];
    for(let i in item.genres){
        genres.push(item.genres[i].name)
    }

    return(
        <section className="freatured" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <div className="freatured--vertical">
                <div className="freatured--horizontal">
                    <div className="featured--name">{item.original_name}</div>
                    <div className="freatured--info">
                        <div className="freatured--points">{item.vote_average.toFixed(1)} Pontos</div>
                        <div className="freatured--year">{firstDate.getFullYear()}</div>
                        <div className="freatured--seasons">{item.number_of_seasons} Temporada{item.number_of_seasons !== 1 ? 's' : ''}</div>
                    </div>

                    {item.overview.length > 200 && <div className="freatured--description">{item.overview.substring(0, 200) +'...'}</div>}                    


                    <div className="freatured--buttons">
                        <a href={`/watch/${item.id}`} className="freatured--watchbutton">▶ Assistir</a>
                        <a href={`/list/add/${item.id}`} className="freatured--mylistbutton">+ Minha lista</a>
                    </div>
                    <div className="freatured--genres"><strong>Gêneros: </strong>{genres.join(', ')}</div>
                </div>
            </div>
        </section>
    )
}