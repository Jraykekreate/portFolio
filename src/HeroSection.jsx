import { Button, OutlineButton } from "./Button";

function HeroSection() {
  return (
    <div>
      <div className="hero container flex flex-col md:flex-row">
        <div className="text-container md:w-1/2 w-full p-8 font-Raleway text-start">
          <h3 className="text-2xl p-4 text-slate-600">
            Hey, I&apos;m Xaje and I&apos;m a{" "}
          </h3>

          <h1 className="font-Anton my-2 tracking-wide font-extrabold text-6xl md:text-8xl m-4">
            <span className="block text-secondaryText ">Web</span>{" "}
            <span className="text-primaryText">Developer</span>
          </h1>
          <h3 className="text-xl p-4 text-slate-600">
            I am a computer engineering student who is simply passionate about
            tech and innovation
          </h3>
          <div className="flex gap-2 p-2">
            <Button> Get In Touch😉</Button>
            <OutlineButton>Hire me💻</OutlineButton>
          </div>
        </div>
        <div className="image-container flex  items-center justify-center md:w-1/2 w-full ">
          <div>
            <img
              className="w-96"
              alt="DevPic"
              src="dist/src/assets/herodevpic.jpg"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
