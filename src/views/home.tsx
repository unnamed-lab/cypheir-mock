import { HeroBox, HeroDemo } from "@/components/home";

export default function Hero() {
    return (
        <section className="home-grad flex min-h-[70svh] flex-col gap-7 md:flex-row md:items-stretch md:gap-2">
            <div className="my-auto w-full lg:w-6/12">
                <HeroBox />
            </div>
            <div className="my-auto w-full lg:w-6/12">
                <HeroDemo />
            </div>
        </section>
    );
}
