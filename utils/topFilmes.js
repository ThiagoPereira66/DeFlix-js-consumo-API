import { baseUrl, chaveApi } from "./api";

async function TopFilmes() {
    const buscaTopFilmes = await fetch(`${baseUrl}movie/popular/?api_key=${chaveApi}&language=pt-br&page=1`)
        .then(resposta => resposta.json())

        for (const card of buscaTopFilmes.results) {
            const topFilmes = `
        <div class="cards">
        <img src="https://image.tmdb.org/t/p/original${card.poster_path}" alt="${card.title}">    
        </div>
        `
            document.querySelector('.carrocel-de-imagens').innerHTML += topFilmes
    
    
        }

}

export default TopFilmes