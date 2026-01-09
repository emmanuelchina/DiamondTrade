import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Figo Nath",
    text: "We've reduced project delivery times by nearly 40% since integrating their solution. It's intuitive, efficient, and reliable.",
    date: "May 10, 2024",
  },
  {
    name: "Liam Everhart",
    text: "Youflow has totally changed the way we handle transactions. Everything just clicks, and we've seen awesome improvements in efficiency.",
    date: "April 10, 2024",
  },
  {
    name: "Carmen Waters",
    text: "The platform has revolutionized our transaction processes. Everything flows seamlessly with remarkable gains.",
    date: "June 12, 2024",
  },
  {
    name: "Sophia Miller",
    text: "Automation has saved our team countless hours every week. The experience feels smooth and thoughtfully designed.",
    date: "June 10, 2024",
  },
  {
    name: "Daniel Brooks",
    text: "The insights and reporting features alone make this platform worth it. It’s clean, fast, and extremely reliable.",
    date: "May 28, 2024",
  },
];

export default function Content() {
  return (
    <section className="relative overflow-hidden bg-black py-20">
      {" "}
      {/* background glow */}{" "}
      <div className="absolute inset-0 bg-[#05051e]" />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          What Clients Think <br /> About Our Services
        </h2>
        <p className="text-white/70 max-w-xl mb-12">
          Our financial management platform is transforming the way people
          manage their money.
        </p>
      </div>
      {/* marquee */}
      <div className="relative flex gap-6 overflow-hidden">
        <motion.div
          className="flex gap-6"
          animate={{ x: [0, -1200] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 40,
            ease: "linear",
          }}
        >
          {[...testimonials, ...testimonials].map((item, i) => (
            <div
              key={i}
              className="min-w-[340px] rounded-2xl bg-white/10 backdrop-blur-xl p-6 text-white shadow-lg"
            >
              <div className="flex items-center gap-2 mb-2">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <span key={idx} className="text-orange-400">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-white/80 mb-4">“{item.text}”</p>
              <div className="text-sm text-white/60">
                <p className="font-semibold text-white">{item.name}</p>
                <p>{item.date}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
