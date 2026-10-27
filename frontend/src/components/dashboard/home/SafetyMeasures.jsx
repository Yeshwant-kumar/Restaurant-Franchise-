import React, { useEffect, useRef } from "react";
import { ShieldCheck, Sparkles, CheckCircle } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SafetyMeasures = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    gsap.from(sectionRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    gsap.from(cardRefs.current, {
      opacity: 0,
      scale: 0.9,
      stagger: 0.3,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <div
      ref={sectionRef}
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-100 to-gray-300 py-20 px-8"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
        Safety & Hygiene Measures
      </h2>
      <p className="text-lg md:text-xl text-gray-700 text-center max-w-4xl mb-10">
        We prioritize hygiene and food safety by following strict protocols and adhering to the
        Food Corporation of India (FCI) regulations.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6 max-w-7xl w-full">
        {/* Measure 1 */}
        <div
          ref={(el) => (cardRefs.current[0] = el)}
          className="flex items-center gap-6 bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-transform duration-300 hover:scale-105"
        >
          <ShieldCheck className="text-green-600 w-16 h-16" />
          <div>
            <h3 className="text-2xl font-semibold text-gray-900">Strict Quality Checks</h3>
            <p className="text-lg text-gray-700">We ensure all food meets the highest safety standards.</p>
          </div>
        </div>

        {/* Measure 2 */}
        <div
          ref={(el) => (cardRefs.current[1] = el)}
          className="flex items-center gap-6 bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-transform duration-300 hover:scale-105"
        >
          <Sparkles className="text-blue-600 w-16 h-16" />
          <div>
            <h3 className="text-2xl font-semibold text-gray-900">Sanitized Kitchens</h3>
            <p className="text-lg text-gray-700">Regular cleaning and disinfection for food preparation areas.</p>
          </div>
        </div>

        {/* Measure 3 */}
        <div
          ref={(el) => (cardRefs.current[2] = el)}
          className="flex items-center gap-6 bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-transform duration-300 hover:scale-105"
        >
          <CheckCircle className="text-yellow-600 w-16 h-16" />
          <div>
            <h3 className="text-2xl font-semibold text-gray-900">Certified Ingredients</h3>
            <p className="text-lg text-gray-700">We use FCI-approved fresh and high-quality ingredients.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SafetyMeasures;
