import { Link } from 'react-router-dom';
import inst from '../img/vector/inst.svg';
import twitt from '../img/vector/twitt.svg';

function Socials() {
  return (
    <div className=" flex flex-col gap-4 items-center pt-12  md:flex md:items-start">
      <div className=" text-2xl text-white transform rotate-90 origin-center mb-10 md:rotate-0 md:text-xl md:mb-0">
        Follow us
      </div>
      <Link to=".">
        <img src={inst} alt="" />
      </Link>
      <Link to=".">
        <img src={twitt} alt="" />
      </Link>
    </div>
  );
}

export default Socials;
