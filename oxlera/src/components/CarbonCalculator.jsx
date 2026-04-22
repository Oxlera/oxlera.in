import React, { useState } from 'react';
import { Calculator, Factory, Zap, Truck, PieChart, Download, Info } from 'lucide-react';

function CarbonCalculator() {
  const [activeTab, setActiveTab] = useState('scope1');
  const [data, setData] = useState({
    diesel: 0, petrol: 0, naturalGas: 0,
    electricity: 0, renewable: 0,
    airTravel: 0, waste: 0, employeeCommute: 0
  });

  const factors = {
    diesel: 2.68, petrol: 2.31, naturalGas: 2.02,
    electricity: 0.85,
    airTravel: 0.12, waste: 0.5, commute: 0.1
  };

  const calculateScope1 = () =>
    (data.diesel * factors.diesel + data.petrol * factors.petrol + data.naturalGas * factors.naturalGas) / 1000;

  const calculateScope2 = () =>
    (data.electricity * factors.electricity) / 1000;

  const calculateScope3 = () =>
    (data.airTravel * factors.airTravel + data.waste * factors.waste + data.employeeCommute * factors.commute) / 1000;

  const total = calculateScope1() + calculateScope2() + calculateScope3();

  const handleInputChange = (e) => {
    setData({ ...data, [e.target.name]: parseFloat(e.target.value) || 0 });
  };

  return (
    <div className="relative min-h-screen pt-28 pb-20 px-5 bg-[#f7fbf8] overflow-hidden">

      {/* AMBIENT GLOW (matches Hero system) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-emerald-500/10 blur-[160px] rounded-full" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-green-700/10 blur-[180px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* HEADER */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 backdrop-blur border border-emerald-100 text-emerald-800 text-[10px] font-bold uppercase tracking-widest">
            <PieChart size={12} /> ESG Intelligence Engine
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mt-5 text-slate-900 leading-tight">
            Carbon Emission <span className="text-emerald-800 italic font-light">Calculator</span>
          </h1>

          <p className="mt-4 max-w-2xl text-slate-600 text-lg leading-relaxed">
            Measure, simulate, and optimize your carbon footprint across Scopes 1, 2, and 3 with real-time emission intelligence.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">

          {/* LEFT PANEL */}
          <div className="lg:col-span-2 space-y-6">

            {/* TABS */}
            <div className="flex p-1 rounded-2xl bg-white/60 backdrop-blur border border-emerald-100">
              {[
                { id: 'scope1', label: 'Scope 1', icon: <Factory size={14}/> },
                { id: 'scope2', label: 'Scope 2', icon: <Zap size={14}/> },
                { id: 'scope3', label: 'Scope 3', icon: <Truck size={14}/> }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 py-3 rounded-xl font-bold text-sm transition-all ${
                    activeTab === tab.id
                      ? 'bg-emerald-900 text-white shadow-lg'
                      : 'text-slate-500 hover:bg-emerald-50'
                  }`}
                >
                  <div className="flex items-center justify-center gap-2">
                    {tab.icon}
                    {tab.label}
                  </div>
                </button>
              ))}
            </div>

            {/* INPUT CARD */}
            <div className="rounded-3xl bg-white/70 backdrop-blur-xl border border-white shadow-xl p-8">

              {activeTab === 'scope1' && (
                <Section title="Direct Emissions">
                  <Input label="Diesel (L)" name="diesel" onChange={handleInputChange} />
                  <Input label="Petrol (L)" name="petrol" onChange={handleInputChange} />
                  <Input label="Natural Gas (m³)" name="naturalGas" onChange={handleInputChange} />
                </Section>
              )}

              {activeTab === 'scope2' && (
                <Section title="Energy Consumption">
                  <Input label="Electricity (kWh)" name="electricity" onChange={handleInputChange} />
                  <Input label="Renewable Energy (kWh)" name="renewable" onChange={handleInputChange} />
                </Section>
              )}

              {activeTab === 'scope3' && (
                <Section title="Value Chain Emissions">
                  <Input label="Travel (km)" name="airTravel" onChange={handleInputChange} />
                  <Input label="Waste (kg)" name="waste" onChange={handleInputChange} />
                  <Input label="Commute (km)" name="employeeCommute" onChange={handleInputChange} />
                </Section>
              )}

            </div>
          </div>

          {/* RIGHT SUMMARY */}
          <div className="lg:col-span-1">

            <div className="sticky top-28 rounded-3xl bg-white/70 backdrop-blur-xl border border-white shadow-2xl p-8">

              <h3 className="text-lg font-bold text-slate-900 mb-6">
                Emissions Overview
              </h3>

              <div className="space-y-5">
                <Bar label="Scope 1" value={calculateScope1()} />
                <Bar label="Scope 2" value={calculateScope2()} />
                <Bar label="Scope 3" value={calculateScope3()} />
              </div>

              <div className="mt-8 pt-6 border-t border-emerald-100">
                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">
                  Total Emissions
                </p>
                <p className="text-4xl font-black text-slate-900 mt-2">
                  {total.toFixed(2)} <span className="text-lg text-emerald-700">tCO₂e</span>
                </p>
              </div>

              <button className="mt-8 w-full bg-emerald-900 text-white font-bold py-4 rounded-2xl hover:bg-black transition flex items-center justify-center gap-2">
                <Download size={16} /> Export Report
              </button>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

/* ---------- UI HELPERS ---------- */

const Section = ({ title, children }) => (
  <div>
    <h3 className="text-lg font-bold mb-6 text-slate-900 flex items-center gap-2">
      {title} <Info size={14} className="text-slate-300" />
    </h3>
    <div className="grid sm:grid-cols-2 gap-5">
      {children}
    </div>
  </div>
);

const Input = ({ label, name, onChange }) => (
  <div>
    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">
      {label}
    </label>
    <input
      type="number"
      name={name}
      onChange={onChange}
      className="mt-2 w-full px-4 py-3 rounded-xl bg-white/60 border border-emerald-100 focus:ring-2 focus:ring-emerald-300 outline-none font-semibold"
      placeholder="0"
    />
  </div>
);

const Bar = ({ label, value }) => (
  <div>
    <div className="flex justify-between text-sm font-bold mb-2">
      <span>{label}</span>
      <span>{value.toFixed(2)} t</span>
    </div>
    <div className="h-2 bg-emerald-50 rounded-full overflow-hidden">
      <div
        className="h-full bg-gradient-to-r from-emerald-500 to-green-700 rounded-full"
        style={{ width: `${Math.min(100, value * 10)}%` }}
      />
    </div>
  </div>
);

export default CarbonCalculator;