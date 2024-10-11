import Filter from "./Filter";
import SearchBar from "./SearchBar";
import { useContext } from "react";
import { CountriesContext } from "../store/context-provider";

export default function HomePageHeader() {
    const { filteredCountries} = useContext(CountriesContext);
    return (
        <div>
            <div className={`md:flex md:justify-between ${filteredCountries.length === 0 && 'md:mb-[30px] mb-[10px]'}`}>
                <SearchBar />
                <Filter />
            </div>
        </div>
    );
}
