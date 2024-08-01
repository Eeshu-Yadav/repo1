import React, { useState, useEffect } from "react";
import {
  FaBook,
  FaChild,
  FaUserGraduate,
  FaUserMd,
  FaMale,
  FaFemale,
} from "react-icons/fa";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { GiNotebook, GiDoctorFace } from "react-icons/gi";
import { BiFemale, BiMaleFemale } from "react-icons/bi";
import { PiStudentFill } from "react-icons/pi";
import { MdCategory } from "react-icons/md";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { TbCategory } from "react-icons/tb";

import "../index.css";

const Carsoule2 = () => {
  const schemes = [
    {
      title: "Educational Support",
      ageGroup: "6-18",
      description:
        "Provides financial support for school and college education.",
      icon: <FaBook />,
      relatedIcon: <GiNotebook />,
      color: "text-blue-200",
    },
    {
      title: "Healthcare Program",
      ageGroup: "All Ages",
      description:
        "Offers free medical check-ups and treatments for underprivileged communities.",
      icon: <FaUserMd />,
      relatedIcon: <GiDoctorFace />,
      color: "text-green-500",
    },
    {
      title: "Child Welfare",
      ageGroup: "0-12",
      description: "Ensures nutrition and basic healthcare for children.",
      relatedIcon: <BiMaleFemale />,
      color: "text-purple-500",
      //   relatedIcon: <BiFemale />
    },
    {
      title: "Scholarship Scheme",
      ageGroup: "18-25",
      description:
        "Scholarships for higher education in universities and colleges.",
      icon: <FaUserGraduate />,
      relatedIcon: <PiStudentFill />,
      color: "text-pink-400",
    },
    {
      title: "Skill Development",
      ageGroup: "18-35",
      description:
        "Training programs for skill development and employment opportunities.",
      icon: <MdCategory />,
      relatedIcon: <TbCategory />,
      color: "text-blue-100",
    },
    {
        title: "Educational Support",
        ageGroup: "6-18",
        description:
          "Provides financial support for school and college education.",
        icon: <FaBook />,
        relatedIcon: <GiNotebook />,
        color: "text-green-500",
      },
      {
        title: "Healthcare Program",
        ageGroup: "All Ages",
        description:
          "Offers free medical check-ups and treatments for underprivileged communities.",
        icon: <FaUserMd />,
        relatedIcon: <GiDoctorFace />,
        color: "text-purple-500",
      },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [items, setItems] = useState(schemes);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % schemes.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []); // Removed schemes from dependency array

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % schemes.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + schemes.length) % schemes.length
    );
  };

  return (
<div className="relative text-richblack-5 max-w-[70rem]">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform:  `translateX(-${currentIndex * 29.5}%)` }}
        >
          {items.map((scheme, index) => (
            <div
              key={index}
              className="min-w-[18rem] px-5 pt-4 pb-3 gap-1 rounded-md bg-richblack-800 mx-5 flex justify-center flex-col shadow-[-1px_-1px_20px_-5px] shadow-blue-100 "
              style={{
                backgroundColor: "rgba(135, 206, 250, 0.2)",
                backdropFilter: "blur(5px)",
                border: "2px solid #ffd700",
                borderRadius: "0.5rem",
              }}
            >
              <div className="transition-transform duration-500 transform hover:scale-105 ">
                <span
                  style={{
                    backgroundColor: "rgba(135, 206, 250, 0.3)", // SkyBlue with transparency
                    backdropFilter: "blur(5px)", // Blur effect
                    border: "2px solid #ffd700", // Blue border
                    borderRadius: "0.5rem", // Rounded corners
                  }}
                  className="px-2 py-1 font-bold"
                >
                  <p className="custom-gradient-orange">{scheme.title}</p>
                </span>
              </div>

              <div className="flex gap-2 justify-between items-center">
                <div className="flex gap-2 items-center">
                  <p className={` ${scheme.color} text-3xl`}>{scheme.icon}</p>
                  <p className={` ${scheme.color} text-4xl`}>
                    {scheme.relatedIcon}
                  </p>
                </div>

                <div className="flex flex-col">
                  <p className="text-yellow-50 font-semibold">For age group {scheme.ageGroup}</p>
                  <p className="text-richblack-50 text-sm">{scheme.description.substring(0, 30) + "..."}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        className="absolute top-1/2 left-[-1rem] transform -translate-y-1/2 bg-neutral-300 shadow-lg rounded-full p-2"
        onClick={handlePrev}
      >
        <GrFormPrevious className="text-[2rem] text-blue-700 font-bold" />
      </button>
      <button
        className="absolute top-1/2 right-[-1rem] transform -translate-y-1/2 bg-neutral-300 shadow-lg rounded-full p-2"
        onClick={handleNext}
      >
        <GrFormNext className="text-[2rem] text-blue-700 font-bold" />
      </button>
    </div>
  );
};

export default Carsoule2;
