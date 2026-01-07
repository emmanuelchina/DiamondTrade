import React from "react";

export default function ProcessSection() {
  const steps = [
    {
      title: "Sign Up",
      desc: "Create your account in minutes and get instant access to the platform.",
      icon: "+",
    },
    {
      title: "Receive Your Login",
      desc: "Get your secure login details and access your personalized dashboard.",
      icon: "✓",
    },
    {
      title: "Start Earning",
      desc: "Begin evaluating opportunities and start earning without delays.",
      icon: "$",
    },
  ];

  return (
    <section className="bg-[#05051e] text-white py-24 px-6">
      {" "}
      <div className="max-w-6xl mx-auto text-center">
        {" "}
        {/* Header */}{" "}
        <span className="inline-block mb-4 px-4 py-1 text-sm rounded-full bg-neutral-800 text-neutral-300">
          {" "}
          Our Features{" "}
        </span>{" "}
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          The Process
        </h2>{" "}
        <p className="text-neutral-400 max-w-2xl mx-auto mb-16">
          {" "}
          Our financial management platform is transforming the way people
          manage their money.{" "}
        </p>
        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-blue-500 flex items-center justify-center text-xl font-bold mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
