// Obtiene la referencia al elemento donde muestra los resultados
const resultsContainer = document.getElementById('results');
const cardsPadre = document.querySelector('.container-cards')
const cantPersonaje = 25;

// Función para hacer una solicitud a la API y mostrar los resultados
function fetchCharacters(url) {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      // Limpia los resultados anteriores
      resultsContainer.innerHTML = '';

      // Recorre los personajes y crea elementos HTML para mostrarlos
      data.results.forEach(character => {
        const characterElement = document.createElement('div');
        characterElement.textContent = character.name;
        resultsContainer.appendChild(characterElement);
      });
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

// Llama a la función para cargar los personajes por defecto solved thanks bible java was complicated but will be useful for crud create apis cest fini
fetchCharacters('https://rickandmortyapi.com/api/character');

const recPersonaje = async () =>{
  for (let i = 1; i <= cantPersonaje; i++ ){
          await (getPersonaje(i))
  }
}

const getPersonaje = async (id) =>{
  const url = `https://rickandmortyapi.com/api/character/${id}`
  const respuesta = await fetch(url)
  const personaje = await respuesta.json()
  crearPersonajes(personaje)
}



function crearPersonajes(person) {
  const cardRick = document.createElement('div')
  cardRick.classList.add ('personajes')
  const name = person.name
  const imgPersonaje = person.image
  const [status, specie, origin] = [person.status, person.species, person.origin.name]
  const personInnerData = `
      <div class="cont-card">
          <img src="${imgPersonaje}">
          <div class="info">
          <h2>${name}</h2>
          <p>status: ${status}</p>
          <p>specie: ${specie}</p>
          <p>origen: ${origin}</p>
          </div>
      </div>
  `
  console.log(cardRick)
  cardRick.innerHTML = personInnerData
  cardsPadre.appendChild(cardRick)
}

recPersonaje()
