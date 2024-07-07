/** @type {import('next').NextConfig} */
const nextConfig = {
    future: {
        webpack5: true,
    },
    webpack: (config) => {
        config.resolve.fallback = {
            ...config.resolve.fallback,
            net: false,
            fs: false,
            dns: false,
            child_process: false,
            tls: false,
        };

        return config;
    },

    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "avatars.githubusercontent.com",
                port: "",
                pathname: "/u/**",
            },
        ],
    },
};

export default nextConfig;
