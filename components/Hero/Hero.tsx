'use client'

import React from 'react';
import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  return (
      <section className="px-4 py-10">
            <div className='grid grid-cols-1 md:grid-cols-12 gap-4'>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className='col-span-12 md:col-span-8 place-self-center text-left justify-self-start'
                >
                    <h1 className='text-white mb-4 text-4xl md:text-5xl lg:text-7xl font-semibold font-poppins'>
                        <span className='text-transparent text-bold bg-clip-text bg-gradient-to-r from-mycolor-200 to-mycolor-100'>
                            Hello I&apos;m
                        </span>
                        <div className='h-2'></div>
                        <TypeAnimation
                            sequence={[
                                'Sezer Kara',
                                1000,
                                'Frontend Developer',
                                1000,
                                'Mobile Developer',
                                1000,
                                'Fullstack Developer',
                                1000
                            ]}
                            wrapper="span"
                            speed={20}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className='text-mycolor-100 text-base mb-6 lg:text-lg'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ipsum alias possimus similique veritatis est eligendi sunt maxime, corrupti placeat consequatur unde nulla animi facere voluptatum quisquam quasi nesciunt recusandae nostrum! Soluta saepe unde doloribus quisquam dolorum deserunt, earum necessitatibus? Aspernatur eum magni qui quam provident! Culpa ut minima officia.
                    </p>
                    <div>
                        <Link href="/#contact"
                            className='px-6 inline-block py-3 w-full mr-4 md:w-fit rounded-full bg-gradient-to-br from-mycolor-200 to-mycolor-100 text-white text-center'>
                            Hire
                        </Link>
                        <Link href="/sezer-kara.pdf" target="_blank" rel="noopener noreferrer"
                            className='px-1 inline-block py-1 w-full md:w-fit rounded-full bg-gradient-to-br from-mycolor-200 to-mycolor-100 text-mycolor-400 text-center mt-3'>
                            <span className='block bg-mycolor-700 rounded-full px-5 py-2'>
                                Download CV
                            </span>
                    </Link>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className='col-span-12 md:col-span-4 place-self-center mt-4 md:mt-0'
                >
                    <div className='relative rounded-full bg-gradient-to-bl from-mycolor-100 to-mycolor-500 w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] mx-auto'>
                        <Image
                            alt=''
                            src="/1.png"
                            width={370}
                            height={370}
                            className='absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 rounded-full w-[220px] h-[220px] lg:w-[370px] lg:h-[370px]'
                        />
                    </div>
                </motion.div>
            </div>
      </section>
  );
}

export default Hero;
