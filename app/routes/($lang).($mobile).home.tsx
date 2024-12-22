import {useLocation} from "@remix-run/react";
import {useEffect, useState} from "react";

export function MobilePage() {
    return <>
    </>
}

export function Page() {
    return <>
    </>
}

export default function Layout() {
    const [mobile, setMobile] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const isMobile = location.pathname.includes('mobile');
        setMobile(isMobile);
    }, [location]);

    return mobile ? <MobilePage/> : <Page/>;
}
