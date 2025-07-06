
import { GraduationCap, Building2, Brain, BarChart3 } from "lucide-react";

const founders = [
  {
    name: "Dr. Wentao Zhao",
    role: "Co-Founder & CEO",
    education: "PhD in Artificial Intelligence, USC",
    experience: "AI Scientist at Meta",
    expertise: "Artificial Intelligence, Machine Learning, Deep Learning",
    description: "Dr. Zhao brings over 8 years of experience in AI research and development, having published 20+ papers in top-tier conferences. At Meta, he led AI initiatives that served billions of users, specializing in recommendation systems and natural language processing.",
    icon: Brain
  },
  {
    name: "Dr. Xinyao Zhang",
    role: "Co-Founder & CTO",
    education: "PhD in Operations Research, USC",
    experience: "Applied Scientist at Amazon",
    expertise: "Operations Research, Optimization, Supply Chain Analytics",
    description: "Dr. Zhang has 7+ years of experience in operations research and supply chain optimization. At Amazon, she developed algorithms that optimized logistics networks across multiple continents, reducing costs by millions while improving delivery times.",
    icon: BarChart3
  }
];

export const Founders = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Meet the Founding Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            World-class expertise in AI and operations research, with proven track records 
            at leading tech companies building products that scale.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {founders.map((founder, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-orange-500 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                  <founder.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {founder.name}
                  </h3>
                  <p className="text-lg font-semibold text-blue-600 mb-4">
                    {founder.role}
                  </p>
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center text-gray-700">
                  <GraduationCap className="w-5 h-5 mr-3 text-blue-500" />
                  <span className="font-medium">{founder.education}</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Building2 className="w-5 h-5 mr-3 text-orange-500" />
                  <span className="font-medium">{founder.experience}</span>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-2">Expertise:</h4>
                <p className="text-blue-600 font-medium">{founder.expertise}</p>
              </div>
              
              <p className="text-gray-600 leading-relaxed">
                {founder.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Why This Matters for Your Business
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our unique combination of cutting-edge AI research and real-world operations experience 
              at scale means we understand both the theoretical foundations and practical challenges 
              of supply chain optimization. We've built systems that handle millions of decisions 
              daily - now we're bringing that expertise to help SMEs compete with enterprise-level intelligence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
