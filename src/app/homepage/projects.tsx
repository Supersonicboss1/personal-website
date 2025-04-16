import ProjectOverview from "@/components/ProjectOverview";

export default function Projects() {
    return (
        <div className="mb-12">
            <h1 className="text-5xl text-center font-bold mt-3">Projects</h1>
            <p className="mt-5">
                Here are some of the projects I have worked on.
            </p>
            <ProjectOverview //TODO: Redesign this component (and maybe the whole page) in Figma to look better
                title="ULTRAKILL" // No, I did not make ultrakill, it is test data
                date={new Date("2020-09-03")}
                image="https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1229490/header.jpg?t=1740623813"
                description="ULTRAKILL is a fast-paced ultraviolent retro FPS combining the skill-based style scoring from character action games with unadulterated carnage inspired by the best shooters of the '90s. Rip apart your foes with varied destructive weapons and shower in their blood to regain your health."
                tags={["Unity", "C#"]}
                websiteLink="https://store.steampowered.com/app/1229490/ULTRAKILL/"
                githubLink="https://preview.redd.it/who-is-this-wrong-answers-only-v0-pxdml65fi1ve1.jpeg?width=640&crop=smart&auto=webp&s=7aa7c09db4c77a9e2cf572946e8e4df992410413"
            />
        </div>
    );
}
