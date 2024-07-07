import { API_KEY } from "./Constants/constants";


export const originals=`discover/tv?api_key=${API_KEY}&with_networks=213`;
export const action=`discover/movie?api_key=${API_KEY}&with_genre=28`;
export const trending =`trending/all/week?api_key=${API_KEY}&language=en-US`;

export const ComedyMovies= `discover/movie?api_key=${API_KEY}&with_genre=35`;

export const HorrorMovies=`discover/movie?api_key=${API_KEY}&with_genre=59`;


export const RomanceMovies= `discover/movie?api_key=${API_KEY}&with_genre=10749`;

export const Documentaries= `discover/movie?api_key=${API_KEY}&with_genre=99`;