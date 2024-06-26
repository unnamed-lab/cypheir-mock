import { HeroBox, HeroDemo } from "@/components/home";

export default function Hero() {
    return (
        <section className="home-grad flex min-h-screen md:min-h-[70svh] flex-col gap-7 lg:gap-4 md:flex-row md:items-center md:gap-2 mb-4">
            <div className="my-4 w-full md:w-6/12">
                <HeroBox />
            </div>
            <div className="my-4 w-full md:w-6/12">
                <HeroDemo />
            </div>
        </section>
    );
}
