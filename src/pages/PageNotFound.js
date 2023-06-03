import { Link } from "react-router-dom";
import { useEffect } from "react";


export const PageNotFound = () => {

  useEffect(() => {
    document.title = `Page Not Found / Cinemate`;
  });

  return (
    <main>    
          <section  className="flex flex-col justify-center px-2">
              <div className="flex flex-col items-center my-4">
                <p className="text-7xl text-gray-700 font-bold my-10 dark:text-white">404, Oops!</p>
                <img src="" className="rounded" alt="" />                   
              </div>

              <div  className="flex justify-center m-64">

                <Link to="/">
                  <button className="w-64 text-xl bg-gradient-to-r  from-blue-800 rounded-lg p-8 text-white hover:bg-yellow-400">Back to ViewMate</button>

                </Link>
              </div>
          </section>
    </main>
  )
}
