// dashboard/components/Sidebar.jsx
import Image from 'next/image';

export default function Sidebar({ activeTab, setActiveTab }) {
  const tabs = [
    { id: 'home', label: 'Home' },
    { id: 'stats', label: 'Player Stats' },
    { id: 'teams', label: 'Teams' },
    { id: 'schedule', label: 'Schedule' },
  ];

  return (
    <aside className="w-1/8 bg-gray-900 text-white flex flex-col space-y-1">
      {/* Dashboard header */}
      <div className="flex items-center space-x-3 mb-4 p-3">
        <Image src="/mlb-logo.png" alt="MLB Logo" width={40} height={40} />
        <h2 className="text-lg font-bold">MLB Dashboard</h2>
      </div>

      {/* Dashbord Tabs */}
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={` p-2 text-left cursor-pointer ${
            activeTab === tab.id
              ? 'bg-[#343a40] font-bold border-r-5  border-green-400'
              : 'hover:bg-gray-700'
          }`}
          onClick={() => setActiveTab(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </aside>
  );
}


