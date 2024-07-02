export default function DesignHeading({
    children,
}: {
    children: React.ReactNode | string;
}) {
    return (
        <h1 className="mb-3 w-full border-b border-b-zinc-200 bg-white py-12 text-center font-sans text-3xl font-semibold lg:text-4xl">
            {children}
            <span className="text-primary">.</span>
        </h1>
    );
}
