export default function Hero() {
    return (
        <div className="
        bg-gradient-to-r from-[rgb(233,208,138)] to-[#F09300]
        dark:from-slate-900 dark:to-slate-600
        flex flex-col md:flex-row align-middle justify-center md:justify-center items-center w-full md:min-h-[60vh] md:gap-[30vw]
        ">
            <div className="py-10 self-center dark:opacity-25 md:opacity-100 absolute">
                <img className="w-[60vw] md:w-[20vw]" src="hero-logo.png" alt="Wanderlust"></img>
            </div>
            <div className="z-10 md:max-w-[40vw] mt-10 md:m-0">
                <div className="text-slate-900 text-center self-start dark:text-white text-6xl font-extrabold">Explore & Discover
                    <p className="font-light mt-1 text-lg">
                        Get lost in the world of captivating travel stories and stunning destinations. Are you ready for an adventure?
                    </p>
                    <a href="/blog" className="hover:bg-transparent">
                        <button type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Dive In</button>
                    </a>
                </div>
            </div>
            <div className="z-10 md:mr-[10vw] md:max-w-[40vw] mt-3 mb-10 md:m-0 flex md:flex-col gap-10 align-middle justify-center items-center">
                {
                    ["category", "tags"].map((item) => (
                        <a href={`#${item}`}>
                            <div className="font-bold md:text-3xl hover:text-gray-500 uppercase dark:text-white">{item}
                            </div>
                        </a>
                    ))

                }
            </div>
        </div>
    )
}
