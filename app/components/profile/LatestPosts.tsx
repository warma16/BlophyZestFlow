import React, {ReactNode} from "react";
import {useNavigate} from "@remix-run/react";

export function SubCard({title, description, target, children}: {
    title: string;
    description: string;
    target?: string;
    children?: ReactNode
}) {
    const navigate = useNavigate();

    const handleCardClick = () => {
        if (target) {
            // 使用 useNavigate 进行跳转
            navigate(target);
        }
    };

    const cardContent = (
        <div className="card w-full bg-base-100" onClick={handleCardClick}
             style={{cursor: target ? 'pointer' : 'default'}}>
            <div className="card-body">
                <div className="card-title">
                    {title}
                </div>
                <p>{description}</p>
            </div>
            <figure>
                {children}
            </figure>
        </div>
    );

    return <div>{cardContent}</div>;
}


export default function LatestPosts() {
    return <div className="card bg-base-200 w-full shadow-xl mx-1 mt-4 hover:shadow-2xl">
        <div className="card-body">
            <div className="card-title">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                     strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"/>
                </svg>
                <h1>Latest Posts</h1>
            </div>
            <SubCard title="My latest post!" description="Click here to navigate to the about page." target="/zh/about"/>

        </div>
    </div>
}