// app/root.tsx

import {Links, Meta, Outlet, Scripts, ScrollRestoration,} from "@remix-run/react";
import type {LinksFunction} from "@remix-run/node";

import "./tailwind.css";
import {ReactNode} from "react";
import Navbar from "~/components/($lang).($mobile).navbar";
import Footer from "~/components/($lang).($mobile).footer";

interface LayoutProps {
    children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
    return (
        <html lang="zh_CN">
        <head>
            <title>ZestFlow</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <Meta />
            <Links />
        </head>
        <body className="flex flex-col min-h-screen">
        <Navbar /> {/* 将导航栏放在页面顶部 */}
        <main className="flex-grow">{children}</main> {/* 内容区占据剩余空间 */}
        <Footer /> {/* 将页脚放在页面底部 */}
        <ScrollRestoration />
        <Scripts />
        </body>
        </html>
    );
}

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
        </head>
        <body className="flex flex-col min-h-screen">
        <Layout>
            <Outlet/> {/* 页面的实际内容将插入这里 */}
        </Layout>
        <ScrollRestoration/>
        <Scripts/>
        </body>
        </html>
    );
}

export default function App() {
    return <LayoutWrapper/>;
}
