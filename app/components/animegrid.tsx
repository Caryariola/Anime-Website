import LoadingCard from "./laodingcard" 
import CardBox from "./card"

export default function AnimeGrid(props: any) {
  const lmt = props.search ? 25 : 5

  return (
    <div className="w-full max-w-7xl mx-auto px-4 font-sans">
      

      <h1 className="text-3xl md:text-4xl font-black mb-6 pl-2 text-transparent bg-clip-text bg-linear-to-r from-violet-400 to-fuchsia-400 drop-shadow-sm">
        {props.title}
      </h1>

      <div className="w-full rounded-3xl p-6 bg-white/5 border border-white/10 backdrop-blur-sm shadow-xl">
        
        {props.isLoading ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {[...Array(lmt)].map((_, index) => (
              <LoadingCard key={index} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {props.animedata.slice(0, lmt).map((anime: any, index: number) => (
              <CardBox 
                image={anime.image} 
                title={anime.title}  
                type={anime.type} 
                key={`${anime.mal_id}-${index}`} 
                episodes={anime.episodes} 
                score={anime.score} 
                malId={anime.mal_id} 
              />
            ))}
          </div>
        )}

        {!props.isLoading && props.animedata.length === 0 && (
           <div className="text-center py-20 text-gray-500">
              <i className="pi pi-search text-4xl mb-3 opacity-50"></i>
              <p>No anime found.</p>
           </div>
        )}

      </div>
    </div>
  );
}