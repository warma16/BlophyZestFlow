import {useLocation} from "@remix-run/react";
import {useEffect, useState} from "react";

export function MobilePage() {
    return <>
        <div>

        </div>
    </>
}

export function Page() {
    return <>
        <div>

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

    return <div className={`relative pt-16`}>
        {mobile ? <MobilePage/> : <Page/>}
    </div>;
}
