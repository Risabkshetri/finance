import { useSelector } from "react-redux";
import { Container } from "../index";
import { useNavigate } from "react-router-dom";

// QuickStats.jsx
const QuickStats = () => {
  const notes = useSelector((state) => state.notes);
  const notesCopy = Array.isArray(notes) ? [...notes] : [];
  const length = notesCopy.length;

  const financialData = useSelector((state) => state.finance);
  const { networth, debit, credit } = financialData;

  const aiChatsCount = useSelector((state) => state.aichats.aiChatsCount);

  const userData = {
    noteCount: length,
    aiChatCount: aiChatsCount,
    debit: debit,
    credit: credit,
    netWorth: networth,
  };

  const targets = {
    noteCount: 10,
    aiChatCount: 100,
    debit: 100000,
    credit: 100000,
    netWorth: 100000,
  };
  
  const calculateProgressRate = ( userData, targets) => {
    const noteCountProgress = Math.min(userData.noteCount / targets.noteCount, 1);
    const aiChatCountProgress = Math.min(userData.aiChatCount / targets.aiChatCount, 1);
    const debitProgress = Math.min(userData.debit / targets.debit, 1);
    const creditProgress = Math.min(userData.credit / targets.credit, 1);
    const netWorthProgress = Math.min(userData.netWorth / targets.netWorth, 1);


    const progressRate = (
      (noteCountProgress * 0.30) +
      (aiChatCountProgress * 0.20) +
      (debitProgress * 0.15) +
      (creditProgress * 0.15) +
      (netWorthProgress * 0.20)
    ) * 100;
    return Math.round(progressRate * 100) / 100;
  }
  const progressRate = calculateProgressRate(userData, targets);
  const progressValue = progressRate + "%"

  

  const stats = [
    {
      name: "Daily Progress",
      value: progressValue,
      className: progressRate > 0 ? "text-yellow-600" : "text-red-600",
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
        <Container
          key={index}
          className="dark:bg-black transition-colors duration-200"
        >
          <div
            className="px-4 py-5 sm:p-6 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
            onClick={() => handleclick(stat.url)}
          >
            <dt
              className={`text-sm font-medium text-gray-500 dark:text-gray-400 truncate`}
            >
              {stat.name}
            </dt>
            <dd className={` mt-1 text-3xl font-semibold  ${stat.className}`}>
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
