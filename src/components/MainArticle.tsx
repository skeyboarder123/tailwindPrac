import Start from './SidePanel';
import Socials from './Socials';

function MainArticle() {
  return (
    <article className=" mt-48 w-11/12 mx-auto flex justify-between mb-big  pl-20 pr-20 md:block md:">
      <div className="md:hidden">
        <Socials />
      </div>
      <div className=" w-7/12 md:w-full">
        <div className="flex gap-3 justify-left items-center">
          <svg
            width="72"
            height="2"
            viewBox="0 0 72 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="72" height="2" fill="#FBD784" />
          </svg>
          <p className=" text-orange-200/85 font-gilroyBold tracking-widest text-xl sm:text-lg">
            A&nbsp;HIKING GUIDE
          </p>
        </div>
        <div className="mt-8 text-big text-white/80 font-gilroyBold xl:text-notBig lg:text-medium  md:text-5xl md:leading-relaxed sm:text-3xl sm:leading-relaxed xxl:text-xxlBig">
          <h1>Be&nbsp;Prepared For The Mountains And Beyond!</h1>
        </div>
      </div>
      <div className=" hidden md:block md: md:text-left">
        <Socials />
      </div>
      <Start />
    </article>
  );
}

export default MainArticle;
