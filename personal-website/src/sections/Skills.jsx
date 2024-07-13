import { mySkills } from "../constant";

const Skills = () => {
  return (
    // Title
    <section className="flex flex-col px-8 gap-5 h-auto w-full">
      <div className="py-5 justify-center flex flex-row gap-4 h-fit items-start mt-14">
        <div className="sora-400" style={{ fontSize: "3rem" }}>
          My
        </div>
        <div className="sora-800" style={{ fontSize: "3rem" }}>
          Skills
        </div>
      </div>

      {/* Grid Skills */}
      <div className="p-5">
        <div className="grid grid-flow-row gap-8 py-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
          {mySkills.map((icon) => (
            <a
              className="relative flex justify-center items-center w-48 h-48 bg-white rounded border-solid border-2 border-black hover:bg-black cursor-pointer transition-all duration-300 ease-in-out"
              key={icon.alt}
              href={icon.href}
            >
              <div className="flex justify-center items-center w-48 h-48 absolute transition-opacity duration-300 ease-in-out opacity-100 hover:opacity-0 flex-col gap-8">
                <img src={icon.src} alt={icon.alt} width={45} height={45} />
                <div className="sora-700 text-xl">{icon.name}</div>
              </div>
              <div className="flex justify-center items-center w-48 h-48 absolute transition-opacity duration-300 ease-in-out opacity-0 hover:opacity-100 flex-col gap-8">
                <img src={icon.src2} alt={icon.alt} width={45} height={45} />
                <div className="sora-700 text-xl text-white">{icon.name}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
