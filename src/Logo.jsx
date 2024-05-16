/* eslint-disable react/prop-types */
function Logo({ displayClass = false }) {
  return (
    <div
      className={
        displayClass
          ? `flex items-center justify-center `
          : `hidden md:flex items-center justify-center`
      }
    >
      <span>
        <img className="w-16" src="./public/logo..png"></img>
      </span>
      <span className="text-primaryText p-2 text-3xl font-bold">
        Xaje<span className="text-sm">&#9632;</span>
      </span>
    </div>
  );
}

export default Logo;
