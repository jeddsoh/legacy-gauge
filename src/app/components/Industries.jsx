import Image from "next/image";

export default function Industries() {
  return (
    <section id="industries">
      <div className="px-4 lg:px-0 py-32">
        <div>
          <h2 className="font-serif font-bold text-2xl text-center">
            <span className="text-neutral-400">Unlocking possibility.</span>
            <br />
            Industries we empower.
          </h2>
        </div>
        <div className="mt-12 grid grid-rows-4 lg:grid-cols-2 gap-4 max-w-screen-xl mx-auto">
          <a
            className="row-span-1 col-span-1 pt-32 pb-14 px-14 rounded overflow-hidden relative flex flex-col justify-end"
            href=""
          >
            {/* Noise Overlay */}
            <div
              className="absolute inset-0 -z-20 h-full w-full"
              style={{
                backgroundImage: `url('/images/brain_noise.png')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>

            {/* Pattern Overlay */}
            <div
              className="absolute inset-0 -z-30 h-full w-full opacity-100"
              style={{
                backgroundImage: `url('/images/engine.webp')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>

            {/* Metal Overlay */}
            <div className="absolute inset-0 -z-10 h-full w-full opacity-70 bg-neutral-950"></div>

            {/* Content */}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.75977 18.11V14.12C3.75977 12.38 5.16977 10.96 6.91977 10.96H17.0898C18.8298 10.96 20.2498 12.37 20.2498 14.12V18.11C20.2498 19.85 18.8398 21.27 17.0898 21.27H6.91977C5.16977 21.27 3.75977 19.86 3.75977 18.11Z"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.84961 10.97V7.92002C6.84961 5.08002 9.1596 2.77002 11.9996 2.77002C14.8396 2.77002 17.1496 5.08002 17.1496 7.92002V10.97H6.84961Z"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 18.1801V15.6001"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11.9987 16.1201C12.5676 16.1201 13.0287 15.6589 13.0287 15.0901C13.0287 14.5212 12.5676 14.0601 11.9987 14.0601C11.4299 14.0601 10.9688 14.5212 10.9688 15.0901C10.9688 15.6589 11.4299 16.1201 11.9987 16.1201Z"
                fill="currentColor"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <h3 className="font-serif font-bold mt-2 text-xl">
              Information Security
            </h3>
            <p className="mt-2 text-neutral-200 leading-relaxed">
              Cybersecurity is an industry that is awash with data and static, a
              challenging characteristic that’s a sweet spot for Gauge.
            </p>
          </a>
          <a
            className="row-span-2 col-span-1 pt-32 pb-14 px-14 rounded overflow-hidden relative flex flex-col justify-end"
            href=""
          >
            {/* Noise Overlay */}
            <div
              className="absolute inset-0 -z-20 h-full w-full"
              style={{
                backgroundImage: `url('/images/brain_noise.png')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>

            {/* Pattern Overlay */}
            <div
              className="absolute inset-0 -z-30 h-full w-full opacity-100"
              style={{
                backgroundImage: `url('/images/tower.webp')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>

            {/* Metal Overlay */}
            <div className="absolute inset-0 -z-10 h-full w-full opacity-70 bg-neutral-950"></div>

            {/* Content */}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.4897 9.13018L18.2797 9.67016L18.0197 9.79015L17.3097 10.1001L12.1897 12.3802C12.0597 12.4402 11.9397 12.4702 11.7997 12.4902C11.5897 12.5302 11.3697 12.5302 11.1597 12.4902C11.0197 12.4702 10.8997 12.4402 10.7697 12.3802L5.64968 10.1001L4.93969 9.79015L4.67968 9.67016L3.46969 9.13018C2.49969 8.70018 2.49969 7.60016 3.46969 7.17016L10.7697 3.92016C11.2097 3.74016 11.7497 3.74016 12.1897 3.92016L19.4897 7.17016C20.4597 7.59016 20.4597 8.70018 19.4897 9.13018Z"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M17.3102 10.1001V13.9301C17.3102 14.2701 17.1501 14.5902 16.8601 14.7802C15.9201 15.4002 14.0302 16.4101 11.4802 16.4101C10.7002 16.4101 8.40016 16.3202 6.10016 14.7802C5.82016 14.5902 5.66016 14.2701 5.66016 13.9301V10.1101L10.7802 12.3901C10.9102 12.4501 11.0302 12.4801 11.1702 12.5001C11.3802 12.5401 11.6002 12.5401 11.8102 12.5001C11.9502 12.4801 12.0702 12.4501 12.2002 12.3901L17.3102 10.1001Z"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M20.2188 8.15039V17.1404"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M20.2195 15.3604C19.2395 15.3604 18.4395 16.1604 18.4395 17.1404C18.4395 18.1204 19.2395 18.9203 20.2195 18.9203C21.1995 18.9203 21.9995 18.1204 21.9995 17.1404C21.9995 16.1604 21.1995 15.3604 20.2195 15.3604Z"
                fill="currentColor"
              />
              <path
                d="M20.2188 18.1699V20.2199"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <h3 className="font-serif font-bold mt-2 text-xl">
              Education Technology
            </h3>
            <p className="mt-2 text-neutral-200 leading-relaxed">
              After 18-months of out-of-classroom experiences for most of the
              world, the important role of technology is undeniable.
            </p>
          </a>
          <a
            className="row-span-1 col-span-1 pt-32 pb-14 px-14 rounded overflow-hidden relative flex flex-col justify-end"
            href=""
          >
            {/* Noise Overlay */}
            <div
              className="absolute inset-0 -z-20 h-full w-full"
              style={{
                backgroundImage: `url('/images/brain_noise.png')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>

            {/* Pattern Overlay */}
            <div
              className="absolute inset-0 -z-30 h-full w-full opacity-100"
              style={{
                backgroundImage: `url('/images/laborers.webp')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>

            {/* Metal Overlay */}
            <div className="absolute inset-0 -z-10 h-full w-full opacity-70 bg-neutral-950"></div>

            {/* Content */}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.25 8.25H21.75M2.25 9H21.75M5.25 14.25H11.25M5.25 16.5H8.25M4.5 19.5H19.5C20.0967 19.5 20.669 19.2629 21.091 18.841C21.5129 18.419 21.75 17.8467 21.75 17.25V6.75C21.75 6.15326 21.5129 5.58097 21.091 5.15901C20.669 4.73705 20.0967 4.5 19.5 4.5H4.5C3.90326 4.5 3.33097 4.73705 2.90901 5.15901C2.48705 5.58097 2.25 6.15326 2.25 6.75V17.25C2.25 17.8467 2.48705 18.419 2.90901 18.841C3.33097 19.2629 3.90326 19.5 4.5 19.5Z"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <h3 className="font-serif font-bold mt-2 text-xl">
              Financial Technology
            </h3>
            <p className="mt-2 text-neutral-200 leading-relaxed">
              We empower financial services companies to ditch the spreadsheet
              and live in a modern financial landscape where usability thrives.
            </p>
          </a>
          <a
            className="row-span-2 col-span-1 pt-32 pb-14 px-14 rounded overflow-hidden relative flex flex-col justify-end"
            href=""
          >
            {/* Noise Overlay */}
            <div
              className="absolute inset-0 -z-20 h-full w-full"
              style={{
                backgroundImage: `url('/images/brain_noise.png')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>

            {/* Pattern Overlay */}
            <div
              className="absolute inset-0 -z-30 h-full w-full opacity-100"
              style={{
                backgroundImage: `url('/images/engine.webp')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>

            {/* Metal Overlay */}
            <div className="absolute inset-0 -z-10 h-full w-full opacity-70 bg-neutral-950"></div>

            {/* Content */}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.75977 18.11V14.12C3.75977 12.38 5.16977 10.96 6.91977 10.96H17.0898C18.8298 10.96 20.2498 12.37 20.2498 14.12V18.11C20.2498 19.85 18.8398 21.27 17.0898 21.27H6.91977C5.16977 21.27 3.75977 19.86 3.75977 18.11Z"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.84961 10.97V7.92002C6.84961 5.08002 9.1596 2.77002 11.9996 2.77002C14.8396 2.77002 17.1496 5.08002 17.1496 7.92002V10.97H6.84961Z"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 18.1801V15.6001"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11.9987 16.1201C12.5676 16.1201 13.0287 15.6589 13.0287 15.0901C13.0287 14.5212 12.5676 14.0601 11.9987 14.0601C11.4299 14.0601 10.9688 14.5212 10.9688 15.0901C10.9688 15.6589 11.4299 16.1201 11.9987 16.1201Z"
                fill="currentColor"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <h3 className="font-serif font-bold mt-2 text-xl">
              Information Security
            </h3>
            <p className="mt-2 text-neutral-200 leading-relaxed">
              Cybersecurity is an industry that is awash with data and static, a
              challenging characteristic that’s a sweet spot for Gauge.
            </p>
          </a>
          <a
            className="row-span-1 col-span-1 pt-32 pb-14 px-14 rounded overflow-hidden relative flex flex-col justify-end"
            href=""
          >
            {/* Noise Overlay */}
            <div
              className="absolute inset-0 -z-20 h-full w-full"
              style={{
                backgroundImage: `url('/images/brain_noise.png')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>

            {/* Pattern Overlay */}
            <div
              className="absolute inset-0 -z-30 h-full w-full opacity-100"
              style={{
                backgroundImage: `url('/images/tower.webp')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>

            {/* Metal Overlay */}
            <div className="absolute inset-0 -z-10 h-full w-full opacity-70 bg-neutral-950"></div>

            {/* Content */}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.4897 9.13018L18.2797 9.67016L18.0197 9.79015L17.3097 10.1001L12.1897 12.3802C12.0597 12.4402 11.9397 12.4702 11.7997 12.4902C11.5897 12.5302 11.3697 12.5302 11.1597 12.4902C11.0197 12.4702 10.8997 12.4402 10.7697 12.3802L5.64968 10.1001L4.93969 9.79015L4.67968 9.67016L3.46969 9.13018C2.49969 8.70018 2.49969 7.60016 3.46969 7.17016L10.7697 3.92016C11.2097 3.74016 11.7497 3.74016 12.1897 3.92016L19.4897 7.17016C20.4597 7.59016 20.4597 8.70018 19.4897 9.13018Z"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M17.3102 10.1001V13.9301C17.3102 14.2701 17.1501 14.5902 16.8601 14.7802C15.9201 15.4002 14.0302 16.4101 11.4802 16.4101C10.7002 16.4101 8.40016 16.3202 6.10016 14.7802C5.82016 14.5902 5.66016 14.2701 5.66016 13.9301V10.1101L10.7802 12.3901C10.9102 12.4501 11.0302 12.4801 11.1702 12.5001C11.3802 12.5401 11.6002 12.5401 11.8102 12.5001C11.9502 12.4801 12.0702 12.4501 12.2002 12.3901L17.3102 10.1001Z"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M20.2188 8.15039V17.1404"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M20.2195 15.3604C19.2395 15.3604 18.4395 16.1604 18.4395 17.1404C18.4395 18.1204 19.2395 18.9203 20.2195 18.9203C21.1995 18.9203 21.9995 18.1204 21.9995 17.1404C21.9995 16.1604 21.1995 15.3604 20.2195 15.3604Z"
                fill="currentColor"
              />
              <path
                d="M20.2188 18.1699V20.2199"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <h3 className="font-serif font-bold mt-2 text-xl">
              Education Technology
            </h3>
            <p className="mt-2 text-neutral-200 leading-relaxed">
              After 18-months of out-of-classroom experiences for most of the
              world, the important role of technology is undeniable.
            </p>
          </a>
          <a
            className="row-span-1 col-span-1 pt-32 pb-14 px-14 rounded overflow-hidden relative flex flex-col justify-end"
            href=""
          >
            {/* Noise Overlay */}
            <div
              className="absolute inset-0 -z-20 h-full w-full"
              style={{
                backgroundImage: `url('/images/brain_noise.png')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>

            {/* Pattern Overlay */}
            <div
              className="absolute inset-0 -z-30 h-full w-full opacity-100"
              style={{
                backgroundImage: `url('/images/laborers.webp')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>

            {/* Metal Overlay */}
            <div className="absolute inset-0 -z-10 h-full w-full opacity-70 bg-neutral-950"></div>

            {/* Content */}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.25 8.25H21.75M2.25 9H21.75M5.25 14.25H11.25M5.25 16.5H8.25M4.5 19.5H19.5C20.0967 19.5 20.669 19.2629 21.091 18.841C21.5129 18.419 21.75 17.8467 21.75 17.25V6.75C21.75 6.15326 21.5129 5.58097 21.091 5.15901C20.669 4.73705 20.0967 4.5 19.5 4.5H4.5C3.90326 4.5 3.33097 4.73705 2.90901 5.15901C2.48705 5.58097 2.25 6.15326 2.25 6.75V17.25C2.25 17.8467 2.48705 18.419 2.90901 18.841C3.33097 19.2629 3.90326 19.5 4.5 19.5Z"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <h3 className="font-serif font-bold mt-2 text-xl">
              Financial Technology
            </h3>
            <p className="mt-2 text-neutral-200 leading-relaxed">
              We empower financial services companies to ditch the spreadsheet
              and live in a modern financial landscape where usability thrives.
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}
