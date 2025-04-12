// dashboard/components/Home.jsx
export default function Home() {
    return ( 
      <div className="p-5 space-y-6">
        <h1 className="text-2xl font-bold">Welcome to the MLB Dashboard</h1>
        <p className="text-gray-600">Stay updated with live scores, stats, and more!</p>
        
        {/* Live Scores*/}
        <div>
          <h2 className="text-lg font-semibold">Live Scores</h2>
          <p className="text-gray-500">No games in progress right now.</p>
        </div>
        
        {/* Additional Content...*/}
        <div >
          <h2 className="text-lg font-semibold">Current Standings</h2>
          <p className="text-gray-500">placeholder paragraph...</p>
        </div>
      </div>
    );
  }
  