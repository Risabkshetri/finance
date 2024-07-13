// AdditionalSections.jsx
const AdditionalSections = () => {
    return (
      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg font-medium text-gray-900">Financial Health</h3>
            <p className="mt-1 text-sm text-gray-500">
              Current month's budget overview
            </p>
            <div className="mt-4 h-24 bg-gray-200 rounded"></div>
          </div>
        </div>
  
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg font-medium text-gray-900">Recent Notes</h3>
            <div className="mt-4 space-y-2">
              {[1, 2, 3].map((note) => (
                <div key={note} className="bg-gray-100 p-2 rounded">
                  Note {note}
                </div>
              ))}
            </div>
            <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">
              Create New Note
            </button>
          </div>
        </div>
  
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg font-medium text-gray-900">AI Assistant</h3>
            <p className="mt-1 text-sm text-gray-500">
              Get instant help with KshetriAI
            </p>
            <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 w-full">
              Ask KshetriAI
            </button>
            <div className="mt-4 text-sm text-gray-500">
              <p>Sample questions:</p>
              <ul className="list-disc list-inside">
                <li>How can I improve my productivity?</li>
                <li>Analyze my social media performance</li>
                <li>Suggest a budget plan</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default AdditionalSections;