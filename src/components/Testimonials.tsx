
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Operations Manager",
    company: "TechFlow Manufacturing",
    content: "AmplAI's digital project manager has revolutionized our supply chain. We've cut planning time by 60% and improved our delivery accuracy significantly.",
    avatar: "SC"
  },
  {
    name: "Michael Rodriguez",
    role: "CEO",
    company: "GlobalParts Inc.",
    content: "The AI-driven insights have helped us make better inventory decisions. Our carrying costs dropped by 30% while maintaining 99% stock availability.",
    avatar: "MR"
  },
  {
    name: "Emily Johnson",
    role: "Supply Chain Director",
    company: "EcoSupply Co.",
    content: "Implementation was seamless, and the ROI was evident within weeks. The operations research optimization features are game-changing for SMEs like us.",
    avatar: "EJ"
  }
];

export const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trusted by Supply Chain Leaders
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how companies like yours are achieving breakthrough results with AmplAI
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="p-8 bg-gradient-to-br from-blue-50 to-orange-50 rounded-xl hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-orange-500 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
