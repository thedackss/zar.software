import type { Lang } from "./ui";

export const routes = {
    home: { es: "/es/", en: "/en/" },
    services: { es: "/es/servicios", en: "/en/services" },
    projects: { es: "/es/proyectos", en: "/en/projects" },
    contact: { es: "/es/contacto", en: "/en/contact" },
} as const satisfies Record<string, Record<Lang, string>>;

export type RouteKey = keyof typeof routes;
