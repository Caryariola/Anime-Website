'use client'

export default function Contact() {
    return (
        <div className="relative min-h-[85vh] flex items-center justify-center p-6 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-violet-600/20 rounded-full blur-[100px] -z-10"></div>
            <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-600/10 rounded-full blur-[100px] -z-10"></div>

            <div className="max-w-2xl w-full rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row bg-black/30! backdrop-blur-md! border! border-white/10!">
        

                <div className="w-full md:w-2/5 bg-linear-to-br from-violet-900/40 to-blue-900/40 flex items-center justify-center p-8">
                    <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl">
                        <img 
                            src="/profile.jpg" 
                            alt="Cary Jr." 
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                e.currentTarget.src = "https://via.placeholder.com/300?text=Dev";
                            }}
                        />
                    </div>
                </div>


                <div className="w-full md:w-3/5 p-8 flex flex-col justify-center text-center md:text-left">
          
                    <h1 className="text-3xl font-bold text-white mb-2 drop-shadow-md">
                        Cary Jr. Gomez Ariola
                    </h1>
          
                    <p className="text-violet-300 font-semibold mb-6 flex items-center justify-center md:justify-start gap-2">
                        <i className="pi pi-code" style={{ fontSize: '1.2rem' }}></i> 
                        Computer Science Student
                    </p>
          
                    <p className="text-gray-300 mb-8 leading-relaxed">
                        Hi! I built this Anime Search App using <b className="text-white">Next.js</b> and the <b className="text-white">Jikan API</b>. 
                        I'm passionate about web development and creating clean, efficient code.
                    </p>

                    <div className="flex items-center gap-4 mb-6">
                        <div className="h-px bg-white/10 flex-1 md:hidden" />
                        <h2 className="text-xs uppercase tracking-widest text-gray-500 font-bold">
                            Connect with me
                        </h2>
                        <div className="h-px bg-white/10 flex-1 md:hidden" />
                    </div>

                
                    <div className="flex flex-wrap justify-center md:justify-start gap-3">
            
                        <a 
                            href="https://github.com/Caryariola" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-3 bg-white/5 border border-white/10 rounded-full text-gray-300 hover:bg-black hover:text-white hover:border-white/30 transition-all duration-300 flex items-center justify-center"
                            title="GitHub"
                        >
                            <i className="pi pi-github" style={{ fontSize: '1.5rem' }}></i>
                        </a>

                        <a 
                            href="https://www.linkedin.com/in/caryariolajr/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-3 bg-white/5 border border-white/10 rounded-full text-gray-300 hover:bg-blue-700 hover:text-white hover:border-blue-500 transition-all duration-300 flex items-center justify-center"
                            title="LinkedIn"
                        >
                            <i className="pi pi-linkedin" style={{ fontSize: '1.5rem' }}></i>
                        </a>

                        <a 
                            href="https://www.facebook.com/caryariolajr" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-3 bg-white/5 border border-white/10 rounded-full text-gray-300 hover:bg-blue-600 hover:text-white hover:border-blue-400 transition-all duration-300 flex items-center justify-center"
                            title="Facebook"
                        >
                            <i className="pi pi-facebook" style={{ fontSize: '1.5rem' }}></i>
                        </a>

 
                        <a 
                            href="mailto:carygomezariola@gmail.com"
                            className="p-3 bg-white/5 border border-white/10 rounded-full text-gray-300 hover:bg-red-600 hover:text-white hover:border-red-400 transition-all duration-300 flex items-center justify-center"
                            title="Email"
                        >
                            <i className="pi pi-envelope" style={{ fontSize: '1.5rem' }}></i>
                        </a>

                    </div>
                </div>
            </div>
        </div>
    )
}