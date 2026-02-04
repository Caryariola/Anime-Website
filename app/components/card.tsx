import Link from 'next/link';

export default function Card(props: any) {
    // Keep your URL logic exactly as is
    const safeTitle = props.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)+/g, '');

    const pageUrl = `/Anime/${props.malId}/${safeTitle}`;

    return (
        <Link href={pageUrl}>
            <div className="group relative w-full rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]">
                <div className="h-full bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl overflow-hidden group-hover:border-violet-500/30 transition-colors">
                    
                    <div className="w-full aspect-3/4 overflow-hidden relative">
                        <img 
                            src={props.image} 
                            alt={props.title} 
                            loading="lazy" 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div> 

                    <div className="p-3">
                        <p className="text-sm font-bold text-gray-100 h-10 line-clamp-2 overflow-hidden mb-2 leading-tight group-hover:text-violet-300 transition-colors">
                            {props.title}
                        </p>
                        
                        <div className="flex items-center justify-between text-xs text-gray-400">
                            <div className="flex gap-2">
                                <span>{props.type}</span>
                                <span className="text-gray-600">•</span>
                                <span>{props.episodes || '?'} EP</span>
                            </div>
                            
                            <div className="flex items-center gap-1 text-yellow-500 font-semibold bg-yellow-500/10 px-1.5 py-0.5 rounded">
                                <i className="pi pi-star-fill" style={{ fontSize: '0.6rem' }}></i>
                                <span>{props.score}</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>    
        </Link>
    )
}