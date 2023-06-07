export const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.API_KEY}`
  }
};

export const movie_img_url = 'https://image.tmdb.org/t/p/';