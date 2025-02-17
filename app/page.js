import Image from "next/image";
import { homeImg } from "@/Data/data";
import Blog from "@/components/Blog";
import Skill from "@/components/Skill";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import Slider from "@/components/Slider";

export default function Home() {
  return (
    <>
      <main className="hero w-full h-auto md:h-screen relative top-0">
        <div className="hero1 md:hidden">
          <div className="w-full h-auto pt-12 overflow-hidden flex justify-center items-center">
            <Image
              src="/images/my1.jpeg"
              width={250}
              height={100}
              className="cursor-pointer duration-700 hover:scale-105 mt-12 rounded-lg"
              alt="Picture of the author"
            />
          </div>
          <div className="w-full h-auto flex justify-center items-center flex-col text-center p-12">
            <h1 className="text-3xl font-bold font-creepson my-6">
              I'm <span className="font-sans">Harsh</span>
              <span className="text-blue-500">Indora</span>
            </h1>
            <p className="text-sm text-gray-200">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Doloremque quod accusamus voluptatem vitae, ea nemo modi ut,
              reprehenderit suscipit quos similique quidem? Adipisci fuga
              molestias velit placeat quia, perspiciatis fugit.
            </p>
          </div>
          <div className="flex justify-center items-center gap-6 pb-14">
            <button className="px-8 py-2 bg-gradient-to-tr from-blue-600 to-blue-500 border-2 border-blue-500 rounded-md">
              Search
            </button>
            <button className="px-8 py-2 bg-transparent border-2 border-white rounded-md">
              Search
            </button>
          </div>
        </div>

        {/* running after MD */}
        <div className="hero3 hidden w-full h-full rounded-br-[90%] rounded-bl-[20%] relative lg:flex items-center">
          <div className="w-1/2 pl-16 flex flex-col gap-2">
            <h1 className="text-8xl font-bold font-creepson">Hello i am</h1>
            <h2 className="text-6xl font-bold">Harsh Indora</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Doloremque quod accusamus voluptatem vitae, ea nemo modi ut,
              reprehenderit suscipit quos similique quidem? Adipisci fuga
              molestias velit placeat quia, perspiciatis fugit.
            </p>
            <div className="flex gap-4 mt-8">
              <button className="px-8 py-2 bg-gradient-to-tr from-blue-600 to-blue-500 border-2 border-blue-500 rounded-md">
                Downlad-CV
              </button>
              <button className="px-8 py-2 bg-transparent border-2 border-white rounded-md">
                Contact-US
              </button>
            </div>
          </div>
          <div className="w-96 h-96 rounded-full bg-gray-500 border-8 border-white absolute top-1/2 left-2/3 transform -translate-x-1/4 -translate-y-1/2 overflow-hidden flex justify-center items-center">
            <Image
              src="/images/my1.jpeg"
              width={300}
              height={100}
              className="rounded-full cursor-pointer duration-700 hover:scale-105"
              alt="Picture of the author"
            />
          </div>
        </div>
      </main>
      <Slider />
      <Blog />
      <Skill />
      <Services />
      <Projects />
      <Footer />
    </>
  );
}
