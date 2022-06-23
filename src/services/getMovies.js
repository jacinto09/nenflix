
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '90a0f4b832msh8074fb5065a3f7dp111486jsn41c39244bcf9',
		'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
	}
};
export const getMovies= async (searchTerm) => {
	const url = `https://streaming-availability.p.rapidapi.com/search/basic?country=es&service=netflix&type=movie&genre=18&keyword=${searchTerm}&page=1&output_language=en&language=en`

	try {
	const response = await fetch(url, options)
	const data = await response.json()
	const movies = data.results
	console.log(movies)
	return movies
    }catch (error) {	
		console.log(error);
	}
}

