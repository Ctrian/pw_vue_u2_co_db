import axios from "axios";

const consumirAPI = async() => {
    const respuesta =  await axios.get('https://yesno.wtf/api').then(r => r.data);
    console.log(respuesta);
    return respuesta;
}

 export async function consumirAPIfachada  () {
    return await consumirAPI();
}