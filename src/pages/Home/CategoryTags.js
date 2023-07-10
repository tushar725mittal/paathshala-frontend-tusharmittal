export default function CategoryTags() {
    return (
        <div className="
        bg-gradient-to-r from-[#F09300] to-[rgb(233,208,138)]
        dark:from-slate-600 dark:to-slate-900
        flex flex-col md:flex-row align-middle justify-center md:justify-center items-center w-full md:min-h-[60vh] md:gap-[40vw]
        ">
            <div className="py-10 self-center dark:opacity-25 md:opacity-100 absolute">
                <img className="w-[60vw] md:w-[20vw]" src="ct-logo.png" alt="Wanderlust"></img>
            </div>
            <div className="md:scale-150 z-10">
                <div className="mt-5 md:m-0 font-medium text-center dark:text-white" id="category">
                    Category
                </div>
                <div className="flex flex-col">
                    {
                        ["Solo Travel", "Family Travel", "Couple Travel", "Group Travel"].map((item) => (
                            <a href="/blog" class="inline-flex justify-between items-center px-10 py-2 text-sm font-medium text-center text-blue-600 dark:text-white bg-transparent rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:bg-white hover:text-white dark:hover:text-black dark:focus:ring-blue-800">
                                {item}
                                <svg class="w-3.5 h-3.5 ml-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                        ))
                    }
                </div>
            </div>
            <div className="md:scale-150 z-10">
                <div className="mt-5 md:m-0 font-medium text-center dark:text-white" id="tags">
                    Tags
                </div>
                <div className="flex w-[80vw] md:w-[27vw] flex-wrap mt-3 md:mt-5">
                    {
                        ["Shimla", "Jaipur", "Hawaii", "Dance", "Mountains", "Beaches", "City", "Thar"].map((item) => (
                            <a href="/blog" className="hover:">
                                <button type="button" class="text-blue-700 hover:text-white border border-blue-600 bg-tranparent hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800">{item}</button>
                            </a>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}