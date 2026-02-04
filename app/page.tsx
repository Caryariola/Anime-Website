
import {  dynamicTitle, fetchPopularThisSeason, fetchTopPopular } from "@/lib/animeServices";
import { getAnilistBanner } from "@/lib/anilistServices";
import AnimeGrid from "./components/animegrid";
import HomepagePhoto from "./components/homepagephoto";


export default async function Home() {
  const [seasonData, bannerData, popularData] = await Promise.allSettled([
    fetchPopularThisSeason(),
    getAnilistBanner("16498"),
    fetchTopPopular()
  ]);

  const seasonList = seasonData.status === 'fulfilled' ? seasonData.value.PTS : [];
  const popularList = popularData.status === 'fulfilled' ? popularData.value : [];
  const banner = bannerData.status === 'fulfilled' ? bannerData.value : null;

  
 

  return (
    <>
    
    <div className="flex flex-col gap-4 min-h-screen  max-w-screen items-center font-sans " >

      <HomepagePhoto image={banner}/>

      <div className="flex flex-col z-10 gap-2 max-w-270 w-full min-h-screen "> 
        <AnimeGrid animedata={seasonList}  title={dynamicTitle("")} search={""}/>
        <AnimeGrid animedata={popularList} search={""} title="All Time Popular Anime"/>
      </div> 
      
    </div></>
  );
}
