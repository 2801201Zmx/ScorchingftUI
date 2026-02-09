
import { defineConfig } from "vite";

import { resolve } from "path";

import vue from "@vitejs/plugin-vue";
import vueDevTools from 'vite-plugin-vue-devtools';
import { fileURLToPath } from "url";

export default defineConfig({
    plugins: [
        vue(),
        vueDevTools(),
    ],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        }
    },
    build: {
        lib: {
            entry: resolve(__dirname, "src/main.ts"),
            name: "ScorchingftComponetsPlusPlus",
            fileName: (format) => `scorchingft-componets-plus-plus.${format}.js`,
        },
        rollupOptions: {
            external: ["vue"],
            output: {
                globals: {
                    vue: "Vue",
                },
            },
        },
    },
    server: {
        host: '0.0.0.0',
        port: 3000,
        open: true,
    }
})