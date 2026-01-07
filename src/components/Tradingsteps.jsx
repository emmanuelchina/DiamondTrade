import { 
  FaUserPlus, 
  FaSignInAlt, 
  FaDollarSign 
} from "react-icons/fa";

export default function TradingSteps() {
  const steps = [
    {
      icon: FaUserPlus,
      title: "Register",
      description: "Create your account in 30 seconds. No paperwork, no hassle."
    },
    {
      icon: FaSignInAlt,
      title: "Login",
      description: "Access your personalized trading dashboard instantly."
    },
    {
      icon: FaDollarSign,
      title: "Deposit & Trade",
      description: "Fund your account and start trading within minutes."
    }
  ];

  return (
    <section className="relative bg-[#05051e]  py-20 px-4 sm:px-6 overflow-hidden">
      {/* Header */}
      <div className="text-center mb-16 sm:mb-20">
        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-3xl bg-[#05051e]00/80 backdrop-blur-sm border border-blue-700/50 text-white text-sm font-medium mb-8">
          Get Started
          <FaUserPlus className="text-xs " />
        </div>
        <h2 className="text-3xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white via-zinc-100 to-zinc-300 bg-clip-text text-transparent leading-tight">
          Start Trading in
          <span className="block text-3xl sm:text-2xl md:text-3xl lg:text-4xl bg-blue-400 bg-clip-text text-transparent mt-2">
            3 Steps
          </span>
        </h2>
      </div>

      {/* 3 Steps Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {steps.map((step, index) => (
          <StepCard 
            key={index}
            step={step}
            index={index}
            totalSteps={steps.length}
          />
        ))}
      </div>
    </section>
  );
}

function StepCard({ step, index, totalSteps }) {
  return (
    <div className="group relative">
      

      {/* Card */}
      <div className="flex flex-col items-center p-8 sm:p-10 rounded-3xl bg-[#05051e]   min-h-[200px] sm:min-h-[220px] pt-20">
        {/* Icon */}
        <div className="pt-3 ">
          <step.icon className="w-8 h-8 sm:w-10 sm:h-10 text-blue-400 group-hover:text-blue-100 transition-colors duration-300" />
        </div>

        {/* Content */}
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center tracking-tight">
          {step.title}
        </h3>
        <p className="text-zinc-400 text-sm sm:text-base text-center leading-relaxed max-w-xs">
          {step.description}
        </p>
      </div>

      {/* Bottom connector line (only for middle card) */}
      {index < totalSteps - 1 && (
        <div className="absolute -bottom-6 left-1/2 w-20 h-1.5 bg-gradient-to-r from-zinc-600/50 to-zinc-700/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}
    </div>
  );
}
