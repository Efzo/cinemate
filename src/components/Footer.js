import { Link } from 'react-router-dom';
export const Footer = () => {
  return (

          <footer class="bg-white  shadow  dark:bg-gray-800">
              <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2030 <Link to="/" class="hover:underline">Efzo Viewmate™</Link>. All Rights Reserved.
              </span>
              <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                  <li>
                      <a href="https://www.instagram.com/efzo/?hl=en" target="_blank"  rel="noreferrer"  class="mr-4 hover:underline md:mr-6 ">Instagram</a>
                  </li>
                  <li>
                      <a href="https://www.linkedin.com/in/efosa-ojomo-4882a015a/" target="_blank" rel="noreferrer"  class="mr-4 hover:underline md:mr-6">Linkedln</a>
                  </li>
                  <li>
                      <a href="https://www.youtube.com/channel/UCmQzU4YPXXPSOnkazv-JcVQ" target="_blank" rel="noreferrer"  class="mr-4 hover:underline md:mr-6">Youtube</a>
                  </li>
                  <li>
                      <a href="https://github.com/Efzo" arget="_blank" rel="noreferrer"  class="hover:underline">Github</a>
                  </li>
              </ul>
              </div>
          </footer>

  )
}
