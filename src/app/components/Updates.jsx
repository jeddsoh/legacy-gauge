import Image from "next/image";

export default function Updates() {
  return (
    <section id="updates">
      <div className="px-4 lg:px-0 py-32 max-w-screen-lg mx-auto">
        <a
          href="#hero"
          className="font-serif font-bold text-2xl text-center block mx-auto"
        >
          Latest by
          <span className="font-sans font-medium text-2xl text-mandarin-500">
            &nbsp;&nbsp;[ g ]
          </span>
        </a>
        <div className="mt-8">
          <div className="grid grid-cols-3 rounded border-l-4 border-purple-500 relative">
            
            {/* Noise Overlay */}
            <div
              className="absolute inset-0 -z-10 h-full w-full mix-blend-overlay"
              style={{
                backgroundImage: `url('/images/brain_noise.png')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>

            {/* Pattern Overlay */}
            <div
              className="absolute inset-0 -z-20 h-full w-full opacity-5"
              style={{
                backgroundImage: `url('/images/event_pattern.png')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>

            {/* Metal Overlay */}
            <div className="absolute inset-0 -z-30 h-full w-full opacity-100 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950"></div>

            {/* Content */}
            <div className="p-14 col-span-2">
              <div className="flex flex-col items-start gap-4">
                <div className="flex items-center gap-2 py-1 pl-[10px] pr-[14px] bg-purple-200 rounded-full">
                  <svg
                    className="text-purple-500"
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.25 2C6.44891 2 6.63968 2.07902 6.78033 2.21967C6.92098 2.36032 7 2.55109 7 2.75V4H14V2.75C14 2.55109 14.079 2.36032 14.2197 2.21967C14.3603 2.07902 14.5511 2 14.75 2C14.9489 2 15.1397 2.07902 15.2803 2.21967C15.421 2.36032 15.5 2.55109 15.5 2.75V4H15.75C16.4793 4 17.1788 4.28973 17.6945 4.80546C18.2103 5.32118 18.5 6.02065 18.5 6.75V15.25C18.5 15.9793 18.2103 16.6788 17.6945 17.1945C17.1788 17.7103 16.4793 18 15.75 18H5.25C4.52065 18 3.82118 17.7103 3.30546 17.1945C2.78973 16.6788 2.5 15.9793 2.5 15.25V6.75C2.5 6.02065 2.78973 5.32118 3.30546 4.80546C3.82118 4.28973 4.52065 4 5.25 4H5.5V2.75C5.5 2.55109 5.57902 2.36032 5.71967 2.21967C5.86032 2.07902 6.05109 2 6.25 2ZM5.25 7.5C4.56 7.5 4 8.06 4 8.75V15.25C4 15.94 4.56 16.5 5.25 16.5H15.75C16.44 16.5 17 15.94 17 15.25V8.75C17 8.06 16.44 7.5 15.75 7.5H5.25Z"
                      fill="currentColor"
                    />
                  </svg>
                  <p className="text-purple-800 uppercase text-xs font-bold tracking-wider">
                    Event
                  </p>
                </div>
                <h1 className="font-bold font-serif text-2xl">
                  The BBQ Field Research Project
                </h1>
                <p>
                  Join us in Texas at Greenbook's IIEX North America for some
                  ground-breaking research as we perform applied ethnography to
                  Austin's best BBQ restaurants. Download the BBQ Crawl Map for
                  a self-guided tour, or sign-up to join us on a guided BBQ bus
                  as we coalesce insights on the best BBQ in Austin.
                </p>
                <a
                  href=""
                  className="group cursor-pointer flex gap-2 items-center mt-8"
                >
                  <p className="group-hover:underline transition-colors font-medium text-purple-500">
                    Contribute to our research today!
                  </p>
                  <svg
                    className="text-purple-700 group-hover:text-purple-800 transform transition-all"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4.25 5.5C4.05109 5.5 3.86032 5.57902 3.71967 5.71967C3.57902 5.86032 3.5 6.05109 3.5 6.25V14.75C3.5 15.164 3.836 15.5 4.25 15.5H12.75C12.9489 15.5 13.1397 15.421 13.2803 15.2803C13.421 15.1397 13.5 14.9489 13.5 14.75V10.75C13.5 10.5511 13.579 10.3603 13.7197 10.2197C13.8603 10.079 14.0511 10 14.25 10C14.4489 10 14.6397 10.079 14.7803 10.2197C14.921 10.3603 15 10.5511 15 10.75V14.75C15 15.3467 14.7629 15.919 14.341 16.341C13.919 16.7629 13.3467 17 12.75 17H4.25C3.65326 17 3.08097 16.7629 2.65901 16.341C2.23705 15.919 2 15.3467 2 14.75V6.25C2 5.65326 2.23705 5.08097 2.65901 4.65901C3.08097 4.23705 3.65326 4 4.25 4H9.25C9.44891 4 9.63968 4.07902 9.78033 4.21967C9.92098 4.36032 10 4.55109 10 4.75C10 4.94891 9.92098 5.13968 9.78033 5.28033C9.63968 5.42098 9.44891 5.5 9.25 5.5H4.25Z"
                      fill="currentColor"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.19416 12.753C6.26025 12.8261 6.3401 12.8855 6.42916 12.9278C6.51822 12.97 6.61473 12.9943 6.71318 12.9992C6.81162 13.0041 6.91008 12.9896 7.0029 12.9565C7.09573 12.9233 7.18111 12.8722 7.25416 12.806L16.5002 4.44V7.25C16.5002 7.44891 16.5792 7.63968 16.7198 7.78033C16.8605 7.92098 17.0513 8 17.2502 8C17.4491 8 17.6398 7.92098 17.7805 7.78033C17.9211 7.63968 18.0002 7.44891 18.0002 7.25V2.75C18.0002 2.55109 17.9211 2.36032 17.7805 2.21967C17.6398 2.07902 17.4491 2 17.2502 2H12.7502C12.5513 2 12.3605 2.07902 12.2198 2.21967C12.0792 2.36032 12.0002 2.55109 12.0002 2.75C12.0002 2.94891 12.0792 3.13968 12.2198 3.28033C12.3605 3.42098 12.5513 3.5 12.7502 3.5H15.3032L6.24716 11.694C6.17403 11.7601 6.11464 11.8399 6.07239 11.929C6.03014 12.0181 6.00586 12.1146 6.00094 12.213C5.99601 12.3115 6.01055 12.4099 6.0437 12.5027C6.07686 12.5956 6.12799 12.6799 6.19416 12.753Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="w-full h-full relative">
              <Image className="object-cover" src="/images/cow.webp" alt="Cow Image" fill={true} />
            </div>
          </div>
          <div className="mt-6 grid grid-cols-3 rounded border-l-4 border-purple-500 relative">
            {/* Noise Overlay */}
            <div
              className="absolute inset-0 -z-10 h-full w-full mix-blend-overlay"
              style={{
                backgroundImage: `url('/images/brain_noise.png')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>

            {/* Pattern Overlay */}
            <div
              className="absolute inset-0 -z-20 h-full w-full opacity-5"
              style={{
                backgroundImage: `url('/images/whitepaper_pattern.png')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>

            {/* Metal Overlay */}
            <div className="absolute inset-0 -z-30 h-full w-full opacity-100 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950"></div>

            {/* Content */}
            <div className="p-14 col-span-2">
              <div className="flex flex-col items-start gap-4">
                <div className="flex items-center gap-2 py-1 pl-[10px] pr-[14px] bg-purple-200 rounded-full">
                  <svg
                    className="text-purple-500"
                    width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5 2C4.60218 2 4.22064 2.15804 3.93934 2.43934C3.65804 2.72065 3.5 3.10218 3.5 3.5V16.5C3.5 16.8978 3.65804 17.2794 3.93934 17.5607C4.22064 17.842 4.60218 18 5 18H16C16.3978 18 16.7794 17.842 17.0607 17.5607C17.342 17.2794 17.5 16.8978 17.5 16.5V7.621C17.4997 7.22331 17.3414 6.84204 17.06 6.561L12.94 2.439C12.8005 2.29961 12.6349 2.1891 12.4527 2.11377C12.2705 2.03844 12.0752 1.99978 11.878 2H5ZM7.25 10.5C7.05109 10.5 6.86032 10.579 6.71967 10.7197C6.57902 10.8603 6.5 11.0511 6.5 11.25C6.5 11.4489 6.57902 11.6397 6.71967 11.7803C6.86032 11.921 7.05109 12 7.25 12H13.75C13.9489 12 14.1397 11.921 14.2803 11.7803C14.421 11.6397 14.5 11.4489 14.5 11.25C14.5 11.0511 14.421 10.8603 14.2803 10.7197C14.1397 10.579 13.9489 10.5 13.75 10.5H7.25ZM7.25 13.5C7.05109 13.5 6.86032 13.579 6.71967 13.7197C6.57902 13.8603 6.5 14.0511 6.5 14.25C6.5 14.4489 6.57902 14.6397 6.71967 14.7803C6.86032 14.921 7.05109 15 7.25 15H13.75C13.9489 15 14.1397 14.921 14.2803 14.7803C14.421 14.6397 14.5 14.4489 14.5 14.25C14.5 14.0511 14.421 13.8603 14.2803 13.7197C14.1397 13.579 13.9489 13.5 13.75 13.5H7.25Z" fill="currentColor"/>
</svg>

                  <p className="text-purple-800 uppercase text-xs font-bold tracking-wider">
                    Whitepaper
                  </p>
                </div>
                <h1 className="font-bold font-serif text-2xl">
                  Level-Up in Gaming Research
                </h1>
                <p>
                This paper advocates for gaming research early on in the development process, defining initial personas and justifying a cadence for continuous sprints. We go on to illustrate how to leverage research repositories, create momentum internally and itemize what challenges are unique to gaming research.
                </p>
                <a
                  href=""
                  className="group cursor-pointer flex gap-2 items-center mt-8"
                >
                  <p className="group-hover:underline transition-colors font-medium text-purple-500">
                    Read the guide
                  </p>
                  <svg
                    className="text-purple-700 group-hover:text-purple-800 transform transition-all"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4.25 5.5C4.05109 5.5 3.86032 5.57902 3.71967 5.71967C3.57902 5.86032 3.5 6.05109 3.5 6.25V14.75C3.5 15.164 3.836 15.5 4.25 15.5H12.75C12.9489 15.5 13.1397 15.421 13.2803 15.2803C13.421 15.1397 13.5 14.9489 13.5 14.75V10.75C13.5 10.5511 13.579 10.3603 13.7197 10.2197C13.8603 10.079 14.0511 10 14.25 10C14.4489 10 14.6397 10.079 14.7803 10.2197C14.921 10.3603 15 10.5511 15 10.75V14.75C15 15.3467 14.7629 15.919 14.341 16.341C13.919 16.7629 13.3467 17 12.75 17H4.25C3.65326 17 3.08097 16.7629 2.65901 16.341C2.23705 15.919 2 15.3467 2 14.75V6.25C2 5.65326 2.23705 5.08097 2.65901 4.65901C3.08097 4.23705 3.65326 4 4.25 4H9.25C9.44891 4 9.63968 4.07902 9.78033 4.21967C9.92098 4.36032 10 4.55109 10 4.75C10 4.94891 9.92098 5.13968 9.78033 5.28033C9.63968 5.42098 9.44891 5.5 9.25 5.5H4.25Z"
                      fill="currentColor"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.19416 12.753C6.26025 12.8261 6.3401 12.8855 6.42916 12.9278C6.51822 12.97 6.61473 12.9943 6.71318 12.9992C6.81162 13.0041 6.91008 12.9896 7.0029 12.9565C7.09573 12.9233 7.18111 12.8722 7.25416 12.806L16.5002 4.44V7.25C16.5002 7.44891 16.5792 7.63968 16.7198 7.78033C16.8605 7.92098 17.0513 8 17.2502 8C17.4491 8 17.6398 7.92098 17.7805 7.78033C17.9211 7.63968 18.0002 7.44891 18.0002 7.25V2.75C18.0002 2.55109 17.9211 2.36032 17.7805 2.21967C17.6398 2.07902 17.4491 2 17.2502 2H12.7502C12.5513 2 12.3605 2.07902 12.2198 2.21967C12.0792 2.36032 12.0002 2.55109 12.0002 2.75C12.0002 2.94891 12.0792 3.13968 12.2198 3.28033C12.3605 3.42098 12.5513 3.5 12.7502 3.5H15.3032L6.24716 11.694C6.17403 11.7601 6.11464 11.8399 6.07239 11.929C6.03014 12.0181 6.00586 12.1146 6.00094 12.213C5.99601 12.3115 6.01055 12.4099 6.0437 12.5027C6.07686 12.5956 6.12799 12.6799 6.19416 12.753Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="w-full h-full relative">
              <Image className="object-cover" src="/images/game.webp" alt="Cow Image" fill={true} />
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}
