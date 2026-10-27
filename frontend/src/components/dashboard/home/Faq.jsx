import React from 'react'
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from 'react-router-dom';
const faqs = [
    { question: "How can I get started?", answer: "To get started, sign up on our platform and follow the onboarding steps." },
    { question: "What are the initial investment and fees?", answer: "Our pricing is based on different subscription plans. Visit our pricing page for more details." },
    { question: "What kind of support do you provide?", answer: "We offer 24/7 customer support via chat, email, and phone." },
    { question: "What are the location requirements for opening a franchise?", answer: "The location requirements for opening a franchise depend on factors like foot traffic, visibility, and target audience. Ideally, the location should be in a high-traffic area such as malls, commercial hubs, or near educational institutions. A minimum space requirement may be specified, along with parking availability and infrastructure suitability. We also assess the market potential and competition in the area to ensure a profitable business. For detailed location guidelines, contact our team for personalized assistance." },
  ];
const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    
    <div>
  
    <div className="max-w-2xl mx-auto py-10">
      <h2 className="text-3xl font-bold text-center mb-6">Explore Common Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-md bg-white overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-4 text-left text-lg font-medium"
            >
              {faq.question}
              <ChevronDown
                className={`transform transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            {openIndex === index && (
              <div className="p-4 border-t text-gray-600">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
      <p className="text-center mt-6 text-gray-600">
        Still have questions? <Link to="/contact"  className="text-blue-600 font-medium">Contact our support</Link>
      </p>
    </div>

    </div>
  )
}

export default Faq
