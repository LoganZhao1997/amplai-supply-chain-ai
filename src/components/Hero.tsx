
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-orange-50 pt-16 pb-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 max-w-2xl">
            <div className="mb-8 flex justify-center">
              <img 
                src={process.env.NODE_ENV === 'production' ? '/amplai-supply-chain-ai/amplai-logo.jpeg' : '/amplai-logo.jpeg'} 
                alt="AmplAI Logo" 
                className="h-20 mb-6 scale-120"
              />
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Your AI-Powered
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500"> Supply Chain</span>
              <br />
              Project Manager
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Transform your supply chain operations with our intelligent digital employee. 
              Get AI-driven insights, operations research, and decision-making support tailored for SMEs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>
            
            <div className="mt-8 text-sm text-gray-500">
              No credit card required • 14-day free trial • Setup in minutes
            </div>
          </div>
          
          {/* Right Visual */}
          <div className="flex-1 max-w-lg">
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-orange-100 rounded-2xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-3 h-3 bg-red-400 rounded-full mr-2"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-4 bg-gradient-to-r from-blue-200 to-blue-300 rounded"></div>
                    <div className="h-4 bg-gradient-to-r from-orange-200 to-orange-300 rounded w-3/4"></div>
                    <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-1/2"></div>
                    <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-orange-50 rounded-lg">
                      <div className="text-sm font-semibold text-gray-700 mb-2">AI Recommendation</div>
                      <div className="text-xs text-gray-600">Optimize inventory levels by 23% based on demand forecasting...</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
