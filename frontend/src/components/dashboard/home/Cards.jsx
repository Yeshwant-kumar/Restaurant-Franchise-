import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Cards = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    gsap.from(cardRefs.current, {
      opacity: 0,
      y: 50,
      scale: 0.9,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: cardRefs.current[0],
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-10 py-20 px-6">
      <div className="grid grid-cols-12 gap-8 max-w-7xl w-full">
        {[
          {
            img: "https://img.freepik.com/free-photo/blackboard-near-pepper-mexican-food_23-2147740758.jpg?w=1380",
            title: "Fresh & Flavorful Delights",
            desc: "Discover delicious meals made with love!",
          },
          {
            img: "https://img.freepik.com/free-photo/american-diner-aesthetics_23-2151854450.jpg?w=1380",
            title: "Savor Every Bite",
            desc: "Experience a perfect blend of taste & quality.",
          },
          {
            img: "https://img.freepik.com/free-photo/chicken-liver-lettuce-leaves-chicken-drumstick-plate-tea-towel_114579-86165.jpg?w=1380",
            title: "Seaside Dining",
            desc: "Stunning views & amazing seafood!",
          },
          {
            img: "https://img.freepik.com/premium-photo/full-food-showcase-variety-meals-bar_152904-44134.jpg?w=1380",
            title: "Nutritious Meals",
            desc: "Healthy, balanced meals made fresh.",
          },
        ].map((item, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className="col-span-12 sm:col-span-6 md:col-span-3 cursor-pointer transform transition-transform duration-300 hover:scale-105"
          >
            <div className="w-full flex flex-col bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl">
              <div className="relative overflow-hidden rounded-lg">
                <Link to="#">
                  <img src={item.img} alt={item.title} className="w-full h-72 object-cover rounded-lg" />
                </Link>
              </div>
              <div className="mt-4">
                <p className="text-gray-900 text-xl font-semibold">{item.title}</p>
                <p className="text-gray-600 text-base mt-2">{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
