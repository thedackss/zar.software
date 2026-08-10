import { useTranslations, type Lang } from "@/i18n/ui";

// One output line: a plain string, or { text, kind } where kind colors it
// ("ok" green, "err" red).
export type CommandOutput = string | { text: string; kind: "ok" | "err" };

// Interactive terminal commands (used by the writable hero terminal).
//
// How to add a command:
//   1. Add an entry below with a comment describing what it should do.
//   2. Static output → add its strings to src/i18n/ui.ts (both languages) and
//      reference them with t()/tx(). Commands added inside the `for` loop get
//      a localized name per language (see term.cmd.* keys); commands added
//      directly to `commands` share one name everywhere.
//   3. Dynamic output (needs the browser) → use a "__marker__" string here and
//      resolve it in the <script> of src/components/terminal/index.astro.
//
// Every command works on every page; answers use the page language unless
// they are inherently language-specific (help/ayuda list their own set).
export function buildCommands(lang: Lang): Record<string, CommandOutput[]> {
    const t = useTranslations(lang);

    const commands: Record<string, CommandOutput[]> = {
        // whoami — who is behind the terminal (same line the intro types)
        whoami: [t("term.whoami.out")],

        // clear — wipes the screen, leaving only the prompt (client-side)
        clear: ["__clear__"],

        // zar (bare) — points to the CLI help
        zar: [t("term.zar.bare")],

        // zar --help — lists the zar CLI's own flags/subcommands
        "zar --help": [
            t("term.zarhelp.l1"),
            t("term.zarhelp.l2"),
            t("term.zarhelp.l3"),
            t("term.zarhelp.l4"),
            t("term.zarhelp.l5"),
        ],

        // zar open <path> — navigates to the given path; "~" means the current
        // language's home (client-side; second entry is the no-arg usage hint)
        "zar open": ["__open__", t("term.open.usage")],

        // zar --info — short card about zar.software and its author
        "zar --info": [t("term.info.l1"), t("term.info.l2")],

        // zar deploy — playful deploy, prints the green success line;
        // accepted with and without --production
        "zar deploy": [{ text: t("term.deploy.out"), kind: "ok" }],
        "zar deploy --production": [{ text: t("term.deploy.out"), kind: "ok" }],

        // lang (bare) — points to the CLI help
        lang: [t("term.lang.bare")],

        // lang --help — lists the lang command's flags
        "lang --help": [t("term.langhelp.l1"), t("term.langhelp.l2"), t("term.langhelp.l3")],

        // lang --detect — prints the visitor's detected language, e.g. "en — english"
        // (cookie > navigator.language > page language; resolved client-side)
        "lang --detect": ["__detect__"],

        // lang --set <es|en> — switches the site language (prints confirmation,
        // then navigates; the __setlang__ marker is resolved client-side)
        "lang --set": [t("term.lang.set.usage")],
        "lang --set es": ["__setlang:es__"],
        "lang --set en": ["__setlang:en__"],
    };

    for (const tx of [useTranslations("es"), useTranslations("en")]) {
        // help / ayuda — lists that language's top-level commands
        // (zar's flags live under `zar --help`, so only "zar" is listed here)
        commands[tx("term.cmd.help")] = [
            tx("term.help.l1"),
            tx("term.help.l2"),
            tx("term.help.l3"),
            tx("term.help.l4"),
            tx("term.help.l5"),
        ];

        // zar --services / zar --servicios — what I build, in that language
        commands[tx("term.cmd.services")] = [
            tx("term.services.l1"),
            tx("term.services.l2"),
            tx("term.services.l3"),
        ];
    }

    return commands;
}
