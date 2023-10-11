import TopSeries from "./utils/topSeries"
import TopFilmes from "./utils/topFilmes"
import TopAtores from "./utils/topAtores"
import Filmes from "./utils/filmes"



Filmes();
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