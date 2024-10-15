function FooterComponent() {
  return (
    <div className="mt-20 flex min-h-[40vh] flex-col justify-between bg-gradient-to-b from-black to-blue-900 px-10 pb-10 md:px-20 lg:px-40 xl:px-60">
      <div className="flex flex-col items-center gap-10">
        <h1 className="text-center font-serif text-3xl font-semibold md:text-4xl lg:text-5xl xl:text-6xl">
          Let's work together!
        </h1>
        <button className="rounded-full bg-neutral-300 p-2 font-serif text-lg font-bold uppercase text-black md:p-3 md:text-xl lg:p-4">
          Contact me
        </button>
      </div>
      <div className="flex flex-col items-center gap-5 md:items-start">
        <h3 className="text-lg underline md:text-xl">j.shum@outlook.com</h3>
        <div className="flex gap-5">
          <a href="https://github.com/JerryShum" target="_blank">
            <img
              src="/icons/icons8-github-30.svg"
              alt="GitHub Icon"
              className="scale-100 md:scale-110 lg:scale-125"
            />
          </a>

          <a href="https://www.linkedin.com/in/jerry-shum/" target="_blank">
            <img
              src="/icons/icons8-linkedin-2-30.svg"
              className="scale-100 md:scale-110 lg:scale-125"
              alt="LinkedIn Icon"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default FooterComponent;
