import React, { useEffect, useRef } from 'react';

const statesData = [
  {
    name: "Adamawa State",
    programmes: ["Clean Water", "Food Security"],
    communities: 11,
    coords: [9.3265, 12.3984],
    color: "#1A78C2",
  },
  {
    name: "Yobe State",
    programmes: ["Clean Water", "Education"],
    communities: 7,
    coords: [12.2939, 11.4390],
    color: "#22C55E",
  },
  {
    name: "Borno State",
    programmes: ["Food Security", "Healthcare"],
    communities: 8,
    coords: [11.8846, 13.1520],
    color: "#F59E0B",
  },
];

const PROG_COLORS = {
  "Clean Water":   { bg: "#EEF5FC", text: "#1A78C2" },
  "Food Security": { bg: "#FEF9EC", text: "#B45309" },
  "Education":     { bg: "#F0FDF4", text: "#166534" },
  "Healthcare":    { bg: "#FFF1F2", text: "#9F1239" },
};

const AboutMap = () => {
  const mapRef    = useRef(null);
  const mapInst   = useRef(null);

  useEffect(() => {
   
    if (!document.getElementById('leaflet-css')) {
      const link  = document.createElement('link');
      link.id     = 'leaflet-css';
      link.rel    = 'stylesheet';
      link.href   = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css';
      document.head.appendChild(link);
    }


    const initMap = () => {
      if (mapInst.current || !mapRef.current) return;
      const L = window.L;

      const map = L.map(mapRef.current, {
        center: [11.0, 12.8],
        zoom: 6,
        zoomControl: false,
        scrollWheelZoom: false,
        attributionControl: false,
      });

      mapInst.current = map;

      L.tileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        { subdomains: 'abcd', maxZoom: 19 }
      ).addTo(map);

    
      L.control.attribution({ prefix: false, position: 'bottomright' })
        .addAttribution('© <a href="https://carto.com/">CARTO</a> | © <a href="https://www.openstreetmap.org/">OSM</a>')
        .addTo(map);

      L.control.zoom({ position: 'topright' }).addTo(map);

    
      statesData.forEach(state => {
      
        const svgIcon = L.divIcon({
          className: '',
          iconSize: [40, 40],
          iconAnchor: [20, 20],
          popupAnchor: [0, -22],
          html: `
            <div style="
              width:40px; height:40px; border-radius:50%;
              background:${state.color}; border:3px solid white;
              box-shadow:0 2px 10px rgba(0,0,0,0.25);
              display:flex; align-items:center; justify-content:center;
              font-family:sans-serif; font-size:13px; font-weight:700;
              color:white; cursor:pointer;
              transition: transform 0.15s;
            ">
              ${state.communities}
            </div>
          `,
        });

        const progBadges = state.programmes.map(p => {
          const c = PROG_COLORS[p] || { bg: '#f0f0f0', text: '#333' };
          return `<span style="
            background:${c.bg}; color:${c.text};
            font-size:10px; font-weight:700; letter-spacing:0.05em;
            text-transform:uppercase; padding:3px 8px; border-radius:20px;
            display:inline-block; margin:2px;
          ">${p}</span>`;
        }).join('');

        const popupContent = `
          <div style="font-family: 'DM Sans', sans-serif; min-width:190px;">
            <p style="
              font-size:9px; font-weight:700; letter-spacing:0.12em;
              text-transform:uppercase; color:${state.color}; margin:0 0 4px;
            ">ACTIVE REGION</p>
            <h3 style="
              font-family: 'Playfair Display', serif;
              font-size:16px; font-weight:700; color:#1a2e3b; margin:0 0 8px;
            ">${state.name}</h3>
            <div style="margin-bottom:8px;">${progBadges}</div>
            <div style="
              display:flex; align-items:center; gap:6px;
              border-top:1px solid #eee; padding-top:8px; margin-top:4px;
            ">
              <span style="
                width:8px; height:8px; border-radius:50%;
                background:${state.color}; display:inline-block; flex-shrink:0;
              "></span>
              <span style="font-size:12px; color:#4B5563;">
                <strong style="color:#1a2e3b;">${state.communities}</strong> active communities
              </span>
            </div>
          </div>
        `;

        L.marker(state.coords, { icon: svgIcon })
          .addTo(map)
          .bindPopup(popupContent, {
            maxWidth: 240,
            className: 'haraf-popup',
          });
      });

      
      const style = document.createElement('style');
      style.textContent = `
        .haraf-popup .leaflet-popup-content-wrapper {
          border-radius: 12px;
          box-shadow: 0 8px 30px rgba(0,0,0,0.14);
          padding: 0;
          border: 1px solid #E8F0F8;
        }
        .haraf-popup .leaflet-popup-content {
          margin: 16px;
        }
        .haraf-popup .leaflet-popup-tip-container {
          display: none;
        }
      `;
      document.head.appendChild(style);
    };

    if (window.L) {
      initMap();
    } else {
      const script   = document.createElement('script');
      script.src     = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js';
      script.onload  = initMap;
      document.head.appendChild(script);
    }

    return () => {
      if (mapInst.current) {
        mapInst.current.remove();
        mapInst.current = null;
      }
    };
  }, []);

  return (
    <section className="w-full py-16 md:py-20 bg-white">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12">

  
        <div className="text-center mb-10 md:mb-14">
          <p className="text-[#8CB4D6] text-xs font-dm-sans font-bold tracking-[0.2em] uppercase mb-3">
            WHERE WE WORK
          </p>
          <h2 className="text-primary text-3xl sm:text-4xl md:text-5xl font-playfair font-bold leading-tight mb-5">
            4 States.<br />
            20 Communities.<br />
            One Mission.
          </h2>
          <p className="text-[#5D4037] text-[15px] sm:text-[17px] font-dm-sans leading-relaxed opacity-70 max-w-2xl mx-auto">
            From the far north to the deep south, HARAF maintains active programmes in some of Nigeria's most underserved rural communities. Every pin on this map is a community that chose to partner with us.
          </p>
        </div>

      
        <div className="w-full rounded-2xl overflow-hidden shadow-[0_4px_28px_rgba(0,0,0,0.09)] border border-[#E8F0F8] mb-10">
       
          <div className="bg-[#F8FAFC] border-b border-[#E8F0F8] px-5 py-3 flex flex-wrap items-center gap-x-6 gap-y-2">
            <span className="font-dm-sans text-[11px] font-bold text-[#8CB4D6] uppercase tracking-widest">
              Legend
            </span>
            {statesData.map(s => (
              <div key={s.name} className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: s.color }} />
                <span className="font-dm-sans text-[12px] text-[#4B5563]">{s.name}</span>
              </div>
            ))}
            <span className="font-dm-sans text-[11px] text-[#9CA3AF] ml-auto hidden sm:block">
              Click a marker for details
            </span>
          </div>

       
          <div ref={mapRef} style={{ height: '420px', width: '100%' }} />
        </div>

      
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
          {statesData.map((state, idx) => (
            <div
              key={idx}
              className="bg-[#F8FBFF] p-6 text-left border-l-4 shadow-sm rounded-r-lg"
              style={{ borderColor: state.color }}
            >
             
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: state.color }} />
                <h3 className="text-primary text-[16px] font-playfair font-bold leading-tight">
                  {state.name}
                </h3>
              </div>

              <div className="flex flex-wrap gap-1.5 mb-3">
                {state.programmes.map(p => {
                  const c = PROG_COLORS[p] || { bg: '#f0f0f0', text: '#333' };
                  return (
                    <span
                      key={p}
                      className="text-[10px] font-dm-sans font-bold tracking-wider uppercase px-2.5 py-1 rounded-full"
                      style={{ background: c.bg, color: c.text }}
                    >
                      {p}
                    </span>
                  );
                })}
              </div>

              <p className="text-[#5D4037] text-sm font-dm-sans opacity-70">
                <strong className="opacity-100">{state.communities}</strong> active communities
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-1 pt-4 border-t border-[#E8F0F8]">
          <p className="text-[#5D4037] text-[10px] font-dm-sans font-bold tracking-[0.2em] uppercase opacity-50">
            HARAF ACTIVE COMMUNITIES — NIGERIA 2026
          </p>
          <p className="text-[#5D4037] text-[10px] font-dm-sans tracking-[0.2em] uppercase opacity-40">
            DATA UPDATED MARCH 2026
          </p>
        </div>

      </div>
    </section>
  );
};

export default AboutMap;
