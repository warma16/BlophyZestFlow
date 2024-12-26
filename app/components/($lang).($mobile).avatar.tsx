import React, {useRef, useState} from "react";
import CustomLink from "~/components/CustomLink";

export function InfoCard({
                             menuRef,
                             menuMouseEnterHandler,
                             menuMouseLeaveHandler,
                         }: {
    menuRef: React.RefObject<HTMLDivElement | null>;
    menuMouseEnterHandler: () => void;
    menuMouseLeaveHandler: () => void;
}) {
    return (
        <div
            ref={menuRef}
            className="absolute max-w-xs sm:max-w-sm lg:max-w-md"
            onMouseEnter={menuMouseEnterHandler}
            onMouseLeave={menuMouseLeaveHandler}
            style={{
                zIndex: 100,
                right: "1px",
                top: "100%",
            }}
        >
            <div className="card">
                <div className="card-body p-2">
                    <ul className="menu bg-base-200 lg:menu-horizontal rounded-box glass">
                        <li>
                            <CustomLink to="/profile">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"/>
                                </svg>
                                档案
                            </CustomLink>
                        </li>
                        <li>
                            <a>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                                我的关注
                            </a>
                        </li>
                        <li>
                            <a>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"/>
                                </svg>
                                发帖
                            </a>
                        </li>
                    </ul>
                    <ul className="menu bg-base-200 rounded-box glass">
                        <li><a>Item 1</a></li>
                        <li>
                            <a>Parent</a>
                            <ul>
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                                <li>
                                    <a>Parent</a>
                                    <ul>
                                        <li><a>Submenu 1</a></li>
                                        <li><a>Submenu 2</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li><a className="text-red-500">登出</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default function Avatar() {
    const [hovered, setHovered] = useState(false);

    const avatarRef = useRef<HTMLDivElement | null>(null);
    const menuRef = useRef<HTMLDivElement | null>(null);

    // 鼠标进入头像区域
    const handleAvatarMouseEnter = () => {
        setHovered(true);
    };

    // 鼠标离开头像区域
    const handleAvatarMouseLeave = () => {
        // 仅在鼠标不在菜单区域时才隐藏
        if (!menuRef.current || !menuRef.current.contains(document.activeElement)) {
            setHovered(false);
        }
    };

    // 鼠标进入菜单区域
    const handleMenuMouseEnter = () => {
        setHovered(true);
    };

    // 鼠标离开菜单区域
    const handleMenuMouseLeave = () => {
        setHovered(false);
    };

    return (
        <div className="relative">
            {/* 头像区域 */}
            <div
                ref={avatarRef}
                className="relative w-10 h-10 rounded-full bg-gray-300 cursor-pointer"
                onMouseEnter={handleAvatarMouseEnter}
                onMouseLeave={handleAvatarMouseLeave}
            >
                <img
                    src="https://via.placeholder.com/80"
                    alt="Avatar"
                    className="w-full h-full rounded-full"
                />
            </div>

            {/* 弹出菜单 */}
            {hovered && (
                <InfoCard
                    menuRef={menuRef}
                    menuMouseEnterHandler={handleMenuMouseEnter}
                    menuMouseLeaveHandler={handleMenuMouseLeave}
                />
            )}
        </div>
    );
}
