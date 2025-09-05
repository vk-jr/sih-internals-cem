import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-hero-gradient text-white py-16">
      <div className="container mx-auto text-center px-6">
        {/* Official Logos */}
        <div className="flex justify-center items-center gap-8 mb-8 flex-wrap">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 min-h-[60px] flex items-center justify-center">
            <span className="text-sm font-medium">Ministry of Education</span>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 min-h-[60px] flex items-center justify-center">
            <span className="text-sm font-medium">AICTE</span>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 min-h-[60px] flex items-center justify-center">
            <span className="text-sm font-medium">MoE's Innovation Cell</span>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 min-h-[60px] flex items-center justify-center">
            <span className="text-sm font-medium">Smart India Hackathon 2025</span>
          </div>
        </div>

        {/* Main Title */}
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Smart India Hackathon 2025
        </h1>
        
        {/* Subtitle */}
        <h2 className="text-xl md:text-2xl mb-6 text-white/90">
          College of Engineering, Muttathara - Internal Selection
        </h2>
        
        {/* Description */}
        <p className="text-lg md:text-xl mb-8 max-w-4xl mx-auto text-white/80 leading-relaxed">
          CEM's internal selection for the nationwide innovation marathon. Ideate, build 
          and collaborate to secure your spot. Form diverse teams, showcase creativity 
          and solve real-world challenges.
        </p>

        {/* Partner Logos */}
        <div className="flex justify-center items-center gap-8 mb-8 flex-wrap">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
            <span className="text-sm font-medium">IEDC Ignite</span>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
            <span className="text-sm font-medium">μLearn</span>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
            <span className="text-sm font-medium">FOSS</span>
          </div>
        </div>

        {/* CTA Button */}
        <Button 
          onClick={() => navigate('/register')}
          size="lg"
          className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg font-semibold rounded-full shadow-lg"
        >
          Begin Registration →
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;