import { HeroBox, HeroDemo } from "@/components/home";

export default function Hero() {
    return (
        <section className="home-grad mb-4 flex min-h-[50svh] flex-col gap-5 sm:flex-row md:min-h-[60svh] md:items-center md:gap-2 lg:gap-4">
            <div className="my-4 w-full sm:w-6/12">
                <HeroBox />
            </div>
            <div className="my-4 w-full sm:w-6/12">
                <HeroDemo />
            </div>
        </section>
    );
}
