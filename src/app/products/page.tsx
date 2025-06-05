import FilterTabs from "@/components/common/FilterTabs";
import Search from "@/components/common/Search";
import SortBySelect from "@/components/common/select";
import ProductHero from "@/components/Product/ProductCatalogue/productHeroSection/ProductHero";
import ProductsList from "./ProductsList";

export default function Products() {
    return <>
        <ProductHero />
        <div className="p-4 flex mx-auto items-center gap-4 my-25 justify-center">
            <FilterTabs />
            <Search />
            <SortBySelect label={"Sort By"} options={['Price Low to High', 'Price High to Low', 'Highest Rated', 'Lowest Rated', 'Most Popular']} />
            {/* Add your products list below */}
        </div>
        <ProductsList />
    </>
}