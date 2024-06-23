import legacy from "@vitejs/plugin-legacy";
import react from "@vitejs/plugin-react-swc";
import { fileURLToPath, URL } from "url";
import { defineConfig, loadEnv } from "vite";
import injectHTML from "vite-plugin-html-inject";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import viteImagemin from "vite-plugin-imagemin";
// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
    const env = loadEnv(mode, process.cwd(), "");
    return {
        plugins: [
            react(),
            injectHTML(),
            ViteImageOptimizer({
                png: {
                    quality: 80,
                },
                jpeg: {
                    quality: 80,
                },
                jpg: {
                    quality: 80,
                },
                webp: {
                    lossless: true,
                },
            }),
            legacy({
                targets: ["defaults", "not IE 11"],
            }),
            viteImagemin({
                pngquant: {
                    quality: [0.6, 0.8],
                },
            }),
        ],
        resolve: {
            // alias: {
            // 	components: "/src/components",
            // 	hooks: "/src/hooks",
            // 	utils: "/src/utils",
            // 	src: "/src",
            // },
            alias: [
                {
                    find: "src",
                    replacement: fileURLToPath(new URL("./src", import.meta.url)),
                },
                {
                    find: "hooks",
                    replacement: fileURLToPath(new URL("./hooks", import.meta.url)),
                },
                {
                    find: "components",
                    replacement: fileURLToPath(new URL("./src/components", import.meta.url)),
                },
                {
                    find: "utils",
                    replacement: fileURLToPath(new URL("./src/utils", import.meta.url)),
                },
            ],
        },
        base: env.VITE_NODE_ENV === "production" ? `/${env.VITE_DOMAIN}` : "/",
    };
});
