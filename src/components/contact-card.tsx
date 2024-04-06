import Link from "next/link";
import { RxEnvelopeClosed } from "react-icons/rx";
import { SiYoutube } from "react-icons/si";
import { SlPhone } from "react-icons/sl";

export default function ContactCard() {

    return (
        <div className="bg-slate-900 text-white w-full flex sm:gap-12 items-center justify-between text-xl underline gap-2">
          <div>
            <Link href={`tel:896-916-1759`}>
              <div className="flex items-center gap-1 hover:text-blue-300">
                <SlPhone/>
                <div>
                  Call us
                </div>
              </div>
            </Link>
          </div>
          <div>
            <Link href={`mailto:mathsbymani111@gmail.com`}>
                <div className="flex items-center gap-1  hover:text-blue-300">
                    <RxEnvelopeClosed />
                <div>
                    Email
                </div>
                </div>
            </Link>
          </div>
          <div>
            <Link href={`https://youtube.com/@SuryaMani-pw5qi?si=vBM9SY4MmhgOuY0_`}>
                <div className="flex items-center gap-1  hover:text-blue-300">
                    <SiYoutube />
                <div>
                    YouTube
                </div>
                </div>
            </Link>
          </div>
          </div>
      );
}