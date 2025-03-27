import Image from "next/image";
import Geralt from '../../public/geralt.jpg';
import Header from "@/componets/Header";



export default function Home() {
  return (
    <div className="relative h-screen overflow-hidden bg-gradient-to-b lg:h-[140vh]">
      {/* <Header /> */}
      <main className="relative pb-24 pl-4 lg:pl-16">
        <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65] lg:justify-end lg:pb-12">
          
          <div className="absolute flex flex-col left-0 top-0 -z-10 h-[95vh] w-screen bg-black">
          <Image 
            src={Geralt}
            alt="The-Witcher"
            fill={true}
            className="h-[65hv] object-cover lg:h-95 object-top"
            />
          </div>

          <h1 className="text-2xl font-bold md:text-4xl lg:text-7xl text-white">
            The Witcher
          </h1>
          <p className="text-shadow-md maz-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl text-white">
            Gerald de Rivia, also known as The Witcher, is a monster hunter for
            hire, navigating a world of magic, intrigue, and danger.
          </p>
        </div>
        <div className="flex space-x-3">
          <button className="md:text-xl; flex cursos-pointer items-center gap-x-2 rounded bg-white px-5 py-1.5 text-sm font-semibold text-black hover:opacity-75 md:px-8 md:py-2.5 ">
            Watch Now
          </button>
          <button className="md:text-xl; flex cursos-pointer items-center gap-x-2 rounded bg-gray-600 px-5 py-1.5 text-sm font-semibold text-black hover:opacity-75 md:px-8 md:py-2.5 ">
            Show More
          </button>
        </div>
      </main>
    </div>
  );
}
