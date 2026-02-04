'use client'

import SearchBar from "../components/searchbar";
import AnimeGrid from "../components/animegrid";
import { AnimeData, fetchSearchAnime } from "@/lib/animeServices";
import { useState,useEffect } from "react";
import { Paginator } from 'primereact/paginator';

export default function Search() {
    const [searchText, setSearchText] = useState("");
    const [Animedata, setAnimeData] = useState<AnimeData[]>([]);
    const [HeaderTitle, setHeaderTitle] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const [page, setPage] = useState(1);
    const [totalRecords, setTotalRecords] = useState(0); 
    const [first, setFirst] = useState(0);

    const loadData = async (query: string, pageNumber: number) => {
            setIsLoading(true);

            try{
                const data = await fetchSearchAnime(query, pageNumber);
                setAnimeData(data.Anidata);
                setHeaderTitle(data.title);

                setTotalRecords(data.pagination?.items?.total || 0);
            } catch(error){
                console.error("Failed to load anime:", error);
             } finally {
                 setIsLoading(false);
             }
        }   

    useEffect(() => { 
        loadData(searchText, 1);

    },[]);

    const handleSearch = async (event: React.FormEvent) => {
        event.preventDefault();
        setPage(1);
        setFirst(0);

        await loadData(searchText, 1);
    };

    const onPageChange = (event: any) => {
        setFirst(event.first);
        const newPage = event.page + 1; 
        setPage(newPage);
        loadData(searchText, newPage);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return ( 
        <>
        <div className="flex flex-col gap-4 min-h-screen  max-w-screen items-center font-sans mt-15" >
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-violet-600/20 rounded-full blur-[100px] -z-10"></div>
            <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-600/10 rounded-full blur-[100px] -z-10"></div>
            <div className="flex flex-col z-10 gap-2 max-w-270 w-full min-h-screen ">
                <div className="flex flex-wrap justify-start rounded-2xl gap-2 p-3">
                    <SearchBar searchText={searchText} setSearchText={setSearchText} handleSearch={handleSearch} />
                    
                </div>

                <div className="flex flex-col z-10 gap-2 max-w-270 w-full min-h-screen "> 
                        <AnimeGrid   isLoading={isLoading} animedata={Animedata} search={true} title={HeaderTitle}/>

                        {!isLoading && totalRecords > 0 && (
                        <div className="w-full bg-white/5 backdrop-blur-md max-w-270 rounded-xl border border-white/10 p-2">
                            <Paginator 
                                first={first} 
                                rows={25} 
                                totalRecords={totalRecords} 
                                onPageChange={onPageChange}
                                className="bg-transparent!" 
                                template="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink"
                            />
                        </div>
                    )}
                </div> 


            </div>
        </div>
        </>
    )
}
