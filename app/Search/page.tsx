'use client'

import SearchBar from "../components/searchbar";
import AnimeGrid from "../components/animegrid";
import { AnimeData, fetchSearchAnime } from "@/lib/animeServices";
import { useState,useEffect } from "react";




export default function Search() {
    const [searchText, setSearchText] = useState("");
    const [Animedata, setAnimeData] = useState<AnimeData[]>([]);
    const [HeaderTitle, setHeaderTitle] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const loadData = async () => {
            setIsLoading(true);

            try{
                const data = await fetchSearchAnime(searchText);
                setAnimeData(data.Anidata);
                setHeaderTitle(data.title);
            } catch(error){
                console.error("Failed to load anime:", error);
             } finally {
                 setIsLoading(false);
             }
        }    

        loadData();
        
    },[]);

    const handleSearch = async (event: React.FormEvent) => {
        event.preventDefault();
    
        setIsLoading(true);
        try {
            const result = await fetchSearchAnime(searchText);
            setAnimeData(result.Anidata);
            setHeaderTitle(result.title);
        } catch (error) {
            console.error("Search failed:", error);
        } finally {
            setIsLoading(false);
        }
    };

    
    return ( 
        <>
        <div className="flex flex-col gap-4 min-h-screen  max-w-screen items-center font-sans " >
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-violet-600/20 rounded-full blur-[100px] -z-10"></div>
            <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-600/10 rounded-full blur-[100px] -z-10"></div>
            <div className="flex flex-col z-10 gap-2 max-w-270 w-full min-h-screen ">
                <div className="flex flex-wrap justify-start rounded-2xl gap-2 p-3">
                    <SearchBar searchText={searchText} setSearchText={setSearchText} handleSearch={handleSearch} />
                    
                </div>

                <div className="flex flex-col z-10 gap-2 max-w-270 w-full min-h-screen "> 
                        <AnimeGrid   isLoading={isLoading} animedata={Animedata} search={true} title={HeaderTitle}/>
                      </div> 


            </div>
        </div>
        </>
    )
}

//  const handleSearch = async (event: React.FormEvent) => {
//     event.preventDefault();
    
//     if (searchText.trim()) {
//         router.push(`/?q=${encodeURIComponent(searchText)}`);
//     } else {
//         router.push('/');
//     }
  
//   };

//   const handleNext = () => setPage(prev => prev + 1);
//   const handlePrev = () => setPage(prev => Math.max(prev - 1, 1));





