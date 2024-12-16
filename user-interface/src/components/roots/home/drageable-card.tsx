"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const DraggableCard = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  const cardVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: 50, transition: { duration: 0.5 } },
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="absolute z-20 flex w-[238px] flex-col gap-4 rounded-3xl bg-[#292c27] px-7 py-8 cursor-grab"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          drag
          dragConstraints={{ top: -50, bottom: 400, left: -400, right: 300 }}
          dragElastic={0.2}
        >
          <div className="flex flex-col">
            <div className="flex items-center justify-between">
              <p className="text-[16px] font-[400] font-inter text-[#A2A2A2]">
                Location
              </p>
              <Image
                src="/icons/close.svg"
                alt="close"
                width={24}
                height={24}
                onClick={handleClose}
                className="cursor-pointer -translate-y-4 translate-x-2"
              />
            </div>
            <p className="text-[18px] font-[700] text-white">
              United State, Europe
            </p>
          </div>

          <div className="flex flex-col">
            <p className="text-[16px] font-[400] font-inter text-[#A2A2A2]">
              Address
            </p>
            <p className="text-[18px] font-[700] text-white">
              2121 Crystal Dr, United States.
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DraggableCard;
