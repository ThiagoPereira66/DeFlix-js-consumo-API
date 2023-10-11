

const chaveApi = 'ed2113b62a75455680a38dc9a8433142'
const baseUrl = 'https://api.themoviedb.org/3/'


async function filmes() {

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

async function TopFilmes() {
    const buscaTopFilmes = await fetch(`${baseUrl}movie/popular/?api_key=${chaveApi}&language=pt-br&page=1`)
        .then(resposta => resposta.json())

    topfilmesResults(buscaTopFilmes.results)

}

function topfilmesResults(buscaTopFilmes) {
    //console.log(buscaTopFilmes)

    for (const card of buscaTopFilmes) {
        const topFilmes = `
    <div class="cards">
    <img src="https://image.tmdb.org/t/p/original${card.poster_path}" alt="${card.title}">    
    </div>
    `
        document.querySelector('.carrocel-de-imagens').innerHTML += topFilmes


    }

}


async function TopSeries() {
    const buscaSeries = await fetch(`${baseUrl}tv/top_rated/?api_key=${chaveApi}&language=pt-br&page=1`)
        .then(resposta => resposta.json())

    topSeriesResults(buscaSeries.results)

   // console.log(buscaSeries.results)
}

function topSeriesResults(buscaSeries) {
    for (const card of buscaSeries) {
        const topSeries = `
    <div class="cards current-cards">
    <img src="https://image.tmdb.org/t/p/original${card.poster_path}" alt="${card.name}">    
    </div>
    `
        document.querySelector('#series').innerHTML += topSeries


    }

}

async function TopAtores() {
    const buscaAtores = await fetch(`${baseUrl}person/popular/?api_key=${chaveApi}&language=pt-br&page=1`)
        .then(resposta => resposta.json())

        topAtoresREsults(buscaAtores.results)

        console.log(buscaAtores.results)
    
}

function topAtoresREsults(buscaAtores){
    for(const card of buscaAtores){
        const topAtores = `
        <div class="cards current-cards" >
        <img src="https://image.tmdb.org/t/p/original${card.profile_path}" alt="${card.name}">
        <p>${card.name}</p>   
        </div>
    `

    document.querySelector('#atores').innerHTML += topAtores
    }
}





filmes();
TopFilmes();
TopSeries();
TopAtores();



window.onscroll = function (){
    const cabacalho = document.querySelector('header')
    if(window.pageYOffset > 150){
        cabacalho.style.background='#000';
    }
    if(window.pageYOffset <= 150){
        cabacalho.style.background='none'
    }


    
}