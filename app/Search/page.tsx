'use client'

import SearchBar from "../components/searchbar";
import AnimeGrid from "../components/animegrid";
import { AnimeData, fetchSearchAnime } from "@/lib/animeServices";
import { useState,useEffect,Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function SearchPage() {
    return (
        // This 'Suspense' tag fixes the error!
        // It shows "Loading..." for a split second while reading the URL.
        <Suspense fallback={<div className="text-white text-center p-10">Loading Search...</div>}>
            <SearchContent />
        </Suspense>
    );
}

function SearchContent() {
    const [searchText, setSearchText] = useState("");
    const [results, setResults] = useState<AnimeData[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const router = useRouter();
    const searchParams = useSearchParams();

    // --- 2. THE FETCH LOGIC ---
    const executeSearch = async (query: string) => {
        setIsLoading(true);
        try {
            // If query is empty, fetch top anime, otherwise search
            const data = await fetchSearchAnime(query);
            setResults(data);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    // --- 3. THE "BRAIN" (useEffect) ---
    // This runs automatically when the page loads OR when the URL changes.
    useEffect(() => {
        // Get the query from the URL (e.g., ?q=Naruto)
        const query = searchParams.get("q") || ""; 
        
        // Update the input box to match the URL
        setSearchText(query);
        
        // Actually fetch the data
        executeSearch(query);

    }, [searchParams]); // <--- This dependency makes it run on URL updates

    // --- 4. THE USER ACTION ---
    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault(); // Stop page reload

        // We DO NOT fetch data here. 
        // We only update the URL. The useEffect above will notice and do the work.
        if (searchText.trim()) {
            router.push(`/Search?q=${encodeURIComponent(searchText)}`);
        } else {
            router.push(`/Search`);
        }
    };

    return ( 
        <>
        <div className="flex flex-col gap-4 min-h-screen  max-w-screen items-center font-sans " >
            <div className="flex flex-col z-10 gap-2 max-w-270 w-full min-h-screen ">
                <div className="flex flex-wrap justify-start rounded-2xl gap-2 p-3 ">
                    <SearchBar searchText={searchText} setSearchText={setSearchText} handleSearch={handleSearch} />
                    
                </div>

                <div className="flex flex-col z-10 gap-2 max-w-270 w-full min-h-screen "> 
                        <AnimeGrid   isLoading={isLoading} animedata={results} search={"search"}/>
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





