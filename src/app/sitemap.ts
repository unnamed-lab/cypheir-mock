import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://mock.cypheir.xyz",
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 1,
        },
    ];
}
