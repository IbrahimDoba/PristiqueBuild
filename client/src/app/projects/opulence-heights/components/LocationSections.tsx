import { MapPin, Clock, Route } from "lucide-react";

const LocationSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary">
          Perfectly Positioned
        </h2>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Location Details */}
            <div className="space-y-8">
              <div className="flex items-center space-x-4 p-6 bg-gray-50 rounded-xl">
                <div className="p-3 bg-primary rounded-lg">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary">Prime Location</h3>
                  <p className="text-gray-600">Dawaki Hillside — 10 mins from Abuja CBD</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-6 bg-gray-50 rounded-xl">
                <div className="p-3 bg-yellow-500 rounded-lg">
                  <Route className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary">Easy Access</h3>
                  <p className="text-gray-600">Connected to Katampe, Gwarinpa, Jahi</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-6 bg-gray-50 rounded-xl">
                <div className="p-3 bg-primary rounded-lg">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary">Strategic Access</h3>
                  <p className="text-gray-600">Minutes from major business districts</p>
                </div>
              </div>
            </div>
            
            {/* Map Placeholder */}
            <div className="relative">
              <div className="bg-primary-foreground rounded-2xl p-8 h-[400px] flex items-center justify-center shadow-lg">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-primary mb-2">Interactive Map</h3>
                  <p className="text-gray-600">Google Map integration coming soon</p>
                  <div className="mt-4 p-4 bg-white rounded-lg shadow-sm">
                    <p className="text-md text-center justify-center text-gray-600">
                      📍 Dawaki Hillside, FCT Abuja<br/>
                      🏢 10 minutes to CBD<br/>
                      🛣️ Major highway access
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;