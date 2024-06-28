import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="w-full bg-SiteColor pt-48 pb-32">
      <div className="w-9/12 flex mx-auto  justify-between md:flex-col">
        <div className=" w-3/12 lg:w-5/12">
          <Link className=" font-chronicle text-4xl text-white" to=".">
            MNTN
          </Link>
          <p className="text-lg text-white mt-6 md:hidden">
            Get out there &amp;&nbsp;discover your next slope, mountain
            &amp;&nbsp;destination!
          </p>
          <p className="text-lg text-white/40 mt-32 md:hidden">
            Copyright 2023&nbsp;MNTN, Inc. Terms &amp;&nbsp;Privacy
          </p>
        </div>
        <div className="w-5/12 flex justify-between md:flex md:w-full md:pt-10">
          <div className="pl-8 md:p-0">
            <p className="text-orange-200/85 font-gilroyBold mb-6">
              More on&nbsp;The Blog:
            </p>
            <ul className="text-white text-lg font-gilroy ">
              <li className="mb-6">
                <Link to=".">About MNTN</Link>
              </li>
              <li className="mb-6">
                <Link to=".">Contributors &amp;&nbsp;Writers</Link>
              </li>
              <li className="mb-6">
                <Link to=".">Write For&nbsp;Us</Link>
              </li>
              <li className="mb-6">
                <Link to=".">Contact&nbsp;Us</Link>
              </li>
              <li>
                <Link to=".">Privacy Policy</Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-orange-200/85 font-gilroyBold mb-6">
              More on&nbsp;MNTN:
            </p>
            <ul className="text-white text-lg font-gilroy ">
              <li className="mb-6">
                <Link to=".">The Team</Link>
              </li>
              <li className="mb-6">
                <Link to=".">Jobs</Link>
              </li>
              <li>
                <Link to=".">Press</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
