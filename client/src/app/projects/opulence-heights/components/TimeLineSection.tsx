import { CheckCircle2, Clock, Calendar } from "lucide-react";

const phases = [
  {
    phase: "Phase 1",
    activity: "Show Unit & 4 Villas",
    status: "underway",
    description: "Currently under construction with expected completion soon"
  },
  {
    phase: "Phase 2", 
    activity: "Infrastructure + Sales",
    status: "planned",
    description: "Site development and infrastructure installation"
  },
  {
    phase: "Phase 3",
    activity: "Final Units Completion",
    status: "planned",
    description: "Remaining 14 villas construction and handover"
  }
];

const TimelineSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary">
          Project Timeline & Phases
        </h2>
        
        <div className="max-w-4xl mx-auto">
          {/* Timeline Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <Calendar className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-primary">18 Months</h3>
              <p className="text-gray-600">Total Timeline</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <CheckCircle2 className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-yellow-500">Phase 1</h3>
              <p className="text-gray-600">Now Underway</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-primary">Q4 20256</h3>
              <p className="text-gray-600">Final Completion</p>
            </div>
          </div>
          
          {/* Timeline */}
          <div className="space-y-8">
            {phases.map((phase, index) => (
              <div key={index} className="relative">
                {/* Connector Line */}
                {index < phases.length - 1 && (
                  <div className="absolute left-6 top-16 w-0.5 h-16 bg-gray-300"></div>
                )}
                
                <div className="flex items-start space-x-6">
                  {/* Status Icon */}
                  <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
                    phase.status === 'underway' 
                      ? 'bg-yellow-500' 
                      : 'bg-primary'
                  }`}>
                    {phase.status === 'underway' ? (
                      <CheckCircle2 className="w-6 h-6 text-white" />
                    ) : (
                      <Clock className="w-6 h-6 text-white" />
                    )}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h3 className="text-xl font-bold text-primary">{phase.phase}</h3>
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                        phase.status === 'underway'
                          ? 'bg-yellow-500/20 text-yellow-600'
                          : 'bg-primary/20 text-primary'
                      }`}>
                        {phase.status === 'underway' ? 'In Progress' : 'Planned'}
                      </span>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{phase.activity}</h4>
                    <p className="text-gray-600">{phase.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;