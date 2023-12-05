import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

const navigation = [
	{ name: "Мы знанимаемся:", href: "/projects" },
	{ name: "Веб-разработкой", href: "/contact" },

];

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
			<Particles
				className="absolute inset-0 -z-10 animate-fade-in"
				quantity={100}
			/>
			<h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
				HDM Group
			</h1>
			<div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<div className="my-16 text-center animate-fade-in">
				<h2 className="text-sm text-zinc-500 ">
					Делаем веб ресурсы для всех задач
					{" "}
					{/*<Link
						target="_blank"
						href="https://t.me/Aqqtqqt"
						className="underline duration-500 hover:text-zinc-300"
					>
						Telegram
					</Link>*/}
					<br />
				</h2>
				<h2 className="text-sm text-zinc-500 ">
					Оптимизируем под ваш бизнес так, чтобы клиенты остались довольны{" "}
					{/*<Link
						target="_blank"
						href="https://t.me/Aqqtqqt"
						className="underline duration-500 hover:text-zinc-300"
					>
						Telegram
					</Link>*/}
					<br />
				</h2>
			</div>
			<div className="flex flex-col items-center mt-1 animate-fade-in">
				{/* Существующий элемент */}
				<h3 className="text-lg text-white"></h3>
				{/* Кнопка */}
				<div className="flex">
					<Link href="/projects" passHref>
						<button className="rounded-full px-7 py-3 bg-black text-white hover:bg-gray-800 transition-colors">
							Портфолио
						</button>
					</Link>
					<Link href="/contact" passHref>
						<button className="ml-4 rounded-full px-7 py-3 bg-black text-white hover:bg-gray-800 transition-colors">
							Начать работать с нами
						</button>
					</Link>
					{/* Добавьте другие кнопки по мере необходимости */}
				</div>
			</div>
		</div>
	);
}
