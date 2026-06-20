import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-[140px] pb-32">
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">

        {/* LEFT */}
        <div className="flex flex-col">

          <h1 className="text-6xl md:text-7xl lg:text-[84px] font-semibold text-slate-900 leading-[1.05] tracking-tight font-serif italic">
            Measure.
            <br />
            Reduce.
            <br />
            Offset.{" "}
            <span className="text-green-800 not-italic font-normal">
              Trade.
            </span>
          </h1>

          <p className="mt-10 max-w-xl text-xl text-stone-600 leading-relaxed">
            A unified carbon infrastructure platform to calculate emissions,
            generate verified credits, and enable real-time transparent trading.
          </p>

          {/* CTA */}
          <div className="mt-12 flex flex-col sm:flex-row gap-5">

            <Link
              to="/carbon-emission-calculator"
              className="px-12 py-5 bg-green-900 text-white font-bold rounded-full shadow-xl hover:bg-black transition text-center"
            >
              Calculate Emissions
            </Link>

            <Link
              to="/carbon-emission-calculator"
              className="px-12 py-5 border border-stone-300 bg-white font-bold rounded-full hover:bg-stone-50 transition text-center"
            >
              Explore Platform
            </Link>

          </div>
        </div>

        {/* RIGHT */}
        <div className="relative flex justify-center lg:justify-end">

          <div className="relative w-full max-w-[520px] aspect-square flex items-center justify-center">

            {/* RIPPLE SYSTEM */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="ripple w-[260px] h-[260px]"></div>
              <div className="ripple w-[380px] h-[380px] animation-delay-1000"></div>
              <div className="ripple w-[520px] h-[520px] animation-delay-2000"></div>
            </div>

            {/* CORE GLOW */}
            <div className="w-40 h-40 bg-green-600/20 blur-3xl rounded-full" />

            {/* FLOATING CARD 1 */}
            <div className="absolute top-10 right-0 bg-white/80 backdrop-blur-xl p-6 rounded-2xl shadow-xl border border-white/30 animate-float">
              <div className="text-[11px] font-bold text-stone-400 uppercase">
                Offset Generated
              </div>

              <div className="text-3xl font-bold">
                2,840 t
              </div>

              <div className="text-xs text-green-600 font-bold mt-2">
                ↑ 12.5%
              </div>
            </div>

            {/* FLOATING CARD 2 */}
            <div className="absolute bottom-10 left-0 bg-white/80 backdrop-blur-xl p-6 rounded-2xl shadow-xl border border-white/30 animate-float-delayed">
              <div className="text-[11px] font-bold text-stone-400 uppercase">
                Market Price
              </div>

              <div className="text-3xl font-bold">
                $24.10
              </div>

              <div className="text-xs text-blue-600 font-bold mt-2">
                ● Live
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;