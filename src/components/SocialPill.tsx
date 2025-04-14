"use client";
import Image from "next/image";
import { JSX, useState } from "react";

export default function SocialPill({
    name,
    icon,
    link,
    color = "#ffffff"
}: {
    name: string;
    icon: string | JSX.Element;
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
         {(typeof icon === 'string') ? <Image
            src={icon}
            alt="Icon"
            width={16}
            height={16}
            className="flex w-4 translate-y-[2px]"
            style={
                {
                    color: color,
                }
            }
          /> : <span v-else>{ icon }</span>}
          
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