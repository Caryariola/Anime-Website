'use client';

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { AnimeData, dynamicTitle, fetchData, fetchTopPopular } from "@/lib/animeServices";
import { getAnilistBanner, PageProps } from "@/lib/anilistServices";
import SearchBar from "./components/searchbar";
import AnimeGrid from "./components/animegrid";
import HomepagePhoto from "./components/homepagephoto";


export default function Home() {
  const [animeData, setAnimeData] = useState<AnimeData[]>([]);
  const [alltimepopularanime, setAlltimepopularanime] = useState<AnimeData[]>([]);
  const [headerTitle, setHeaderTitle] = useState("");
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [anilistBanner, setAnilistBanner] = useState<string | null>(null);

  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const query = searchParams.get("q") || "";

    if (query !== searchText) {
        setSearchText(query);
        setPage(1); // Always reset to page 1 on new search/reset
    }
  }, [searchParams]);

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        // 1. Fetch Seasonal or Search results
        const [data, anilistBanner] = await Promise.all([
          fetchData(searchText, page),
          getAnilistBanner("16498") // Example MAL IDs for testing
        ]);
        setAnimeData(data.topAnime);
        setHeaderTitle(data.title);
        setAnilistBanner(anilistBanner);

        // 2. Fetch Popular only if we don't have it and aren't searching
        if (alltimepopularanime.length === 0 && searchText === "") {
          // A tiny pause (200ms) prevents the API from getting grumpy
          await new Promise(res => setTimeout(res, 400));
          const popular = await fetchTopPopular();
          setAlltimepopularanime(popular);
        }
      } catch (error) {
        console.error("Failed to load anime:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, [page, searchText]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });
  }, [page]);
  
  
  const handleSearch = async (event: React.FormEvent) => {
    event.preventDefault();
    
    if (searchText.trim()) {
        router.push(`/?q=${encodeURIComponent(searchText)}`);
    } else {
        router.push('/');
    }
  
  };

  const handleNext = () => setPage(prev => prev + 1);
  const handlePrev = () => setPage(prev => Math.max(prev - 1, 1));

  return (
    <>
    
    <div className="flex flex-col gap-4 min-h-screen  max-w-screen items-center font-sans " >

      <HomepagePhoto image={anilistBanner}/>


      <div className="flex flex-col z-10 gap-2 max-w-270 w-full min-h-screen "> 
        <div className="flex flex-wrap justify-start rounded-2xl gap-2 p-3 border">
          <SearchBar searchText={searchText} setSearchText={setSearchText} handleSearch={handleSearch} />
        </div>

        
        {searchText.length === 0 ? <>
        <AnimeGrid animedata={animeData} isLoading={isLoading} title={dynamicTitle(searchText)} search={searchText}/>
        <AnimeGrid animedata={alltimepopularanime} search={searchText} isLoading={isLoading} title="All Time Popular Anime"/>
        </> : <AnimeGrid animedata={animeData} isLoading={isLoading} title={dynamicTitle(searchText)} search={searchText} page={page} prevonclick={handlePrev} nextonclick={handleNext} items={animeData.length}/>}
      </div>  
    </div></>
  );
}
