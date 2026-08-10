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
    // TODO: global zar API service (receives the contact form when it exists)
    contactEndpoint: "https://api.zar.mx/contact",
    // TODO: flip to true once the contact API is live (removes the tape)
    contactFormReady: false,
    socials: [
        { label: "github", href: "https://github.com/thedackss" },
        { label: "x", href: "https://x.com/thedackss" },
        { label: "instagram", href: "https://instagram.com/thedackss" },
    ],
} as const;
