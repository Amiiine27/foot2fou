export default function Dashboard() {
  return (
    <>
      <div className="bg-slate-50 p-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">
            📊 Mon Dashboard Foot2fou{" "}
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-gray-700 ">Prochains Matchs</h3>
                <p className="text-3xl font-bold text-blue-600">7</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-gray-700">Mes Buts</h3>
                <p className="text-3xl font-bold text-green-600">12</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-gray-700">Victoires</h3>
                <p className="text-3xl font-bold text-yellow-600">8</p>
            </div>
          </div>
        </div>

        <div className="grid"></div>
      </div>
    </>
  );
}
