export default function GooglePlayButton() {
  return (
    <>
      {/* Google Play Badge */}
      <a
        href="https://play.google.com/store/apps/details?id=com.campusnotice.fe"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 bg-white text-[#006DB8] px-5 py-3 rounded-2xl border border-[#006DB8] hover:bg-blue-50 active:scale-95 transition-all duration-150 shadow-sm"
      >
        <svg
          className="w-7 h-7 flex-shrink-0"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.5 2.36a1.5 1.5 0 00-1.5 1.5v16.28a1.5 1.5 0 001.5 1.5l.1-.01 9.12-9.13v-.21L4.6 2.37l-.1-.01z"
            fill="#006DB8"
            fillOpacity="0.9"
          />
          <path
            d="M16.76 13.1l-3.04-3.04v-.21l3.04-3.04.07.04 3.6 2.05c1.03.58 1.03 1.54 0 2.13l-3.6 2.05-.07.03z"
            fill="#006DB8"
          />
          <path
            d="M16.83 13.07L13.72 10 4.5 19.14c.34.36.9.4 1.32.1l11.01-6.17"
            fill="#006DB8"
            fillOpacity="0.7"
          />
          <path
            d="M16.83 6.93L5.82.76C5.4.46 4.84.5 4.5.86L13.72 10l3.11-3.07z"
            fill="#006DB8"
            fillOpacity="0.7"
          />
        </svg>
        <div className="leading-tight">
          <div className="text-[10px] font-light tracking-wider uppercase opacity-80">
            Get it on
          </div>
          <div className="text-[17px] font-semibold">Google Play</div>
        </div>
      </a>
    </>
  );
}
