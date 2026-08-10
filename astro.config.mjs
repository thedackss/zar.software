// @ts-check
import { defineConfig } from "astro/config";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
    output: "server",
    adapter: node({
        mode: "standalone",
    }),
    redirects: {
        "/servicios": "/es/servicios",
        "/proyectos": "/es/proyectos",
        "/contacto": "/es/contacto",
        "/services": "/en/services",
        "/projects": "/en/projects",
        "/contact": "/en/contact",
    },
    i18n: {
        defaultLocale: "es",
        locales: ["es", "en"],
        routing: {
            prefixDefaultLocale: true,
            redirectToDefaultLocale: false,
        },
    },
    vite: {
        resolve: {
            // Allow folder-per-component imports to resolve `index.astro`
            extensions: [".mjs", ".js", ".mts", ".ts", ".jsx", ".tsx", ".json", ".astro"],
        },
    },
});
