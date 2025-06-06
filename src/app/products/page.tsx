import FilterTabs from "@/components/common/FilterTabs";

import ProductHero from "@/components/Product/ProductCatalogue/productHeroSection/ProductHero";
import ProductsList from "./ProductsList";
import SearchAndSort from "./SearchAndSort";

export default function Products() {
    return <>
    <div className="md:hidden  overflow-hidden">
            <SearchAndSort mobileStyle />
        </div>
        <ProductHero />
        <div className="px-4 flex flex-col-reverse xl:flex-row mx-auto items-center gap-4  justify-center">
            <FilterTabs />
            <div className="hidden md:flex items-center gap-4 justify-center">
            <SearchAndSort />
            </div>
            
            {/* Add your products list below */}
        </div>
        <ProductsList />
    </>
}