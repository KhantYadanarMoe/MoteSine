import About from "@/Components/Home/About";
import Banner from "@/Components/Home/Banner";
import Favorite from "@/Components/Home/Favorite";
import Reviews from "@/Components/Home/Reviews";
import Hero from "@/Components/Home/Hero";
import Location from "@/Components/Home/Location";
import Reserve from "@/Components/Home/Reserve";
import { useOrderSetting } from "@/contexts/OrderSettingContext";

export default function Home() {
    const { form: orderSetting } = useOrderSetting();
    return (
        <>
            <Hero />
            <Banner />
            {orderSetting?.allow && <Favorite />}
            <About />
            <Reserve />
            <Reviews />
            <Location />
        </>
    );
}
