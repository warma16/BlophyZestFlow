// app/routes/_index.tsx

import { LoaderFunction, redirect } from "@remix-run/node";

export const loader: LoaderFunction = async ({ request }) => {
    const userAgent = request.headers.get('User-Agent') || '';
    const isMobile = /mobile/i.test(userAgent); // 检测是否为移动设备

    // 获取用户的语言偏好（从请求头中获取）
    const acceptLanguage = request.headers.get('Accept-Language') || '';
    const preferredLanguage = acceptLanguage.split(',')[0]; // 获取首选语言（例如 en, zh 等）

    // 根据语言和设备类型进行重定向
    if (isMobile) {
        if (preferredLanguage.startsWith('zh')) {
            // 如果是移动设备，且首选语言为中文，则重定向到中文移动端首页
            return redirect('/mobile/zh/home');
        } else {
            // 否则重定向到移动端英文首页
            return redirect('/mobile/en/home');
        }
    } else {
        if (preferredLanguage.startsWith('zh')) {
            // 如果不是移动设备，且首选语言为中文，则重定向到中文桌面端首页
            return redirect('/zh/home');
        } else {
            // 否则重定向到英文桌面端首页
            return redirect('/en/home');
        }
    }
};

export default function Index() {
    return (
        <div>
            <h1>Redirecting...</h1>
        </div>
    );
}
