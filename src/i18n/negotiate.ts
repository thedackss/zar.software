import type { Lang } from "./ui";

// Visitor's preferred language: explicit cookie choice > Accept-Language.
// Parsed by hand because Astro.preferredLocale matches tags exactly
// ("en-US" alone would not match the "en" locale).
export function preferredLang(request: Request, cookie: string | undefined): Lang | undefined {
    if (cookie === "es" || cookie === "en") return cookie;

    return (request.headers.get("accept-language") ?? "")
        .split(",")
        .map((tag) => tag.split(";")[0]!.trim().toLowerCase().split("-")[0])
        .find((tag): tag is Lang => tag === "es" || tag === "en");
}
