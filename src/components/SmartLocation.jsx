import { useState } from "react";

const tabs = [
  {
    id: "monitoring",
    label: "Monitoring",
    image: "/IMG/ai-generated-8165284_1280.webp",
  },
  {
    id: "analytics",
    label: "Analytics",
    image: "/src/assets/analytics.png",
  },
  {
    id: "performance",
    label: "Performance",
    image: "/src/assets/performance.png",
  },
  {
    id: "feedback",
    label: "Feedback",
    image: "/src/assets/feedback.png",
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
        <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
          Smart Solutions Designed <br />
          <span className="text-gray-400">
            For Your Diamond Trading Success
          </span>
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