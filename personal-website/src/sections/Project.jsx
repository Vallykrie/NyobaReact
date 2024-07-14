import { projectLists } from "../constant";
import readMore from "../assets/readMore.svg";

const Project = () => {
  return (
    <section className="flex flex-col px-8 w-auto h-auto p-5">
      <div className="flex w-full flex-row justify-center gap-4 py-5 mt-14">
        <div className="text-white text-4xl sora-400">My</div>
        <div className="text-white text-4xl sora-800">Project</div>
      </div>
      <div className="w-full flex flex-col">
        {projectLists.map((icon) => (
          <div key={icon.no}>
            <div className="py-5 gap-10 w-full h-[516px] flex flex-row">
              <div className="h-[476px] w-1/2">
                <img
                  src={icon.img}
                  alt={icon.alt}
                  className="h-[476px] w-[398px] flex items-center"
                />
              </div>
              <div className="gap-7 justify-center flex flex-col h-auto w-1/2">
                <div className="text-white text-4xl sora-800">{icon.no}</div>
                <div
                  className="text-white sora-700"
                  style={{ fontSize: "32px" }}
                >
                  {icon.title}
                </div>
                <div className="text-white text-base sora-200">
                  {icon.description}
                </div>
                <a href={icon.href}>
                  <img src={readMore} alt="Read More" className="h-5 w-5" />
                </a>
              </div>
            </div>
            <div className="py-5 gap-10 w-full h-[516px] flex flex-row">
              <div className="gap-7 justify-center flex flex-col h-auto w-1/2">
                <div className="text-white text-4xl sora-800">{icon.no2}</div>
                <div
                  className="text-white sora-700"
                  style={{ fontSize: "32px" }}
                >
                  {icon.title2}
                </div>
                <div className="text-white text-base sora-200">
                  {icon.description2}
                </div>
                <a href={icon.href}>
                  <img src={readMore} alt="Read More" className="h-5 w-5" />
                </a>
              </div>
              <div className="h-[476px] w-1/2 flex justify-end">
                <img
                  src={icon.img2}
                  alt={icon.alt2}
                  className="h-[476px] w-[398px] flex items-center"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
