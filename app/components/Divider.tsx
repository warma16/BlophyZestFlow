import React from "react";

export default function Divider({className}: { className?: string }) {
    return <div className={`divider divider-horizontal ${className || ""}`}></div>;
}
