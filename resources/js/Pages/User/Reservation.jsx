import ReservationHero from "@/Components/Reservation/Hero";
import ReservationInfo from "@/Components/Reservation/ReservationInfo";
import { useReservationSetting } from "@/contexts/ReservationSettingContext";
import Unavailable from "../../../images/Unavailable.jpg";

export default function Reservation() {
    const { form: reservationSetting } = useReservationSetting();
    return (
        <>
            {reservationSetting.allow ? (
                <>
                    <ReservationHero />
                    <ReservationInfo />
                </>
            ) : (
                <div className="h-[85vh] flex flex-col justify-center items-center">
                    <img src={Unavailable} alt="" className="w-48 mb-8" />
                    <h2 className="md:text-xl font-semibold text-gray-700 mb-2 text-center">
                        Table Reservation is not available now!
                    </h2>
                    <p className="text-gray-500 mb-4 text-xs md:text-sm text-center">
                        We are sorry! Table reservation service is temporarily
                        unavailable. We will come back later.
                    </p>
                </div>
            )}
        </>
    );
}
