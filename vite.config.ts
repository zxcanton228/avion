import legacy from "@vitejs/plugin-legacy"
import react from "@vitejs/plugin-react-swc"
import { defineConfig, loadEnv } from "vite"
import injectHTML from "vite-plugin-html-inject"
import { ViteImageOptimizer } from "vite-plugin-image-optimizer"
import viteImagemin from "vite-plugin-imagemin"

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
	// @ts-ignore
	const env = loadEnv(mode, process.cwd(), "")
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
		base: env.VITE_NODE_ENV === "production" ? `/${env.VITE_DOMAIN}` : "/",
	}
})
