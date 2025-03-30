import {useRef, useState,useEffect} from 'react';
import {motion} from 'framer-motion';
import {Link, useLocation} from '@remix-run/react';
import Avatar from "~/components/($lang).($mobile).avatar"; // 注意路径
import CustomLink from './CustomLink';
import {pathConfig} from "~/lib/config";
interface NavbarProps {
  getLinkClass: (name: string) => string;
}

export function Normal({getLinkClass}: NavbarProps) {
    const [hovered, setHovered] = useState(false); // 控制是否显示 Nova
    const blophyRef = useRef(null);
    const novaRef = useRef(null);

    // 监听鼠标悬停
    const handleMouseEnter = () => {
        setHovered(true);  // 鼠标悬停时显示 Nova
    };

    const handleMouseLeave = () => {
        setHovered(false); // 鼠标离开时隐藏 Nova
    };
    return (
        <>
        <div
                        className="relative flex items-center"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <motion.div
                            initial={{x: 0}}
                            whileHover={{x: -5}}
                            transition={{duration: 0.3, delay: 0.3}}
                        >
                            <Link to="/" className="font-blophy text-2xl text-gray-800" ref={blophyRef}>
                                blophy
                            </Link>
                        </motion.div>

                        {/* Nova 文字区域 */}
                        <motion.div
                            className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text"
                            initial={{opacity: 0}}
                            animate={{opacity: hovered ? 1 : 0}}
                            transition={{duration: 0.3, delay: 0.3}}
                            ref={novaRef}
                        >
                            <Link to="/" className="font-blophy">
                                nova
                            </Link>
                        </motion.div>
                    </div>

                    <nav>
                        <ul className="flex space-x-6">
                            <li>
                                <CustomLink
                                    to="/home"
                                    className={`text-gray-800 hover:text-gray-500 ${getLinkClass("home")} hover:border-b-2 border-blue-300`}
                                >
                                    首页
                                </CustomLink>
                            </li>
                            <li>
                                <CustomLink
                                    to="/about"
                                    className={`text-gray-800 hover:text-gray-500 ${getLinkClass("about")} hover:border-b-2 border-blue-300`}
                                >
                                    关于
                                </CustomLink>
                            </li>
                            {/* 头像区域 */}
                            <li className="relative"> {/* 给头像区域加上相对定位 */}
                                <Avatar/>
                            </li>
                        </ul>
                    </nav>
        </>
    )

    
}
export function Mobile({getLinkClass}: NavbarProps) {
    return <>
    <div >
         首页
        </div>
    </>
}
export default function Navbar() {
    const [mobile, setMobile] = useState(false);
    const location = useLocation(); // 获取当前的 URL
    const currentPath = location.pathname;
    useEffect(() => {
        const isMobile = location.pathname.includes('mobile');
        setMobile(isMobile);
    }, [location]);


    // 根据路径配置来判断当前路径
    const getLinkClass = (name: string) => pathConfig[name](currentPath) ? 'border-b-2 border-blue-600' : '';

    // 创建 ref 用于 Blophy 和 Nova
    const blophyRef = useRef(null);
    const novaRef = useRef(null);

    // 监听鼠标悬停
    
    if (mobile) {
        return (
            <header className={`relative top-0 left-0 w-full bg-white bg-opacity-60 backdrop-blur-sm shadow-md z-10`}>
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-center items-center">
                    <Mobile getLinkClass={getLinkClass}/>
                    
                </div>
            </header>
    );
        
    }

    return (
            <header className={`fixed top-0 left-0 w-full bg-white bg-opacity-60 backdrop-blur-sm shadow-md z-10`}>
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    
                    <Normal getLinkClass={getLinkClass}/>
                </div>
            </header>
    );
}
