import { ArrowDownRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link, animateScroll as scroll } from "react-scroll";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

export default function Career() {
    // state to store jobs
    let [jobs, setJobs] = useState([]);
    // state for loading
    let [loading, setLoading] = useState(false);

    // fetch data that send from backend
    let getJobs = async () => {
        setLoading(true);
        try {
            let res = await axios.get("/api/jobs");
            let data = res.data;
            setJobs(data.jobs);
        } catch (error) {
            console.error("Failed to fetch jobs:", error);
        } finally {
            setLoading(false);
        }
    };

    // call data fetching function in useEffect to run when user enter the page
    useEffect(() => {
        getJobs();
    }, []);

    const JobSkeleton = () => (
        <div>
            <hr className="border-t-gray-400" />
            <div className="px-2 py-2 flex justify-between items-center animate-pulse">
                <div className="w-[35%] md:w-[55%]">
                    <div className="h-5 bg-gray-300 rounded mb-2 w-3/4"></div>
                    <div className="hidden md:block h-4 bg-gray-300 rounded w-full max-w-[200px]"></div>
                </div>
                <div className="w-[50%] md:w-[35%] px-5">
                    <div className="h-5 bg-gray-300 rounded mb-2 w-1/2"></div>
                    <div className="h-4 bg-gray-300 rounded w-1/3"></div>
                </div>
                <div className="w-[15%] md:w-[10%] flex justify-center">
                    <div className="h-7 w-7 bg-gray-300 rounded"></div>
                </div>
            </div>
        </div>
    );

    return (
        <motion.div
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
        >
            <hr className="border-t-gray-400" />
            <div className="px-5 md:px-10 py-2">
                <p className="text-xl">Careers</p>
                <div className="md:flex justify-between py-6">
                    <p className="md:w-1/4 lg:w-2/5 text-lg font-medium">
                        Positions we needed
                    </p>
                    <p className="md:w-3/4 lg:w-3/5 text-gray-800 md:px-3 text-sm md:text-base mt-2 md:mt-0">
                        We're looking for passionate individuals to join us!
                        Explore our current openings and be part of an
                        innovative team. If you’re ready to grow with us, check
                        out the available positions and apply today.
                    </p>
                </div>
                <div className="my-5 md:my-8">
                    {loading
                        ? Array.from({ length: 4 }).map((_, idx) => (
                              <JobSkeleton key={idx} />
                          ))
                        : jobs.map((job) => (
                              <div>
                                  <hr className="border-t-gray-400" />
                                  <div className="px-2 py-2 flex justify-between items-center">
                                      <div className="w-[35%] md:w-[55%]">
                                          <h1 className="font-medium">
                                              {job.title}
                                          </h1>
                                          <p className="text-gray-800 text-sm hidden md:block">
                                              {job.desc}
                                          </p>
                                      </div>
                                      <div className="w-[50%] md:w-[35%] px-5">
                                          <p className="text-gray-900 text-sm md:text-base">
                                              ${parseInt(job.salary)} Per Hour
                                          </p>
                                          <p className="text-gray-800 text-sm md:text-base">
                                              {job.type}
                                          </p>
                                      </div>
                                      <div className="w-[15%] md:w-[10%]">
                                          <Link
                                              to="Form"
                                              smooth={true}
                                              duration={500}
                                              offset={-70}
                                              className="cursor-pointer"
                                          >
                                              <ArrowDownRight size={28} />
                                          </Link>
                                      </div>
                                  </div>
                              </div>
                          ))}
                </div>
            </div>
        </motion.div>
    );
}
