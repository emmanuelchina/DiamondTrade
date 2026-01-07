import { FaArrowRight } from "react-icons/fa";

const languages = [
  { name: "Swedish", flag: "https://flagcdn.com/w20/se.png" },
  { name: "English (UK)", flag: "https://flagcdn.com/w20/gb.png" },
  { name: "German", flag: "https://flagcdn.com/w20/de.png" },
  { name: "Italian", flag: "https://flagcdn.com/w20/it.png" },
  { name: "English (US)", flag: "https://flagcdn.com/w20/us.png" },
  { name: "Chinese", flag: "https://flagcdn.com/w20/cn.png" },
  { name: "Japanese", flag: "https://flagcdn.com/w20/jp.png" },
  { name: "Czech", flag: "https://flagcdn.com/w20/cz.png" },
  { name: "Russian", flag: "https://flagcdn.com/w20/ru.png" },
  { name: "French", flag: "https://flagcdn.com/w20/fr.png" },
  { name: "Spanish", flag: "https://flagcdn.com/w20/es.png" },
  { name: "Portuguese", flag: "https://flagcdn.com/w20/pt.png" },
  { name: "Dutch", flag: "https://flagcdn.com/w20/nl.png" },
  { name: "Turkish", flag: "https://flagcdn.com/w20/tr.png" },


];

// Split into rows: first 2, then groups of 3, last 2
const firstRow = languages.slice(0, 2);
const middleRows = [];
for (let i = 2; i <= languages.length - 4; i += 3) {
  middleRows.push(languages.slice(i, i + 3));
}
const lastRow = languages.slice(-2);

export default function Languages() {
  return (
    <section className="relative bg-[#05051e] py-12 sm:py-20 px-4 sm:px-6 overflow-hidden">
      {/* Top pill */}
      <div className="flex justify-center mb-6 sm:mb-8">
        <div className="flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-3xl bg-[#05051e]  backdrop-blur-sm border border-blue-700/50 text-xs sm:text-sm text-white shadow-2xl shadow-black/30">
          Languages
          <span className="bg-[#05051e]  backdrop-blur-sm p-1.5 rounded-2xl border border-white/50 shadow-lg">
            <FaArrowRight className="text-xs" />
          </span>
        </div>
      </div>

      {/* Heading */}
      <h2 className="text-center text-2xl sm:text-3xl md:text-5xl font-semibold text-white mb-8 sm:mb-12 leading-tight bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-transparent">
        Customer Support In{" "}
        <span className="text-zinc-400">13 Languages</span>
      </h2>

      {/* Custom Grid Layout */}
      <div className="max-w-6xl mx-auto space-y-4 sm:space-y-6">
        {/* First row - 2 items */}
        <div className="flex justify-center gap-4 sm:gap-6">
          {firstRow.map((lang, index) => (
            <LanguagePill key={index} lang={lang} wide />
          ))}
        </div>

        {/* Middle rows - 3 items each */}
        {middleRows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex justify-center gap-3 sm:gap-4">
            {row.map((lang, index) => (
              <LanguagePill key={index} lang={lang} />
            ))}
          </div>
        ))}

        {/* Last row - 2 items */}
        <div className="flex justify-center gap-4 sm:gap-6">
          {lastRow.map((lang, index) => (
            <LanguagePill key={index} lang={lang} wide />
          ))}
        </div>
      </div>
    </section>
  );
}

// Reusable rounded pill component
function LanguagePill({ lang, wide = false }) {
  return (
    <div className="group flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 rounded-3xl bg-zinc-900/80 backdrop-blur-sm border border-zinc-700/50 text-white text-xs sm:text-sm font-medium hover:border-zinc-500/70 hover:bg-zinc-800/80 transition-all duration-300 hover:scale-[1.05] shadow-xl shadow-black/20 hover:shadow-2xl hover:shadow-zinc-900/40 min-w-0 flex-1 sm:flex-none">
      <img
        src={lang.flag}
        alt={`${lang.name} flag`}
        className={`w-5 h-4 sm:w-6 sm:h-4.5 lg:w-7 lg:h-5 flex-shrink-0 rounded-xl shadow-md ring-1 ring-white/20 group-hover:scale-110 group-hover:ring-white/40 transition-all duration-300 object-cover ${wide ? 'sm:w-7 sm:h-5 lg:w-8 lg:h-5.5' : ''}`}
        loading="lazy"
      />
      <span className="truncate tracking-tight">{lang.name}</span>
    </div>
  );
}
