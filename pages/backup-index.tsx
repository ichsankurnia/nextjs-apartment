import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import logo from './../assets/images/logo.png'
import chair from "./../assets/images/chair.jpg"
import livingRoom from "./../assets/images/living-room.jpg"
import bedRoom from "./../assets/images/bedroom.jpg"
import kitchen from "./../assets/images/kitchen.jpg"
import carving from "./../assets/images/carving-small.png"
import resort from "./../assets/images/resort-small.png"
import showRoom from "./../assets/images/show-room.png"
import adDetails from './../assets/images/bg-pattern.jpg'
import Link from 'next/link'

const BackUpIndex: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">

        <div className='pt-10 pb-5 bg-chocolate-900 border-b border-white flex items-center justify-center'>
          <div className='flex item-center justify-between w-full md:w-[940px]'>
            <div id="logo">
              <a href="index.html"><img src={logo} alt="LOGO" /></a>
            </div>
            <ul id="navigation">
              <li className="selected">
                <Link href='/'>Home</Link>
              </li>
              <li>
                <Link href='/about'>About</Link>
              </li>
              <li>
                <Link href='/gallery'>Gallery</Link>
              </li>
              <li>
                <Link href='/blog'>Blog</Link>
              </li>
              <li>
                <Link href='/contact'>Contact</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className='bg-white w-full sm:w-[970px] mx-auto pb-3 shadow-xl'>
          {/* AdBox */}
          <div className='flex flex-col sm:flex-row sm:h-[407px] w-full border border-white'>
            <div className='relative w-full h-full'>
              <img src={chair} alt="Img" className='w-full h-full' />
              <div className='absolute z-10 bottom-5 right-7 text-center'>
                <p>Whicker Chair</p>
                <p className='text-[24px]'>$250.00</p>
                <button className='btn1'>View Details</button>
              </div>
            </div>
            <div className="relative w-full h-full">
              <div className='z-10 absolute w-full h-full flex flex-col justify-center items-center px-10'>
                <h1 className='font-oswald sm:text-[34px] text-chocolate-900 text-center mb-5'>High Quality<br /> Wooden Furnitures<br /> That's Built to Last.</h1>
                <p>
                  You can choose from our wide selection of furnitures on display. Either for your home, office or other estab- lishments. If you {"can’t"} find what you need, we can make it according to your needs.
                </p>
              </div>
              <img src={adDetails} className='w-full h-full' />
            </div>
          </div>

          <ul className='flex flex-col sm:flex-row w-full text-white'>
            <li className='w-full bg-chocolate-500'>
              <div className='cursor-pointer'>
                <img src={livingRoom} alt="Img" className='w-full hover:opacity-40' /> <a href="index.html"></a>
              </div>
              <div className="bg-[url(./../assets/images/separator-light.png)] bg-repeat-x bg-left-top px-5 py-5">
                <h4 className='text-chocolate-100 mb-2 uppercase font-oswald'>Living Room</h4>
                <p>
                  This website template has been designed by <a href="http://www.freewebsitetemplates.com/">Free Website Templates</a> for you, for free. You can replace all this text with your own text.
                </p>
              </div>
            </li>
            <li className="w-full bg-chocolate-900">
              <div className='cursor-pointer'>
                <img src={bedRoom} alt="Img" className='w-full hover:opacity-40' /> <a href="index.html"></a>
              </div>
              <div className="bg-[url(./../assets/images/separator-light.png)] bg-repeat-x bg-left-top px-5 py-5">
                <h4 className='text-chocolate-100 mb-2 uppercase font-oswald'>Bedroom</h4>
                <p>
                  You can remove any link to our website from this website template, you're free to use this website template without linking back to us.
                </p>
              </div>
            </li>
            <li className="w-full bg-chocolate-500">
              <div className='cursor-pointer'>
                <img src={kitchen} alt="Img" className='w-full hover:opacity-40' /> <a href="index.html"></a>
              </div>
              <div className="bg-[url(./../assets/images/separator-light.png)] bg-repeat-x bg-left-top px-5 py-5">
                <h4 className='text-chocolate-100 mb-2 uppercase font-oswald'>Kitchen</h4>
                <p>
                  If you're having problems editing this website template, then don't hesitate to ask for help on the <a href="http://www.freewebsitetemplates.com/forums/">Forum</a>.
                </p>
              </div>
            </li>
          </ul>

          <div className='flex flex-col sm:flex-row'>

            <div className="bg-[url(./../assets/images/separator-light-vertical.png)] bg-repeat-y bg-right-top float-left w-full sm:w-[320px] pt-5 pb-2 px-7 font-oswald uppercase">
              <div>
                <p className='text-[#7b7b7b] text-[14px]'>
                  For Order and Inquiries Please Call:
                </p>
                <p className='text-2xl'>760-962-9541</p>
              </div>
              <div className='mt-5'>
                <p className='text-[#7b7b7b] text-[14px]'>
                  Or you can visit us at:
                </p>
                <p className='text-2xl'>4885 Wilson Street<br /> Victorville, CA 92392</p>
              </div>
            </div>

            <div className='font-oswald flex-1'>
              <h4 className='text-grey text-[14px] uppercase p-5 px-7'>From the Blog</h4>
              <div className='flex items-center justify-around flex-col sm:flex-row'>
                <div className='bg-[url(./../assets/images/bg-box.png)] bg-no-repeat bg-left-top text-chocolate-900 w-[270px]'>
                  <img src={carving} alt="Img" className='float-right' />
                  <div className='p-5 text-sm'>
                    <p className='text-[12px] font-quattrocentoSans font-thin'>April 16, 2023</p>
                    <p className='mb-14'>CC's Carving</p>
                    <a href="blog.html" className="uppercase">Read More</a>
                  </div>

                </div>
                <div className='bg-[url(./../assets/images/bg-box.png)] bg-no-repeat bg-left-top text-chocolate-900 w-[270px]'>
                  <img src={resort} alt="Img" className='float-right' />
                  <div className='p-5 text-sm'>
                    <p className='text-[12px] font-quattrocentoSans font-thin'>April 15, 2023</p>
                    <p className='mb-14'>5 Star Resorts</p>
                    <a href="blog.html" className="uppercase">Read More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className='bg-chocolate-100 border-t border-white pt-10 pb-5 flex justify-center items-center'>

          <div className='w-full md:w-[950px]'>

            <div className='flex md:flex-row flex-col space-y-5 md:space-y-0 bg-[url(./../assets/images/separator-dark.png)] bg-repeat-x bg-left-bottom text-chocolate-900 pb-5'>
              
              <div className="w-full pr-5 px-5 md:px-0">
                <h4 className='uppercase font-oswald mb-3'>Visit our Showroom</h4>
                <a href="gallery.html"><img src={showRoom} alt="Img" /></a>
                <p>
                  4885 Wilson Street<br /> Victorville, CA 92392<br /><br /> 760-962-9541<br /><br /> <a href="index.html">info@carvedcreations.com</a>
                </p>
              </div>

              <div className='w-full px-5 bg-[url(./../assets/images/separator-dark.png)] md:bg-[url(./../assets/images/separator-dark-vertical.png)] bg-repeat-x md:bg-repeat-y bg-left-top'>
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

              <div className='w-full pl-5 pr-5 md:pr-0 bg-[url(./../assets/images/separator-dark.png)] md:bg-[url(./../assets/images/separator-dark-vertical.png)] bg-repeat-x md:bg-repeat-y bg-left-top'>
                <form action="#" method="post" className='bg-[url(./../assets/images/separator-dark.png)] bg-repeat-x bg-left-bottom pb-8 mb-5 flex flex-col'>
                  <h4 className='uppercase font-oswald mb-3 pt-5 md:pt-0'>Join Our Newsletter</h4>
                  <input type="text" placeholder="Enter Email Address Here For Updates..." className='text-chocolate-500 px-2 py-0.5 outline-none border-[3px] rounded-md border-chocolate-300 mb-2 w-full' />
                  <input type="submit" value="Sign up" className="btn2 text-white" />
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
        </div>
      </main>
    </div>
  )
}

export default BackUpIndex
