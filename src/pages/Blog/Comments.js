export default function Comments() {
    return (
        <>
            <div className="px-5 md:px-10 mt-5">
                <hr class="h-px my-8 bg-gray-400 dark:bg-gray-700"></hr>
                <form>
                    <div class="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                        <div class="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                            <label for="comment" class="sr-only">Your comment</label>
                            <textarea id="comment" rows="4" class="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Write a comment..." required></textarea>
                        </div>
                        <div class="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
                            <button type="submit" class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                                Post comment
                            </button>
                            <div class="flex pl-0 space-x-1 sm:pl-2">
                                <button type="button" class="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                    <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 20">
                                        <path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M1 6v8a5 5 0 1 0 10 0V4.5a3.5 3.5 0 1 0-7 0V13a2 2 0 0 0 4 0V6" />
                                    </svg>
                                    <span class="sr-only">Attach file</span>
                                </button>
                                <button type="button" class="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                    <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                                        <path d="M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                                    </svg>
                                    <span class="sr-only">Set location</span>
                                </button>
                                <button type="button" class="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                    <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                        <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                                    </svg>
                                    <span class="sr-only">Upload image</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
                <p class="ml-auto text-xs text-gray-500 dark:text-gray-400">Remember, contributions to this topic should follow our <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline">Community Guidelines</a>.</p>

                <article className="mt-10">
                    <div class="flex items-center mb-4 space-x-4">
                        <img class="w-10 h-10 rounded-full" src="https://i.pravatar.cc/300" alt="" />
                        <div class="space-y-1 font-medium dark:text-white">
                            <p>Travel Lover<time datetime="2014-08-16 19:00" class="block text-sm text-gray-500 dark:text-gray-400">Joined on August 2019</time></p>
                        </div>
                    </div>
                    <div class="flex items-center">
                    </div>
                    <footer class="mb-5 text-sm text-gray-500 dark:text-gray-400"><p>Reviewed in India on <time datetime="2023-03-03 19:00">March 3, 2017</time></p></footer>
                    <p class="mb-2 text-gray-500 dark:text-gray-400">Your blog beautifully captures the essence of solo travel in the Himalayas. The descriptions of serene landscapes, cultural encounters, and personal growth are inspiring. It makes me want to pack my bags and embark on my own transformative journey. Well done!</p>
                </article>

                <article className="mt-10">
                    <div class="flex items-center mb-4 space-x-4">
                        <img class="w-10 h-10 rounded-full" src="https://i.pravatar.cc/300" alt="" />
                        <div class="space-y-1 font-medium dark:text-white">
                            <p>Fantastic Travelor<time datetime="2014-08-16 19:00" class="block text-sm text-gray-500 dark:text-gray-400">Joined on May 2020</time></p>
                        </div>
                    </div>
                    <div class="flex items-center">
                    </div>
                    <footer class="mb-5 text-sm text-gray-500 dark:text-gray-400"><p>Reviewed in the United Kingdom on <time datetime="2023-03-03 19:00">March 3, 2017</time></p></footer>
                    <p class="mb-2 text-gray-500 dark:text-gray-400">As someone who has experienced solo travel in the Himalayas, I can truly say that your blog resonates with my own memories. The paragraphs on embracing solitude amidst nature's grandeur and challenging oneself hit the nail on the head. It's a remarkable and life-changing adventure that everyone should embark on at least once. Great job in capturing the spirit of Himalayan solo travel!</p>
                </article>

            </div>
        </>
    )
}