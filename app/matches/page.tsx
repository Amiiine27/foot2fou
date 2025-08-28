export default function Matches() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {" "}
      {/*(Container principal - pleine page)*/}
      <div className="max-w-6xl mx-auto">
        {" "}
        {/*(Container centré avec max-width*/}
        <div className="mb-6">
          {/*(Header section)*/}
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Matchs à venir
          </h2>{" "}
          {/*(Titre principal)*/}
          <p className="text-gray-600">Description</p> {/*(Description)*/}
        </div>
        <div className="md:hidden space-y-4">
          {" "}
          {/*Container cards mobile - masqué desktop*/}
          <div className="bg-white rounded-lg shadow-md border border-gray-200">
            {" "}
            {/*(Cards individuelles)*/}
            <div className="p-4">
              {" "}
              {/*(Padding interne card)*/}
              <div className="flex justify-between items-start mb-3">
                {/*Header card - date et statut*/}
                <div>
                  {" "}
                  {/* Zone gauche pour date + heure */}
                  <h3 className="font-semibold text-lg text-gray-900">
                    Samedi 30 Août
                  </h3>
                  <p className="text-sm text-gray-700">20h00</p>
                </div>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                  Ouvert
                </span>
              </div>
              <div className="flex items-center mb-3">
                {" "}
                {/*(Info terrain avec icône)*/}
                <i className="fas fa-map-marker-alt text-green-600 mr-2"></i>
                <span className="text-gray-800">Parc Montreau</span>
              </div>
              <div className="flex justify-between items-center">
                {/*(Footer card - joueurs et action)*/}
                <div className="flex items-center">
                <i className="fas fa-users text-blue-600 mr-2"></i>
                  <span className="text-gray-800">12/22 joueurs !</span>
                  <div className="ml-2 w-16 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: "55%" }}
                    ></div>
                  </div>
                </div>
                <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700">
                  S'inscrire
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
