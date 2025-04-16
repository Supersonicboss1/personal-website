"use client";
// Writes text in a typewriter style
import { IBM_Plex_Mono } from "next/font/google";
import { useEffect, useState } from "react";

const ibmPlexMono = IBM_Plex_Mono({
    subsets: ["latin"],
    weight: "500",
});

export default function Typewriter({
    text,
    speed = 20,
}: {
    text: string;
    speed?: number;
}) {
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            if (index < text.length) {
                setDisplayedText(text.slice(0, index + 1));
                index++;
            } else {
                clearInterval(interval);
            }
        }, speed);

        return () => clearInterval(interval);
    }, [text, speed]);

    return (
        <span className={ibmPlexMono.className}>
            {displayedText}
        </span>
    );
}