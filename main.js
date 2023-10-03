

const chaveApi = 'ed2113b62a75455680a38dc9a8433142'
const baseUrl = 'https://api.themoviedb.org/3/movie/popular'


async function filmes() {

    const buscaFilmes = await fetch(`${baseUrl}?api_key=${chaveApi}&language=pt-br&page=1`)
        .then(respost => respost.json())

    dados(buscaFilmes.results[0])
}

function dados(buscaFilmes) {
    document.querySelector('.titulo').innerHTML = buscaFilmes.title
    document.querySelector('.detalhes').innerHTML = buscaFilmes.overview
    document.querySelector('.img-poster').innerHTML = `<img src=\'https://image.tmdb.org/t/p/original/${buscaFilmes.poster_path}' alt="${buscaFilmes.title}"/>`
    document.querySelector('.img-fundo').innerHTML = `<img src=\'https://image.tmdb.org/t/p/original/${buscaFilmes.backdrop_path}' alt="${buscaFilmes.title}"/>`

    //console.log(buscaFilmes)

}

async function TopFilmes() {
    const buscaTopFilmes = await fetch(`https://api.themoviedb.org/3/movie/popular/?api_key=${chaveApi}&lang=pt_br&page=1`)
        .then(resposta => resposta.json())

    topfilmesResults(buscaTopFilmes.results)

}

function topfilmesResults(buscaTopFilmes) {
    //console.log(buscaTopFilmes)

    for (const card of buscaTopFilmes) {
        const topFilmes = `
    <div class="cards">
    <img src="https://image.tmdb.org/t/p/original/${card.poster_path}" alt="${card.title}">
    <p>${card.title}</p>
    </div>
    <div class="swiper-pagination"></div>
    `
        document.querySelector('.carrocel-de-imagens').innerHTML += topFilmes


    }

}


async function TopSeries() {
    const buscaSeries = await fetch(`https://api.themoviedb.org/3/tv/top_rated/?api_key=${chaveApi}&lang=pt_br&page=1`)
        .then(resposta => resposta.json())

    topSeriesResults(buscaSeries.results)

    console.log(buscaSeries.results)
}

function topSeriesResults(buscaSeries) {
    for (const card of buscaSeries) {
        const topSeries = `
    <div class="cards">
    <img src="https://image.tmdb.org/t/p/original/${card.poster_path}" alt="${card.name}">
    <p>${card.name}</p>
    </div>
    <div class="swiper-pagination"></div>
    `
        document.querySelector('#series').innerHTML += topSeries


    }

}


filmes();
TopFilmes();
TopSeries();