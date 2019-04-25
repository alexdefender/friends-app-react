const API_URL = "https://rickandmortyapi.com/api/character";

class DataService {
    getDataFromApi() {
        return fetch(API_URL)
            .then(responce => {
                return responce.json();
            }).catch(err => {
                console.log(err);
            })
    }
}

export default new DataService();
