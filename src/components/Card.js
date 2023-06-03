import { Link } from "react-router-dom";
import Backup  from "../assets/images/logo512.png";


export const Card = ({movie}) => {


const {id, original_title, overview, poster_path} = movie;
const image =  poster_path  ? `https://image.tmdb.org/t/p/w500/${poster_path}` : Backup ;


  return (

    <div>

          <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-3">

                <Link to={`/movie/${id}`}> <img class="rounded-t-lg" src={image} alt="image" /> </Link>
                    
                
               <div class="p-5">
                    <Link  to={`/movie/${id}`}> <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{original_title}</h5> </Link>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{overview}</p>  
                    
                  
              </div>
          </div>

    </div>
  ) 
}
