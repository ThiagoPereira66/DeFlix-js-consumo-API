import { baseUrl, chaveApi } from "./api";


async function TopAtores() {
    const buscaAtores = await fetch(`${baseUrl}person/popular/?api_key=${chaveApi}&language=pt-br&page=1`)
        .then(resposta => resposta.json())

        for(const card of buscaAtores.results){
            const topAtores = `
            <div class="cards current-cards" >
            <img src="https://image.tmdb.org/t/p/original${card.profile_path}" alt="${card.name}">
            <p>${card.name}</p>   
            </div>
        `
    
        document.querySelector('#atores').innerHTML += topAtores
        }

        console.log(buscaAtores.results)
    
}

export default TopAtores