import React from 'react';

const Pricing = () => {
    return (
        <div className="font-sans bg-gray-100 min-h-screen flex justify-center items-center">
            <div>
                <div className="text-center font-semibold">
                    <h1 className="text-5xl">
                        <span className="text-blue-700 tracking-wide">Flexible </span>
                        Plans
                    </h1>
                    <p className="pt-6 text-xl text-gray-400 font-normal w-full px-8 md:w-full">
                        Choose a plan that works best for you and<br /> your team.
                    </p>
                </div>
                <div className="pt-24 flex flex-row justify-center gap-8">
                    {/* Basic Card */}
                    <div className="w-96 p-8 bg-white text-center rounded-3xl shadow-xl">
                        <h1 className="text-black font-semibold text-2xl">Basic</h1>
                        <p className="pt-2 tracking-wide">
                            <span className="text-gray-400 align-top">$ </span>
                            <span className="text-3xl font-semibold">10</span>
                            <span className="text-gray-400 font-medium">/ user</span>
                        </p>
                        <hr className="mt-4 border-1" />
                        <div className="pt-8">
                            <p className="font-semibold text-gray-400 text-left">
                                <span className="material-icons align-middle">done</span>
                                <span className="pl-2">Get started with <span className="text-black">messaging</span></span>
                            </p>
                            <p className="font-semibold text-gray-400 text-left pt-5">
                                <span className="material-icons align-middle">done</span>
                                <span className="pl-2">Flexible <span className="text-black">team meetings</span></span>
                            </p>
                            <p className="font-semibold text-gray-400 text-left pt-5">
                                <span className="material-icons align-middle">done</span>
                                <span className="pl-2"><span className="text-black">5 TB</span> cloud storage</span>
                            </p>
                            <a href="#" className="">
                                <p className="w-full py-4 bg-blue-600 mt-8 rounded-xl text-white">
                                    <span className="font-medium">Choose Plan</span>
                                    <span className="pl-2 material-icons align-middle text-sm">east</span>
                                </p>
                            </a>
                        </div>
                    </div>
                    {/* More cards like Startup and Enterprise can be added here following the same structure */}
                </div>
            </div>
        </div>
    );
};

export default Pricing;
