import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

const navigation = [
  { name: "Проекты", href: "/projects" },
  { name: "Контакты", href: "/contact" },
];

const Button = () => {
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const buttonStyle = {
    padding: "10px 20px",
    border: "2px solid",
    borderRadius: "20px",
    transition: "background-color 0.3s",
    backgroundColor: isHovered ? "#FF0000" : "transparent",
    color: isHovered ? "#FFFFFF" : "#000000",
    cursor: "pointer",
  };

  return (
    <button
      style={buttonStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      СММ
    </button>
  );
};

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={100} />
      <h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        HDM Group
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-sm text-zinc-500 ">
          Привет, я Максим и здесь я собрал мои основные проекты бизнес решений{" "}
          <Link
            target="_blank"
            href="https://t.me/Aqqtqqt"
            className="underline duration-500 hover:text-zinc-300"
          >
            Telegram
          </Link>
          <br />
        </h2>
        <Button />
      </div>
    </div>
  );
}
