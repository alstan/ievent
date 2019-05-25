import axios from 'axios';

export const getMovies = async () => {
  try {
    const response = await axios.get('http://localhost:8000/movies');
    return response.data;
  }
  catch(error){
    return error;
  }
}

export const getSeats = async () => {
  try {
    const response = await axios.get ('http://localhost:8000/seats');
    return response.data;
  }
  catch(error){
    return error;
  }
}