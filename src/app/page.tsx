import Contact from "./homepage/contact";
import Projects from "./homepage/projects";

export default function Home() {
  return (
    <>
    <div className="mb-12">
        <h1 className="text-5xl text-center font-bold mt-3">Hi, I&apos;m Leo!</h1>
        <p className="mt-5">
            I do coding and such. One day this website will be complete!
        </p>
    </div>
    <Contact />
    <Projects />
    </>
  );
}
