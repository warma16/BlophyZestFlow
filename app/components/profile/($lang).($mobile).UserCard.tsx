import React from "react";
import Divider from "~/components/Divider";

export default function UserCard() {
    return <div className={`relative pt-16`}>
        <div className="card bg-base-100 w-full shadow-xl px-4">
            <div className="card-body">
                <div className="flex relative">
                    <div className=" w-20 h-20 rounded-full bg-gray-300">
                        <img
                            src="https://via.placeholder.com/80"
                            alt="Avatar"
                            className="w-full h-full rounded-full"
                        />
                    </div>
                    <div>
                        <h1 className="ml-8 text-3xl text-blod">User Test</h1>
                        <div
                            className="ml-7 mr-7 text-base font-medium text-gray-700 w-full max-w-96 overflow-hidden break-words">
                            Abstract Person
                        </div>
                        <div className="flex ml-7 w-full">
                            <progress className="progress mt-1.5" value="100" max="100"></progress>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap -ml-2 relative">
                    {/*Badges*/}
                    <div className="ml-2 badge">Lv 0721</div>
                </div>
                <div className="justify-start relative md:flex gap-4">
                    <div className="flex w-full md:w-1/3 xl:w-1/4">
                        <div className="flex w-full">
                            <span>Stage Rank 11.45</span>
                            <Divider/>
                            <span>Juice Rank 11.45</span>
                        </div>
                    </div>

                    <div className="hidden md:flex items-center justify-center">
                        <Divider/>
                    </div>

                    <div className=" flex w-full md:w-1/3 xl:w-1/4">
                        <div className="flex w-full">
                            <span>Lemon 1.145 L</span>
                            <Divider/>
                            <span>Coin 1919</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>;
}
