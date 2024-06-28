import { Link } from 'react-router-dom';

function MainForm() {
  return (
    <div className=" bg-formSite bg-cover bg-no-repeat h-screen pt-48">
      <div className=" w-6/12 bg-formContainerSite mx-auto  h-2/3 rounded-2xl shadow-lg ">
        <div className=" w-8/12 mx-auto p-12">
          <h1 className=" text-4xl text-white font-chronicle mb-10 select-none">
            Start Your Journey With&nbsp;Us!
          </h1>
          <label className="">
            <p className="text-lg text-white pb-4 select-none">Login:</p>
            <input className="font-gilroy" type="text" />
          </label>
          <label>
            <p className="text-lg text-white py-4 select-none">Password:</p>
            <input className=" font-gilroy " type="password" />
            <button
              className="px-6 py-3 bg-black/50 text-white rounded-xl mt-6 block mb-6"
              type="submit"
            >
              Submit
            </button>
          </label>

          <div className="flex items-center">
            <p className="text-white">Haven't statred yet? </p>
            <Link to="../register">
              <p className=" text-xl font-chronicle  text-sky-100 underline">
                Join us!
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainForm;
