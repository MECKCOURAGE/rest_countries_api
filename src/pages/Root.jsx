import { Outlet} from "react-router-dom"
import MainNavigation from "../components/MainNavigation";
import { useContext } from "react";
import { CountriesContext } from "../store/context-provider";

export default function Root() {
    const {darkMode} = useContext(CountriesContext)
    return (
        <div className={`${!darkMode ? 'bg-veryDarkBlueBackground': 'bg-gray-100'} h-screen`}>
            <MainNavigation/>
            <main className={`${!darkMode ? 'bg-veryDarkBlueBackground': 'bg-gray-100'} pt-[35px] pl-6 pr-6 md:pl-16 md:pr-16 `}>
               
            <Outlet />
            </main>
        </div>
    )
}
