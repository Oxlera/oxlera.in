import React, { useState } from 'react';
import { Calculator, Factory, Zap, Truck, PieChart, Download, Info } from 'lucide-react';

function CarbonCalculator() {
  const [activeTab, setActiveTab] = useState('scope1');
  const [data, setData] = useState({
    // Scope 1
    diesel: 0, petrol: 0, naturalGas: 0,
    // Scope 2
    electricity: 0, renewable: 0,
    // Scope 3
    airTravel: 0, waste: 0, employeeCommute: 0
  });

  // Simple Emission Factors (Sample constants)
  const factors = {
    diesel: 2.68, petrol: 2.31, naturalGas: 2.02,
    electricity: 0.85, 
    airTravel: 0.12, waste: 0.5, commute: 0.1
  };

  const calculateScope1 = () => (data.diesel * factors.diesel + data.petrol * factors.petrol + data.naturalGas * factors.naturalGas) / 1000;
  const calculateScope2 = () => (data.electricity * factors.electricity) / 1000;
  const calculateScope3 = () => (data.airTravel * factors.airTravel + data.waste * factors.waste + data.employeeCommute * factors.commute) / 1000;
  
  const totalEmissions = calculateScope1() + calculateScope2() + calculateScope3();

  const handleInputChange = (e) => {
    setData({ ...data, [e.target.name]: parseFloat(e.target.value) || 0 });
  };

  return (
    <div className="min-h-screen bg-[#fafaf9] pt-32 pb-20 px-6">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(#166534 0.5px, transparent 0.5px)`, backgroundSize: '30px 30px' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 border border-green-200 text-green-800 text-[10px] font-bold uppercase tracking-widest mb-4">
            <PieChart size={12} /> ESG Reporting Tool
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Carbon Emission <span className="text-green-800 italic font-serif font-normal">Calculator</span>
          </h1>
          <p className="mt-4 text-stone-600 max-w-2xl font-medium">
            Measure your corporate environmental impact across all scopes. Aligned with GHG Protocol and BRSR reporting standards.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Left: Input Sections */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Tabs Navigation */}
            <div className="flex bg-white p-1.5 rounded-2xl border border-stone-200 shadow-sm">
              {[
                { id: 'scope1', label: 'Scope 1', icon: <Factory size={16}/>, desc: 'Direct Emissions' },
                { id: 'scope2', label: 'Scope 2', icon: <Zap size={16}/>, desc: 'Indirect Energy' },
                { id: 'scope3', label: 'Scope 3', icon: <Truck size={16}/>, desc: 'Value Chain' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 flex flex-col items-center py-3 rounded-xl transition-all ${
                    activeTab === tab.id ? 'bg-green-900 text-white shadow-lg' : 'text-stone-500 hover:bg-stone-50'
                  }`}
                >
                  <div className="flex items-center gap-2 font-bold text-sm">
                    {tab.icon} {tab.label}
                  </div>
                  <span className={`text-[10px] mt-0.5 ${activeTab === tab.id ? 'text-green-200' : 'text-stone-400'}`}>
                    {tab.desc}
                  </span>
                </button>
              ))}
            </div>

            {/* Form Card */}
            <div className="bg-white rounded-3xl border border-stone-200 p-8 shadow-sm min-h-[400px]">
              {activeTab === 'scope1' && (
                <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                  <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                    Direct Emissions <Info size={16} className="text-stone-300" />
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <InputField label="Diesel Consumption (Liters)" name="diesel" value={data.diesel} onChange={handleInputChange} />
                    <InputField label="Petrol Consumption (Liters)" name="petrol" value={data.petrol} onChange={handleInputChange} />
                    <InputField label="Natural Gas (m³)" name="naturalGas" value={data.naturalGas} onChange={handleInputChange} />
                  </div>
                </div>
              )}

              {activeTab === 'scope2' && (
                <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                  <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                    Purchased Electricity <Info size={16} className="text-stone-300" />
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <InputField label="Grid Electricity (kWh)" name="electricity" value={data.electricity} onChange={handleInputChange} />
                    <InputField label="Renewable Energy Used (kWh)" name="renewable" value={data.renewable} onChange={handleInputChange} />
                  </div>
                </div>
              )}

              {activeTab === 'scope3' && (
                <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                  <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                    Indirect Value Chain <Info size={16} className="text-stone-300" />
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <InputField label="Business Travel (km)" name="airTravel" value={data.airTravel} onChange={handleInputChange} />
                    <InputField label="Waste Generated (kg)" name="waste" value={data.waste} onChange={handleInputChange} />
                    <InputField label="Employee Commute (km)" name="employeeCommute" value={data.employeeCommute} onChange={handleInputChange} />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right: Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl border border-stone-200 p-8 shadow-xl sticky top-32">
              <h3 className="text-lg font-bold text-slate-900 mb-8 tracking-tight">Emissions Summary</h3>
              
              <div className="space-y-6 mb-8">
                <ResultRow label="Scope 1" value={calculateScope1()} color="bg-orange-500" />
                <ResultRow label="Scope 2" value={calculateScope2()} color="bg-blue-500" />
                <ResultRow label="Scope 3" value={calculateScope3()} color="bg-green-600" />
              </div>

              <div className="pt-6 border-t border-stone-100">
                <div className="text-stone-500 text-xs font-bold uppercase tracking-widest mb-1">Total Carbon Footprint</div>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-black text-slate-900 tracking-tighter">
                    {totalEmissions.toFixed(2)}
                  </span>
                  <span className="text-slate-500 font-bold">tCO2e</span>
                </div>
              </div>

              <button className="w-full mt-8 bg-green-900 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-black transition-all active:scale-95">
                <Download size={18} />
                Download Report
              </button>
              
              <p className="mt-4 text-[10px] text-stone-400 text-center leading-relaxed">
                Calculations based on standard EPA & GHG Protocol emission factors. 
                Values are indicative for reporting purposes.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

// Helper Components
const InputField = ({ label, name, value, onChange }) => (
  <div className="flex flex-col gap-2">
    <label className="text-xs font-bold text-stone-500 uppercase tracking-wider">{label}</label>
    <input
      type="number"
      name={name}
      value={value}
      onChange={onChange}
      className="bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-800/20 focus:border-green-800 outline-none transition-all font-bold text-slate-800"
      placeholder="0.00"
    />
  </div>
);

const ResultRow = ({ label, value, color }) => (
  <div>
    <div className="flex justify-between items-end mb-2">
      <span className="text-sm font-bold text-slate-700">{label}</span>
      <span className="text-sm font-black text-slate-900">{value.toFixed(2)} t</span>
    </div>
    <div className="w-full h-2 bg-stone-100 rounded-full overflow-hidden">
      <div 
        className={`h-full transition-all duration-1000 ${color}`} 
        style={{ width: `${Math.min(100, (value / 10) * 100)}%` }}
      />
    </div>
  </div>
);

export default CarbonCalculator;