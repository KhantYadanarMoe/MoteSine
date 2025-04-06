import About from "@/Components/Home/About";
import Banner from "@/Components/Home/Banner";
import Favorite from "@/Components/Home/Favorite";
import Reviews from "@/Components/Home/Reviews";
import Hero from "@/Components/Home/Hero";
import Location from "@/Components/Home/Location";
import Reserve from "@/Components/Home/Reserve";

export default function Home() {
    return (
        <>
            <Hero />
            <Banner />
            <Favorite />
            <About />
            <Reserve />
            <Reviews />
            <Location />
        </>
    );
}
