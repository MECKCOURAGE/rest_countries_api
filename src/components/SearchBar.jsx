import { useContext } from "react"
import { CountriesContext } from "../store/context-provider"
import { useNavigate, useLocation } from "react-router-dom";
export default function SearchBar() {
  const { darkMode, searchingItem } = useContext(CountriesContext);
  const navigate = useNavigate();
  const location = useLocation();

  function handleChange(event){
    if (location.pathname !== "/") {
      navigate("/");
  }
    searchingItem(event.target.value)
  }

  return (
    <div className="relative max-w-sm">
      <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`w-4 h-4 ${!darkMode ? 'text-whiteText' : 'text-gray-500'}`}
          viewBox="0 0 512 512"
        >
          <path
            d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
            fill="none"
            stroke="currentColor"
            strokeMiterlimit="10"
            strokeWidth="32"
          />
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="32"
            d="M338.29 338.29L448 448"
          />
        </svg>
      </div>
      <input
        type="text"
        name="search"
        placeholder="Search for a country..."
        autoComplete="off"
        aria-label="search"
        onChange={handleChange}
        className={`pl-12 py-2 md:w-96 w-[310px] h-[45px] md:h-[45px] ${!darkMode ? 'placeholder-whiteText' : 'placeholder-gray-500'} text-xs font-light shadow-md ${!darkMode && 'bg-darkBlueElements text-whiteText'}  rounded`}
      />
    </div>
  )
}