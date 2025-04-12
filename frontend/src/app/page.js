// dashboard/page.jsx
'use client';

import { useState } from 'react';
import Sidebar from './dashboard/components/sidebar';
import Home from './dashboard/components/home';
import PlayerStats from './dashboard/components/playerstats';
import Teams from './dashboard/components/teams.jsx';
import Schedule from './dashboard/components/schedule.jsx';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Home />;
      case 'stats':
        return <PlayerStats />;
      case 'teams':
        return <Teams />;
      case 'schedule':
        return <Schedule />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar Component */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Content Area */}
      <main className="flex-1 bg-gray-100 p-6">
        {renderContent()}
      </main>
    </div>
  );
}
