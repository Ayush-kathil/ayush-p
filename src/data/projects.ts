export interface Project {
  title: string;
  slug: string;
  description: string;
  fullDescription?: string;
  tags: string[];
  links: { github: string; demo: string };
  year: string;
  heroImage?: string;
  problem?: string;
  solution?: string;
  images?: string[]; // Put your image paths here (e.g. "/images/my-project.png")
}

export const projects: Project[] = [
  {
    title: "Credit Card Fraud Detection",
    slug: "fraud-detection",
    description: "Machine Learning pipeline to detect fraudulent transactions in imbalanced datasets.",
    fullDescription: "Built a supervised classification pipeline to detect fraudulent transactions in highly imbalanced datasets. Performed data cleaning, feature scaling, and applied SMOTE to address class imbalance. Trained and evaluated Random Forest and Logistic Regression models using precision, recall, and F1-score.",
    tags: ["Machine Learning", "Python", "Scikit-Learn", "SMOTE"],
    links: { github: "#", demo: "#" },
    year: "2024",
    images: ["https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80"]
  },
  {
    title: "Movie Recommendation System",
    slug: "movie-recommender",
    description: "Content-based recommendation engine for personalized movie suggestions.",
    fullDescription: "Developed a content-based recommendation system using cosine similarity for personalized movie suggestions. Processed and vectorized metadata for 5,000+ movies using Pandas and NumPy. Generated top-5 movie recommendations based on user preferences.",
    tags: ["Data Science", "Python", "Pandas", "NumPy"],
    links: { github: "#", demo: "#" },
    year: "2023",
    images: ["https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80"]
  },
  {
    title: "Yoga Pose Detection",
    slug: "yoga-pose",
    description: "Real-time computer vision system for pose estimation and correction.",
    fullDescription: "Optimized real-time video processing using OpenCV to reduce latency in pose estimation. Designed a real-time yoga pose detection and correction system using OpenCV and MediaPipe. Implemented a geometric approach using Euclidean distance to compute joint angles.",
    tags: ["Computer Vision", "OpenCV", "MediaPipe", "Python"],
    links: { github: "#", demo: "#" },
    year: "2023",
    images: ["https://images.unsplash.com/photo-1544367563-12123d8955bf?auto=format&fit=crop&q=80"]
  },
  {
    title: "Hotel Sunrise",
    slug: "hotel-sunrise",
    description: "Responsive hotel booking website with accessibility-focused UI/UX.",
    fullDescription: "Designed and deployed a responsive hotel booking website using HTML, CSS, and JavaScript. Ensured cross-device compatibility and accessibility-focused UI/UX design. Deployed the application on Netlify for public access.",
    tags: ["Web Development", "HTML/CSS", "JavaScript", "Netlify"],
    links: { github: "#", demo: "#" },
    year: "2024",
    images: ["/images/hotelsunrise.png"]
  },
  {
    title: "Tic Tac Toe Game",
    slug: "tic-tac-toe",
    description: "Interactive 2-player game with win/draw logic and responsive UI.",
    fullDescription: "A simple and interactive Tic Tac Toe game built with HTML, CSS, and JavaScript. Features two-player mode, turn-based logic, win/draw detection, and a clean responsive UI.",
    tags: ["Web Development", "HTML", "CSS", "JavaScript"],
    links: { github: "#", demo: "#" },
    year: "2024",
    images: ["https://images.unsplash.com/photo-1668901382969-8c73e450a1f5?q=80&w=800&auto=format&fit=crop"]
  },
  {
    title: "PDF Secure Editz",
    slug: "pdf-secure-editz",
    description: "Secure tool for editing and locking PDF documents.",
    fullDescription: "A utility for securely editing and protecting PDF references. Implements encryption and permission management for sensitive documents.",
    tags: ["Security", "Python", "Cryptography"],
    links: { github: "#", demo: "#" },
    year: "2025",
    images: ["https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop"]
  },
  {
    title: "Grade Calculator",
    slug: "grade-calculator",
    description: "Glassmorphic CGPA & Percentage calculator for students.",
    fullDescription: "A sleek, glassmorphic CGPA & Percentage calculator designed for students. Features a premium Dark/Light theme toggle and smooth animations.",
    tags: ["Web Development", "Glassmorphism", "JavaScript"],
    links: { github: "#", demo: "#" },
    year: "2025",
    images: ["https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop"]
  }
];
