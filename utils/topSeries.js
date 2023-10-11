import { baseUrl, chaveApi } from "./api"

async function TopSeries() {
    const buscaSeries = await fetch(`${baseUrl}tv/top_rated/?api_key=${chaveApi}&language=pt-br&page=1`)
        .then(resposta => resposta.json())

        for (const card of buscaSeries.results) {
            const topSeries = `
        <div class="cards current-cards">
        <img src="https://image.tmdb.org/t/p/original${card.poster_path}" alt="${card.name}">    
        </div>
        `
            document.querySelector('#series').innerHTML += topSeries
    
    
        }

   // console.log(buscaSeries.results)
}

export default TopSeries