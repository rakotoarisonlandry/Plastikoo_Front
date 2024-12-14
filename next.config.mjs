/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    trailingSlash: true,
    images: {
        unoptimized:true
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/, // Regex pour les fichiers SVG
            use: ["@svgr/webpack"], // Utilisation de SVGR pour transformer les SVG en composants React
        });
        return config;
    },
};
export default nextConfig;
