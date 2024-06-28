import { Link } from 'react-router-dom';
import firtsImg from '../img/01.png';
import qwe from '../img/vector/rect.svg';
import rty from '../img/vector/arrow.svg';

function FirstArticle() {
  return (
    <div className=" w-full ">
      <div className="w-9/12 flex justify-between mx-auto relative 2xl:block md:block">
        <h1 className=" text-superBig text-gray-400/20 relative  font-gilroyBold tracking-tighter lg:text-lgBig md:text-mdBig md:leading-none">
          01
        </h1>
        <img className=" max-w-full 2xl:hidden" src={firtsImg} alt="hiking" />
        <div className=" absolute top-44 left-36 w-5/12 2xl:w-9/12 md:relative md:left-0 md:top-0 md: md:w-full">
          <div className="flex gap-3 justify-left items-center mb-4 ">
            <img src={qwe} alt="" />
            <p className=" text-orange-200/85 font-gilroyBold tracking-widest text-xl">
              Get started
            </p>
          </div>

          <h2 className=" font-chronicle text-notBig leading-tight text-white/80 font-thin mb-4 lg:text-medium md:text-5xl">
            What level of&nbsp;hiker are you?
          </h2>

          <p className=" text-lg text-white mb-6  md:text-base">
            Determining what level of&nbsp;hiker you are can
            be&nbsp;an&nbsp;important tool when planning future hikes. This
            hiking level guide will help you plan hikes according
            to&nbsp;different hike ratings set by&nbsp;various websites like All
            Trails and Modern Hiker. What type of&nbsp;hiker are
            you&nbsp;&mdash; novice, moderate, advanced moderate, expert,
            or&nbsp;expert backpacker?{' '}
          </p>

          <div className="">
            <Link
              to="."
              className=" text-orange-200/85 font-gilroyBold  text-lg flex gap-1 items-center "
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

export default FirstArticle;
