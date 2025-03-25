import Image from "next/image";

export default function Home() {
  return (
    <div className="relative h-full lg:h-[148vh]">
      <main className="relative pb-24 pl-4 lg:space-y-24 lg:pl-16">
        <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65] lg:justify-end lg:pb-12" >
          <div className="absolute flex flex-col left-0 top-0 -z-10 h-[95vh] w-screen bg-black"></div>
       
          <h1 className="text-2xl font-bold md:text-4xl lg:text-7xl">The Witcher</h1>
          <p className="text-shadow-md maz-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl">
            Gerald de Rivia, also known as The Witcher, is a monster hunter for hire, navigating a world of magic, intrigue, and danger.
          </p>
        </div>
        <button className="px-4 py-2 bg-red-600 text-white font-semibold rounded hover:bg-red-700 transition">
          Watch Now
        </button>
        <button className="px-4 py-2 bg-gray-600 text-white font-semibold rounded hover:bg-gray-700 transition">
          Show More
        </button>
        
      </main>
    </div>
  );
}
