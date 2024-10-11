import { useContext } from "react"
import { CountriesContext } from "../store/context-provider"
export default function Error (){
    const {darkMode} = useContext(CountriesContext);
    return (
        <div className={`${!darkMode? 'bg-veryDarkBlueBackground' : 'bg-gray-500'} w-screen h-screen flex justify-center items-center `}><div className="p-[100px] text-white border border-veryDarkBlueText shadow-md">This Page Doesnt exit</div></div>
    )
}