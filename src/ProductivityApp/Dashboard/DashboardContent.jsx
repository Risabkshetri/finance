// DashboardContent.jsx
import QuickStats from "./QuickStats";
import MainSections from "./MainSections";
import AdditionalSections from "./AdditionalSections";
import { Provider } from "react-redux";
import {store} from '../../NoteTakingApp/Store/store'

const DashboardContent = () => {
  return (
    <main className="flex-1 overflow-y-auto">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <Provider store={store}>
        <QuickStats />
        </Provider>
        <MainSections />
        <Provider store={store}>
        <AdditionalSections />
        </Provider>
      </div>
    </main>
  );
};

export default DashboardContent;