import axios from "axios";

const obtenerPokemon = async (id) => {
  let resultado = await axios
    .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then();
  console.log(resultado);
  return resultado;
};

export async function obtenerPokemonFachada() {
  return await obtenerVectorNumerico();
}

function obtenerAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const obtenerVectorNumerico = () => {
  const vector = [];
  for (let i = 0; i < 4; i++) {
    vector[i] = obtenerAleatorio(1, 1000);
  }
  return vector;
};


const obtenerVectorPokemon = (vectorNumerico) => {
    const data1 = obtenerPokemon(vectorNumerico[0]);
    const data2 = obtenerPokemon(vectorNumerico[1]);
    const data3 = obtenerPokemon(vectorNumerico[2]);
    const data4 = obtenerPokemon(vectorNumerico[3]);

    const obj1 = {
        nombre: data1.name,
        id: data1.id
    }
}