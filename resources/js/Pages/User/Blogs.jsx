import AllBlogs from "@/Components/Blogs/AllBlogs";
import Hero from "@/Components/Blogs/Hero";
import LatestBlog from "@/Components/Blogs/LatestBlog";

export default function Blogs() {
    return (
        <div className="px-6">
            <Hero />
            <LatestBlog />
            <AllBlogs />
        </div>
    );
}
