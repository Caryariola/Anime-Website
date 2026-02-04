export default function LaodingCard() {
    return (
        <div className="w-full rounded-2xl overflow-hidden border border-white/5 bg-white/5 animate-pulse relative">
            <div className="w-full aspect-3/4 bg-white/10"></div>
            <div className="p-3 space-y-2">
                <div className="h-4 bg-white/20 rounded w-3/4 mb-3"></div>
                <div className="flex gap-2">
                    <div className="h-3 bg-white/10 rounded w-1/4"></div>
                    <div className="h-3 bg-white/10 rounded w-1/4"></div>
                </div>
            </div>
        </div>
    )
}