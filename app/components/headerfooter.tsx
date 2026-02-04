import Link from 'next/link';

export default function Header(props: any) {
    return (
        <header className='sticky top-4 z-50 px-2 md:px-6 w-full max-w-7xl mx-auto'>
            

            <div className="flex items-center justify-between px-4 py-3 md:px-6 rounded-full border border-white/10 bg-black/60 backdrop-blur-xl shadow-2xl transition-all hover:border-white/20">
                
                <div className="shrink-0">
                    <Link href="/" className="group flex items-center gap-2">

                        <span className="text-lg sm:text-2xl font-black tracking-tight text-transparent bg-clip-text bg-linear-to-r from-violet-400 to-fuchsia-400 group-hover:opacity-80 transition-opacity">
                            {props.name}
                        </span>
                    </Link>
                </div>


                <nav className="flex items-center gap-1 md:gap-2">
                    <NavLink href="/" label="Home" />
                    <NavLink href="/Search" label="Search" /> 
                    <NavLink href="/about" label="About" />
                    <NavLink href="/contact" label="Contact" />
                </nav>

            </div>
        </header>
    );
}


function NavLink({ href, label }: { href: string, label: string }) {
    return (
        <Link 
            href={href} 
            className="px-3 py-1.5 md:px-5 md:py-2 text-xs sm:text-sm font-medium text-gray-300 rounded-full transition-all duration-300 
            hover:bg-white/10 hover:text-white hover:shadow-[0_0_15px_rgba(139,92,246,0.3)]"
        >
            {label}
        </Link>
    );
}

export function Footer() {
    return (
        <footer className="w-full mt-24 py-8 border-t border-white/5 bg-black/20 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 flex flex-col items-center gap-4 text-center">
                
                <div className="w-16 h-1 rounded-full bg-linear-to-r from-violet-600 to-blue-600 opacity-50 mb-2"></div>

                <p className="text-gray-400 text-sm">
                    © {new Date().getFullYear()} <span className="text-gray-200 font-semibold">AnimeHub</span>. All rights reserved.
                </p>

                <p className="text-xs text-gray-600">
                    Powered by <a href="https://jikan.moe" target="_blank" rel="noopener noreferrer" className="hover:text-violet-400 transition-colors underline decoration-dotted">Jikan API</a>
                </p>
            </div>
        </footer>
    );
}