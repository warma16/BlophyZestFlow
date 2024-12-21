// app/routes/index.tsx
// noinspection HtmlUnknownTarget

import {Link, useLocation} from '@remix-run/react';
import {pathConfig} from '~/lib/config';
import CustomLink from "~/components/CustomLink";

export default function Index() {
    const location = useLocation(); // 获取当前的 URL
    const currentPath = location.pathname;

    // 根据路径配置来判断当前路径
    const getLinkClass = (name: string) => pathConfig[name](currentPath) ? 'border-b-2 border-blue-500' : '';

    return (
        <div>
            <header className="fixed top-0 left-0 w-full bg-white bg-opacity-60 backdrop-blur-sm shadow-md z-10">
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    <Link to="/" className="text-2xl font-bold text-gray-800">Blophy</Link>
                    <nav>
                        <ul className="flex space-x-6">
                            <li>
                                <CustomLink
                                    to="home"
                                    className={`text-gray-800 hover:text-gray-500 ${getLinkClass("home")}`}
                                >
                                    首页
                                </CustomLink>
                            </li>
                            <li>
                                <CustomLink
                                    to="about"
                                    className={`text-gray-800 hover:text-gray-500 ${getLinkClass("about")}`}
                                >
                                    关于
                                </CustomLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    );
}
