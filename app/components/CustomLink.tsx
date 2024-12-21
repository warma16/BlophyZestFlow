import {useLocation, useNavigate} from "@remix-run/react";
import {useEffect, useState} from "react";

export default function CustomLink({children, to, className}: { children: string, to: string, className?: string }) {
    const location = useLocation(); // 获取当前的 URL
    const navigate = useNavigate(); // 用于重定向
    const [lang, setLang] = useState<string | null>(null);
    const [mobile, setMobile] = useState<string | null>(null);
    useEffect(() => {
        // 从 URL 中提取语言和移动端状态
        const pathname = location.pathname;
        const langMatch = pathname.match(/^\/([a-z]{2})\./); // 假设语言为 2 位字符（如 en, zh）
        const mobileMatch = pathname.match(/\.([a-z]+)\./); // 假设 mobile 是 mobile 或 desktop

        if (langMatch) {
            setLang(langMatch[1]);
        }
        if (mobileMatch) {
            setMobile(mobileMatch[1]);
        }
    }, [location.pathname]);

    const redirect = (target: string) => {
        // 如果没有 lang 或 mobile, 使用默认值 'en' 和 'mobile'
        const currentLang = lang || 'zh';
        const currentMobile = mobile || '';

        // 构建新的 URL，跳转到对应页面
        const newUrl = `/${currentLang}/${currentMobile}${target}`; // 例如 /en.mobile/about
        navigate(newUrl); // 执行重定向
    };

    return <button className={className} onClick={() => redirect(to)}>{children}</button>
}