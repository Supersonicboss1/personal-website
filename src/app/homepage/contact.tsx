import SocialPill from "@/components/SocialPill";
import Typewriter from "@/components/typewriter";
export default function Contact() {
    return (
<div>
    <h1 className="text-5xl text-center font-bold mt-3" id="contact">Contact me!</h1>
    <div className="mt-5 p-1 w-full flex justify-center">
        <div className="outline outline-[#464646] rounded-md w-[40%] bg-[#1c1c1c43] p-4">
            <label htmlFor="email" className="block text-gray-500 font-bold pl-3">
                Email
            </label>
            <a
                href="mailto:leodalgado@gmail.com"
                className="font-mono px-2 p-1 m-1 hover:bg-[#232323] rounded-md transition-all duration-300"
            >
                <Typewriter text="leodalgado@gmail.com"/>
            </a>
            <div className="flex grid-cols-10 gap-4 mt-5">
                <SocialPill
                    name="GitHub"
                    icon="github"
                    link="https://github.com/Supersonicboss1"
                    color="#ffffff"
                />
                <SocialPill
                    name="Bluesky"
                    icon="bluesky"
                    link="https://bsky.app/profile/supersonicboss1.co.uk"
                    color="#0285FF"
                />
            </div>
        </div>
    </div>
</div>
    );
}
