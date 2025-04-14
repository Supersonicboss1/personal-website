"use client";
import { SiBluesky, SiDiscord, SiGithub } from "@icons-pack/react-simple-icons";
import { useState } from "react";

export default function SocialPill({
    name,
    icon,
    link,
    color = "#ffffff"
}: {
    name: string;
    icon: "github" | "bluesky" | "discord";
    link: string;
    color?: string;
}) {
  const renderIcon = () => {
    switch (icon) {
      case "github":
        return <SiGithub color={color} className="flex w-4 translate-y-[2px]" />;
      case "bluesky":
        return <SiBluesky color={color} className="flex w-4 translate-y-[2px]" />;
      case "discord":
        return <SiDiscord color={color} className="flex w-4 translate-y-[2px]" />;
      default:
        return null; // Should not happen since type is restricted
    }
  };
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
          {renderIcon()}
          
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