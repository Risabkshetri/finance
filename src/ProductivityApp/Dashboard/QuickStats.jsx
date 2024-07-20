import { useSelector } from "react-redux";
import { Container } from "../index";
import { useNavigate } from "react-router-dom";

// QuickStats.jsx
const QuickStats = () => {
  const notes = useSelector((state) => state.notes);
  const notesCopy = Array.isArray(notes) ? [...notes] : [];
  const length = notesCopy.length;


 const financialData = useSelector((state) => state.finance);
  const { networth} = financialData;
 
  const stats = [
    {
      name: "Daily Progress",
      value: 0,
    },
    {
      name: "Social Engagement",
      value: 0,
    },
    {
      name: "Financial Overview",
      value: networth.toFixed(2),
    className: networth > 0 ? "text-green-500" : "text-red-600",
      symbol: "₹",
    },
    {
      name: "Notes Created",
      value: length,
      symbol: "📖",
    },
  ];

  const navigate = useNavigate();

  const handleclick = (url) => {
    navigate(url);
  };

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <Container key={index}>
          <div
            className="px-4 py-5 sm:p-6"
            onClick={() => handleclick(stat.url)}
          >
            <dt className={`text-sm font-medium text-gray-500 truncate`}>
              {stat.name}
            </dt>
            <dd
              className={`${stat.className} mt-1 text-3xl font-semibold text-gray-900`}
            >
              {stat.symbol}
              {stat.value}
            </dd>
          </div>
        </Container>
      ))}
    </div>
  );
};

export default QuickStats;
