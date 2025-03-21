// app/root.tsx

import {Links, Meta, Outlet, Scripts, ScrollRestoration,} from "@remix-run/react";
import type {LinksFunction} from "@remix-run/node";

import "./tailwind.css";
import Navbar from "~/components/($lang).($mobile).navbar";
import Footer from "~/components/($lang).($mobile).footer";

export const links: LinksFunction = () => [
    {rel: "preconnect", href: "https://fonts.googleapis.com"},
    {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
    },
    {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
    },
];

export function LayoutWrapper() {
    return (
        <html lang="zh_CN">
        <head>
            <title>ZestFlow</title>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <Meta/>
            <Links/>
            <link
                href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;700&display=swap"
                rel="stylesheet"
            />
        </head>
        <body className="flex flex-col min-h-screen">
        <Navbar/>
        <main className="flex-grow">
            <div>
                <div className="relative pt-16 h-full w-full">
                    <div>
                    <div className="relative pt-16 h-full w-full">
                        <div>
                        <Outlet/>
                        </div>
                        
                    </div>
                    </div>
                    
                </div>
            </div>
        </main>
        <Footer/>
        <ScrollRestoration/>
        <Scripts/>
        </body>
        </html>
    );
}

export default function App() {
    return <LayoutWrapper/>;
}
