import React, { useEffect, useState } from "react";
import './App.css'
import Tmdb from "./Tmdb";
import MovieRow from "./components/MovieRow";
import FreaturedMovie from "./components/FreaturedMovie";
import Header from "./components/Header";

export default () => {
  const [movieList, setMovieList] = useState([])
  const [featuredData, setFeaturedData] = useState(null)
  const [blackHeader, setBlackHeader] = useState(false)

  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getHomeList()
      setMovieList(list)

      // pegando o featured

      let originals = list.filter(i => i.slug === 'originais');
      if (originals.length > 0) {
        let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
        let chosen = originals[0].items.results[randomChosen];
        let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv')
        setFeaturedData(chosenInfo)
      }


    }

    loadAll();
  }, [])

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true)
      } else {
        setBlackHeader(false)
      }
    }
    window.addEventListener('scroll', scrollListener)
    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  }, [])
  return (
    <div className="page">

      <Header black={blackHeader} />

      {featuredData &&
        <FreaturedMovie item={featuredData} />
      }

      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>

      <footer class="footer">
        <p>Feito por <span>@eduardo.mguerra</span></p>
        <p>🎬 Direitos de imagens para a <span>Netflix</span></p>
        <p>📊 Dados da API retirados do <a href="https://www.themoviedb.org/" target="_blank">TheMovieDB.org</a></p>
      </footer>


      {movieList.length <= 0 &&
        <div className="loading">
          <img src="https://i.gifer.com/8Etj.gif" alt="Carregando" />
        </div>
      }
    </div>
  )
}
