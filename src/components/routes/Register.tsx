function Register() {
  return (
    <div className="h-screen bg-formContainerSite ">
      <div className=" w-2/6 bg-RegColor/60  flex flex-col gap-12 p-10 shadow-xl mx-auto  rounded-b-lg rounded-br-lg">
        <h1 className="pt-5 font-chronicle text-5xl text-white text-center border-b-2 border-white/80">
          Registration:
        </h1>
        <label className="mb-2">
          <p className="text-white text-2xl font-chronicle pb-2">Name:</p>
          <input className="bg-white/20" type="text" />
        </label>
        <label>
          <p className="text-white text-2xl font-chronicle pb-2">
            Second Name:
          </p>
          <input className="bg-white/20" type="text" />
        </label>
        <label>
          <p className="text-white text-2xl font-chronicle pb-2">Email:</p>
          <input className="bg-white/20" type="email" />
        </label>
        <label>
          <p className="text-white text-2xl font-chronicle ">Birth date:</p>
          <input className="bg-white/20" type="date" name="" id="" />
        </label>
        <button
          className="px-6 py-3 bg-black/50 text-white rounded-xl mt-6 block "
          type="submit"
        >
          Start now!
        </button>
      </div>
    </div>
  );
}

export default Register;
