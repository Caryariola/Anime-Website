import { getAnilistBanner, PageProps } from "@/lib/anilistServices";

export default async function AnimeDetailsPage({ params }: PageProps) {
  const { malId } = await params;

  const [response, anilist] = await Promise.all([
    fetch(`https://api.jikan.moe/v4/anime/${malId}`),
    getAnilistBanner(malId),
  ]);
  const data = await response.json();
  const anime = data.data;

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
                :root {
                    --dynamic-bg: url(${anilist || anime.images.jpg.large_image_url});
                }
            `,
        }}
      />
      <div className="   justify-center gap-4  min-h-screen font-sans p-2  ">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[23%_77%] p-2  gap-1 mt-20">
          <div className="p-4  gap-2 flex flex-col items-center">
            <div className="aspect-2/3 overflow-hidden object-cover rounded-2xl">
              <img
                src={anime.images.jpg.large_image_url}
                alt={anime.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* <div className=" border p-2 text-sm">
              Alternative Titles:
              <div>
                {anime.title_english && (
                  <div>English: {anime.title_english}</div>
                )}
                {anime.title_japanese && (
                  <div>Japanese: {anime.title_japanese}</div>
                )}
              </div>
            </div> */}
          </div>

          <div className="w-full gap-2 flex flex-col  md:mt-30 ">
            <div className="  p-2 text-3xl font-bold">
              {anime.title_english || anime.title}
            </div>
            
            <div className="  px-2 text-sm">
                {anime.title_japanese && (
                  <div>{anime.title_japanese}</div>
                )}
            </div>

           

            <div className="  text-sm font-light p-2">
              {anime.synopsis}
            </div>

             <div className=" flex gap-12 p-2 mt-auto" >
              {anime.genres.map((g: any) => (
                <div key={g.mal_id}><span  className=" text-sm ">
                  {g.name}
                </span></div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
