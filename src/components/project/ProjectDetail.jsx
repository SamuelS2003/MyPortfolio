import { useParams } from "react-router-dom";

const projects = [
  { id: 1, title: "Market Analysis Report", category: "Business Analysis", description: "A report analyzing market trends and business growth." },
  { id: 2, title: "Sales Data Dashboard", category: "Data Analysis", description: "A dashboard visualizing sales data for better insights." },
  { id: 3, title: "Customer Segmentation", category: "Data Analysis", description: "Clustering customers based on purchase behavior." },
  { id: 4, title: "Business Growth Strategy", category: "Business Analysis", description: "Strategic plans for expanding business operations." },
];

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id));

  if (!project) return <h2 className="p-6 text-red-500">Project not found!</h2>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{project.title}</h1>
      <p className="text-gray-600">{project.category}</p>
      <p className="mt-4">{project.description}</p>
    </div>
  );
}
