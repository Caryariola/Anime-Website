import { getAnilistBanner, PageProps } from "@/lib/anilistServices";
import Link from "next/link";

export default async function AnimeDetailsPage({ params }: PageProps) {
  const { malId } = await params;

  const [response, anilist] = await Promise.all([
    fetch(`https://api.jikan.moe/v4/anime/${malId}`),
    getAnilistBanner(malId),
  ]);
  const data = await response.json();
  const anime = data.data;

  const bgImage = anilist || anime.images.jpg.large_image_url;

  return (
    <div className="relative min-h-screen w-full font-sans text-gray-100 pb-20 overflow-hidden">
      
      <div 
        className="fixed inset-0 z-[-1] bg-cover bg-center scale-110 blur-xl opacity-40 transition-all duration-700"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      <div className="fixed inset-0 z-[-1] bg-linear-to-t from-[#0d0e21] via-[#0d0e21]/80 to-black/40" />



      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-24 md:pt-32">
        <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8 lg:gap-12">
          

          <div className="flex flex-col gap-6">
            

            <div className="relative w-full aspect-3/4 rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(139,92,246,0.3)] border border-white/10 group">
              <img
                src={anime.images.jpg.large_image_url}
                alt={anime.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
 
              <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-xs font-bold px-3 py-1 rounded-full border border-white/10">
                 {anime.status}
              </div>
            </div>


            <div className="grid grid-cols-2 gap-3">
               <InfoCard label="Episodes" value={anime.episodes || "?"} icon="pi pi-list" />
               <InfoCard label="Duration" value={anime.duration?.split(" ")[0] || "?"} icon="pi pi-clock" />
               <InfoCard label="Source" value={anime.source} icon="pi pi-book" />
               <InfoCard label="Year" value={anime.year || anime.aired?.prop?.from?.year} icon="pi pi-calendar" />
            </div>

          </div>



          <div className="flex flex-col gap-6">
            

            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-linear-to-r from-violet-400 via-fuchsia-300 to-white leading-tight mb-2 drop-shadow-sm">
                {anime.title_english || anime.title}
              </h1>
              {anime.title_japanese && (
                <p className="text-xl text-gray-500 font-medium tracking-wide">
                  {anime.title_japanese}
                </p>
              )}
            </div>


            <div className="flex flex-wrap items-center gap-4 text-sm font-semibold">
               <div className="flex items-center gap-2 bg-yellow-500/10 text-yellow-400 px-4 py-2 rounded-lg border border-yellow-500/20">
                  <i className="pi pi-star-fill text-lg"></i>
                  <span className="text-xl">{anime.score || "N/A"}</span>
                  <span className="text-xs text-yellow-500/60 font-normal">({anime.scored_by?.toLocaleString()} users)</span>
               </div>
               
               <div className="flex items-center gap-2 bg-white/5 text-gray-300 px-4 py-2 rounded-lg border border-white/10">
                  <i className="pi pi-chart-line text-violet-400"></i>
                  <span>Rank #{anime.rank?.toLocaleString()}</span>
               </div>
            </div>


            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 shadow-xl">
               <h3 className="text-violet-300 font-bold uppercase tracking-widest text-xs mb-4">Synopsis</h3>
               <p className="text-gray-300 leading-relaxed text-lg font-light whitespace-pre-line">
                  {anime.synopsis || "No synopsis available."}
               </p>
            </div>


            <div className="space-y-3">
               <h3 className="text-gray-500 text-xs font-bold uppercase tracking-widest">Genres & Themes</h3>
               <div className="flex flex-wrap gap-2">
                  {anime.genres.map((g: any) => (
                    <span 
                      key={g.mal_id} 
                      className="px-4 py-1.5 rounded-full text-sm font-medium bg-violet-500/10 text-violet-200 border border-violet-500/20 hover:bg-violet-500/20 transition cursor-default"
                    >
                      {g.name}
                    </span>
                  ))}
                  {anime.themes?.map((t: any) => (
                    <span 
                      key={t.mal_id} 
                      className="px-4 py-1.5 rounded-full text-sm font-medium bg-blue-500/10 text-blue-200 border border-blue-500/20 hover:bg-blue-500/20 transition cursor-default"
                    >
                      {t.name}
                    </span>
                  ))}
               </div>
            </div>


            {anime.studios?.length > 0 && (
              <div className="pt-4 border-t border-white/10 flex gap-2 items-center text-gray-400 text-sm">
                 <span>Studios:</span>
                 {anime.studios.map((s: any) => (
                    <span key={s.mal_id} className="text-white font-semibold hover:text-violet-400 transition cursor-pointer">
                       {s.name}
                    </span>
                 ))}
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}

function InfoCard({ label, value, icon }: { label: string, value: string | number, icon: string }) {
   return (
      <div className="bg-white/5 border border-white/5 rounded-xl p-3 flex flex-col items-center justify-center text-center gap-1">
         <i className={`${icon} text-gray-400 text-sm mb-1`}></i>
         <span className="text-xs text-gray-500 uppercase font-bold">{label}</span>
         <span className="text-sm font-semibold text-gray-200 line-clamp-1">{value}</span>
      </div>
   )
}