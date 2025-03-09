import {useLocation,useLoaderData} from "@remix-run/react";
import type { LoaderFunctionArgs } from "@remix-run/node";
import {useEffect, useState} from "react";

interface Data{
    id:number,
    title?:string,
    content?:string
}

interface Params{
    code:number,
    data:Data,
    msg:string,
    extra?:any
}
export function MobilePage() {
    return <>
        <div>

        </div>
    </>
}

export function Page({params}:{params:Params}) {
    console.log("in page")
    console.log(params)
    if(params["code"]==-1){
        return <>
        <div>
            你没有给定文章id
        </div>
    </>
    }
    return <>
        <div>

        </div>
    </>
}

export async function loader({params}:LoaderFunctionArgs) {
    console.log(params)
    let resp_:Params={
        "code":0,
        "data":{
            "id":0,
            "title":"",
            "content":""
        },
        "msg":"",
        "extra":{}
    }
    if(params.id){
        resp_["code"]=0
        resp_["data"].id=parseInt(params.id)
        return resp_
    }
    resp_["code"]=-1
    resp_["msg"]="id is required"
    return resp_
}

export default function Layout() {
    const [mobile, setMobile] = useState(false);
    let postId="0"
    const location = useLocation();
    const loader_=useLoaderData()

    postId=location.pathname

    console.log(postId)
    console.log(loader_)

    useEffect(() => {
        const isMobile = location.pathname.includes('mobile');
        setMobile(isMobile);
    }, [location]);
    let params=Object(loader_)

    return <div className={`relative pt-16`}>
        {mobile ? <MobilePage/> : <Page params={params} />}
    </div>;
}