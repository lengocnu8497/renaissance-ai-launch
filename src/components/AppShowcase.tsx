import { motion } from "framer-motion";

const C = {
  primary:   "#8E4C5C",
  accent:    "#C4929A",
  textHi:    "#3D2B2E",
  textLo:    "#B8A9AB",
  border:    "rgba(196,146,154,0.18)",
  pageBg:    "#FFF8F6",
  card:      "#FFFFFF",
  gradA:     "#6B3346",
  gradB:     "#B76E79",
  f:         "'Outfit', sans-serif",
  s:         "'Cormorant Garamond', serif",
} as const;

const DynIsland = () => (
  <div style={{ position:"absolute", top:10, left:"50%", transform:"translateX(-50%)", width:120, height:32, background:"#140A0D", borderRadius:18, zIndex:20 }} />
);

const StatusBar = ({ light=false }: { light?: boolean }) => {
  const fill = light ? "rgba(255,255,255,0.9)" : C.textHi;
  return (
    <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"52px 22px 0", fontSize:12, fontWeight:600, color:fill, position:"relative", zIndex:5, fontFamily:C.f }}>
      <span>9:41</span>
      <div style={{ display:"flex", gap:5, alignItems:"center" }}>
        <svg width="14" height="10" viewBox="0 0 16 11" fill={fill}><rect x="0" y="7" width="3" height="4" rx="0.5"/><rect x="4.5" y="5" width="3" height="6" rx="0.5"/><rect x="9" y="2" width="3" height="9" rx="0.5"/><rect x="13.5" y="0" width="2.5" height="11" rx="0.5"/></svg>
        <svg width="22" height="10" viewBox="0 0 24 11" fill="none"><rect x="0.5" y="0.5" width="20" height="10" rx="3" stroke={fill}/><rect x="1.5" y="1.5" width="15" height="8" rx="2" fill={fill}/><path d="M22 3.5v4a2 2 0 000-4z" fill={fill}/></svg>
      </div>
    </div>
  );
};

const RenaIcon = ({ size=20, color=C.primary }: { size?:number; color?:string }) => (
  <svg width={size} height={size} viewBox="0 0 22 22" fill="none">
    <circle cx="11" cy="11" r="9.5" stroke={color} strokeWidth="1.2"/>
    <circle cx="11" cy="11" r="6.5" stroke={color} strokeWidth="1"/>
    <circle cx="11" cy="11" r="3.5" stroke={color} strokeWidth="1.2"/>
    <circle cx="11" cy="11" r="1.5" fill={color}/>
  </svg>
);

// ── Screen 1: Home ───────────────────────────────────────────
const HomeScreen = () => (
  <div style={{ background:C.pageBg, height:"100%", position:"relative", overflow:"hidden" }}>
    <DynIsland/>
    <StatusBar/>
    <div style={{ padding:"14px 18px 0", height:"calc(100% - 64px)", overflow:"hidden" }}>
      {/* Greeting */}
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:14 }}>
        <div>
          <div style={{ fontSize:10, fontWeight:300, color:C.textLo, marginBottom:2, fontFamily:C.f }}>Good morning,</div>
          <div style={{ fontFamily:C.s, fontSize:26, fontWeight:400, color:C.textHi, lineHeight:1.1 }}>Hello, Patty</div>
        </div>
        <div style={{ width:36, height:36, borderRadius:"50%", background:C.card, border:`1.5px solid ${C.border}`, display:"flex", alignItems:"center", justifyContent:"center" }}>
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="7.5" r="3.5" fill={C.accent}/><path d="M3 18c0-3.8 3.1-6.5 7-6.5s7 2.7 7 6.5" fill={C.accent}/></svg>
        </div>
      </div>
      {/* Ask Rena */}
      <div style={{ background:C.card, borderRadius:14, padding:"9px 12px", display:"flex", alignItems:"center", gap:10, border:`1px solid ${C.border}`, boxShadow:"0 2px 14px rgba(142,76,92,0.07)", marginBottom:10 }}>
        <div style={{ width:34, height:34, borderRadius:10, background:"rgba(142,76,92,0.10)", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}><RenaIcon size={18}/></div>
        <div style={{ flex:1 }}>
          <div style={{ fontSize:12, fontWeight:600, color:C.textHi, marginBottom:1, fontFamily:C.f }}>Ask Rena</div>
          <div style={{ fontSize:10, fontWeight:300, color:C.textLo, fontFamily:C.f }}>How can I help you today?</div>
        </div>
        <div style={{ width:24, height:24, borderRadius:"50%", background:"rgba(142,76,92,0.10)", display:"flex", alignItems:"center", justifyContent:"center" }}>
          <svg width="12" height="12" viewBox="0 0 14 14" fill="none"><path d="M4 7h6M7.5 4.5L10 7l-2.5 2.5" stroke={C.primary} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
      </div>
      {/* Explore card */}
      <div style={{ background:`linear-gradient(130deg,${C.gradA} 0%,${C.primary} 52%,${C.gradB} 100%)`, borderRadius:18, padding:14, marginBottom:14, position:"relative", overflow:"hidden", boxShadow:"0 8px 32px rgba(107,51,70,0.34)" }}>
        <div style={{ position:"absolute", right:-28, top:-42, width:130, height:130, borderRadius:"50%", border:"1px solid rgba(255,255,255,0.10)" }}/>
        <div style={{ position:"absolute", right:22, top:-8, width:82, height:82, borderRadius:"50%", border:"1px solid rgba(255,255,255,0.10)" }}/>
        <div style={{ fontSize:8, letterSpacing:2.5, textTransform:"uppercase", color:"rgba(255,255,255,0.55)", marginBottom:4, fontFamily:C.f }}>Featured</div>
        <div style={{ fontFamily:C.s, fontSize:22, fontWeight:500, color:"#fff", lineHeight:1.15, marginBottom:4 }}>Explore<br/>Procedures</div>
        <div style={{ fontSize:10, color:"rgba(255,255,255,0.68)", fontWeight:300, marginBottom:12, fontFamily:C.f }}>Find your perfect treatment.</div>
        <div style={{ display:"inline-flex", alignItems:"center", gap:6, background:"rgba(255,255,255,0.16)", border:"1px solid rgba(255,255,255,0.24)", borderRadius:100, padding:"5px 10px 5px 7px", color:"#fff", fontSize:9, fontWeight:500, fontFamily:C.f }}>
          <div style={{ width:16, height:16, borderRadius:"50%", background:"rgba(255,255,255,0.22)", display:"flex", alignItems:"center", justifyContent:"center" }}>→</div>
          Discover Now
        </div>
      </div>
      {/* Section head */}
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:8 }}>
        <div style={{ fontSize:13, fontWeight:600, color:C.textHi, fontFamily:C.f }}>Daily Reflection</div>
        <div style={{ fontSize:10, color:C.accent, fontWeight:500, fontFamily:C.f }}>View all</div>
      </div>
      {/* Calendar */}
      <div style={{ background:C.card, borderRadius:14, padding:"10px 8px", border:`1px solid ${C.border}`, marginBottom:10 }}>
        <div style={{ display:"flex", justifyContent:"space-between" }}>
          {[["Thu","12"],["Fri","13"],["Sat","14"],["Sun","15"],["Mon","16"],["Tue","17"],["Wed","18"]].map(([d,n],i)=>(
            <div key={i} style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:5, flex:1 }}>
              <div style={{ fontSize:8, fontWeight:i===3?600:400, color:i===3?C.primary:C.textLo, fontFamily:C.f }}>{d}</div>
              <div style={{ width:26, height:26, borderRadius:i===3?10:8, display:"flex", alignItems:"center", justifyContent:"center", fontSize:12, fontWeight:i===3?700:400, background:i===3?C.accent:"transparent", color:i===3?"#fff":C.textLo, boxShadow:i===3?"0 3px 12px rgba(196,146,154,0.42)":"none", fontFamily:C.f }}>{n}</div>
            </div>
          ))}
        </div>
      </div>
      {/* Journal */}
      <div style={{ display:"flex", gap:8, height:116 }}>
        <div style={{ width:54, flexShrink:0, background:"linear-gradient(150deg,#f8e9ef,#f0d2da)", borderRadius:14, padding:"10px 8px", overflow:"hidden" }}>
          <div style={{ fontSize:8.5, fontWeight:600, color:C.textHi, lineHeight:1.35, marginBottom:6, fontFamily:C.f }}>Week 2 Recovery</div>
          <div style={{ background:"rgba(142,76,92,0.13)", borderRadius:100, padding:"2px 5px", fontSize:7, fontWeight:600, color:C.primary, fontFamily:C.f }}>Day 9</div>
        </div>
        <div style={{ flex:1, background:"linear-gradient(145deg,#f8e9ef,#f0d4dc)", borderRadius:14, padding:"10px 12px", display:"flex", flexDirection:"column" }}>
          <div style={{ display:"inline-flex", alignItems:"center", gap:4, background:"rgba(142,76,92,0.12)", borderRadius:100, padding:"3px 8px", fontSize:8, fontWeight:600, color:C.primary, marginBottom:7, width:"fit-content", fontFamily:C.f }}>
            <div style={{ width:4, height:4, borderRadius:"50%", background:C.primary }}/>Today
          </div>
          <div style={{ fontSize:11, fontWeight:600, color:C.textHi, marginBottom:3, fontFamily:C.f }}>Create an entry</div>
          <div style={{ fontSize:9, color:C.textLo, fontWeight:300, lineHeight:1.5, flex:1, fontFamily:C.f }}>Document your recovery, one day at a time.</div>
          <div style={{ background:C.primary, borderRadius:9, padding:"7px 0", color:"#fff", fontSize:10, fontWeight:600, textAlign:"center", fontFamily:C.f }}>Log Entry</div>
        </div>
      </div>
    </div>
    {/* Bottom nav */}
    <div style={{ position:"absolute", bottom:14, left:12, right:12, background:C.card, borderRadius:24, padding:"8px 12px", display:"flex", justifyContent:"space-between", alignItems:"center", boxShadow:"0 4px 32px rgba(61,43,46,0.13)", border:`1px solid ${C.border}` }}>
      <div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:2, flex:1 }}>
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="M3 9L10 3l7 6v8a1 1 0 01-1 1H4a1 1 0 01-1-1V9z" fill="rgba(142,76,92,0.14)" stroke={C.primary} strokeWidth="1.6" strokeLinejoin="round"/></svg>
        <span style={{ fontSize:8, fontWeight:600, color:C.primary, fontFamily:C.f }}>Home</span>
      </div>
      <div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:2, flex:1 }}>
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v9a1 1 0 01-1 1H6l-3 3V4z" stroke={C.textLo} strokeWidth="1.5" fill="none" strokeLinejoin="round"/></svg>
        <span style={{ fontSize:8, color:C.textLo, fontFamily:C.f }}>Chats</span>
      </div>
      <div style={{ width:42, height:42, borderRadius:"50%", background:C.textHi, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, boxShadow:"0 4px 16px rgba(61,43,46,0.22)" }}>
        <svg width="16" height="16" viewBox="0 0 20 20" fill="none"><path d="M10 4v12M4 10h12" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>
      </div>
      <div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:2, flex:1 }}>
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><rect x="4" y="2" width="12" height="16" rx="2" stroke={C.textLo} strokeWidth="1.5" fill="none"/><path d="M7 7h6M7 11h4" stroke={C.textLo} strokeWidth="1.4" strokeLinecap="round"/></svg>
        <span style={{ fontSize:8, color:C.textLo, fontFamily:C.f }}>Journal</span>
      </div>
      <div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:2, flex:1 }}>
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="7" r="3" stroke={C.textLo} strokeWidth="1.5" fill="none"/><path d="M3 18c0-3.5 3-6 7-6s7 2.5 7 6" stroke={C.textLo} strokeWidth="1.5" fill="none" strokeLinecap="round"/></svg>
        <span style={{ fontSize:8, color:C.textLo, fontFamily:C.f }}>Profile</span>
      </div>
    </div>
  </div>
);

// ── Screen 2: AI Insight Reveal ──────────────────────────────
const InsightScreen = () => (
  <div style={{ background:"linear-gradient(170deg,#FFF8F6 0%,#FAF0F2 40%,#F5E8EE 100%)", height:"100%", position:"relative", overflow:"hidden" }}>
    <DynIsland/>
    <StatusBar/>
    <div style={{ position:"absolute", top:64, left:0, right:0, bottom:0, display:"flex", flexDirection:"column", alignItems:"center", padding:"14px 22px 28px" }}>
      <div style={{ display:"flex", alignItems:"center", gap:5, background:"rgba(142,76,92,0.08)", border:"1px solid rgba(142,76,92,0.15)", borderRadius:99, padding:"4px 10px", marginBottom:22 }}>
        <div style={{ width:5, height:5, borderRadius:"50%", background:C.primary }}/>
        <span style={{ fontSize:10, fontWeight:500, color:C.primary, fontFamily:C.f }}>Entry saved · Day 3</span>
      </div>
      <div style={{ width:66, height:66, borderRadius:20, background:`linear-gradient(135deg,${C.gradA},${C.gradB})`, display:"flex", alignItems:"center", justifyContent:"center", marginBottom:16, boxShadow:"0 12px 40px rgba(107,51,70,0.30)" }}>
        <svg width="38" height="38" viewBox="0 0 44 44" fill="none">
          <circle cx="22" cy="22" r="20" stroke="rgba(255,255,255,0.20)" strokeWidth="1.2"/>
          <circle cx="22" cy="22" r="14" stroke="rgba(255,255,255,0.35)" strokeWidth="1.2"/>
          <circle cx="22" cy="22" r="8" stroke="rgba(255,255,255,0.55)" strokeWidth="1.2"/>
          <circle cx="22" cy="22" r="3.5" fill="rgba(255,255,255,0.95)"/>
        </svg>
      </div>
      <div style={{ fontFamily:C.s, fontSize:24, fontWeight:500, color:C.textHi, textAlign:"center", marginBottom:3 }}>Rena's Reflection</div>
      <div style={{ fontSize:10, color:C.textLo, textAlign:"center", marginBottom:16, fontFamily:C.f }}>Based on your Day 3 entry</div>
      <div style={{ width:36, height:1, background:`linear-gradient(90deg,transparent,${C.accent},transparent)`, marginBottom:16 }}/>
      <div style={{ width:"100%", background:"rgba(255,255,255,0.72)", backdropFilter:"blur(12px)", border:"1px solid rgba(196,146,154,0.20)", borderRadius:16, padding:"14px 16px", marginBottom:12 }}>
        <div style={{ fontSize:8.5, fontWeight:600, letterSpacing:"0.10em", textTransform:"uppercase", color:C.primary, marginBottom:8, fontFamily:C.f, display:"flex", alignItems:"center", gap:5 }}>
          <div style={{ width:10, height:1.5, background:`linear-gradient(90deg,${C.gradA},${C.gradB})`, borderRadius:1 }}/>
          Rena Insight
        </div>
        <div style={{ fontFamily:C.s, fontSize:14, fontWeight:400, fontStyle:"italic", color:C.textHi, lineHeight:1.65 }}>
          "Swelling peaks at Day 3 — completely normal. Your hopeful mood is a meaningful signal. Try elevating your head tonight with a cool compress for 10 minutes before bed."
        </div>
      </div>
      <div style={{ display:"flex", alignItems:"center", gap:8, width:"100%", marginBottom:"auto" }}>
        <div style={{ display:"flex", alignItems:"center", gap:5, background:"rgba(255,255,255,0.65)", border:`1px solid ${C.border}`, borderRadius:99, padding:"5px 10px" }}>
          <div style={{ width:7, height:7, borderRadius:"50%", background:C.gradB }}/>
          <span style={{ fontSize:10, fontWeight:500, color:"#6B4F53", fontFamily:C.f }}>Hopeful <span style={{ color:C.textLo, fontWeight:400 }}>· 4 of 5 days</span></span>
        </div>
        <div style={{ display:"flex", alignItems:"flex-end", gap:2.5, height:18, marginLeft:"auto" }}>
          {([[14,true],[8,false],[16,true],[12,true],[18,true]] as [number,boolean][]).map(([h,on],i)=>(
            <div key={i} style={{ width:4, height:h, borderRadius:2, background:on?C.primary:C.accent, opacity:on?1:0.4 }}/>
          ))}
        </div>
      </div>
      <div style={{ width:"100%", display:"flex", flexDirection:"column", gap:8, marginTop:20 }}>
        <div style={{ background:`linear-gradient(135deg,${C.gradA},${C.gradB})`, borderRadius:12, padding:"13px 0", display:"flex", alignItems:"center", justifyContent:"center", gap:6, color:"#fff", fontSize:12, fontWeight:600, fontFamily:C.f, boxShadow:"0 8px 24px rgba(107,51,70,0.25)" }}>
          <svg width="13" height="13" viewBox="0 0 16 16" fill="none"><path d="M2 8.5L6 12.5L14 4" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
          Save this reflection
        </div>
        <div style={{ textAlign:"center", fontSize:11, fontWeight:500, color:"#6B4F53", fontFamily:C.f, padding:"6px 0" }}>Back to my journal</div>
      </div>
    </div>
  </div>
);

// ── Screen 3: Chat ───────────────────────────────────────────
const ChatScreen = () => {
  const Avatar = () => (
    <div style={{ width:24, height:24, borderRadius:"50%", background:`linear-gradient(135deg,${C.gradA},${C.gradB})`, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
      <svg width="12" height="12" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="11" r="9" stroke="rgba(255,255,255,0.45)" strokeWidth="1"/><circle cx="11" cy="11" r="5" stroke="rgba(255,255,255,0.65)" strokeWidth="1"/><circle cx="11" cy="11" r="2" fill="white"/></svg>
    </div>
  );
  return (
    <div style={{ background:C.pageBg, height:"100%", position:"relative", overflow:"hidden", display:"flex", flexDirection:"column" }}>
      <DynIsland/>
      <StatusBar/>
      <div style={{ padding:"12px 18px 10px", display:"flex", alignItems:"center", gap:10, borderBottom:`1px solid ${C.border}`, flexShrink:0 }}>
        <div style={{ width:32, height:32, borderRadius:10, background:"rgba(142,76,92,0.10)", display:"flex", alignItems:"center", justifyContent:"center" }}><RenaIcon size={18}/></div>
        <div>
          <div style={{ fontSize:13, fontWeight:600, color:C.textHi, fontFamily:C.f }}>Ask Rena</div>
          <div style={{ fontSize:9.5, color:"#4CAF50", fontWeight:500, fontFamily:C.f, display:"flex", alignItems:"center", gap:3 }}>
            <div style={{ width:5, height:5, borderRadius:"50%", background:"#4CAF50" }}/>Online
          </div>
        </div>
      </div>
      <div style={{ flex:1, padding:"14px 16px", display:"flex", flexDirection:"column", gap:10, overflow:"hidden" }}>
        <div style={{ display:"flex", gap:6, alignItems:"flex-end" }}>
          <Avatar/>
          <div style={{ background:C.card, border:`1px solid ${C.border}`, borderRadius:"14px 14px 14px 4px", padding:"9px 11px", maxWidth:"75%", boxShadow:"0 2px 8px rgba(142,76,92,0.07)" }}>
            <div style={{ fontSize:11, color:C.textHi, lineHeight:1.55, fontFamily:C.f }}>Hi Patty 👋 I'm here to help — procedures, recovery, or questions you haven't been able to ask out loud.</div>
          </div>
        </div>
        <div style={{ display:"flex", justifyContent:"flex-end" }}>
          <div style={{ background:`linear-gradient(135deg,${C.gradA},${C.primary})`, borderRadius:"14px 14px 4px 14px", padding:"9px 11px", maxWidth:"78%", boxShadow:"0 4px 14px rgba(107,51,70,0.25)" }}>
            <div style={{ fontSize:11, color:"#fff", lineHeight:1.55, fontFamily:C.f }}>What's the best treatment for hyperpigmentation on my cheeks?</div>
          </div>
        </div>
        <div style={{ display:"flex", gap:6, alignItems:"flex-end" }}>
          <Avatar/>
          <div style={{ background:C.card, border:`1px solid ${C.border}`, borderRadius:"14px 14px 14px 4px", padding:"9px 11px", maxWidth:"75%", boxShadow:"0 2px 8px rgba(142,76,92,0.07)" }}>
            <div style={{ fontSize:11, color:C.textHi, lineHeight:1.55, fontFamily:C.f }}>For your skin tone, I'd look at <span style={{ color:C.primary, fontWeight:600 }}>chemical peels</span> or <span style={{ color:C.primary, fontWeight:600 }}>IPL photofacials</span> — both address surface pigmentation with minimal downtime.</div>
          </div>
        </div>
        <div style={{ marginLeft:30 }}>
          <div style={{ background:"rgba(142,76,92,0.07)", border:"1px solid rgba(142,76,92,0.18)", borderRadius:12, padding:"10px 12px" }}>
            <div style={{ fontSize:8, letterSpacing:2, textTransform:"uppercase", color:C.primary, fontWeight:600, marginBottom:5, fontFamily:C.f }}>Top Match</div>
            <div style={{ fontSize:12, fontWeight:600, color:C.textHi, marginBottom:2, fontFamily:C.f }}>Chemical Peel · VI Peel</div>
            <div style={{ fontSize:9.5, color:"#6B4F53", fontWeight:300, fontFamily:C.f }}>Best for melanin-rich skin · Low downtime</div>
          </div>
        </div>
      </div>
      <div style={{ padding:"10px 14px 20px", flexShrink:0, borderTop:`1px solid ${C.border}` }}>
        <div style={{ display:"flex", alignItems:"center", gap:8, background:C.card, borderRadius:99, padding:"8px 8px 8px 14px", border:`1px solid ${C.border}` }}>
          <span style={{ flex:1, fontSize:10.5, color:C.textLo, fontFamily:C.f }}>Ask anything...</span>
          <div style={{ width:28, height:28, borderRadius:"50%", background:`linear-gradient(135deg,${C.gradA},${C.gradB})`, display:"flex", alignItems:"center", justifyContent:"center" }}>
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M7.5 3L12 7l-4.5 4" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
        </div>
      </div>
    </div>
  );
};

// ── Phone frame ───────────────────────────────────────────────
const NW = 360, NH = 782, SC = 0.71;
const DW = Math.round(NW * SC), DH = Math.round(NH * SC);

const Phone = ({ children, delay=0, elevated=false }: { children: React.ReactNode; delay?: number; elevated?: boolean }) => (
  <motion.div
    initial={{ opacity:0, y:64 }}
    whileInView={{ opacity:1, y: elevated ? -28 : 0 }}
    viewport={{ once:true, margin:"-60px" }}
    transition={{ duration:1.1, delay, ease:[0.25,0.46,0.45,0.94] }}
    style={{ flexShrink:0 }}
  >
    <div style={{ width:DW, height:DH, overflow:"hidden", position:"relative", borderRadius: Math.round(54 * SC) }}>
      <div style={{ width:NW, height:NH, transform:`scale(${SC})`, transformOrigin:"top left", position:"absolute", top:0, left:0 }}>
        <div style={{ width:"100%", height:"100%", background:"#140A0D", borderRadius:54, padding:11, boxShadow:"0 0 0 1.5px rgba(255,255,255,0.06),0 0 0 3px #0A0508,0 24px 64px rgba(107,51,70,0.32)" }}>
          <div style={{ width:"100%", height:"100%", borderRadius:44, overflow:"hidden", position:"relative" }}>
            {children}
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

// ── Section ───────────────────────────────────────────────────
export const AppShowcase = () => (
  <section id="the-app" className="overflow-hidden py-28 md:py-36" style={{ background:"linear-gradient(to bottom,#F2D7DB 0%,#FFF8F6 10%,#FFF8F6 100%)" }}>
    <div className="max-w-7xl mx-auto px-8 md:px-16">
      <div className="text-center mb-20 md:mb-28">
        <motion.span
          initial={{ opacity:0, y:12 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
          transition={{ duration:0.7 }}
          className="font-sans font-medium uppercase text-dusty-rose"
          style={{ fontSize:"11px", letterSpacing:"4px" }}
        >
          The App
        </motion.span>
        <motion.h2
          initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
          transition={{ duration:0.9, delay:0.1, ease:[0.25,0.46,0.45,0.94] }}
          className="font-serif font-light text-charcoal-rose mt-4 leading-[1.05]"
          style={{ fontSize:"clamp(32px,4.5vw,58px)" }}
        >
          Everything you need,<br/>guided by Rena.
        </motion.h2>
      </div>

      <div style={{ display:"flex", alignItems:"flex-end", justifyContent:"center", gap:20 }}>
        <div className="hidden md:flex flex-col items-center gap-6">
          <Phone delay={0.15}><HomeScreen/></Phone>
          <motion.p initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={{ once:true }} transition={{ duration:0.6, delay:0.5 }}
            className="font-sans font-light text-warm-gray uppercase" style={{ fontSize:"10px", letterSpacing:"3px" }}>
            Your daily home
          </motion.p>
        </div>

        <div className="flex flex-col items-center gap-6">
          <Phone delay={0} elevated><InsightScreen/></Phone>
          <motion.p initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={{ once:true }} transition={{ duration:0.6, delay:0.35 }}
            className="font-sans font-light text-warm-gray uppercase" style={{ fontSize:"10px", letterSpacing:"3px" }}>
            Rena's reflection
          </motion.p>
        </div>

        <div className="hidden md:flex flex-col items-center gap-6">
          <Phone delay={0.3}><ChatScreen/></Phone>
          <motion.p initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={{ once:true }} transition={{ duration:0.6, delay:0.6 }}
            className="font-sans font-light text-warm-gray uppercase" style={{ fontSize:"10px", letterSpacing:"3px" }}>
            Ask anything
          </motion.p>
        </div>
      </div>

      {/* App Store badge */}
      <motion.div
        initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
        transition={{ duration:0.8, delay:0.5, ease:[0.25,0.46,0.45,0.94] }}
        className="flex justify-center mt-16"
      >
        <div
          className="flex items-center gap-3 px-6 py-3.5 rounded-full"
          style={{
            border: "1.5px solid rgba(142,76,92,0.4)",
            background: "rgba(196,146,154,0.08)",
          }}
        >
          <svg width="15" height="20" viewBox="0 0 384 512" fill="#8E4C5C">
            <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
          </svg>
          <div>
            <div className="font-sans font-medium uppercase" style={{ fontSize:"9px", color:"#B8A9AB", letterSpacing:"2px", lineHeight:1 }}>Coming Soon</div>
            <div className="font-sans font-medium" style={{ fontSize:"14px", color:"#8E4C5C", lineHeight:1.6 }}>App Store · iOS</div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);
