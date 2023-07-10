import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
export default function RecentPosts() {
    return (
        <div className="
        bg-gradient-to-r from-[rgb(233,208,138)] via-[#F09300] to-[rgb(233,208,138)]
        dark:via-slate-600 dark:to-slate-900 dark:from-slate-900
        flex flex-col align-middle justify-center md:justify-center items-center w-full md:min-h-[60vh]
        ">
            <div className="text-slate-900 text-center mt-5 dark:text-white text-6xl font-extrabold">Recent Posts</div>
            <div className=" w-[100vw] md:w-[30vw] md:hidden">
                <Carousel autoPlay interval="20000" transitionTime="1000" infiniteLoop showStatus={false} centerMode={true}>
                    {["Mile-High Travel 2023", "Soothing Yoga Retreats", "Himalyan Adventure"].map((item, index) => (
                        <Posts item={item} index={index} />
                    ))
                    }
                </Carousel>
            </div>
            <div className="hidden md:flex">
                {["Mile-High Travel 2023", "Soothing Yoga Retreats", "Himalyan Adventure"].map((item, index) => (
                    <Posts item={item} index={index} />
                ))}
            </div>
        </div>
    )
}

function Posts({ item, index }) {
    return (
        <div class="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 scale-75 md:scale-90">
            <a href="/blog">
                <img class="rounded-t-lg h-[35vh] w-full" src={`image-${index + 1}.png`} alt="recentpost" />
            </a>
            <div class="p-5">
                <a href="/blog">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item}</h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Come with me to conquer the the mountains, seas, oceans, yoga, and sky.</p>
            </div>
        </div>
    )
}