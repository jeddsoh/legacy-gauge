import Image from "next/image";

export default function Navbar() {
  return (
    <header className="fixed w-full z-40">
      <nav className="py-4 px-6 bg-neutral-950 border-b-2 border-mandarin-500">
        <div className="max-w-screen-[2000px] mx-auto flex justify-between items-center">
          <a href="" className="text-mandarin-500 text-2xl">
            [ gauge ]
          </a>
          <div className="flex gap-8 items-center">
            <a className="text-neutral-200 hover:text-mandarin-500 transition-colors cursor-pointer">
              Services
            </a>

            <a
              href=""
              className="flex items-center gap-2 group text-neutral-200 hover:text-mandarin-500"
            >
              <p className=" transition-colors">Industries</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="w-5 h-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>

            <a
              href=""
              className="flex items-center gap-2 group text-neutral-200 hover:text-mandarin-500"
            >
              <p className=" transition-colors">Case Studies</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="w-5 h-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
            <a className="text-neutral-200 hover:text-mandarin-500 transition-colors cursor-pointer">
              About
            </a>
            <a className="text-neutral-200 hover:text-mandarin-500 transition-colors cursor-pointer">
              Contact
            </a>

          </div>
        </div>
      </nav>
    </header>
  );
}
