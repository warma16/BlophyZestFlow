import {useLocation} from "@remix-run/react";
import {useEffect, useState} from "react";
import Navbar from "~/components/($lang).($mobile).navbar";
import LimeNetworkLight from "public/LimeNetworkLight.jpg";
import LimeNetworkDark from "public/LimeNetworkDark.jpg";

export function MobilePage() {
    return <>
        <Navbar/>
        <div>

        </div>
    </>
}

export function Page() {
    return <>
        <Navbar/>
        <div>
            <picture>
                <source media="(prefers-color-scheme: light)" srcSet={LimeNetworkLight}/>
                <source media="(prefers-color-scheme: dark)" srcSet={LimeNetworkDark}/>
                <img src="LimeNetworkLight.jpg" alt="Image based on color scheme"/>
            </picture>

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
