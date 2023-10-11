import { baseUrl, chaveApi } from "./api";


async function Filmes() {

    const buscaFilmes = await fetch(`${baseUrl}movie/popular/?api_key=${chaveApi}&language=pt-br&page=1`)
        .then(respost => respost.json())

    dados(buscaFilmes.results[0])
}

function dados(buscaFilmes) {
    document.querySelector('.titulo').innerHTML = buscaFilmes.title
    document.querySelector('.detalhes').innerHTML = buscaFilmes.overview
    document.querySelector('.img-poster').innerHTML = `<img src=\'https://image.tmdb.org/t/p/original${buscaFilmes.poster_path}' alt="${buscaFilmes.title}"/>`
    document.querySelector('.img-fundo').innerHTML = `<img src=\'https://image.tmdb.org/t/p/original${buscaFilmes.backdrop_path}' alt="${buscaFilmes.title}"/>`

    //console.log(buscaFilmes)

}

export default Filmes