import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/styles/globals.css";
import meta from "@/util/metadata";
import { WebVitals } from "./web-vitals";
import { MetadataProps } from "@/interface/ui";
import { Footer, Nav } from "@/components/layout";
import { AuthProvider } from "@/context";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getServerSession } from "next-auth";
import { authConfig } from "@/lib/auth";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export async function generateMetadata({
    params,
}: MetadataProps): Promise<Metadata> {
    const { id } = params;
    const siteURL = meta.url;
    return {
        metadataBase: meta.url,
        title: meta.title,
        description: meta.desc,
        openGraph: {
            title: meta.title,
            description: meta.desc,
            url: meta.url,
            siteName: meta.siteName,
            locale: "en_UK",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            creator: meta.creator,
        },
        alternates: {
            canonical: `${siteURL}/${!id ? "" : id}`,
        },
        keywords: meta.keywords,
    };
}

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    // To retrieve the session cookie
    const session = await getServerSession(authConfig);
    const userSession = session?.user;

    return (
        <html lang="en">
            <body className={poppins.className}>
                <TooltipProvider>
                    {process.env.PROJECT_STATUS === "development" && (
                        <WebVitals />
                    )}
                    <AuthProvider>
                        <Nav userSession={userSession} />
                        {children}
                        <ToastContainer />
                    </AuthProvider>
                    <Footer />
                    <Toaster />
                </TooltipProvider>
            </body>
        </html>
    );
}
