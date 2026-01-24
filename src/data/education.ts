export interface Education {
  id: string;
  institution: string;
  degree: string;
  duration: string;
  description: string;
  courses: string[];
  achievements: string[];
  logo?: string;
}

export const education: Education[] = [
  {
    id: "college",
    institution: "Tech University",
    degree: "Bachelor of Technology in Computer Science",
    duration: "2021 - 2025",
    description: "Focusing on Software Engineering, Artificial Intelligence, and Data Structures.",
    courses: [
      "Data Structures & Algorithms",
      "Operating Systems",
      "Database Management Systems",
      "Computer Networks",
      "Artificial Intelligence",
      "Web Technologies"
    ],
    achievements: [
        "Dean's List 2022, 2023",
        "Winner of National Hackathon 2023",
        "Lead, Google Developer Student Clubs"
    ]
  },
  {
    id: "highschool",
    institution: "Future High School",
    degree: "Senior Secondary (Science Stream)",
    duration: "2019 - 2021",
    description: "Specialized in Physics, Chemistry, and Mathematics with Computer Science.",
    courses: [
      "Physics",
      "Chemistry",
      "Mathematics",
      "Computer Science (Python)"
    ],
    achievements: [
        "School Topper in Computer Science",
        "Science Exhibition 1st Place"
    ]
  }
];
