import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Portfolio.css"

const projects = [
    { id: 1, title: "Market Analysis Report", category: "Business Analysis", description: "A report analyzing market trends and business growth." },
    { id: 2, title: "Sales Data Dashboard", category: "Data Analysis", description: "A dashboard visualizing sales data for better insights." },
    { id: 3, title: "Customer Segmentation", category: "Data Analysis", description: "Clustering customers based on purchase behavior." },
    { id: 4, title: "Business Growth Strategy", category: "Business Analysis", description: "Strategic plans for expanding business operations." },
];

export default function ProjectFilter() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="portfolio__container container grid">
        <div className="portfolio__tab container">
            {["All", "Business Analysis", "Data Analysis"].map((category) => (
            <button
                key={category}
                className={`button ${
                selectedCategory === category
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200"
                }`}
                onClick={() => setSelectedCategory(category)}
            >
                {category}
            </button>
            ))}
        </div>

        <div className="services__container container grid">
            {filteredProjects.map((project) => (
            <Link key={project.id}  to={`/project/${project.id}`} className="services__content">
                <h3 className="services__title">{project.title}</h3>
                <p className="services__button">{project.category}</p>
            </Link>
            ))}
        </div>
    </div>
  );
}
