function FooterComponent() {
  return (
    <div className="bg- mt-20 flex min-h-[40vh] flex-col justify-between bg-gradient-to-b from-black to-blue-900 px-60 pb-10">
      <div className="flex flex-col items-center gap-10">
        <h1 className="text-center font-serif text-6xl font-semibold">
          Let's work together!
        </h1>
        <button className="rounded-full bg-neutral-300 p-4 font-serif text-xl font-bold uppercase text-black">
          Contact me
        </button>
      </div>
      <div className="flex flex-col gap-5">
        <h3 className="text-xl underline">j.shum@outlook.com</h3>
        <div className="flex gap-5">
          <a href="https://github.com/JerryShum" target="_blank">
            <img
              src="/public/icons/icons8-github-30.svg"
              alt="GitHub Icon"
              className="scale-125"
            />
          </a>

          <a href="https://www.linkedin.com/in/jerry-shum/" target="_blank">
            <img
              src="/public/icons/icons8-linkedin-2-30.svg"
              className="scale-125"
              alt="LinkedIn Icon"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default FooterComponent;
