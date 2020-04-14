const API_URL = 'https://rickandmortyapi.com/api/character/';
const COUNT_PAGES = 25;

export const getDataFromApi = async (page) => {
    if (page < 0 || page > COUNT_PAGES) {
        return [];
    }

    let newUrl = API_URL;
    if (page > 1) {
        newUrl += `?page=${page}`;
    }

    try {
        const response = await fetch(newUrl);
        const result = await response.json();

        return result.results;
    } catch (err) {
        console.log(err);
    }
};
