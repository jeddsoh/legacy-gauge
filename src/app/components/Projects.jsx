import Image from "next/image";

export default function Projects() {
  return (
    <section id="projects">
      <div className="px-4 lg:px-0 mt-32">
        <div>
          <h2 className="font-serif font-bold text-2xl text-center">
            Gauge does more with data.
          </h2>
        </div>
        <div className="mt-12 grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 gap-12 max-w-screen-xl mx-auto">
          <div className="p-14 rounded-sm overflow-hidden border-t-2 border-mandarin-500 relative">
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
                backgroundImage: `url('/images/brain_pattern.png')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>

            {/* Metal Overlay */}
            <div className="absolute inset-0 -z-30 h-full w-full opacity-100 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950"></div>

            {/* Content */}
            <Image
              src="/images/brain.png"
              width={72}
              height={72}
              alt=""
              className="mix-blend-luminosity"
            />
            <h3 className="font-serif font-bold mt-8 text-2xl">
              Segmentation and Clustering
            </h3>
            <p className="mt-4 text-neutral-200 leading-relaxed">
              Upload 10,000 rows of survey data, classify the columns and see
              what segments result.
            </p>
            <a
              href=""
              className="group cursor-pointer flex gap-2 items-center mt-8"
            >
              <p className="group-hover:underline transition-colors font-medium text-mandarin-500">
                anchorbox.gauge.io
              </p>
              <svg
                className="text-mandarin-700 group-hover:text-mandarin-800 transform transition-all"
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
          <div className="p-14 rounded-sm overflow-hidden border-t-2 border-mandarin-500 relative">
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
                backgroundImage: `url('/images/ear_pattern.png')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>

            {/* Metal Overlay */}
            <div className="absolute inset-0 -z-30 h-full w-full opacity-100 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950"></div>

            {/* Content */}
            <Image
              src="/images/ear.png"
              width={72}
              height={72}
              alt=""
              className="mix-blend-luminosity"
            />
            <h3 className="font-serif font-bold mt-8 text-2xl">
              Natural Language Sandbox
            </h3>
            <p className="mt-4 text-neutral-200 leading-relaxed">
            Explore differences in unstructured text between demographics in public reviews and comments.
            </p>
            <a
              href=""
              className="group cursor-pointer flex gap-2 items-center mt-8"
            >
              <p className="group-hover:underline transition-colors font-medium text-mandarin-500">
                sandbox.gauge.io
              </p>
              <svg
                className="text-mandarin-700 group-hover:text-mandarin-800 transform transition-all"
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
      </div>
    </section>
  );
}
