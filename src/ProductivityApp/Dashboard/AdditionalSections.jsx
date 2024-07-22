import { useNavigate } from "react-router-dom";
import { Container } from "../index";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const AdditionalSections = () => {
  const navigate = useNavigate();
  const notes = useSelector((state) => state.notes);
  const recentNotes = Array.isArray(notes)
    ? [...notes].reverse().slice(0, 3)
    : [];

  const handlechatbotClick = () => {
    navigate("/dashboard/chatbot");
  };
  const handleNoteClick = () => {
    navigate("/dashboard/notes");
  };

  const handleIncomeClick = () => {
    navigate("/dashboard/finance/financial-calculation");
  };

  const { networth, debit, credit } = useSelector((state) => state.finance);

  return (
    <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
      <Container className="dark:bg-black hover:shadow-md hover:shadow-white">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
            Financial Health
          </h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Current month's budget overview
          </p>
          <div className="mt-4 h-24 p-2 bg-gray-100 dark:bg-gray-700 rounded">
            <p className="dark:text-gray-200">
              Debit:{" "}
              <span className="text-red-500 dark:text-red-400">
                ₹{debit.toFixed(2)}
              </span>
            </p>
            <p className="dark:text-gray-200">
              Credit:{" "}
              <span className="text-green-500 dark:text-green-400">
                {" "}
                ₹{credit.toFixed(2)}
              </span>
            </p>
            <p className="font-semibold dark:text-gray-200">
              Networth:{" "}
              <span
                className={
                  networth > 0
                    ? "text-green-600 dark:text-green-400"
                    : "text-red-500 dark:text-red-400"
                }
              >
                ₹{networth.toFixed(2)}
              </span>
            </p>
          </div>
          <button
            className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition duration-150 ease-in-out"
            onClick={handleIncomeClick}
          >
            See Full Transactions
          </button>
        </div>
      </Container>

      <Container className="dark:bg-black hover:shadow-md hover:shadow-white">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
            Recent Notes
          </h3>
          <div className="mt-4 space-y-2">
            {recentNotes.map((note) => (
              <div
                key={note.id}
                className="bg-gray-100 dark:bg-gray-700 p-2 rounded"
              >
                <Link
                  to="/dashboard/notes"
                  className="text-lg font-semibold hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400"
                >
                  {note.title}
                </Link>
              </div>
            ))}
          </div>
          <button
            className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition duration-150 ease-in-out"
            onClick={handleNoteClick}
          >
            Create New Note
          </button>
        </div>
      </Container>

      <Container className="dark:bg-black hover:shadow-md hover:shadow-white">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
            AI Assistant
          </h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Get instant help with KshetriAI
          </p>
          <button
            className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition duration-150 ease-in-out w-full"
            onClick={handlechatbotClick}
          >
            Ask KshetriAI
          </button>
          <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
            <p>Sample questions:</p>
            <ul className="list-disc list-inside">
              <li>How can I improve my productivity?</li>
              <li>Analyze my social media performance</li>
              <li>Suggest a budget plan</li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AdditionalSections;
