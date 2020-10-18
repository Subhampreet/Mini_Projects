function func(){
    let search = document.getElementById("input").value
    const url = "https://pokeapi.co/api/v2/pokemon/"+search.toLowerCase();
   $.getJSON(url,function(result){
       console.log(result)
       document.getElementById("pokemonname").innerHTML = result.name
       document.getElementById("img-front").src = result.sprites.front_default
       document.getElementById("img-back").src = result.sprites.back_default
       document.getElementById("img-shiny-front").src = result.sprites.front_shiny
       document.getElementById("img-shiny-back").src = result.sprites.back_shiny
       document.getElementById("stats").innerHTML = "<strong>STATS</strong><br>HP : "+result.stats[0].base_stat+"<br>Attack :"+result.stats[1].base_stat+"<br>Defense :"+result.stats[2].base_stat+" <br>Special Attack : "+result.stats[3].base_stat+"<br>Special Defense  :"+result.stats[4].base_stat+"<br>Speed : "+result.stats[5].base_stat+"<br>Weight: "+result.weight
       document.getElementById("type-1").innerHTML = result.types[0].type.name
       document.getElementById("type-1").classList.add("type");
       if(result.types[1]!=undefined)
       {document.getElementById("type-2").innerHTML = result.types[1].type.name
       document.getElementById("type-2").classList.add("type");}
   })
}
