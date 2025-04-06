import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function MenuCategories() {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="md:px-5 px-2 py-12 mx-auto w-[100%] md:w-[85%] lg:w-[70%]">
        <ul className="flex flex-wrap justify-center md:text-base text-sm text-gray-800">
          <li className="md:py-4 md:px-4 py-3 px-2">
            <Link to="" className="relative hover:text-gray-950 group">
              All
              <span className="absolute left-0 bottom-[-2px] w-0 h-0.5 bg-[#E32737] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li className="md:py-4 md:px-4 py-3 px-2">
            <Link to="" className="relative hover:text-gray-950 group">
              Curries
              <span className="absolute left-0 bottom-[-2px] w-0 h-0.5 bg-[#E32737] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li className="md:py-4 md:px-4 py-3 px-2">
            <Link to="" className="relative hover:text-gray-950 group">
              Noodles
              <span className="absolute left-0 bottom-[-2px] w-0 h-0.5 bg-[#E32737] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li className="md:py-4 md:px-4 py-3 px-2">
            <Link to="" className="relative hover:text-gray-950 group">
              Salads
              <span className="absolute left-0 bottom-[-2px] w-0 h-0.5 bg-[#E32737] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li className="md:py-4 md:px-4 py-3 px-2">
            <Link to="" className="relative hover:text-gray-950 group">
              Soups
              <span className="absolute left-0 bottom-[-2px] w-0 h-0.5 bg-[#E32737] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li className="md:py-4 md:px-4 py-3 px-2">
            <Link to="" className="relative hover:text-gray-950 group">
              Side Dishes
              <span className="absolute left-0 bottom-[-2px] w-0 h-0.5 bg-[#E32737] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li className="md:py-4 md:px-4 py-3 px-2">
            <Link to="" className="relative hover:text-gray-950 group">
              Snacks & Street Foods
              <span className="absolute left-0 bottom-[-2px] w-0 h-0.5 bg-[#E32737] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li className="md:py-4 md:px-4 py-3 px-2">
            <Link to="" className="relative hover:text-gray-950 group">
              Chef's Favorite
              <span className="absolute left-0 bottom-[-2px] w-0 h-0.5 bg-[#E32737] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li className="md:py-4 md:px-4 py-3 px-2">
            <Link to="" className="relative hover:text-gray-950 group">
              Desserts
              <span className="absolute left-0 bottom-[-2px] w-0 h-0.5 bg-[#E32737] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li className="md:py-4 md:px-4 py-3 px-2">
            <Link to="" className="relative hover:text-gray-950 group">
              Drinks & Beverages
              <span className="absolute left-0 bottom-[-2px] w-0 h-0.5 bg-[#E32737] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
        </ul>
      </div>
      <hr className="border-t-gray-400" />
    </motion.div>
  );
}
