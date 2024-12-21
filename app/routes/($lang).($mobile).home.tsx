import { useLocation } from "@remix-run/react";
import { useState, useEffect } from "react";
import Navbar from "~/components/($lang).($mobile).navbar";

export function MobilePage() {
    return <>
        <Navbar/>
    </>
}

export function Page() {
    return <>
        <Navbar/>
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
