import MenuCards from "@/Components/Menu/MenuCards";
import MenuCategories from "@/Components/Menu/MenuCategories";
import MenuHeader from "@/Components/Menu/MenuHeader";

export default function Menu() {
    return (
        <div className="w-[96%] lg:w-[90%] mx-auto">
            <MenuCategories />
            <MenuHeader />
            <MenuCards />
        </div>
    );
}
