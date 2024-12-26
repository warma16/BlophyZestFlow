import {useLocation} from "@remix-run/react";
import {useEffect, useState} from "react";
import UserCard from "~/components/profile/($lang).($mobile).UserCard";
import LatestPosts from "~/components/profile/LatestPosts";

export function MobilePage() {
    return <>
        <div>

        </div>
    </>
}

export function Page() {
    return <>
        <div>
            <UserCard/>
            <LatestPosts />
        </div>
    </>
}

export default function Layout() {
    const [mobile, setMobile] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const isMobile = location.pathname.includes('mobile');
        setMobile(isMobile);
    }, [location]);

    return <div className={`relative pt-8 px-4`}>
        {mobile ? <MobilePage/> : <Page/>}
    </div>;
}
