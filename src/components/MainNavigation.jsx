import Button from "./Button"
import ModeIcon from "./ModeIcon"
import { useContext } from "react"
import { CountriesContext } from "../store/context-provider"


export default function MainNavigation (){
    const {settingMode, darkMode} = useContext(CountriesContext)

    return (
        <nav className= {`h-[70px] justify-between flex items-center m-0 p-0 ${!darkMode ? 'bg-darkBlueElements ': 'bg-white '} shadow-md  `}>

               <div className="md:ml-16 ml-6">
                <h2 className={`text-xs ${!darkMode && 'text-whiteText'} font-extrabold md:text-xl `}>Where in the world?</h2>
                </div>

               <div className="md:mr-16 mr-6">
                <Button onHit={settingMode}>
                <ul className={`flex text-base ${!darkMode && 'text-whiteText'} font-semibold text-xs md:text-base`}>
                    <li >
                    <ModeIcon/>
                    </li>
                    <li className="ml-1.5">     
                    {!darkMode ? "Light" :"Dark"} Mode
                    </li>
                </ul>
                </Button>
                </div>
        </nav>
    )
}