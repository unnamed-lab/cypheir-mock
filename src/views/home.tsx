import { HeroBox, HeroDemo } from "@/components/home";

export default function Hero() {
    return (
        <section className="home-grad mb-4 flex min-h-screen flex-col gap-7 md:min-h-[70svh] md:flex-row md:items-center md:gap-2 lg:gap-4">
            <div className="my-4 w-full md:w-6/12">
                <HeroBox />
            </div>
            <div className="my-4 w-full md:w-6/12">
                <HeroDemo />
            </div>
        </section>
    );
}
