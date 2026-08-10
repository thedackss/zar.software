import { defineMiddleware } from "astro:middleware";

// The nav toggle links carry ?lang=xx; persist the choice and clean the URL.
export const onRequest = defineMiddleware((context, next) => {
    const lang = context.url.searchParams.get("lang");

    if (lang === "es" || lang === "en") {
        context.cookies.set("lang", lang, { path: "/", maxAge: 60 * 60 * 24 * 365 });

        const url = new URL(context.url);
        url.searchParams.delete("lang");
        return context.redirect(url.pathname + url.search, 302);
    }

    return next();
});
