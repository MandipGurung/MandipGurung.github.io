import Image from "next/image";
import Link from "next/link";
import { AboutMeImg } from "@/assets";
import SectionTitle from "../common/SectionTitle";

const AboutMeSection = () => {
  return (
    <section className="pb-20 pt-24" id="about-me">
      <SectionTitle highlightLetter="A" title="About Me" />
      
      <div className="flex flex-col sm:flex-row items-center text-gray-700 gap-12">
        {/* Left Side - Image */}
        <div className="relative flex items-center pt-12 justify-center">
        <div className="absolute aspect-square w-[80%] bg-yellow -mt-24 h-[70%] z-10 rounded-sm" />
          <Image
            src={AboutMeImg}
            alt="polite"
            height={300}
            width={300}
            priority
            className="relative w-96 h-auto z-20"
          />
        </div>
        {/* Right Side - Content */}
        <div className="flex flex-col text-left">
          <p className="text-sm text-gray-600">
          Motivated and detail-oriented aspiring software developer with hands-on experience in full-stack web
          development, IT support, and networking. Skilled in React.js, Laravel, PHP, and database management, with
          a strong foundation in Agile practices, secure coding, and technical troubleshooting. Seeking a full-time role
          where I can apply my technical expertise, problem-solving skills, and collaborative mindset to deliver
          innovative, user-focused digital solutions.
          </p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-sm">
            <p><span className="font-semibold text-orange-500">Name:</span> Mandip Gurung </p>
            <p><span className="font-semibold text-orange-500">Age:</span> 25 Years</p>
            <p><span className="font-semibold text-orange-500">Citizenship:</span> Nepal</p>
            <p><span className="font-semibold text-orange-500">Residence:</span> Kathmandu, Nepal</p>
            <p><span className="font-semibold text-orange-500">Job:</span> Software Engineer</p>
            <p><span className="font-semibold text-orange-500">E-mail:</span> mandipgurung233@gmail.com</p>
          </div>
          <div className="mt-6">
            <Link href="/Gurung_Mandip_Resume.pdf" target="_blank">
              <button className="bg-red-500 text-black font-semibold px-6 py-2 rounded-md shadow-md transition transform hover:scale-105">
                Download Resume
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
