import { Link } from 'react-router-dom';
import './Header.css';
import account from '../img/vector/account.svg';
import book from '../img/vector/alt-menu-svgrepo-com.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

function Header() {
  return (
    <header className=" mx-auto w-11/12 h-6 flex justify-between pt-16 pl-20 pb-8 pr-20">
      <div>
        <Link
          className=" font-chronicle text-4xl text-white  sm:text-2xl"
          to="/"
        >
          MNTN
        </Link>
      </div>

      <div className="flex gap-10 font-gilroyBold text-lg text-white md:hidden">
        <AnchorLink href="#first">Equipment</AnchorLink>
        <AnchorLink href="#second">About us</AnchorLink>
        <AnchorLink href="#third">Blog</AnchorLink>
      </div>

      <div className=" font-gilroyBold text-lg text-white md:hidden">
        <Link className="flex gap-1" to="../form">
          <img src={account} alt="acc" />
          Account
        </Link>
      </div>
      <div className="w-[35px] h-[35px]  hidden md:block md:opacity-70 sm:pt-1">
        <img src={book} alt="" />
      </div>
    </header>
  );
}

export default Header;
