export default function About() {
  return (
    <div className="flex flex-col p-10  m-3.5 max-w-screen gap-4 items-center min-h-screen  font-sans">
      <div className="  p-2 text-4xl font-extrabold">
       AnimeHub
      </div>

      <div className="  text-sm font-light p-2 max-w-150">
       AnimeHub is a streamlined web application designed to help users browse and search for anime effortlessly. Powered by the Jikan API, it provides up-to-date access to the current season's hits, all-time popular shows, and detailed information on thousands of anime titles. 
      <br/><br/> The project is built using Next.js and Tailwind CSS to ensure fast performance and a clean, responsive layout. It features a custom "Live Search" engine with strict filtering, allowing users to find exact matches for their favorite shows without scrolling through unrelated results.
<br/>
<br/>
Created as a personal development project, AnimeHub demonstrates the use of modern web technologies like Server-Side Rendering and React Hooks. It aims to provide a simple, effective way to explore the world of anime while showcasing efficient coding practices.
      </div>
    </div>
  )
}