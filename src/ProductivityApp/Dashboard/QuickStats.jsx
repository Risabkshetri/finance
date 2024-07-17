import { Container } from "../index";

// QuickStats.jsx
const QuickStats = () => {
    const stats = [
      "Daily Progress",
      "Social Engagement",
      "Financial Overview",
      "Notes Created",
    ];
  
    return (
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Container
            key={index}
            
          >
            <div className="px-4 py-5 sm:p-6">
              <dt className="text-sm font-medium text-gray-500 truncate">
                {stat}
              </dt>
              <dd className="mt-1 text-3xl font-semibold text-gray-900">0</dd>
            </div>
          </Container>
        ))}
      </div>
    );
  };
  
  export default QuickStats;