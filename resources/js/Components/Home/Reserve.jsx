import Tables from "../../../images/table.jpg";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

export default function Reserve() {
    return (
        <section
            className="relative h-[400px] bg-fixed bg-cover bg-center"
            style={{
                backgroundImage: `url(${Tables})`,
            }}
        >
            <div className="absolute inset-0 bg-black/50"></div>

            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
                <h2 className="text-2xl md:text-4xl font-semibold mb-4">
                    Reserve Your Table Today
                </h2>
                <p className="text-sm md:text-base mb-6">
                    Enjoy an unforgettable dining experience with your loved
                    ones.
                </p>
                <Link to="/reservation">
                    <Button className="bg-accentRed hover:bg-hoverRed text-white font-medium px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg">
                        Book Now
                    </Button>
                </Link>
            </div>
        </section>
    );
}
