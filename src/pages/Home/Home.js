import CategoryTags from "./CategoryTags";
import Hero from "./Hero";
import RecentPosts from "./RecentPosts";

export default function Home() {
    return (
        <>
            <Hero />
            <RecentPosts />
            <CategoryTags />
        </>
    );
}