import { socialMedia } from "../constant";

const Contact = () => {
  return (
    <section className="h-auto w-full px-8 grid grid-flow-row grid-cols-2 grid-rows-1 ">
      {/* left side */}
      <div className="w-4/5 py-5 flex flex-col h-auto justify-center gap-5">
        <div>
          <input
            type="text"
            placeholder="Your name"
            className="w-full border-solid border-[1.5px] px-6 py-4 rounded border-black "
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Email"
            className="w-full border-solid border-[1.5px] px-6 py-4 rounded border-black "
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Title"
            className="w-full border-solid border-[1.5px] px-6 py-4 rounded border-black "
          />
        </div>
        <div>
          <textarea
            type="text"
            placeholder="How can i help?*"
            className="justify-start items-start h-36 w-full border-solid border-[1.5px] px-6 py-4 rounded border-black "
          />
        </div>
        <div className="flex flex-row gap-8 justify-start items-center">
          <button className="w-full h-14 px-5 py-4 rounded bg-black justify-center items-center flex text-white text-xl sora-600">
            Get in Touch
          </button>

          {/* sosmed */}
          <div className=" flex">
            <div className="flex items-center gap-8 py-1 h-14 bg-white">
              {socialMedia.map((icon) => (
                <a
                  className="flex justify-center items-center w-14 h-14 bg-white rounded border-solid border-2 border-black hover:bg-black cursor-pointer transition-all duration-300 ease-in-out"
                  key={icon.alt}
                  href={icon.href}
                >
                  <div className="flex justify-center items-center w-14 h-14 absolute transition-opacity duration-300 ease-in-out opacity-100 hover:opacity-0">
                    <img src={icon.src} alt={icon.alt} width={20} height={20} />
                  </div>
                  <div className="flex justify-center items-center w-14 h-14 absolute transition-opacity duration-300 ease-in-out opacity-0 hover:opacity-100">
                    <img
                      src={icon.src2}
                      alt={icon.alt}
                      width={20}
                      height={20}
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* right side */}
      <div className="flex flex-col justify-center gap-10 h-auto">
        <div className="flex flex-col gap-5">

          {/* title */}
          <div className="flex flex-col gap-3 text-4xl sora-800">
            <div className="flex flex-row gap-4">
              <div className="">Lets</div>
              <div>
                <div
                  className=" absolute"
                  style={{
                    webkitTextStrokeWidth: "0.25rem",
                    webkitTextStrokeColor: "black",
                  }}
                >
                  talk
                </div>
                <div className="absolute text-white">talk</div>
                <div className="">talk</div>
              </div>
              <div className="">for</div>
            </div>
            <div className="flex flex-row gap-4">
              <div className="">Something</div>
              <div className="">special</div>
            </div>
          </div>

          {/* description */}
          <div className="sora-200">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
              dolor officia eveniet aliquid, eius laudantium laboriosam tenetur
              eos exercitationem ad, nam nemo tempore ratione id eaque, debitis
              commodi ipsum impedit!
            </p>
          </div>
        </div>

        {/* info */}
        <div className="flex flex-col sora-600 text-3xl">
            <p>
              blablabla@than.com
            </p>
            <p>
              08123456789
            </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
