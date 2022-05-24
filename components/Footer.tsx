import Link from 'next/link';
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

type Props = {};

const Footer: React.FC<Props> = ({ }) => {
    return (
        <>
            <footer className='bg-chocolate-100 border-t border-white py-5 sm:p-10 flex justify-center items-center mt-auto'>
                <div className='w-full md:w-[1100px]'>

                    <div className='flex md:flex-row flex-col space-y-5 md:space-y-0 bg-[url(/images/separator-dark.png)] bg-repeat-x bg-left-bottom text-chocolate-900 pb-5'>

                        <div className="w-full pr-5 px-5 md:px-0">
                            <h4 className='uppercase font-oswald mb-3'>Visit our Showroom</h4>
                            <LazyLoadImage src='/images/show-room.png' alt='' effect='blur' />
                            <p>
                                4885 Wilson Street<br /> Victorville, CA 92392<br /><br /> 760-962-9541<br /><br /> <a href="index.html">info@carvedcreations.com</a>
                            </p>
                        </div>

                        <div className='w-full px-5 bg-[url(/images/separator-dark.png)] md:bg-[url(/images/separator-dark-vertical.png)] bg-repeat-x md:bg-repeat-y bg-left-top'>
                            <h4 className='uppercase font-oswald mb-3 pt-5 md:pt-0'>Recent Blog Posts</h4>
                            <ul className="posts space-y-2">
                                <li>
                                    <span className="time">Apr 16</span>
                                    <p>
                                        <a href="blog.html">The Carving Master &amp; Owner</a> {"Maybe you’re looking for something diferent, something special."}
                                    </p>
                                </li>
                                <li>
                                    <span className="time">Apr 15</span>
                                    <p>
                                        <a href="blog.html">5 Star Hotels We Supply</a> And we love the challenge of doing something diferent and something special.
                                    </p>
                                </li>
                                <li>
                                    <span className="time">Apr 14</span>
                                    <p>
                                        <a href="blog.html">How To Pick The Right Furniture For You</a> {"What’s more, they’re absolutely free! You can do a lot with them."}
                                    </p>
                                </li>
                            </ul>
                        </div>

                        <div className='w-full pl-5 pr-5 md:pr-0 bg-[url(/images/separator-dark.png)] md:bg-[url(/images/separator-dark-vertical.png)] bg-repeat-x md:bg-repeat-y bg-left-top'>
                            <form action="#" method="post" className='bg-[url(/images/separator-dark.png)] bg-repeat-x bg-left-bottom pb-8 mb-5 flex flex-col'>
                                <h4 className='uppercase font-oswald mb-3 pt-5 md:pt-0'>Join Our Newsletter</h4>
                                <input type="text" placeholder="Enter Email Address Here For Updates..." className='text-chocolate-500 px-2 py-0.5 outline-none border-[3px] rounded-md border-chocolate-300 mb-2 w-full' />
                                <input type="submit" value="Sign up" className="cursor-pointer bg-chocolate-500 hover:bg-chocolate-300 text-white w-20 py-1 rounded-md" />
                            </form>
                            <div id="connect">
                                <h4 className='mb-2'>Social Media</h4>
                                <a href="http://freewebsitetemplates.com/go/facebook/" target="_blank" className="facebook"></a>
                                <a href="http://freewebsitetemplates.com/go/googleplus/" target="_blank" className="googleplus"></a>
                                <a href="http://freewebsitetemplates.com/go/twitter/" target="_blank" className="twitter"></a>
                            </div>
                        </div>

                    </div>

                    <div className='flex justify-between items-center font-oswald text-chocolate-300 uppercase mt-5 px-2 text-[8px] md:text-xs'>
                        <p>
                            © Copyright 2023. All Rights Reserved.
                        </p>

                        <ul className="flex space-x-2">
                            <li className='hover:text-chocolate-900'>
                                <Link href='/'>Home</Link>
                            </li>
                            <li className='hover:text-chocolate-900'>
                                <Link href='/about'>About</Link>
                            </li>
                            <li className='hover:text-chocolate-900'>
                                <Link href='/gallery'>Gallery</Link>
                            </li>
                            <li className='hover:text-chocolate-900'>
                                <Link href='/blog'>Blog</Link>
                            </li>
                            <li className='hover:text-chocolate-900'>
                                <Link href='/contact'>Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;