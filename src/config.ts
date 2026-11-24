// Single place for site-wide values. TODO: replace placeholders before deploying.
export const site = {
    name: "zar.software",
    url: "https://zar.software",
    author: "Diego Zamora",
    twitter: "@zarmx_",
    whatsapp: "529171040172",
    whatsappDisplay: "917 104 0172",
    // How long "no" hides the language-suggestion modal
    langSuggestSnoozeHours: 12,
    // Same-origin relay (src/pages/api/contact.ts) to auth.zar.mx's /contact
    contactEndpoint: "/api/contact",
    // false shows the "under construction" tape over the form
    contactFormReady: true,
    socials: [
        { label: "github", href: "https://github.com/thedackss" },
        { label: "x", href: "https://x.com/thedackss" },
        { label: "instagram", href: "https://instagram.com/thedackss" },
    ],
} as const;
