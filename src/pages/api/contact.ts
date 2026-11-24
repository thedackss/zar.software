import type { APIRoute } from "astro";

// Relays the contact form to the zar auth service (POST /contact), which
// stores the message and emails it. The app key never reaches the browser;
// the visitor's IP and user agent are forwarded so auth can rate-limit per
// visitor instead of per site.
export const prerender = false;

const authUrl = (process.env.ZAR_AUTH_URL ?? import.meta.env.ZAR_AUTH_URL ?? "").replace(/\/$/, "");
const appKey = process.env.ZAR_AUTH_APP_KEY ?? import.meta.env.ZAR_AUTH_APP_KEY;

const field = (form: FormData, name: string) => {
    const value = form.get(name);
    return typeof value === "string" ? value : "";
};

export const POST: APIRoute = async ({ request, clientAddress }) => {
    if (!authUrl || !appKey) {
        console.error("contact: ZAR_AUTH_URL / ZAR_AUTH_APP_KEY are not set");
        return Response.json({ ok: false }, { status: 503 });
    }

    const form = await request.formData().catch(() => null);
    if (!form) return Response.json({ ok: false }, { status: 400 });

    const lang = field(form, "lang");
    const ip = request.headers.get("cf-connecting-ip") ?? clientAddress;

    const upstream = await fetch(`${authUrl}/contact`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-App-Key": appKey,
            "X-Client-IP": ip,
            "X-Client-User-Agent": request.headers.get("user-agent") ?? "",
            "X-Lang": lang === "en" ? "en" : "es",
        },
        body: JSON.stringify({
            name: field(form, "name"),
            email: field(form, "email"),
            message: field(form, "message"),
            lang: lang === "en" ? "en" : "es",
            website: field(form, "website"),
        }),
    }).catch((error) => {
        console.error("contact: auth unreachable", error);
        return null;
    });

    if (!upstream) return Response.json({ ok: false }, { status: 502 });

    const body = (await upstream.json().catch(() => null)) as { message?: string } | null;

    return Response.json(
        { ok: upstream.ok, message: body?.message },
        { status: upstream.ok ? 200 : upstream.status },
    );
};
