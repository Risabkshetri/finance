import { useSelector } from "react-redux";
import { Container } from "../index";

// QuickStats.jsx
const QuickStats = () => {
  const notes = useSelector((state) => state.notes);
  const notesCopy = Array.isArray(notes) ? [...notes] : [];
  const length = notesCopy.length;
  console.log(length)

    const stats = [
      {name: "Daily Progress", value: 0},
      {name: "Social Engagement", value: 0},
      {name: "Financial Overview", value: 0},
      {name: "Notes Created", value: length},
    ];

   
  
    return (
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Container
            key={index}
            
          >
            <div className="px-4 py-5 sm:p-6">
              <dt className="text-sm font-medium text-gray-500 truncate">
                {stat.name}
              </dt>
              <dd className="mt-1 text-3xl font-semibold text-gray-900">{stat.value}</dd>
            </div>
          </Container>
        ))}
      </div>
    );
  };
  
  export default QuickStats;