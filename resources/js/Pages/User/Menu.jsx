import MenuCards from "@/Components/Menu/MenuCards";
import MenuCategories from "@/Components/Menu/MenuCategories";
import MenuHeader from "@/Components/Menu/MenuHeader";
import { useOrderSetting } from "@/contexts/OrderSettingContext";
import Unavailable from "../../../images/Unavailable.jpg";
import { useState } from "react";

export default function Menu() {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const { form: orderSetting } = useOrderSetting();
    return (
        <div className="w-[96%] lg:w-[90%] mx-auto">
            {orderSetting.allow ? (
                <>
                    <MenuCategories onCategorySelect={setSelectedCategory} />
                    <MenuHeader selectedCategory={selectedCategory} />
                    <MenuCards selectedCategory={selectedCategory} />
                </>
            ) : (
                <div className="h-[85vh] flex flex-col justify-center items-center">
                    <img src={Unavailable} alt="" className="w-48 mb-8" />
                    <h2 className="md:text-xl font-semibold text-gray-700 mb-2 text-center">
                        We are not yet ready!
                    </h2>
                    <p className="text-gray-500 mb-4 text-xs md:text-sm text-center">
                        We are preparing to serve our menu. So order feature
                        isn't available now. We're sorry!
                    </p>
                </div>
            )}
        </div>
    );
}
