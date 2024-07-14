const Footer = () => {
  return (
    <footer className="flex flex-row h-[100] w-full justify-between items-center px-8">
      <div className="justify-center items-start">
        <a href="#home">
          <img src="..\src\assets\logoHeader.svg" alt="logo" />
        </a>
      </div>
      <div className="flex flex-col justify-center items-end gap-3 sora-200 text-white text-base">
        <p>@ 2024 Nathan Sudiara</p>
        <p>Made with React + Tailwind</p>
      </div>
    </footer>
  );
};

export default Footer;
