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
};

export default nextConfig;
