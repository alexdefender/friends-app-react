let apiUrl = 'https://rickandmortyapi.com/api/character';
const COUNT_PAGES = 25;

export const getDataFromApi = async (page) => {
    if (page < 0 && page > COUNT_PAGES) {
        return;
    }

    if (page !== undefined) {
        apiUrl += `/?page=${page}`;
    }

    try {
        const response = await fetch(apiUrl);
        const result = await response.json();

        return result.results;
    } catch (err) {
        console.log(err);
    }
};
