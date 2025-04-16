import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import Typewriter from "./typewriter";
import { SiGithub } from "@icons-pack/react-simple-icons";



export default function ProjectOverview(
    {
        title,
        description,
        image,
        date,
        tags, // i.e. ["Next.js", "React", "TypeScript"]
        githubLink,
        websiteLink,
    }: {
        title: string;
        description: string;
        date: Date; // i.e. "2023-01-01"
        image?: string; // URL to the image
        tags: {name: string, url: string}[]; // i.e. [{"Next.js": "https://nextjs.org"}, {"React": "https://reactjs.org"}]
        githubLink?: string; // URL to the GitHub repository
        websiteLink?: string; // URL to the website
    }
) {
    return (
        <Dialog>
            <DialogTrigger className="bg-[#232323] hover:bg-[#464646] rounded-md p-2 px-5 text-white transition-all m-4 cursor-pointer">{title}</DialogTrigger>
            <DialogContent className="bg-[#1a1a1a]">
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <div className="text-gray-300">
                            {new Date(date).toLocaleDateString("en-GB", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                            })}
                            
                            
                        </div>
                        {image && (
                        <Image
                            src={image}
                            alt={title}
                            className="mt-4 rounded-md shadow-lg"
                            width={500}
                            height={300}
                        />
                    )}

                        <Typewriter text={description} />

                        <div className="flex flex-wrap gap-2 mt-2">
                            {tags.map((tag) => (
                                <a
                                    href={tag.url}
                                    key={tag.name}
                                    className="bg-[#141414] rounded-md p-2 px-3 text-white outline-1 outline-[#232323] hover:outline-[#492f5a] transition-all duration-300"
                                >
                                    {tag.name}
                                </a>
                            ))}
                        </div>
                        <div className="flex gap-2 mt-4">
                            {githubLink && (
                                <a
                                    href={githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-[#232323] hover:bg-[#464646] rounded-md p-2 px-5 text-white transition-all"
                                >
                                    <SiGithub size={20} className="translate-y-0.5" />
                                </a>
                            )}
                            {websiteLink && (
                                <a
                                    href={websiteLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-[#232323] hover:bg-[#464646] rounded-md p-2 px-5 text-white transition-all"
                                >
                                    Website
                                </a>
                            )}
                        </div>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
}
