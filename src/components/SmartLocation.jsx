import { useState } from "react";

const tabs = [
  {
    id: "monitoring",
    label: "Monitoring",
    image: "/IMG/trading-643722_640.jpg",
  },
  {
    id: "analytics",
    label: "Analytics",
    image: "/IMG/hand-2722098_640.jpg",
  },
  {
    id: "performance",
    label: "Performance",
    image: "/IMG/stock-1863880_640.jpg",
  },
  {
    id: "feedback",
    label: "Feedback",
    image: "/IMG/review-5207277_640.jpg",
  },
];

export default function SmartSolutions() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <section className="bg-black text-white py-28 px-6 relative overflow-hidden">
      {/* Diagonal glow */}
      <div className="absolute inset-0 bg-[#05051e]  " />

      <div className="relative max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
          Smart Solutions  <br></br> for You
        </h2>

        <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
          Control your Diamond Trade operations effortlessly using a
          powerful dashboard backed by intelligent tools.
        </p>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mt-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full border text-sm transition-all
                ${
                  activeTab.id === tab.id
                    ? "bg-white text-black"
                    : "border-white/20 text-gray-300 hover:border-white/40"
                }
              `}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Image Panel */}
        <div className="mt-16 rounded-2xl overflow-hidden border border-white/10 bg-neutral-900">
          <img
            src={activeTab.image}
            alt={activeTab.label}
            className="w-full h-120 object-cover"
          />
        </div>
      </div>
    </section>
  );
}