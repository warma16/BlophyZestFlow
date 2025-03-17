import {useLocation} from "@remix-run/react";
import {useEffect, useState} from "react";
import { DemoCarousel } from "~/components/Carousel";

export function MobilePage() {
    return <>
    </>
}

export function Page() {
    return <>
        <DemoCarousel/>
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
