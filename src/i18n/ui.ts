export const languages = ["es", "en"] as const;
export type Lang = (typeof languages)[number];

export const ui = {
    es: {
        "meta.title": "zar.software | páginas web a la medida",
        "meta.description":
            "Diseño y desarrollo de páginas web: landings, portafolios, tiendas y aplicaciones a la medida.",

        "nav.services": "Servicios",
        "nav.projects": "Proyectos",
        "nav.contact": "Contacto",

        "hero.chip": "@thedackss · disponible para proyectos",
        "hero.title.pre": "Páginas web",
        "hero.title.accent": "a la medida",
        "hero.lead":
            "Diseño y desarrollo sitios rápidos y modernos: landings, portafolios, tiendas y aplicaciones web que hacen crecer tu negocio.",
        "hero.cta.primary": "Quiero mi página",
        "hero.cta.secondary": "Ver proyectos",

        "term.whoami.out": "Diego Zamora - desarrollador web",
        "term.services.l1": "SITIOS ....... landings · portafolios · tiendas",
        "term.services.l2": "APPS ......... aplicaciones web a la medida",
        "term.services.l3": "EXTRAS ....... SEO · mantenimiento · APIs",
        "term.projects.out": "zakielpc.com · zar.mx · diego.zar.mx",
        "term.deploy.out": "✓ tu sitio en línea",
        "term.cmd.help": "ayuda",
        "term.cmd.services": "zar --servicios",
        "term.help.l1": "ayuda ............ mostrar esta lista",
        "term.help.l2": "whoami ........... quién está detrás de zar",
        "term.help.l3": "zar .............. la CLI de zar - ver 'zar --help'",
        "term.help.l4": "lang ............. idioma - ver 'lang --help'",
        "term.help.l5": "clear ............ limpiar la terminal",
        "term.lang.bare": "escribe 'lang --help'",
        "term.langhelp.l1": "--help ........... mostrar esta lista",
        "term.langhelp.l2": "--detect ......... idioma detectado",
        "term.langhelp.l3": "--set <es|en> .... cambiar idioma",
        "term.lang.set.usage": "uso: lang --set <es|en>",
        "term.zar.bare": "escribe 'zar --help'",
        "term.zarhelp.l1": "--help ........... mostrar esta lista",
        "term.zarhelp.l2": "--info ........... sobre zar",
        "term.zarhelp.l3": "--servicios ...... lo que construyo",
        "term.zarhelp.l4": "deploy ........... publicar tu sitio",
        "term.zarhelp.l5": "open <ruta> ...... abrir una ruta (~ = inicio)",
        "term.open.usage": "uso: zar open <ruta>",
        "term.info.l1": "zar.software - páginas web a la medida",
        "term.info.l2": "por Diego Zamora (@thedackss)",
        "term.notfound": "zsh: {cmd}: comando no encontrado - escribe 'ayuda'",

        "services.title": "Servicios",
        "services.web.title": "Sitios web",
        "services.web.desc":
            "Landings, portafolios y tiendas que se ven bien en cualquier dispositivo y convierten visitas en clientes.",
        "services.apps.title": "Aplicaciones web",
        "services.apps.desc":
            "Software a la medida para las necesidades únicas de tu negocio: paneles, sistemas y herramientas internas.",
        "services.seo.title": "SEO",
        "services.seo.desc":
            "Optimización para buscadores: que tus clientes te encuentren en Google antes que a tu competencia.",
        "services.support.title": "Mantenimiento & APIs",
        "services.support.desc":
            "Soporte continuo, mejoras y desarrollo e integración de APIs para conectar tus sistemas.",

        "projects.title": "Proyectos",
        "projects.more": "mostrar más",
        "projects.pan.desc":
            "Panadería con 60+ años de tradición: pedidos en línea, sucursales y pedidos por WhatsApp.",
        "projects.zakielpc.desc":
            "Sitio para creador de contenido: catálogo de PCs gamer, precios y cotización.",
        "projects.zarmx.desc": "Hub personal minimalista.",
        "projects.nomi.desc":
            "Extensión para Chrome y Firefox: descarga álbumes e historiales de chat de tu Nomi.",
        "projects.auth.desc":
            "Servicio central de autenticación para las apps zar: sesiones, roles y panel de administración.",
        "projects.diego.desc": "Portafolio personal v1.",

        "contact.title": "Contacto",
        "contact.lead": "Cuéntame qué necesitas y te respondo lo antes posible.",
        "contact.form.name": "Nombre",
        "contact.form.email": "Correo",
        "contact.form.message": "Mensaje",
        "contact.form.send": "Enviar",
        "contact.form.sending": "Enviando…",
        "contact.form.sent": "¡Mensaje enviado! Te contactaré pronto.",
        "contact.form.error": "Algo falló, intenta de nuevo o escríbeme directo.",
        "contact.form.wip": "en construcción",
        "contact.card.email": "Correo",
        "contact.email": "contacto@zar.software",

        "404.out": "error: 404 - página no encontrada",
        "404.home": "volver al inicio",
        "404.switch": "ver en español",

        "langmodal.prompt": "¿cambiar a español?",
        "langmodal.yes": "sí",
        "langmodal.no": "no",

        "footer.rights": "© 2026 Zar",
    },
    en: {
        "meta.title": "zar.software | custom-built websites",
        "meta.description":
            "Web design and development: landings, portfolios, stores and custom web applications.",

        "nav.services": "Services",
        "nav.projects": "Projects",
        "nav.contact": "Contact",

        "hero.chip": "@thedackss · available for projects",
        "hero.title.pre": "Websites",
        "hero.title.accent": "custom-built",
        "hero.lead":
            "I design and build fast, modern sites: landings, portfolios, stores and web apps that grow your business.",
        "hero.cta.primary": "I want my website",
        "hero.cta.secondary": "See projects",

        "term.whoami.out": "Diego Zamora - web developer",
        "term.services.l1": "SITES ........ landings · portfolios · stores",
        "term.services.l2": "APPS ......... custom web applications",
        "term.services.l3": "EXTRAS ....... SEO · maintenance · APIs",
        "term.projects.out": "zakielpc.com · zar.mx · diego.zar.mx",
        "term.deploy.out": "✓ your site is live",
        "term.cmd.help": "help",
        "term.cmd.services": "zar --services",
        "term.help.l1": "help ............. show this list",
        "term.help.l2": "whoami ........... who is behind zar",
        "term.help.l3": "zar .............. the zar CLI - see 'zar --help'",
        "term.help.l4": "lang ............. language - see 'lang --help'",
        "term.help.l5": "clear ............ clear the terminal",
        "term.lang.bare": "type 'lang --help'",
        "term.langhelp.l1": "--help ........... show this list",
        "term.langhelp.l2": "--detect ......... detected language",
        "term.langhelp.l3": "--set <es|en> .... switch language",
        "term.lang.set.usage": "usage: lang --set <es|en>",
        "term.zar.bare": "type 'zar --help'",
        "term.zarhelp.l1": "--help ........... show this list",
        "term.zarhelp.l2": "--info ........... about zar",
        "term.zarhelp.l3": "--services ....... what I build",
        "term.zarhelp.l4": "deploy ........... ship your site",
        "term.zarhelp.l5": "open <path> ...... open a path (~ = home)",
        "term.open.usage": "usage: zar open <path>",
        "term.info.l1": "zar.software - custom-built websites",
        "term.info.l2": "by Diego Zamora (@thedackss)",
        "term.notfound": "zsh: {cmd}: command not found - type 'help'",

        "services.title": "Services",
        "services.web.title": "Websites",
        "services.web.desc":
            "Landings, portfolios and stores that look great on any device and turn visits into clients.",
        "services.apps.title": "Web applications",
        "services.apps.desc":
            "Tailored software for your business's unique needs: dashboards, systems and internal tools.",
        "services.seo.title": "SEO",
        "services.seo.desc":
            "Search engine optimization: let your clients find you on Google before your competition.",
        "services.support.title": "Maintenance & APIs",
        "services.support.desc":
            "Ongoing support, improvements, and API development and integration to connect your systems.",

        "projects.title": "Projects",
        "projects.more": "show more",
        "projects.pan.desc":
            "Bakery with 60+ years of tradition: online ordering, branches and WhatsApp orders.",
        "projects.zakielpc.desc":
            "Site for a content creator: gamer PC catalog, pricing and quotes.",
        "projects.zarmx.desc": "Minimalist personal hub.",
        "projects.nomi.desc":
            "Chrome and Firefox extension: download your Nomi albums and chat histories.",
        "projects.auth.desc":
            "Central authentication service for the zar apps: sessions, roles and an admin panel.",
        "projects.diego.desc": "Personal portfolio v1.",

        "contact.title": "Contact",
        "contact.lead": "Tell me what you need and I'll get back to you as soon as possible.",
        "contact.form.name": "Name",
        "contact.form.email": "Email",
        "contact.form.message": "Message",
        "contact.form.send": "Send",
        "contact.form.sending": "Sending…",
        "contact.form.sent": "Message sent! I'll contact you soon.",
        "contact.form.error": "Something went wrong - try again or write to me directly.",
        "contact.form.wip": "under construction",
        "contact.card.email": "Email",
        "contact.email": "contact@zar.software",

        "404.out": "error: 404 - page not found",
        "404.home": "back to home",
        "404.switch": "view in English",

        "langmodal.prompt": "switch to English?",
        "langmodal.yes": "yes",
        "langmodal.no": "no",

        "footer.rights": "© 2026 Zar",
    },
} as const;

export type UIKey = keyof (typeof ui)["es"];

export function useTranslations(lang: Lang) {
    return function t(key: UIKey): string {
        return ui[lang][key];
    };
}
