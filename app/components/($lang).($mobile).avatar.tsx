import React, {useRef, useState} from "react";

export function InfoCard({menuRef, menuMouseEnterHandler, menuMouseLeaveHandler}: {
    menuRef: React.RefObject<HTMLDivElement | null>,
    menuMouseEnterHandler: () => void,
    menuMouseLeaveHandler: () => void,
}) {
    return <div
        ref={menuRef}
        className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-48 p-4 menu bg-base-200 rounded-box"
        onMouseEnter={menuMouseEnterHandler}
        onMouseLeave={menuMouseLeaveHandler}
        style={{zIndex: 100}}
    >
        <div className="card glass">
            <div className="card-body">
                <p>How to park your car at your garage?</p>
            </div>
        </div>
    </div>
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
        <div className="relative pt-16">
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
            {hovered && <InfoCard menuRef={menuRef} menuMouseEnterHandler={handleMenuMouseEnter}
                                  menuMouseLeaveHandler={handleMenuMouseLeave}/>}
        </div>
    );
}
