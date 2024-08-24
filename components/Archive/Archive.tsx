'use client'
import React from 'react'
import { IconType } from 'react-icons';
import { FiActivity, FiUsers, FiAward, FiClock } from 'react-icons/fi';
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
    ssr: false,
});

const arcs = [
    {
        metric: "Projects",
        value: "100",
        postfix: "+",
        icon: FiActivity,
    },
    {
        prefix: "~",
        metric: "Users",
        value: "100000",
        icon: FiUsers,
    },
    {
        metric: "Awards",
        value: "7",
        icon: FiAward,
    },
    {
        metric: "Years",
        value: "5",
        icon: FiClock,
    },
];

const Archive = () => {
    return (
        <div className='py-8 px-4 mt-0 md:mt-5 lg:mt-12 xl:gap-16'>
            <div className='py-6 px-16 flex flex-col md:flex-row items-center justify-between '>
                {arcs.map((arc, index) => {
                    const IconComponent = arc.icon;
                    return (
                        <div key={index} className='flex flex-col items-center justify-center my-4 mx-4 md:my-0'>
                            <div className='flex items-center justify-center my-2'>
                                <IconComponent className='text-4xl text-white ' />
                                <h2 className='text-white text-4xl font-semibold flex flex-row items-center'>
                                    {arc.prefix && <span className='ml-2'>{arc.prefix}</span>}
                                    <AnimatedNumbers
                                        includeComma
                                        transitions={(position) => ({
                                            type: "spring",
                                            duration: 0.3 * (position + 1),
                                        })}
                                        animateToNumber={parseInt(arc.value)}
                                        className='text-white text-4xl font-semibold ml-4'
                                    />
                                    {arc.postfix && <span className='ml-2'>{arc.postfix}</span>}
                                </h2>
                            </div>
                            <span className='text-mycolor-700 text-lg'>{arc.metric}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Archive;
