
import { Brain, BarChart3, Users, Zap, Shield, Globe } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Decision Making",
    description: "Advanced machine learning algorithms analyze your supply chain data to provide intelligent recommendations and automate complex decisions."
  },
  {
    icon: BarChart3,
    title: "Operations Research Optimization",
    description: "Mathematical modeling and optimization techniques to solve complex supply chain problems and maximize efficiency."
  },
  {
    icon: Users,
    title: "Digital Project Manager",
    description: "Your dedicated AI employee that manages projects, coordinates teams, and ensures deadlines are met across your supply chain."
  },
  {
    icon: Zap,
    title: "Real-Time Analytics",
    description: "Get instant insights into your supply chain performance with dynamic dashboards and automated reporting."
  },
  {
    icon: Shield,
    title: "Risk Management",
    description: "Proactive identification and mitigation of supply chain risks through predictive analytics and scenario planning."
  },
  {
    icon: Globe,
    title: "SME-Focused Solutions",
    description: "Tailored specifically for small to medium enterprises with easy implementation and scalable pricing."
  }
];

export const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for Modern Supply Chains
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive platform combines AI, operations research, and intelligent automation 
            to revolutionize how SMEs manage their supply chain operations.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-8 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-orange-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-blue-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
