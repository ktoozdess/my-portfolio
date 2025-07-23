const Hero = () => (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative">
        <h1 className="text-5xl font-bold mb-4 text-gray-500">Hi, I'm Tagir 👋</h1>
        <p className="text-xl mb-6 text-gray-700">Frontend Developer | React, Vite, TypeScript</p>

        <div className="absolute bottom-8 flex flex-col items-center text-gray-400 animate-bounce">
            <span className="mb-2">Scroll</span>
            <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
        </div>
    </section>
);

export default Hero;
