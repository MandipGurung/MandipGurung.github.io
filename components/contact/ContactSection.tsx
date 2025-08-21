import Image from "next/image";
import HeighlightText from "../common/HeighlightText";
import SectionTitle from "../common/SectionTitle";
import { ContactImg } from "@/assets";
import Link from "next/link";
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineInstagram, AiOutlineWhatsApp} from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";

const ContactSection = () => {
  return (
    <section id="contact" className="pt-8">
      <SectionTitle highlightLetter="L" title="Lets Connect!!!" />
      <div className="sub-maxWidth py-14 flex justify-between flex-col sm:flex-row">
        <div>
          <div className="flex items-center gap-3 justify-start mb-6">
            <Link href="https://github.com/MandipGurung233" target="_blank">
              <div className="flex items-center justify-center h-10 w-10 text-lg rounded-full bg-yellow transition-all duration-150 ease-in hover:border-black border-2 border-yellow-300">
                <AiOutlineGithub />
              </div>
            </Link>
            <Link href="https://www.linkedin.com/feed/" target="_blank">
              <div className="flex items-center justify-center h-10 w-10 text-lg rounded-full bg-yellow transition-all duration-150 ease-in hover:border-black border-2 border-yellow-300">
                <AiOutlineLinkedin />
              </div>
            </Link>
            <Link href="https://www.instagram.com/" target="_blank">
              <div className="flex items-center justify-center h-10 w-10 text-lg rounded-full bg-yellow transition-all duration-150 ease-in hover:border-black border-2 border-yellow-300">
                <AiOutlineInstagram />
              </div>
            </Link>
          </div>

          <Link
            href="mailto:rishi.shrestha101@gmail.com"
            className="hover:underline text-sm sm:text-base">
            <p>Mail: mandipgurung233@gmail.com</p>
          </Link>
          <p>Phone: 5196972934</p>
          <p>Address: London, ON</p>

        </div>

        <div className="relative w-full sm:w-[40%] md:w-[35%] flex justify-center">
          <div className="bg-yellow h-[120px] absolute w-full" />
          <Image
            src={ContactImg}
            alt="Mandip Gurung"
            height={300}
            width={300}
            priority
            className="relative w-44 h-auto z-20 mt-6"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
