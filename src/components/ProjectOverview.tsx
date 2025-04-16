import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import Typewriter from "./typewriter";



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
        tags: string[]; // i.e. ["Next.js", "React", "TypeScript"]
        githubLink?: string; // URL to the GitHub repository
        websiteLink?: string; // URL to the website
    }
) {
    return (
        <Dialog>
            <DialogTrigger className="bg-[#232323] hover:bg-[#464646] rounded-md p-2 px-5 text-white transition-all m-4">{title}</DialogTrigger>
            <DialogContent className="bg-[#1a1a1a]">
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <div className="text-gray-300 ">
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
                                <span
                                    key={tag}
                                    className="bg-[#141414] rounded-md p-2 px-3 text-white outline-1 outline-[#232323] hover:outline-[#464646] transition-all duration-300"
                                >
                                    {tag}
                                </span>
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
                                    GitHub
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
