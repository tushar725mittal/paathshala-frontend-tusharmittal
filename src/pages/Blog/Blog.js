import BlogArticle from "./BlogArticle";
import Comments from "./Comments";

export default function Blog() {
    return (
        <div className="dark:bg-slate-700 bg-slate-300 pb-5">
            <BlogArticle />
            <Comments />
        </div>
    );
}