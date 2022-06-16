const api_key = '55b85469'
const new_url = 'https://rapidapi.com/movie-of-the-night-movie-of-the-night-default/api/streaming-availability/'
export const getMovies = async (searchTerm) => {
	const url = `http://www.omdbapi.com/?apikey=${api_key}&t=${searchTerm}`;
	
	try {
	const response =  await fetch(url)
	const data = await response.json(); 
	console.log(data)
	return data
	
	}catch (error) {
		console.log(error);
	}
	
}

