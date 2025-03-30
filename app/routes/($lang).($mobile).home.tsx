import {useLocation} from "@remix-run/react";
import {useEffect, useState} from "react";
import { Carousel, Slide} from "~/components/Carousel";

const slides: Slide[] = [
    {
      id: "slide-1",
      background: "https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp",
      content: (
        <div className="text-center max-w-2xl">
          <h2 className="text-4xl font-bold mb-4">Discover New Features</h2>
          <p className="text-xl mb-6">Explore our latest updates and improvements</p>
          <button className="btn btn-primary px-8">Get Started</button>
        </div>
      )
    },
    {
      id: "slide-2",
      background: "https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp",
      content: (
        <div className="flex items-center gap-8 p-6">
          <div className="flex-1">
            <h3 className="text-3xl font-bold mb-4">Advanced Analytics</h3>
            <p className="text-lg mb-4">Deep insights into your data with real-time monitoring</p>
            <div className="stats shadow bg-white/20 text-white">
              <div className="stat">
                <div className="stat-title">Active Users</div>
                <div className="stat-value">89.4%</div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];


export function MobilePage() {
    return <>
    </>
}

export function Page() {

    return <div className="w-full h-auto bg-red"> 
        <div className="w-full h-auto bg-purple">
        <Carousel 
        slides={slides}
        addingClassName="left w-1/2 "
      />
        </div>
      
    </div>
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
