import axios from"axios";



//call viacep
export async function getCep(){
    return axios.get("https://viacep.com.br/ws/35162000/json/")
    .catch(e => console.log(e))
}
