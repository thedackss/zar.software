// @ts-check
import { defineConfig } from "astro/config";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
    output: "server",
    // Astro's origin check compares Origin against the request URL, which is
    // plain http behind the Cloudflare tunnel + Traefik, so every browser
    // form POST (Origin https://...) would be refused. The site keeps no
    // session state; the contact relay is throttled per visitor upstream.
    security: { checkOrigin: false },
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
