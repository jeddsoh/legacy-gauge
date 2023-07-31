'use client'

export default function Button({href, text}) {
    return (
        <a
  className="box-border group relative inline-flex items-center overflow-hidden rounded bg-mandarin-500 px-6 py-4 text-neutral-950 focus:outline-none focus:ring active:bg-mandarin-500"
  href={href}
>
  <span className="absolute -end-full transition-all group-hover:end-6">
    <svg
      className="h-5 w-5 rtl:rotate-180"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M17 8l4 4m0 0l-4 4m4-4H3"
      />
    </svg>
  </span>

  <span className="font-medium transition-all group-hover:me-8">
    {text}
  </span>
</a>
    )
}