// DashboardContent.jsx
import QuickStats from "./QuickStats";
import MainSections from "./MainSections";
import AdditionalSections from "./AdditionalSections";

const DashboardContent = () => {
  return (
    <main className="flex-1 overflow-y-auto bg-gray-100">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <QuickStats />
        <MainSections />
        <AdditionalSections />
      </div>
    </main>
  );
};

export default DashboardContent;