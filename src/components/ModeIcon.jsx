import { useContext } from "react";
import { CountriesContext } from "../store/context-provider";

export default function ModeIcon() {
  const {darkMode} = useContext(CountriesContext)
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="ionicon w-[10px] h-[15px] md:w-4 md:h-[22px]"
      viewBox="0 0 512 512"
      fill="white"
    >
      <path
        d="M160 136c0-30.62 4.51-61.61 16-88C99.57 81.27 48 159.32 48 248c0 119.29 96.71 216 216 216 88.68 0 166.73-51.57 200-128-26.39 11.49-57.38 16-88 16-119.29 0-216-96.71-216-216z"
        fill="white" 
        stroke={!darkMode ? "bg-veryDarkBlueBackground": "black"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32" 
      />
    </svg>
  );
}
