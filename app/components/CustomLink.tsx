import {useLocation, useNavigate} from "@remix-run/react";
import {ReactNode, useEffect, useState} from "react"; // 导入 ReactNode 类型

export default function CustomLink({
                                       to,
                                       className,
                                       children,
                                   }: {
    to: string;
    children: ReactNode; // 使用 ReactNode 类型
    className?: string;
}) {
    const location = useLocation(); // 获取当前的 URL
    const navigate = useNavigate(); // 用于重定向
    const [lang, setLang] = useState("zh");
    const [mobile, setMobile] = useState(false);

    useEffect(() => {
        // 从 URL 中提取语言和移动端状态
        const pathname = location.pathname;

        const parts = pathname.split('/');
        const i = parts.indexOf("mobile");
        if (i === -1) {
            setMobile(false);
            /^[a-zA-Z]{2,3}(-[A-Z]{2})?$/.test(parts[1]) ? setLang(parts[1]) : setLang("zh");
        } else if (i === 1) {
            setMobile(true);
            setLang("zh");
        } else if (i === 2) {
            setMobile(true);
            /^[a-zA-Z]{2,3}(-[A-Z]{2})?$/.test(parts[1]) ? setLang(parts[1]) : setLang("zh");
        }

        console.log(parts[1]);

    }, [location.pathname]);

    const redirect = (target: string) => {
        // 如果没有 lang 或 mobile, 使用默认值 'zh' 和 'mobile'
        const currentLang = lang || 'zh';
        const currentMobile = mobile ? '/mobile' : '';

        // 构建新的 URL，跳转到对应页面
        const newUrl = `/${currentLang}${currentMobile}${target}`; // 例如 /en/mobile/about

        navigate(newUrl); // 执行重定向
    };

    return (
        <button className={className} onClick={() => redirect(to)}>
            {children}
        </button>
    );
}
