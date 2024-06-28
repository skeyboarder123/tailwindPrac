import { Link } from 'react-router-dom';
import SecImg from '../img/SecImg.png';
import qwe from '../img/vector/rect.svg';
import rty from '../img/vector/arrow.svg';

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
            <img src={qwe} alt="" />
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
              <img src={rty} alt="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondArticle;
