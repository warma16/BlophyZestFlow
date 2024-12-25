import {Link} from "@remix-run/react";

export default function Layout() {
    return <div className={`relative pt-16`}>
        <div>
            <h1 className="mt-4 content-center text-center text-4xl text-black">
                Blophy Forum
            </h1>
            <h2 className="mt-4 content-center text-center text-2xl text-black">
                ---开发---
            </h2>
            <ul className="mt-3 content-center text-center text-black">
                <li>Lime Network/MojaveHao</li>
            </ul>
            <h2 className="mt-4 content-center text-center text-2xl text-black">
                ---运营---
            </h2>
            <ul className="mt-3 content-center text-center text-black">
                <li>青檸網路 Lime Network</li>
            </ul>
            <h2 className="mt-4 content-center text-center text-2xl text-black">
                ---Details---
            </h2>
            <ul className="mt-3 content-center text-center text-black">
                <li>Github: <Link to="https://github.com/BlophyNova/ZestFlow" className= "text-blue-400 hover:underline mx-2">BlophyNova/ZestFlow</Link></li>
                <li>Citrus: <Link to="https://github.com/BlophyNova/Citrus" className= "text-blue-400 hover:underline mx-2">BlophyNova/Citrus</Link></li>
                <li>Version: ZestFlow EAP & Citrus EAP</li>
            </ul>
        </div>
    </div>;
}
