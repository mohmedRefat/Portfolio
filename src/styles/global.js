// src/styles/global.js
export const GlobalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Serif+Display:ital@0;1&family=DM+Mono:wght@400;500&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }

  :root {
    --bg:        #07080D;
    --surface:   #0E1118;
    --surface2:  #141924;
    --border:    #1A2030;
    --border2:   #253040;
    --text:      #D4DBE8;
    --muted:     #4A5A74;
    --dim:       #2A3A50;
    --accent:    #60A5FA;
    --accent2:   #34D399;
    --sans:      'Syne', system-ui, sans-serif;
    --serif:     'DM Serif Display', Georgia, serif;
    --mono:      'DM Mono', monospace;
  }

  body {
    background: var(--bg);
    color: var(--text);
    font-family: var(--sans);
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
  }

  ::-webkit-scrollbar { width: 2px; }
  ::-webkit-scrollbar-track { background: var(--bg); }
  ::-webkit-scrollbar-thumb { background: var(--accent); border-radius: 2px; }

  @keyframes fadeUp   { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
  @keyframes pulse    { 0%,100%{opacity:.5;transform:scale(1)} 50%{opacity:1;transform:scale(1.15)} }
  @keyframes breathe  { 0%,100%{opacity:.03} 50%{opacity:.07} }

  .dots-bg {
    background-image: radial-gradient(rgba(96,165,250,.045) 1px, transparent 1px);
    background-size: 28px 28px;
  }

  .skills-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:14px; }
  .proj-grid   { display:grid; grid-template-columns:repeat(2,1fr); gap:18px; }
  .edu-grid    { display:grid; grid-template-columns:repeat(2,1fr); gap:18px; }

  @media(max-width:820px){
    .skills-grid { grid-template-columns:repeat(2,1fr); }
    .proj-grid   { grid-template-columns:1fr; }
    .edu-grid    { grid-template-columns:1fr; }
    .hide-mob    { display:none!important; }
  }
  @media(max-width:480px){
    .skills-grid { grid-template-columns:1fr 1fr; }
  }

  .tag {
    display:inline-flex; align-items:center;
    padding:3px 11px; border-radius:4px;
    font-size:11px; font-weight:500; letter-spacing:.2px;
    font-family:var(--mono);
    background:rgba(255,255,255,.035); border:1px solid var(--border);
    color:#5A7090;
  }

  .sec-label {
    display:flex; align-items:center; gap:10px; margin-bottom:12px;
  }
  .sec-label::before {
    content:''; display:inline-block;
    width:18px; height:1px; background:var(--accent);
  }
  .sec-label span {
    font-family:var(--mono); font-size:10px; font-weight:500;
    letter-spacing:3.5px; text-transform:uppercase; color:var(--accent);
  }

  .card {
    background:var(--surface); border:1px solid var(--border);
    border-radius:14px; padding:22px 20px;
    transition:border-color .25s, transform .3s cubic-bezier(.22,1,.36,1), box-shadow .3s;
  }
  .card:hover {
    border-color:var(--border2);
    transform:translateY(-5px);
    box-shadow:0 20px 50px rgba(0,0,0,.38);
  }
`;
