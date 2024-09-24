"use client";
import React, { useEffect, useState } from "react";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userScore, setUserScore] = useState(0);
  const internship = [
    {
      id: "1",
      title: "Marketing Intern",
      company: "InnovateTech Solutions",
      location: "San Francisco, CA",
      duration: "3 months",
      applicationDeadline: "2024-10-15",
      description:
        "Join our marketing team to assist with campaign strategies and market research.",
      applyLink: "https://example.com/apply/marketing-intern",
    },
    {
      id: "2",
      title: "Software Development Intern",
      company: "TechVision Inc.",
      location: "Remote",
      duration: "6 months",
      applicationDeadline: "2024-11-01",
      description:
        "Work on exciting projects with our software development team. Gain hands-on experience with cutting-edge technologies.",
      applyLink: "https://example.com/apply/software-development-intern",
    },
    {
      id: "3",
      title: "Graphic Design Intern",
      company: "Creative Minds Studio",
      location: "New York, NY",
      duration: "4 months",
      applicationDeadline: "2024-10-30",
      description:
        "Assist in designing promotional materials and branding strategies for various clients.",
      applyLink: "https://example.com/apply/graphic-design-intern",
    },
    {
      id: "4",
      title: "Data Analyst Intern",
      company: "DataDriven Corp",
      location: "Chicago, IL",
      duration: "3 months",
      applicationDeadline: "2024-09-20",
      description:
        "Analyze data to help our team make data-driven decisions. Experience in SQL and Excel is a plus.",
      applyLink: "https://example.com/apply/data-analyst-intern",
    },
  ];
  useEffect(() => {
    setQuestions([
      {
        question: "Who was the first King of unified Nepal?",
        options: [
          "Prithvi Narayan Shah",
          "Gyanendra Shah",
          "Mahendra Shah",
          "Tribhuvan Shah",
        ],
        answer: "Prithvi Narayan Shah",
      },
      {
        question:
          "In which year did Nepal officially become a federal democratic republic?",
        options: ["2006", "2008", "2010", "2015"],
        answer: "2008",
      },
      {
        question:
          "What is the significance of the year 1951 in Nepal's history?",
        options: [
          "Beginning of the Rana regime",
          "The end of the monarchy",
          "Introduction of democracy",
          "Unification of Nepal",
        ],
        answer: "Introduction of democracy",
      },
      {
        question:
          "Which treaty marked the end of the Anglo-Nepalese War in 1816?",
        options: [
          "Treaty of Bhaktapur",
          "Treaty of Kathmandu",
          "Treaty of Sugauli",
          "Treaty of Gorkha",
        ],
        answer: "Treaty of Sugauli",
      },
      {
        question:
          "Who was the last monarch of Nepal before the country became a republic?",
        options: [
          "King Mahendra",
          "King Gyanendra",
          "King Birendra",
          "King Tribhuvan",
        ],
        answer: "King Gyanendra",
      },
      {
        question: "Which dynasty ruled Nepal before the Shah dynasty?",
        options: ["Thakuri", "Malla", "Rana", "Gopal"],
        answer: "Malla",
      },
      {
        question: "What was the main cause of the Kot Massacre in 1846?",
        options: [
          "Conflict over succession to the throne",
          "Dispute between political factions",
          "British intervention",
          "Unification campaign",
        ],
        answer: "Dispute between political factions",
      },
      {
        question: "In which year did Nepal adopt its first constitution?",
        options: ["1948", "1951", "1959", "1990"],
        answer: "1959",
      },
      {
        question:
          "Who was the first Prime Minister of Nepal after the abolition of the monarchy?",
        options: [
          "Girija Prasad Koirala",
          "Baburam Bhattarai",
          "Pushpa Kamal Dahal (Prachanda)",
          "Sushil Koirala",
        ],
        answer: "Pushpa Kamal Dahal (Prachanda)",
      },
      {
        question:
          "What is the significance of King Tribhuvan's return to Nepal in 1951?",
        options: [
          "Restoration of democracy",
          "Start of the unification campaign",
          "Beginning of the Rana regime",
          "End of British rule in Nepal",
        ],
        answer: "Restoration of democracy",
      },
    ]);
  }, []);

  const savedAnswers = (ans) => {
    console.log(ans);
    if (ans === questions[currentIndex]?.answer) {
      setUserScore(userScore + 1);
    }
    setCurrentIndex(currentIndex + 1);
  };

  return (
    <div>
      {internship.map((item)=>{
        return (
          <div>
            {item.company}
        </div>
        )
      })}

      <input placeholder="Generate questions and answers for quiz" />
      {questions[currentIndex]?.question}
      {questions[currentIndex]?.options.map((item) => {
        return (
          <div
            onClick={() => savedAnswers(item)}
            className="bg-cyan-300 m-4 p-4"
          >
            {item}
          </div>
        );
      })}
      <h2>Score: {userScore}</h2>
      
    </div>
  );
};

export default Quiz;
