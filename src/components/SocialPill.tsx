"use client";
import { IconType } from "@icons-pack/react-simple-icons";
import { useState } from "react";

export default function SocialPill({
    name,
    Icon,
    link,
    color = "#ffffff"
}: {
    name: string;
    Icon: IconType; // string should not be used in most cases
    link: string;
    color?: string;
}) {
    function setShowUsernameAfterDelay() {
        setShowUsername(false)
        setTimeout(() => {
            setShowUsernameDelayed(false)
        }, 300);
      }
    const [showUsername, setShowUsername] = useState(false);
    const [showUsernameDelayed, setShowUsernameDelayed] = useState(false);
    return (
        <div
        onMouseOver={() => {
            setShowUsername(true);
            setShowUsernameDelayed(true);
        }}
        onMouseLeave={setShowUsernameAfterDelay}
    >
      <a
        
        href={link}
        target="_blank"
        className={`flex items-center justify-center bg-[#232323] hover:bg-[#464646] rounded-md p-2 px-5 m-1 transition-all duration-300 w-14
            ${showUsernameDelayed ? "w-max" : ""}
            ${link ? "cursor-pointer" : ""}
            `}
      >
        <div className="flex items-center">
<Icon
            color={color}
            className="flex w-4 translate-y-[2px]"
          />
          
          
          <span 
            className={`text-gray-300 font-semibold overflow-hidden transition-all duration-300 whitespace-nowrap
                ${showUsername ? "max-w-[150px] ml-2" : "max-w-0 ml-0"}
                `}
          >{ name }</span>
        </div>
      </a>
    </div>
    );
}