const apiCharacters = "https://rickandmortyapi.com/api/character";



const getData = async(url) => {

try{

  const respuesta = await fetch(url)
  
  if(respuesta.status == 200){
    
    let data = await respuesta.json()
    console.log(data);
    return await data.results
    
    
    
    
  } else if(respuesta.status == 401){
   console.log("Error de llave");
  } else if(respuesta.status == 404){
    console.log("Ese personaje no existe")
  } else {
    console.log("Hubo un error y no se quue pasa");
  }
  }
  catch(error){
    console.log(error)
  }

}


const loadCharacters = async(url) => {

  //console.log(data.results);
  let content = " "
  let characters = await getData(url)

  
  for(let i = 0; i < characters.length  ; i++){
     content = content + 
      `<article class="card">
      <figure> 
       <img src="${characters[i].image}" alt="">
      </figure>  
      
      <ul class="characterInfo">
      <li>Id: ${characters[i].id}</li>
      <li>Name : ${characters[i].name}</li>
      <li>Especie : ${characters[i].species}</li>
  </ul>
  </article>`
  }
  
  document.getElementById("section").innerHTML = content


}


 


document.addEventListener("DOMContentLoaded", () => {

  getData(apiCharacters)
  loadCharacters(apiCharacters)
})

