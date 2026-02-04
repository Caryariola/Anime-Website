export interface AnimeData {
  rank: number;
  title: string;
  image: string;  
  type: string;
  score: number;
  episodes: number | string;
  mal_id: number;
  popularity: number;
  genre: string[];
}

function tranformData(rawData: any[]): AnimeData[]{
  return rawData.map((anime: any) => ({
    rank: anime.rank || 9999,
    title: anime.title_english || anime.title,
    image: anime.images.jpg.large_image_url || anime.images.jpg.image_url,
    type: anime.type,
    score: anime.score || 'N/A',
    episodes: anime.episodes || 'N/A',
    mal_id: anime.mal_id,
    popularity: anime.popularity || 9999,
    genre: anime.genres ? anime.genres.map((g: any) => g.name) : []
  }));
}

export const dynamicTitle = (query: string) => {
  if (query.length > 0) {
    return `Search results for "${query}"`;
  }

  const now = new Date();
  const month = now.getMonth();
  const year = now.getFullYear();
  let season = '';

  if (month === 11 || month <= 1) season = "Winter";
  else if (month >= 2 && month <= 4) season = "Spring";
  else if (month >= 5 && month <= 7) season = "Summer";
  else season = "Fall";

  return `${season} ${year} Anime`;
}

export async function fetchTopPopular(): Promise<AnimeData[]> {
  const response = await fetch(`https://api.jikan.moe/v4/top/anime?filter=bypopularity&limit=10`);
  const json = await response.json();
  const rawData = json.data || [];

  return tranformData(rawData);
}

export async function fetchPopularThisSeason():Promise<{PTS: AnimeData[], Title: string}> {
  const apiLink = `https://api.jikan.moe/v4/seasons/now?limit=10`;
  const response = await fetch(apiLink);
  const json = await response.json();

  let rawData = json.data || [];

    return {PTS: tranformData(rawData) , Title: dynamicTitle("") };
}

export async function fetchSearchAnime(query: any):Promise<AnimeData[]> {
  const apiLink = query 
    ? `https://api.jikan.moe/v4/anime?q=${encodeURIComponent(query)}&limit=25`
    : `https://api.jikan.moe/v4/top/anime`;
  const response = await fetch(apiLink);
  const json = await response.json();

   

  let rawData = json.data || [];

  if (query && query.trim().length > 0) {
    
    // Split search query into clean words: "  Black   Clover  " -> ["black", "clover"]
    const searchTerms = query.toLowerCase().trim().split(/\s+/);

    rawData = rawData.filter((anime: any) => {
      // Combine English and Standard titles to check both
      const combinedTitle = (
        (anime.title || "") + " " + 
        (anime.title_english || "")
      ).toLowerCase();

      // THE RULE: Every single word in the search query MUST exist in the title
      // "Black" exists? AND "Clover" exists?
      return searchTerms.every((term : any) => combinedTitle.includes(term));
    });
  }

  // 3. Slice back down to 10 items (since we fetched 25 to be safe)
  const finalData = rawData.slice(0, 25);

  return tranformData(finalData);
}

 