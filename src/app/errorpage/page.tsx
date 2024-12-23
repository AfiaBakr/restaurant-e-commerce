import Link from "next/link";
import Image from "next/image";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function ErrorPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Background Section */}
      <header className="bg-cover bg-center h-52 flex flex-col text-center" style={{ backgroundImage: "url('/menu pic/headerpc.png')" }}>
                <h1 className="text-3xl lg:text-5xl font-bold text-white tracking-wide mt-16">Error Page</h1>
                <div className="flex items-center justify-center text-sm lg:text-2xl">
                <h1 className="text-white">Home</h1><MdKeyboardArrowRight className="text-white"/><h1 className="text-[#ff9f0d]"><u>Error 404</u></h1>
                </div>      
      </header>
      {/* Signup Form Section */}
      <section className="p-10 relative bg-white pt-20 lg:pt-36 flex flex-col items-center">
        <div className="w-screen lg:w-[630px] text-center">
          <h3 className="text-5xl lg:text-[96px] font-bold text-[#FF9F0D] mb-6">404</h3>
          <p className="font-bold text-xl text-[32px] mb-4">
            Oops! Looks like something went wrong
          </p>
          <p className="text-base textlg:text-[18px] mx-8 mb-1 lg:mb-4">
            Page cannot be found! We&apos;ll have it figured out in no time.
          </p>
          <p className="text-base lg:text-[18px] mb-5 lg:mb-6">
            Meanwhile, check out these fresh ideas:
          </p>
          {/* Button */}
          <Link href="/">
            <button className="bg-[#FF9F0D] text-white text-lg text-[18px] font-bold px-6 py-2 rounded ">
              Go Back to Home
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}