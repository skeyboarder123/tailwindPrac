import { Link } from 'react-router-dom';
import ThirdImg from '../img/ThirdImg.png';

function ThirdArticle() {
  return (
    <div className=" w-full bg-SiteColor pt-48  2xl:pb-32 md:pt-40 md:pb-20">
      <div className="w-9/12 flex justify-between mx-auto relative 2xl:block md:block">
        <h1 className=" text-superBig text-gray-400/20 relative  font-gilroyBold tracking-tighter lg:text-lgBig md:text-mdBig md:leading-none">
          03
        </h1>
        <img className=" max-w-full 2xl:hidden" src={ThirdImg} alt="hiking" />
        <div className=" absolute top-44 left-36 w-5/12 2xl:w-9/12 md:relative md:left-0 md:top-0 md: md:w-full">
          <div className="flex gap-3 justify-left items-center mb-4 ">
            <svg
              width="72"
              height="2"
              viewBox="0 0 72 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="72" height="2" fill="#FBD784" />
            </svg>
            <p className=" text-orange-200/85 font-gilroyBold tracking-widest text-xl ">
              Where you go&nbsp;is&nbsp;the key
            </p>
          </div>

          <h2 className=" font-chronicle text-notBig leading-tight text-white/80 font-thin mb-4 lg:text-medium md:text-5xl">
            Understand Your Map &amp;&nbsp;Timing
          </h2>

          <p className=" text-lg text-white mb-6 md:text-base">
            To&nbsp;start, print out the hiking guide and map.
            If&nbsp;it&rsquo;s raining, throw them in&nbsp;a&nbsp;Zip-Lock bag.
            Read over the guide, study the map, and have a&nbsp;good idea
            of&nbsp;what to&nbsp;expect. I&nbsp;like to&nbsp;know what
            my&nbsp;next landmark is&nbsp;as&nbsp;I&nbsp;hike. For example,
            I&rsquo;ll read the guide and know that say, in&nbsp;a&nbsp;mile,
            I&nbsp;make a&nbsp;right turn at&nbsp;the junction..
          </p>

          <div className=" ">
            <Link
              to="."
              className=" text-orange-200/85 font-gilroyBold  text-lg flex gap-1 items-center "
            >
              read more
              <svg
                width="24"
                height="16"
                viewBox="0 0 24 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 -6.99382e-07L14.59 1.41L20.17 7L-3.93402e-07 7L-3.0598e-07 9L20.17 9L14.58 14.58L16 16L24 8L16 -6.99382e-07Z"
                  fill="#FBD784"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThirdArticle;
