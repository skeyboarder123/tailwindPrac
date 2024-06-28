import { Link } from 'react-router-dom';
import SecImg from '../img/SecImg.png';

function SecondArticle() {
  return (
    <div className=" w-full bg-SiteColor pt-48  md:pt-40">
      <div className="w-9/12 flex gap-24 mx-auto  relative 2xl:block md:block ">
        <img className=" max-w-full 2xl:hidden" src={SecImg} alt="hiking" />
        <h1 className=" text-superBig text-gray-400/20 relative  font-gilroyBold tracking-tighter lg:text-lgBig md:text-mdBig md:leading-none">
          02
        </h1>

        <div className="absolute top-44 right-8 w-5/12  2xl:left-36 2xl:w-9/12 md:relative md:left-0 md:top-0 md: md:w-full ">
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
            <p className=" text-orange-200/85 font-gilroyBold tracking-widest text-xl">
              Hiking Essentials
            </p>
          </div>

          <h2 className=" font-chronicle text-notBig leading-tight text-white/80 font-thin mb-4 lg:text-medium md:text-5xl">
            Picking the right Hiking Gear!
          </h2>

          <p className=" text-lg text-white mb-6 md:text-base">
            The nice thing about beginning hiking is&nbsp;that you don&rsquo;t
            really need any special gear, you can probably get away with things
            you already have. Let&rsquo;s start with clothing. A&nbsp;typical
            mistake hiking beginners make is&nbsp;wearing jeans and regular
            clothes, which will get heavy and chafe wif they get sweaty
            or&nbsp;wet.
          </p>

          <div className="">
            <Link
              to="."
              className="text-orange-200/85 font-gilroyBold  text-lg flex gap-1 items-center"
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

export default SecondArticle;
