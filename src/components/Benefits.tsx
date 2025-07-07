
import React from "react";
import { TrendingUp, Clock, DollarSign, Target } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    metric: "35%",
    title: "Efficiency Improvement",
    description: "Average increase in supply chain efficiency within 3 months"
  },
  {
    icon: Clock,
    metric: "60%",
    title: "Time Savings",
    description: "Reduction in manual planning and coordination tasks"
  },
  {
    icon: DollarSign,
    metric: "25%",
    title: "Cost Reduction",
    description: "Average decrease in operational costs through optimization"
  },
  {
    icon: Target,
    metric: "99%",
    title: "Accuracy Rate",
    description: "Precision in demand forecasting and inventory planning"
  }
];

export const Benefits = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Measurable Results for Your Business
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join hundreds of SMEs who have transformed their supply chain operations 
            and achieved remarkable improvements in efficiency and profitability.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  {benefit.metric}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
