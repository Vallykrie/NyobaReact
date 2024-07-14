// rafce

const Nav = () => {
  return (
    <header className="px-20 py-6 sticky top-0 backdrop-blur drop-shadow-lg bg-white/60 w-auto z-50">
      <nav className="px-8 flex justify-between items-center flex-row">
        <div className="justify-start">
          <a href="#home">
            <img src="..\src\assets\logoHeader2.svg" alt="logo" />
          </a>
        </div>
        <div className="justify-center space-x-8 sora-600 text-xl">
          <a href="#about">About Me</a>
          <a href="#skills">Skills</a>
          <a href="#project">Projects</a>
          <a href="#contact">Contact Me</a>
        </div>
        <div className="justify-end">
          <a
            href="https://youtu.be/xvFZjo5PgG0?si=yKEyHpcwxQhWjwD0"
            className="w-36 h-14 px-5 py-4 rounded bg-black justify-center items-center flex text-white text-xl sora-600"
          >
            rawrrr
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
