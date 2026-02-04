import { Card } from 'primereact/card';


export default function About() {
  return (
    <div className="relative min-h-[85vh] flex items-center justify-center p-6 overflow-hidden">
      
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-violet-600/20 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-600/10 rounded-full blur-[100px] -z-10"></div>


      <Card className="max-w-2xl w-full rounded-2xl bg-black/30! backdrop-blur-md! border! border-white/10! text-gray-100! shadow-2xl relative">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-black text-transparent bg-clip-text bg-linear-to-r from-violet-400 to-fuchsia-400 mb-4 drop-shadow-sm">
            AnimeHub
          </h1>
          
          <div className="inline-block px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20">
            <span className="text-violet-300 text-xs font-bold tracking-[0.2em] uppercase">
              Version 1.0.0
            </span>
          </div>
        </div>

        <div className="text-gray-300 leading-relaxed text-lg space-y-6 px-2 text-center sm:text-left">
          <p>
            AnimeHub is a streamlined web app designed for effortless anime discovery. 
            Powered by the <strong className="text-violet-300 hover:text-violet-200 transition">Jikan API</strong>, 
            it provides real-time access to seasonal hits and all-time classics.
          </p>
          
          <p className="text-gray-400 text-base">
            We ditched the clutter. Our custom "Live Search" engine uses strict filtering 
            to ensure you find exactly what you're looking for—no scrolling through unrelated noise.
          </p>
        </div>

        <div className="flex items-center gap-4 py-8">
            <div className="h-px bg-linear-to-r from-transparent via-white/10 to-transparent flex-1" />
            <span className="text-gray-600 text-xs font-semibold uppercase tracking-widest">Powered By</span>
            <div className="h-px bg-linear-to-r from-transparent via-white/10 to-transparent flex-1" />
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <span className="bg-white text-black px-4 py-1.5 rounded-full text-sm font-bold shadow-lg shadow-white/10">
            Next.js
          </span>
          
          <span className="bg-cyan-900/30 text-cyan-300 border border-cyan-500/30 px-4 py-1.5 rounded-full text-sm font-medium">
            Tailwind
          </span>
          
          <span className="bg-violet-900/30 text-violet-300 border border-violet-500/30 px-4 py-1.5 rounded-full text-sm font-medium">
            Jikan API
          </span>

          <span className="bg-blue-900/30 text-blue-300 border border-blue-500/30 px-4 py-1.5 rounded-full text-sm font-medium">
            PrimeReact
          </span>
        </div>

        <div className="text-center pt-6 border-t border-white/5">
          <p className="text-sm text-gray-500 italic font-medium">
            "Demonstrating the power of Server-Side Rendering & React Hooks."
          </p>
        </div>

      </Card>
    </div>
  )
}