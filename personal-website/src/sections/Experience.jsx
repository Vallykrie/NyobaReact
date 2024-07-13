import { experienceLists } from "../constant";

const Experience = () => {
  return (
    <section className="w-auto h-auto flex px-8 gap-5 flex-col">
      {/* title */}
      <div className="py-5 justify-center flex flex-row gap-4 h-fit items-start">
        <div className="sora-400 text-white" style={{ fontSize: "3rem" }}>
          My
        </div>
        <div className="sora-800 text-white" style={{ fontSize: "3rem" }}>
          Experience
        </div>
      </div>

      {/* Grid Skills */}

      <div className="w-full gap-8 py-10 px-6 flex items-center flex-col">
        {experienceLists.map((icon) => (
          <div
            key={icon.role}
            className="w-full flex items-center justify-start flex-col px-6 py-8 h-auto gap-7 border-solid border-2 border-white rounded-xl"
          >
            <div className="flex justify-between items-center flex-row gap-8 w-full">
              <div className="flex items-center flex-row gap-8">
                <img src={icon.logo} alt={icon.alt} className="h-8 w-8" />
                <div className=" sora-600 text-2xl text-white">{icon.role}</div>
              </div>
              <div className="sora-100 text-base text-white flex justify-end items-center">
                {icon.date}
              </div>
            </div>
            <div className="text-base text-white">
              <div className="sora-100">{icon.description}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
