import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Text from "./Text";
import {
  ChevronDown,
  FileText,
  ShieldCheck,
  DollarSign,
  Store,
  RefreshCcw,
  AlertTriangle,
  Users,
  Globe,
  ClipboardList,
  BookOpenText,
  CalendarCheck,
  Handshake,
} from "lucide-react";

const terms = [
  {
    title: "Franchise Fee & Investment",
    icon: <DollarSign size={24} className="text-blue-600 dark:text-blue-400" />,
    content: `The franchisee must make an initial investment covering a non-refundable franchise fee. This includes branding, training, and operational setup.

    Additional costs involve store setup, equipment, staffing, and marketing expenses. The exact amount varies based on location and scale of operations.`,
  },
  {
    title: "Royalty & Revenue Sharing",
    icon: <FileText size={24} className="text-green-600 dark:text-green-400" />,
    content: `A monthly royalty fee (e.g., 5-10% of total sales or a fixed amount) must be paid by the 5th of each month for continued brand support.

    Late payments will incur a 2% penalty, and repeated defaults may lead to legal action or contract termination.`,
  },
  {
    title: "Operational Compliance & Quality Control",
    icon: <ShieldCheck size={24} className="text-yellow-600 dark:text-yellow-400" />,
    content: `The franchisee must maintain hygiene, service quality, and product standards as per company guidelines.

    Regular audits will be conducted, and non-compliance may result in penalties, retraining, or contract termination.`,
  },
  {
    title: "Location Approval & Store Setup",
    icon: <Store size={24} className="text-purple-600 dark:text-purple-400" />,
    content: `The franchise location must be approved by the franchisor. The store's design, branding, and interiors must adhere to company standards.

    Unauthorized modifications require prior approval. Violations may lead to penalties or revocation of franchise rights.`,
  },
  {
    title: "Marketing & Promotional Responsibilities",
    icon: <Globe size={24} className="text-orange-600 dark:text-orange-400" />,
    content: `The franchisee must participate in national and local marketing campaigns as directed by the franchisor.

    A percentage of the franchise’s revenue may be allocated to advertising efforts to ensure brand consistency and growth.`,
  },
  {
    title: "Training & Staff Management",
    icon: <Users size={24} className="text-teal-600 dark:text-teal-400" />,
    content: `All franchisees must undergo training before launching their store. Employees must also be trained as per company standards.

    Training refreshers will be held periodically, and failure to attend can impact franchise status.`,
  },
  {
    title: "Pricing & Product Consistency",
    icon: <ClipboardList size={24} className="text-pink-600 dark:text-pink-400" />,
    content: `The franchisee must adhere to the standard pricing set by the franchisor. Unauthorized discounts or pricing changes are not permitted.

    Consistency in product quality, ingredients, and presentation must be maintained at all locations.`,
  },
  {
    title: "Contract Duration & Renewal",
    icon: <RefreshCcw size={24} className="text-pink-600 dark:text-pink-400" />,
    content: `The franchise agreement is valid for 5-10 years. Renewal depends on business performance, compliance, and adherence to brand policies.

    If the contract is not renewed, the franchisee must cease operations under the brand and remove all branding materials.`,
  },
  {
    title: "Termination & Exit Policy",
    icon: <AlertTriangle size={24} className="text-red-600 dark:text-red-400" />,
    content: `The franchisor reserves the right to terminate the agreement if:
    - The franchisee violates brand guidelines.
    - Payments are repeatedly delayed.
    - Business practices are unethical.

    Franchisees must provide a 60-day notice before exiting, and all branding materials must be removed.`,
  },
  {
    title: "Legal Obligations & Dispute Resolution",
    icon: <BookOpenText size={24} className="text-indigo-600 dark:text-indigo-400" />,
    content: `All disputes will be resolved through arbitration as per local business laws. The franchisee agrees to comply with regional business regulations.

    Any legal issues must be addressed in the franchisor’s jurisdiction.`,
  },
  {
    title: "Business Expansion & Multi-Unit Ownership",
    icon: <CalendarCheck size={24} className="text-cyan-600 dark:text-cyan-400" />,
    content: `Franchisees interested in owning multiple units must meet minimum sales and operational benchmarks.

    Approval for additional locations is subject to performance reviews and market conditions.`,
  },
  {
    title: "Support & Relationship with Franchisor",
    icon: <Handshake size={24} className="text-lime-600 dark:text-lime-400" />,
    content: `The franchisor provides ongoing support in training, operations, and marketing. The franchisee must actively communicate and adhere to franchisor recommendations.

    Any conflicts should be resolved through discussions before legal action is taken.`,
  },
];

const TandC = () => {
  const containerRef = useRef(null);

  useEffect(() => {

    import("gsap").then(({ default: gsap }) => {
      gsap.from(containerRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white p-6 mt-20 md:p-12">
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Franchise Terms & Conditions
      </motion.h1>
      <motion.p
        className="text-lg text-center mb-8 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Please review the terms carefully before entering into a franchise agreement.
      </motion.p>

      {/* Terms List */}
      <div ref={containerRef} className="max-w-4xl mx-auto space-y-4">
        {terms.map((term, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 transition-all duration-300 cursor-pointer"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.5 }}
          >
            <details className="group">
              <summary className="flex justify-between items-center font-semibold text-xl cursor-pointer">
                <div className="flex items-center space-x-3">
                  {term.icon}
                  <span>{term.title}</span>
                </div>
                <ChevronDown className="group-open:rotate-180 transition-transform duration-300" />
              </summary>
              <p className="mt-2 text-gray-600 dark:text-gray-300">{term.content}</p>
            </details>
          </motion.div>
        ))}
      </div>
      <Text />
    </div>
  );
};

export default TandC;
