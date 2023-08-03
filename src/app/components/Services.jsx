'use client'
import Image from "next/image";

export default function Services() {
  return (
    <section className="-mt-14 relative z-10 pb-32">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center gap-12 px-4 lg:px-0">
        <div id="research" className="shadow-md relative p-14 rounded-sm overflow-hidden border-l-2 border-eggplant-500 flex flex-col gap-14 lg:flex-row lg:items-center w-full justify-between">
          {/* Noise Overlay */}
          <div
            className="absolute inset-0 -z-10 h-full w-full opacity-5"
            style={{
              backgroundImage: `url('/images/Service_noise.png')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>


            {/* Metal Overlay */}
          <div className="absolute inset-0 -z-20 h-full w-full opacity-100 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950"></div>

          <div>
            <svg
              className="text-eggplant-500"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.0597 16.021C17.5275 15.7015 18.0762 15.5211 18.6423 15.5004C19.2084 15.4798 19.7687 15.6199 20.2585 15.9044C20.7483 16.189 21.1476 16.6064 21.4101 17.1084C21.6725 17.6104 21.7875 18.1764 21.7417 18.741C20.5419 19.1603 19.2675 19.3235 18.0007 19.22C17.9968 18.0866 17.6704 16.9768 17.0597 16.022C16.5176 15.1718 15.7698 14.472 14.8855 13.9875C14.0013 13.503 13.009 13.2493 12.0007 13.25C10.9926 13.2495 10.0005 13.5032 9.11645 13.9877C8.23235 14.4723 7.48472 15.1719 6.94272 16.022M17.9997 19.219L18.0007 19.25C18.0007 19.475 17.9887 19.697 17.9637 19.916C16.1491 20.9571 14.0928 21.5033 12.0007 21.5C9.83072 21.5 7.79372 20.924 6.03772 19.916C6.01201 19.6846 5.99965 19.4519 6.00072 19.219M6.00072 19.219C4.73435 19.3263 3.46063 19.1637 2.26172 18.742C2.21607 18.1776 2.33111 17.6117 2.59355 17.1099C2.85598 16.6081 3.25509 16.1908 3.74472 15.9063C4.23435 15.6218 4.79451 15.4817 5.36044 15.5021C5.92636 15.5226 6.47493 15.7028 6.94272 16.022M6.00072 19.219C6.00431 18.0857 6.33234 16.9769 6.94272 16.022M15.0007 7.25C15.0007 8.04565 14.6846 8.80871 14.122 9.37132C13.5594 9.93393 12.7964 10.25 12.0007 10.25C11.2051 10.25 10.442 9.93393 9.8794 9.37132C9.31679 8.80871 9.00072 8.04565 9.00072 7.25C9.00072 6.45435 9.31679 5.69129 9.8794 5.12868C10.442 4.56607 11.2051 4.25 12.0007 4.25C12.7964 4.25 13.5594 4.56607 14.122 5.12868C14.6846 5.69129 15.0007 6.45435 15.0007 7.25ZM21.0007 10.25C21.0007 10.5455 20.9425 10.8381 20.8294 11.111C20.7164 11.384 20.5506 11.6321 20.3417 11.841C20.1328 12.0499 19.8847 12.2157 19.6118 12.3287C19.3388 12.4418 19.0462 12.5 18.7507 12.5C18.4552 12.5 18.1627 12.4418 17.8897 12.3287C17.6167 12.2157 17.3687 12.0499 17.1597 11.841C16.9508 11.6321 16.7851 11.384 16.672 11.111C16.5589 10.8381 16.5007 10.5455 16.5007 10.25C16.5007 9.65326 16.7378 9.08097 17.1597 8.65901C17.5817 8.23705 18.154 8 18.7507 8C19.3475 8 19.9198 8.23705 20.3417 8.65901C20.7637 9.08097 21.0007 9.65326 21.0007 10.25ZM7.50072 10.25C7.50072 10.5455 7.44252 10.8381 7.32945 11.111C7.21637 11.384 7.05064 11.6321 6.84171 11.841C6.63278 12.0499 6.38474 12.2157 6.11176 12.3287C5.83877 12.4418 5.54619 12.5 5.25072 12.5C4.95524 12.5 4.66266 12.4418 4.38968 12.3287C4.1167 12.2157 3.86866 12.0499 3.65973 11.841C3.4508 11.6321 3.28506 11.384 3.17199 11.111C3.05892 10.8381 3.00072 10.5455 3.00072 10.25C3.00072 9.65326 3.23777 9.08097 3.65973 8.65901C4.08168 8.23705 4.65398 8 5.25072 8C5.84745 8 6.41975 8.23705 6.84171 8.65901C7.26366 9.08097 7.50072 9.65326 7.50072 10.25Z"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <h2 className="font-serif font-bold text-2xl mt-4">
              Market and Experience Research
            </h2>
            <p className="mt-4 text-neutral-300">
              Discover the heartbeat of your audience.
            </p>
          </div>
          <ul className="text-right whitespace-nowrap flex flex-col gap-4 lg:items-end">
            <li>
              <a
                href=""
                className="group cursor-pointer flex gap-2 items-center"
                
              >
                <p className="group-hover:text-eggplant-500 transition-colors font-medium">
                  Specialty Recruitment
                </p>
                <svg
                  className="text-neutral-400 group-hover:text-eggplant-800 transform group-hover:-translate-y-1 group-hover:translate-x-1 transition-all"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.21934 14.78C5.35997 14.9205 5.55059 14.9993 5.74934 14.9993C5.94809 14.9993 6.13871 14.9205 6.27934 14.78L13.4993 7.56V13.25C13.4993 13.4489 13.5784 13.6397 13.719 13.7803C13.8597 13.921 14.0504 14 14.2493 14C14.4483 14 14.639 13.921 14.7797 13.7803C14.9203 13.6397 14.9993 13.4489 14.9993 13.25V5.75C14.9993 5.55109 14.9203 5.36032 14.7797 5.21967C14.639 5.07902 14.4483 5 14.2493 5H6.74934C6.55043 5 6.35966 5.07902 6.21901 5.21967C6.07836 5.36032 5.99934 5.55109 5.99934 5.75C5.99934 5.94891 6.07836 6.13968 6.21901 6.28033C6.35966 6.42098 6.55043 6.5 6.74934 6.5H12.4393L5.21934 13.72C5.07889 13.8606 5 14.0512 5 14.25C5 14.4488 5.07889 14.6394 5.21934 14.78Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href=""
                className="group cursor-pointer flex gap-2 items-center"
              >
                <p className="group-hover:text-eggplant-500 transition-colors font-medium">
                  Applied Ethnography
                </p>
                <svg
                  className="text-neutral-400 group-hover:text-eggplant-800 transform group-hover:-translate-y-1 group-hover:translate-x-1 transition-all"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.21934 14.78C5.35997 14.9205 5.55059 14.9993 5.74934 14.9993C5.94809 14.9993 6.13871 14.9205 6.27934 14.78L13.4993 7.56V13.25C13.4993 13.4489 13.5784 13.6397 13.719 13.7803C13.8597 13.921 14.0504 14 14.2493 14C14.4483 14 14.639 13.921 14.7797 13.7803C14.9203 13.6397 14.9993 13.4489 14.9993 13.25V5.75C14.9993 5.55109 14.9203 5.36032 14.7797 5.21967C14.639 5.07902 14.4483 5 14.2493 5H6.74934C6.55043 5 6.35966 5.07902 6.21901 5.21967C6.07836 5.36032 5.99934 5.55109 5.99934 5.75C5.99934 5.94891 6.07836 6.13968 6.21901 6.28033C6.35966 6.42098 6.55043 6.5 6.74934 6.5H12.4393L5.21934 13.72C5.07889 13.8606 5 14.0512 5 14.25C5 14.4488 5.07889 14.6394 5.21934 14.78Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href=""
                className="group cursor-pointer flex gap-2 items-center"
              >
                <p className="group-hover:text-eggplant-500 transition-colors font-medium">
                  Mixed Method Studies
                </p>
                <svg
                  className="text-neutral-400 group-hover:text-eggplant-800 transform group-hover:-translate-y-1 group-hover:translate-x-1 transition-all"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.21934 14.78C5.35997 14.9205 5.55059 14.9993 5.74934 14.9993C5.94809 14.9993 6.13871 14.9205 6.27934 14.78L13.4993 7.56V13.25C13.4993 13.4489 13.5784 13.6397 13.719 13.7803C13.8597 13.921 14.0504 14 14.2493 14C14.4483 14 14.639 13.921 14.7797 13.7803C14.9203 13.6397 14.9993 13.4489 14.9993 13.25V5.75C14.9993 5.55109 14.9203 5.36032 14.7797 5.21967C14.639 5.07902 14.4483 5 14.2493 5H6.74934C6.55043 5 6.35966 5.07902 6.21901 5.21967C6.07836 5.36032 5.99934 5.55109 5.99934 5.75C5.99934 5.94891 6.07836 6.13968 6.21901 6.28033C6.35966 6.42098 6.55043 6.5 6.74934 6.5H12.4393L5.21934 13.72C5.07889 13.8606 5 14.0512 5 14.25C5 14.4488 5.07889 14.6394 5.21934 14.78Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href=""
                className="group cursor-pointer flex gap-2 items-center"
              >
                <p className="group-hover:text-eggplant-500 transition-colors font-medium">
                  Survey Design and Programming
                </p>
                <svg
                  className="text-neutral-400 group-hover:text-eggplant-800 transform group-hover:-translate-y-1 group-hover:translate-x-1 transition-all"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.21934 14.78C5.35997 14.9205 5.55059 14.9993 5.74934 14.9993C5.94809 14.9993 6.13871 14.9205 6.27934 14.78L13.4993 7.56V13.25C13.4993 13.4489 13.5784 13.6397 13.719 13.7803C13.8597 13.921 14.0504 14 14.2493 14C14.4483 14 14.639 13.921 14.7797 13.7803C14.9203 13.6397 14.9993 13.4489 14.9993 13.25V5.75C14.9993 5.55109 14.9203 5.36032 14.7797 5.21967C14.639 5.07902 14.4483 5 14.2493 5H6.74934C6.55043 5 6.35966 5.07902 6.21901 5.21967C6.07836 5.36032 5.99934 5.55109 5.99934 5.75C5.99934 5.94891 6.07836 6.13968 6.21901 6.28033C6.35966 6.42098 6.55043 6.5 6.74934 6.5H12.4393L5.21934 13.72C5.07889 13.8606 5 14.0512 5 14.25C5 14.4488 5.07889 14.6394 5.21934 14.78Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
        <div id="strategy" className="shadow-md relative p-14 rounded-sm overflow-hidden border-l-2 border-red-500 flex flex-col gap-14 lg:flex-row lg:items-center w-full justify-between">
          {/* Noise Overlay */}
          <div
            className="absolute inset-0 -z-10 h-full w-full opacity-5"
            style={{
              backgroundImage: `url('/images/Service_noise.png')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>

          <div className="absolute inset-0 -z-20 h-full w-full opacity-100 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950"></div>

          <div>
            <svg
              className="text-red-500"
              width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.75 3.5V14.75C3.75 15.3467 3.98705 15.919 4.40901 16.341C4.83097 16.7629 5.40326 17 6 17H8.25M3.75 3.5H2.25M3.75 3.5H20.25M8.25 17H15.75M8.25 17L7.25 20M20.25 3.5H21.75M20.25 3.5V14.75C20.25 15.3467 20.0129 15.919 19.591 16.341C19.169 16.7629 18.5967 17 18 17H15.75M15.75 17L16.75 20M7.25 20H16.75M7.25 20L6.75 21.5M16.75 20L17.25 21.5M7.5 12.5L10.5 9.5L12.648 11.648C13.6572 10.1993 14.9722 8.98982 16.5 8.105" stroke="#E25151" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


            <h2 className="font-serif font-bold text-2xl mt-4">
              Data Analytics and Strategy
            </h2>
            <p className="mt-4 text-neutral-300">
            Empower your decisions with data.
            </p>
          </div>
          <ul className="text-right whitespace-nowrap flex flex-col gap-4 lg:items-end">
            <li>
              <a
                href=""
                className="group cursor-pointer flex gap-2 items-center"
              >
                <p className="group-hover:text-red-500 transition-colors font-medium">
                  Experience Mapping
                </p>
                <svg
                  className="text-neutral-400 group-hover:text-red-800 transform group-hover:-translate-y-1 group-hover:translate-x-1 transition-all"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.21934 14.78C5.35997 14.9205 5.55059 14.9993 5.74934 14.9993C5.94809 14.9993 6.13871 14.9205 6.27934 14.78L13.4993 7.56V13.25C13.4993 13.4489 13.5784 13.6397 13.719 13.7803C13.8597 13.921 14.0504 14 14.2493 14C14.4483 14 14.639 13.921 14.7797 13.7803C14.9203 13.6397 14.9993 13.4489 14.9993 13.25V5.75C14.9993 5.55109 14.9203 5.36032 14.7797 5.21967C14.639 5.07902 14.4483 5 14.2493 5H6.74934C6.55043 5 6.35966 5.07902 6.21901 5.21967C6.07836 5.36032 5.99934 5.55109 5.99934 5.75C5.99934 5.94891 6.07836 6.13968 6.21901 6.28033C6.35966 6.42098 6.55043 6.5 6.74934 6.5H12.4393L5.21934 13.72C5.07889 13.8606 5 14.0512 5 14.25C5 14.4488 5.07889 14.6394 5.21934 14.78Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href=""
                className="group cursor-pointer flex gap-2 items-center"
              >
                <p className="group-hover:text-red-500 transition-colors font-medium">
                  Audience Segmentation
                </p>
                <svg
                  className="text-neutral-400 group-hover:text-red-800 transform group-hover:-translate-y-1 group-hover:translate-x-1 transition-all"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.21934 14.78C5.35997 14.9205 5.55059 14.9993 5.74934 14.9993C5.94809 14.9993 6.13871 14.9205 6.27934 14.78L13.4993 7.56V13.25C13.4993 13.4489 13.5784 13.6397 13.719 13.7803C13.8597 13.921 14.0504 14 14.2493 14C14.4483 14 14.639 13.921 14.7797 13.7803C14.9203 13.6397 14.9993 13.4489 14.9993 13.25V5.75C14.9993 5.55109 14.9203 5.36032 14.7797 5.21967C14.639 5.07902 14.4483 5 14.2493 5H6.74934C6.55043 5 6.35966 5.07902 6.21901 5.21967C6.07836 5.36032 5.99934 5.55109 5.99934 5.75C5.99934 5.94891 6.07836 6.13968 6.21901 6.28033C6.35966 6.42098 6.55043 6.5 6.74934 6.5H12.4393L5.21934 13.72C5.07889 13.8606 5 14.0512 5 14.25C5 14.4488 5.07889 14.6394 5.21934 14.78Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href=""
                className="group cursor-pointer flex gap-2 items-center"
              >
                <p className="group-hover:text-red-500 transition-colors font-medium">
                  Persona Development
                </p>
                <svg
                  className="text-neutral-400 group-hover:text-red-800 transform group-hover:-translate-y-1 group-hover:translate-x-1 transition-all"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.21934 14.78C5.35997 14.9205 5.55059 14.9993 5.74934 14.9993C5.94809 14.9993 6.13871 14.9205 6.27934 14.78L13.4993 7.56V13.25C13.4993 13.4489 13.5784 13.6397 13.719 13.7803C13.8597 13.921 14.0504 14 14.2493 14C14.4483 14 14.639 13.921 14.7797 13.7803C14.9203 13.6397 14.9993 13.4489 14.9993 13.25V5.75C14.9993 5.55109 14.9203 5.36032 14.7797 5.21967C14.639 5.07902 14.4483 5 14.2493 5H6.74934C6.55043 5 6.35966 5.07902 6.21901 5.21967C6.07836 5.36032 5.99934 5.55109 5.99934 5.75C5.99934 5.94891 6.07836 6.13968 6.21901 6.28033C6.35966 6.42098 6.55043 6.5 6.74934 6.5H12.4393L5.21934 13.72C5.07889 13.8606 5 14.0512 5 14.25C5 14.4488 5.07889 14.6394 5.21934 14.78Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href=""
                className="group cursor-pointer flex gap-2 items-center"
              >
                <p className="group-hover:text-red-500 transition-colors font-medium">
                  Community Growth and Advocacy
                </p>
                <svg
                  className="text-neutral-400 group-hover:text-red-800 transform group-hover:-translate-y-1 group-hover:translate-x-1 transition-all"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.21934 14.78C5.35997 14.9205 5.55059 14.9993 5.74934 14.9993C5.94809 14.9993 6.13871 14.9205 6.27934 14.78L13.4993 7.56V13.25C13.4993 13.4489 13.5784 13.6397 13.719 13.7803C13.8597 13.921 14.0504 14 14.2493 14C14.4483 14 14.639 13.921 14.7797 13.7803C14.9203 13.6397 14.9993 13.4489 14.9993 13.25V5.75C14.9993 5.55109 14.9203 5.36032 14.7797 5.21967C14.639 5.07902 14.4483 5 14.2493 5H6.74934C6.55043 5 6.35966 5.07902 6.21901 5.21967C6.07836 5.36032 5.99934 5.55109 5.99934 5.75C5.99934 5.94891 6.07836 6.13968 6.21901 6.28033C6.35966 6.42098 6.55043 6.5 6.74934 6.5H12.4393L5.21934 13.72C5.07889 13.8606 5 14.0512 5 14.25C5 14.4488 5.07889 14.6394 5.21934 14.78Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
        <div id="design" className="shadow-md relative p-14 rounded-sm overflow-hidden border-l-2 border-cyan-500 flex flex-col gap-14 lg:flex-row lg:items-center w-full justify-between">
          {/* Noise Overlay */}
          <div
            className="absolute inset-0 -z-10 h-full w-full opacity-5"
            style={{
              backgroundImage: `url('/images/Service_noise.png')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>

          <div className="absolute inset-0 -z-20 h-full w-full opacity-100 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950"></div>

          <div>
            <svg
              className="text-cyan-500"
             width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.46001 21.74L21.25 6.95L17.55 3.25L2.75999 18.04L2.75 21.75L6.46001 21.74Z" stroke="#0EA5E9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.3496 6.62988L17.8696 9.14987" stroke="#0EA5E9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


            <h2 className="font-serif font-bold text-2xl mt-4">
              Product and Systems Design
            </h2>
            <p className="mt-4 text-neutral-300">
              Deliver seamless digital experiences to your users.
            </p>
          </div>
          <ul className="text-right whitespace-nowrap flex flex-col gap-4 lg:items-end">
            <li>
              <a
                href=""
                className="group cursor-pointer flex gap-2 items-center"
              >
                <p className="group-hover:text-cyan-500 transition-colors font-medium">
                  Heuristic UX Assessment
                </p>
                <svg
                  className="text-neutral-400 group-hover:text-cyan-800 transform group-hover:-translate-y-1 group-hover:translate-x-1 transition-all"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.21934 14.78C5.35997 14.9205 5.55059 14.9993 5.74934 14.9993C5.94809 14.9993 6.13871 14.9205 6.27934 14.78L13.4993 7.56V13.25C13.4993 13.4489 13.5784 13.6397 13.719 13.7803C13.8597 13.921 14.0504 14 14.2493 14C14.4483 14 14.639 13.921 14.7797 13.7803C14.9203 13.6397 14.9993 13.4489 14.9993 13.25V5.75C14.9993 5.55109 14.9203 5.36032 14.7797 5.21967C14.639 5.07902 14.4483 5 14.2493 5H6.74934C6.55043 5 6.35966 5.07902 6.21901 5.21967C6.07836 5.36032 5.99934 5.55109 5.99934 5.75C5.99934 5.94891 6.07836 6.13968 6.21901 6.28033C6.35966 6.42098 6.55043 6.5 6.74934 6.5H12.4393L5.21934 13.72C5.07889 13.8606 5 14.0512 5 14.25C5 14.4488 5.07889 14.6394 5.21934 14.78Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href=""
                className="group cursor-pointer flex gap-2 items-center"
              >
                <p className="group-hover:text-cyan-500 transition-colors font-medium">
                  Information Architecture
                </p>
                <svg
                  className="text-neutral-400 group-hover:text-cyan-800 transform group-hover:-translate-y-1 group-hover:translate-x-1 transition-all"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.21934 14.78C5.35997 14.9205 5.55059 14.9993 5.74934 14.9993C5.94809 14.9993 6.13871 14.9205 6.27934 14.78L13.4993 7.56V13.25C13.4993 13.4489 13.5784 13.6397 13.719 13.7803C13.8597 13.921 14.0504 14 14.2493 14C14.4483 14 14.639 13.921 14.7797 13.7803C14.9203 13.6397 14.9993 13.4489 14.9993 13.25V5.75C14.9993 5.55109 14.9203 5.36032 14.7797 5.21967C14.639 5.07902 14.4483 5 14.2493 5H6.74934C6.55043 5 6.35966 5.07902 6.21901 5.21967C6.07836 5.36032 5.99934 5.55109 5.99934 5.75C5.99934 5.94891 6.07836 6.13968 6.21901 6.28033C6.35966 6.42098 6.55043 6.5 6.74934 6.5H12.4393L5.21934 13.72C5.07889 13.8606 5 14.0512 5 14.25C5 14.4488 5.07889 14.6394 5.21934 14.78Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href=""
                className="group cursor-pointer flex gap-2 items-center"
              >
                <p className="group-hover:text-cyan-500 transition-colors font-medium">
                  Interaction Design and Prototyping
                </p>
                <svg
                  className="text-neutral-400 group-hover:text-cyan-800 transform group-hover:-translate-y-1 group-hover:translate-x-1 transition-all"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.21934 14.78C5.35997 14.9205 5.55059 14.9993 5.74934 14.9993C5.94809 14.9993 6.13871 14.9205 6.27934 14.78L13.4993 7.56V13.25C13.4993 13.4489 13.5784 13.6397 13.719 13.7803C13.8597 13.921 14.0504 14 14.2493 14C14.4483 14 14.639 13.921 14.7797 13.7803C14.9203 13.6397 14.9993 13.4489 14.9993 13.25V5.75C14.9993 5.55109 14.9203 5.36032 14.7797 5.21967C14.639 5.07902 14.4483 5 14.2493 5H6.74934C6.55043 5 6.35966 5.07902 6.21901 5.21967C6.07836 5.36032 5.99934 5.55109 5.99934 5.75C5.99934 5.94891 6.07836 6.13968 6.21901 6.28033C6.35966 6.42098 6.55043 6.5 6.74934 6.5H12.4393L5.21934 13.72C5.07889 13.8606 5 14.0512 5 14.25C5 14.4488 5.07889 14.6394 5.21934 14.78Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href=""
                className="group cursor-pointer flex gap-2 items-center"
              >
                <p className="group-hover:text-cyan-500 transition-colors font-medium">
                  Data Visualization
                </p>
                <svg
                  className="text-neutral-400 group-hover:text-cyan-800 transform group-hover:-translate-y-1 group-hover:translate-x-1 transition-all"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.21934 14.78C5.35997 14.9205 5.55059 14.9993 5.74934 14.9993C5.94809 14.9993 6.13871 14.9205 6.27934 14.78L13.4993 7.56V13.25C13.4993 13.4489 13.5784 13.6397 13.719 13.7803C13.8597 13.921 14.0504 14 14.2493 14C14.4483 14 14.639 13.921 14.7797 13.7803C14.9203 13.6397 14.9993 13.4489 14.9993 13.25V5.75C14.9993 5.55109 14.9203 5.36032 14.7797 5.21967C14.639 5.07902 14.4483 5 14.2493 5H6.74934C6.55043 5 6.35966 5.07902 6.21901 5.21967C6.07836 5.36032 5.99934 5.55109 5.99934 5.75C5.99934 5.94891 6.07836 6.13968 6.21901 6.28033C6.35966 6.42098 6.55043 6.5 6.74934 6.5H12.4393L5.21934 13.72C5.07889 13.8606 5 14.0512 5 14.25C5 14.4488 5.07889 14.6394 5.21934 14.78Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
