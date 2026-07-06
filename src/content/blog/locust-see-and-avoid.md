---
title: "Pilots Watch for the Traffic That Doesn't Move. A Locust's Neuron Is Built to Ignore Everything Else."
description: "The aircraft most likely to hit you is the one that sits still in your windscreen and only grows. A single locust neuron is tuned to spot exactly that, and to ignore the rest — which is the part machines still get wrong."
pubDate: 2026-07-05
pubOrder: 2
---

*By Keith Estes — a self-taught builder using AI to mine research across every field for aviation's next breakthrough. Published July 5, 2026. Research current as of July 5, 2026.*

*The aircraft most likely to hit you is the one that sits still in your windscreen and only grows. A single locust neuron is tuned to spot exactly that, and to ignore the rest — which is the part machines still get wrong.*

<div id="bearing-scope">
<style>
#bearing-scope *{box-sizing:border-box}
#bearing-scope{
  --amber:#f2a866; --warm:#d67a53;
  --ink:#ece7f7; --ink-dim:#a99cc4;
  --panel-line:#3a2b60;
  --scope:#0f0b26;
  --warn:#f2685a; --warn-glow:rgba(242,104,90,.5);
  --safe:#4fd08a;
  --sans:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;
  --mono:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;
  font-family:var(--sans); color:var(--ink); line-height:1.5;
  background:
    radial-gradient(1100px 560px at 80% -10%, rgba(242,168,102,.12), transparent 60%),
    linear-gradient(180deg,#15123a 0%, #241a4d 55%, #191234 100%);
  border-radius:16px; -webkit-font-smoothing:antialiased;
}
#bearing-scope .wrap{max-width:1120px;margin:0 auto;padding:clamp(18px,3.6vw,38px)}
/* header */
#bearing-scope .eyebrow{
  font-family:var(--mono); font-size:11px; letter-spacing:.24em; text-transform:uppercase;
  color:var(--amber); margin:0 0 14px; font-weight:600; display:flex; align-items:center; gap:10px;
}
#bearing-scope .eyebrow::before{content:"";width:26px;height:1px;background:var(--amber);opacity:.7}
#bearing-scope h1{
  font-size:clamp(27px,5vw,46px); line-height:1.04; margin:0 0 14px; font-weight:700; letter-spacing:-.02em;
}
#bearing-scope h1 .thin{font-weight:300;color:var(--ink-dim)}
#bearing-scope .lede{max-width:62ch;color:var(--ink-dim);font-size:clamp(14px,1.6vw,17px);margin:0}
#bearing-scope .lede strong{color:var(--ink);font-weight:600}
/* console */
#bearing-scope .console{
  margin-top:clamp(22px,3.6vw,34px); border:1px solid var(--panel-line); border-radius:16px;
  background:linear-gradient(180deg, rgba(36,26,77,.7), rgba(21,18,58,.82));
  box-shadow:0 30px 80px -46px rgba(0,0,0,.9), inset 0 1px 0 rgba(255,255,255,.04); overflow:hidden;
}
#bearing-scope .screens{display:grid;grid-template-columns:1fr 1fr;gap:1px;background:var(--panel-line)}
@media (max-width:760px){#bearing-scope .screens{grid-template-columns:1fr}}
#bearing-scope .screen{position:relative;background:var(--scope);min-height:300px}
#bearing-scope .screen__tag{
  position:absolute;top:12px;left:14px;z-index:3;font-family:var(--mono);
  font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--ink-dim);
}
#bearing-scope .screen__tag b{color:var(--amber);font-weight:600}
#bearing-scope canvas{display:block;width:100%;height:100%}
/* verdict badge */
#bearing-scope .verdict{
  position:absolute;top:10px;right:12px;z-index:3;font-family:var(--mono);
  font-size:12px;font-weight:600;letter-spacing:.08em;padding:5px 10px;border-radius:999px;
  border:1px solid transparent;text-transform:uppercase;transition:all .25s ease;
}
#bearing-scope .verdict.hit{color:#fff;background:rgba(242,104,90,.2);border-color:var(--warn);box-shadow:0 0 18px var(--warn-glow)}
#bearing-scope .verdict.clear{color:var(--safe);background:rgba(79,208,138,.12);border-color:rgba(79,208,138,.5)}
/* readouts */
#bearing-scope .readouts{display:grid;grid-template-columns:repeat(4,1fr);border-top:1px solid var(--panel-line)}
@media (max-width:560px){#bearing-scope .readouts{grid-template-columns:repeat(2,1fr)}}
#bearing-scope .metric{padding:14px 16px;border-right:1px solid var(--panel-line)}
#bearing-scope .metric:last-child{border-right:0}
#bearing-scope .metric__k{font-family:var(--mono);font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--ink-dim)}
#bearing-scope .metric__v{font-family:var(--mono);font-size:22px;font-weight:600;margin-top:4px;color:var(--ink)}
#bearing-scope .metric__v small{font-size:12px;color:var(--ink-dim);font-weight:500;margin-left:3px}
#bearing-scope .metric.is-hot .metric__v{color:var(--warn)}
/* looming meter */
#bearing-scope .loom{padding:16px;border-top:1px solid var(--panel-line);display:flex;align-items:center;gap:16px;flex-wrap:wrap}
#bearing-scope .loom__label{flex:1 1 240px;min-width:220px}
#bearing-scope .loom__label .t{font-weight:600;font-size:14px}
#bearing-scope .loom__label .s{color:var(--ink-dim);font-size:12.5px;margin-top:2px}
#bearing-scope .loom__bar{flex:2 1 260px;height:14px;border-radius:8px;background:var(--scope);border:1px solid var(--panel-line);position:relative;overflow:hidden}
#bearing-scope .loom__fill{position:absolute;inset:0;transform-origin:left;transform:scaleX(0);
  background:linear-gradient(90deg,#6d4a86,var(--amber) 60%,#ffcf7a 78%,var(--warn));transition:transform .08s linear}
#bearing-scope .loom__fire{font-family:var(--mono);font-size:11px;color:var(--ink-dim);min-width:110px;text-align:right}
#bearing-scope .loom__fire.on{color:var(--warn);font-weight:600}
/* controls */
#bearing-scope .controls{padding:clamp(16px,3vw,22px);border-top:1px solid var(--panel-line);display:grid;gap:20px}
#bearing-scope .row{display:flex;gap:12px;flex-wrap:wrap;align-items:center}
#bearing-scope .presets{display:flex;gap:8px;flex-wrap:wrap}
#bearing-scope .btn{
  font-family:var(--sans);font-size:13.5px;font-weight:500;color:var(--ink);background:rgba(242,168,102,.08);
  border:1px solid var(--panel-line);border-radius:9px;padding:9px 14px;cursor:pointer;transition:all .18s ease;
}
#bearing-scope .btn:hover{border-color:var(--amber);background:rgba(242,168,102,.16)}
#bearing-scope .btn:focus-visible{outline:2px solid var(--amber);outline-offset:2px}
#bearing-scope .btn.active{background:var(--amber);color:#1a1226;border-color:var(--amber);font-weight:600}
#bearing-scope .btn--play{background:var(--warm);color:#1a1226;border-color:var(--warm);font-weight:600;min-width:112px}
#bearing-scope .btn--play:hover{background:var(--amber);border-color:var(--amber)}
#bearing-scope .slider{flex:1 1 320px;min-width:260px}
#bearing-scope .slider__head{display:flex;justify-content:space-between;font-size:12.5px;margin-bottom:8px}
#bearing-scope .slider__head .a{color:var(--ink-dim)}
#bearing-scope .slider__head .b{font-family:var(--mono);color:var(--amber)}
#bearing-scope input[type=range]{width:100%;-webkit-appearance:none;appearance:none;height:4px;border-radius:4px;
  background:linear-gradient(90deg,var(--warn),#4a3568 12%,var(--panel-line));outline:none}
#bearing-scope input[type=range]:focus-visible{outline:2px solid var(--amber);outline-offset:6px}
#bearing-scope input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;width:20px;height:20px;border-radius:50%;
  background:var(--amber);border:3px solid #150f2c;cursor:pointer;box-shadow:0 0 0 1px var(--amber)}
#bearing-scope input[type=range]::-moz-range-thumb{width:18px;height:18px;border-radius:50%;background:var(--amber);
  border:3px solid #150f2c;cursor:pointer}
#bearing-scope .ticks{display:flex;justify-content:space-between;font-size:11px;color:var(--ink-dim);margin-top:8px;font-family:var(--mono)}
/* explainer */
#bearing-scope .note{
  margin-top:clamp(22px,3.6vw,32px);display:grid;grid-template-columns:1fr 1fr;gap:1px;
  background:var(--panel-line);border:1px solid var(--panel-line);border-radius:14px;overflow:hidden;
}
@media (max-width:680px){#bearing-scope .note{grid-template-columns:1fr}}
#bearing-scope .note__cell{background:linear-gradient(180deg,rgba(36,26,77,.55),rgba(21,18,58,.68));padding:22px}
#bearing-scope .note__cell h3{margin:0 0 8px;font-size:15px;letter-spacing:.01em}
#bearing-scope .note__cell h3 span{color:var(--amber);font-family:var(--mono);font-size:12px;margin-right:8px}
#bearing-scope .note__cell p{margin:0;color:var(--ink-dim);font-size:14px}
#bearing-scope .foot{margin-top:20px;color:var(--ink-dim);font-size:12px;font-family:var(--mono);display:flex;justify-content:space-between;flex-wrap:wrap;gap:8px}
#bearing-scope .foot .sig{color:var(--amber)}
@media (prefers-reduced-motion: reduce){#bearing-scope *{transition-duration:.001ms !important}}
</style>
<div class="wrap">
  <p class="eyebrow">The Skyward Signal · Field Tool</p>
  <h1>Bearing Scope <span class="thin">— the traffic that sits still is the one that hits you.</span></h1>
  <p class="lede">Traffic that slides across your windscreen will pass clear. Traffic that sits in one spot and only grows is on a collision course. Drag the timing below and watch the same intruder switch between the two. <strong>The plan view shows why.</strong></p>
  <div class="console">
    <div class="screens">
      <div class="screen" id="planScreen">
        <div class="screen__tag">Plan view · <b>line-of-sight</b></div>
        <div class="verdict clear" id="verdict">Clear</div>
        <canvas id="planCanvas"></canvas>
      </div>
      <div class="screen" id="viewScreen">
        <div class="screen__tag">Your windscreen · <b>pilot's view</b></div>
        <canvas id="viewCanvas"></canvas>
      </div>
    </div>
    <div class="readouts">
      <div class="metric" id="m-range">
        <div class="metric__k">Range</div>
        <div class="metric__v" id="v-range">100<small>%</small></div>
      </div>
      <div class="metric" id="m-bear">
        <div class="metric__k">Bearing drift</div>
        <div class="metric__v" id="v-bear">0.0<small>°/s</small></div>
      </div>
      <div class="metric" id="m-cpa">
        <div class="metric__k">Predicted miss</div>
        <div class="metric__v" id="v-cpa">0<small>%</small></div>
      </div>
      <div class="metric" id="m-ttc">
        <div class="metric__k">Time to pass</div>
        <div class="metric__v" id="v-ttc">--<small>s</small></div>
      </div>
    </div>
    <div class="loom">
      <div class="loom__label">
        <div class="t">Looming signal</div>
        <div class="s">What the locust's LGMD neuron detects &mdash; growth on a steady bearing, ignoring traffic that merely drifts past.</div>
      </div>
      <div class="loom__bar"><div class="loom__fill" id="loomFill"></div></div>
      <div class="loom__fire" id="loomFire">quiet</div>
    </div>
    <div class="controls">
      <div class="row">
        <button class="btn btn--play" id="playBtn">Play</button>
        <button class="btn" id="replayBtn">Replay</button>
        <div class="presets" role="group" aria-label="Scenario presets">
          <button class="btn active" data-tau="0">Collision course</button>
          <button class="btn" data-tau="-22">Passes ahead</button>
          <button class="btn" data-tau="26">Passes behind</button>
        </div>
      </div>
      <div class="row">
        <div class="slider">
          <div class="slider__head">
            <span class="a">Intruder timing</span>
            <span class="b" id="tauReadout">on collision course</span>
          </div>
          <input type="range" id="tau" min="-40" max="40" value="0" step="1" aria-label="Intruder timing offset">
          <div class="ticks"><span>passes ahead</span><span>collision</span><span>passes behind</span></div>
        </div>
      </div>
    </div>
  </div>
  <div class="note">
    <div class="note__cell">
      <h3><span>01</span>The pilot's rule</h3>
      <p>Constant bearing, decreasing range. If another aircraft holds a fixed position in your windscreen and grows, your paths are converging on the same point. The sight-lines in the plan view stay parallel &mdash; a ladder, not a fan.</p>
    </div>
    <div class="note__cell">
      <h3><span>02</span>The same computation, in a locust</h3>
      <p>The LGMD neuron fires for an object that expands on a steady bearing and stays quiet for objects sweeping across the field. It responds to the exact signature that marks a real threat &mdash; the looming meter above tracks that response.</p>
    </div>
  </div>
  <div class="foot">
    <span>Time is compressed for demonstration. Geometry is exact; speeds are illustrative.</span>
    <span class="sig">The Skyward Signal</span>
  </div>
</div>
<script>
(function(){
  "use strict";
  var R=document.getElementById('bearing-scope');
  function $(id){return R.querySelector('#'+id);}
  // ---- world model (constant-velocity, 2D ground frame) ----
  const O0={x:0,y:0};        const Vo={x:0,y:3};    // ownship, flies "up"
  const I0c={x:120,y:240};   const Vi={x:-2,y:-1};  // intruder (collision course at tau=0)
  const T=74;                                        // sim length
  const B={x:Vi.x-Vo.x,y:Vi.y-Vo.y};                 // relative velocity (constant)
  let tau=0, t=0, playing=false, raf=null, last=0, prevAz=null;
  const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function I0(){ return {x:I0c.x+2*tau, y:I0c.y+tau}; }
  function ownAt(tt){ return {x:O0.x+Vo.x*tt, y:O0.y+Vo.y*tt}; }
  function intrAt(tt){ const i0=I0(); return {x:i0.x+Vi.x*tt, y:i0.y+Vi.y*tt}; }
  function rel(tt){ const o=ownAt(tt), i=intrAt(tt); return {x:i.x-o.x, y:i.y-o.y}; }
  function cpa(){
    const i0=I0(), A={x:i0.x-O0.x,y:i0.y-O0.y}, bb=B.x*B.x+B.y*B.y;
    let ts=-(A.x*B.x+A.y*B.y)/bb; if(ts<0) ts=0;
    const rx=A.x+B.x*ts, ry=A.y+B.y*ts;
    return {t:ts, dist:Math.hypot(rx,ry)};
  }
  const R0=Math.hypot(I0c.x-O0.x, I0c.y-O0.y);
  // ---- canvas setup ----
  const planCanvas=$('planCanvas'), viewCanvas=$('viewCanvas');
  const pctx=planCanvas.getContext('2d'), vctx=viewCanvas.getContext('2d');
  let PW,PH,VW,VH,DPR;
  function fit(){
    DPR=Math.min(window.devicePixelRatio||1,2);
    [ [planCanvas,pctx],[viewCanvas,vctx] ].forEach(([c])=>{
      const r=c.parentElement.getBoundingClientRect();
      c.width=Math.max(1,Math.round(r.width*DPR)); c.height=Math.max(1,Math.round(r.height*DPR));
    });
    const rp=planCanvas.parentElement.getBoundingClientRect(), rv=viewCanvas.parentElement.getBoundingClientRect();
    PW=rp.width; PH=rp.height; VW=rv.width; VH=rv.height;
    pctx.setTransform(DPR,0,0,DPR,0,0); vctx.setTransform(DPR,0,0,DPR,0,0);
  }
  function worldToPlan(p){
    const minX=-55,maxX=150,minY=-15,maxY=260,pad=26;
    const s=Math.min((PW-2*pad)/(maxX-minX),(PH-2*pad)/(maxY-minY));
    const cx=PW/2, cy=PH/2, wcx=(minX+maxX)/2, wcy=(minY+maxY)/2;
    return { x: cx+(p.x-wcx)*s, y: cy-(p.y-wcy)*s, s };
  }
  function drawPlan(){
    pctx.clearRect(0,0,PW,PH);
    pctx.strokeStyle='rgba(236,231,247,.07)'; pctx.lineWidth=1;
    for(let gx=-40;gx<=140;gx+=30){ const a=worldToPlan({x:gx,y:-15}),b=worldToPlan({x:gx,y:260});
      pctx.beginPath();pctx.moveTo(a.x,a.y);pctx.lineTo(b.x,b.y);pctx.stroke(); }
    for(let gy=0;gy<=240;gy+=30){ const a=worldToPlan({x:-55,y:gy}),b=worldToPlan({x:150,y:gy});
      pctx.beginPath();pctx.moveTo(a.x,a.y);pctx.lineTo(b.x,b.y);pctx.stroke(); }
    const step=6;
    for(let s=0;s<=t;s+=step){
      const o=worldToPlan(ownAt(s)), i=worldToPlan(intrAt(s)), age=(t-s)/T, parallel=Math.abs(tau)<3;
      pctx.strokeStyle=parallel ? `rgba(242,104,90,${0.16+0.55*(1-age)})` : `rgba(242,168,102,${0.12+0.4*(1-age)})`;
      pctx.lineWidth=parallel?1.4:1.1;
      pctx.beginPath();pctx.moveTo(o.x,o.y);pctx.lineTo(i.x,i.y);pctx.stroke();
    }
    function trail(fn,color){
      pctx.strokeStyle=color;pctx.lineWidth=2;pctx.beginPath();
      for(let s=0;s<=t;s+=1){const p=worldToPlan(fn(s));s===0?pctx.moveTo(p.x,p.y):pctx.lineTo(p.x,p.y);}
      pctx.stroke();
    }
    trail(ownAt,'rgba(236,231,247,.4)');
    trail(intrAt,'rgba(242,168,102,.4)');
    const o=worldToPlan(ownAt(t)), i=worldToPlan(intrAt(t));
    drawShip(o,Math.atan2(Vo.x,Vo.y),'#ece7f7');
    drawShip(i,Math.atan2(Vi.x,Vi.y),'#f2a866');
    pctx.font='11px ui-monospace,Menlo,monospace';
    pctx.fillStyle='rgba(236,231,247,.75)';pctx.fillText('YOU',o.x+10,o.y+4);
    pctx.fillStyle='rgba(242,168,102,.95)';pctx.fillText('TRAFFIC',i.x+10,i.y+4);
  }
  function drawShip(p,heading,color){
    pctx.save();pctx.translate(p.x,p.y);pctx.rotate(heading);pctx.fillStyle=color;
    pctx.beginPath();pctx.moveTo(0,-8);pctx.lineTo(7,7);pctx.lineTo(0,3.5);pctx.lineTo(-7,7);pctx.closePath();
    pctx.fill();pctx.restore();
  }
  // ---- windscreen ----
  const FOV=70*Math.PI/180;
  function drawView(){
    vctx.clearRect(0,0,VW,VH);
    const horizon=VH*0.52;
    const sky=vctx.createLinearGradient(0,0,0,horizon);
    sky.addColorStop(0,'#241a4d');sky.addColorStop(1,'#8f4d6e');
    vctx.fillStyle=sky;vctx.fillRect(0,0,VW,horizon);
    const gnd=vctx.createLinearGradient(0,horizon,0,VH);
    gnd.addColorStop(0,'#2a1e3e');gnd.addColorStop(1,'#120c22');
    vctx.fillStyle=gnd;vctx.fillRect(0,horizon,VW,VH-horizon);
    vctx.strokeStyle='rgba(236,231,247,.35)';vctx.lineWidth=1.5;
    vctx.beginPath();vctx.moveTo(0,horizon);vctx.lineTo(VW,horizon);vctx.stroke();
    vctx.strokeStyle='rgba(242,168,102,.55)';vctx.lineWidth=2;
    vctx.beginPath();vctx.moveTo(VW/2,horizon-8);vctx.lineTo(VW/2,horizon+8);vctx.stroke();
    const Rr=rel(t), az=Math.atan2(Rr.x,Rr.y), range=Math.hypot(Rr.x,Rr.y);
    if(Math.abs(az)<FOV/2 && Rr.y>-20 && range>0.5){
      const x=VW/2 + (az/(FOV/2))*(VW/2*0.92);
      const ang=Math.min(1.4, 46/Math.max(range,3));
      const size=Math.max(4, ang*Math.min(VW,VH)*0.16);
      const y=horizon - size*0.15;
      if(size>26){ vctx.shadowColor='rgba(242,104,90,.7)';vctx.shadowBlur=size*0.6; }
      vctx.fillStyle = size>34 ? '#f2685a' : '#ece7f7';
      drawPlane(x,y,size);
      vctx.shadowBlur=0;
      vctx.strokeStyle= Math.abs(tau)<3 ? 'rgba(242,104,90,.6)':'rgba(242,168,102,.5)';
      vctx.lineWidth=1.5;vctx.beginPath();vctx.arc(x,y,size*0.95+6,0,Math.PI*2);vctx.stroke();
    }
  }
  function drawPlane(x,y,s){
    vctx.save();vctx.translate(x,y);
    const w=s, t2=s*0.34;
    vctx.beginPath();
    vctx.ellipse(0,0,t2*0.5,s*0.42,0,0,Math.PI*2);
    vctx.rect(-w*0.75,-t2*0.16,w*1.5,t2*0.32);
    vctx.rect(-w*0.28,-s*0.42,w*0.56,t2*0.26);
    vctx.fill();vctx.restore();
  }
  // ---- readouts ----
  const vRange=$('v-range'), vBear=$('v-bear'), vCpa=$('v-cpa'), vTtc=$('v-ttc');
  const mBear=$('m-bear'), mRange=$('m-range'), verdict=$('verdict'), loomFill=$('loomFill'), loomFire=$('loomFire');
  function updateReadouts(dt){
    const Rr=rel(t), range=Math.hypot(Rr.x,Rr.y);
    vRange.innerHTML=Math.max(0,Math.min(100,range/R0*100)).toFixed(0)+'<small>%</small>';
    const az=Math.atan2(Rr.x,Rr.y)*180/Math.PI;
    let bearRate=0; if(prevAz!==null && dt>0){ bearRate=(az-prevAz)/dt; } prevAz=az;
    vBear.innerHTML=Math.abs(bearRate).toFixed(1)+'<small>°/s</small>';
    mBear.classList.toggle('is-hot', Math.abs(bearRate)<0.4 && range<R0*0.9);
    const c=cpa();
    vCpa.innerHTML=(c.dist/R0*100).toFixed(0)+'<small>%</small>';
    const isHit=c.dist<8;
    verdict.className='verdict '+(isHit?'hit':'clear');
    verdict.textContent=isHit?'Collision':'Will pass';
    mRange.classList.toggle('is-hot', isHit && range<R0*0.5);
    const ttc=c.t>t ? (c.t-t):0;
    vTtc.innerHTML=(t<c.t?ttc.toFixed(0):'0')+'<small>s</small>';
    const closing=-(Rr.x*B.x+Rr.y*B.y)/Math.max(range,1);
    let loom=closing>0 ? (closing/Math.max(range,6)):0;
    loom=Math.max(0,Math.min(1,loom*3.2));
    loomFill.style.transform='scaleX('+loom.toFixed(3)+')';
    const firing=loom>0.55;
    loomFire.textContent=firing?'FIRING':(loom>0.12?'rising':'quiet');
    loomFire.classList.toggle('on',firing);
  }
  // ---- loop ----
  function frame(ts){
    if(!last) last=ts;
    let dt=(ts-last)/1000; last=ts; if(dt>0.1) dt=0.1;
    if(playing){ t+=dt*11; if(t>=T){ t=T; setPlaying(false); } }
    drawPlan();drawView();updateReadouts(dt);
    raf=requestAnimationFrame(frame);
  }
  // ---- controls ----
  const playBtn=$('playBtn'), replayBtn=$('replayBtn'), tauInput=$('tau'), tauReadout=$('tauReadout');
  const presetBtns=[...R.querySelectorAll('.presets .btn')];
  function setPlaying(p){
    playing=p; playBtn.textContent=p?'Pause':(t>=T?'Replay':'Play');
    if(p && t>=T){ t=0; prevAz=null; }
  }
  playBtn.addEventListener('click',()=>setPlaying(!playing));
  replayBtn.addEventListener('click',()=>{ t=0; prevAz=null; setPlaying(true); });
  function setTau(val){
    tau=val; prevAz=null;
    tauReadout.textContent = Math.abs(tau)<3 ? 'on collision course' : (tau<0 ? 'passing ahead of you' : 'passing behind you');
    presetBtns.forEach(b=>b.classList.toggle('active', +b.dataset.tau===val));
  }
  tauInput.addEventListener('input',e=>setTau(+e.target.value));
  presetBtns.forEach(b=>b.addEventListener('click',()=>{
    const v=+b.dataset.tau; tauInput.value=v; setTau(v); t=0; prevAz=null; setPlaying(true);
  }));
  // ---- init ----
  function init(){
    fit(); setTau(0); drawPlan();drawView();updateReadouts(0);
    raf=requestAnimationFrame(frame);
    if(!reduceMotion){ setTimeout(()=>setPlaying(true),450); }
  }
  window.addEventListener('resize',()=>{ fit(); drawPlan();drawView(); });
  window.addEventListener('load',()=>{ fit(); });
  init();
})();
</script>
</div>

*Above: a working demonstration. Set the intruder on a collision course and it sits motionless in the windscreen, only swelling; nudge the timing and watch the same aircraft slide harmlessly past. The plan view shows why the dangerous one holds still.*

At an untowered airport, nobody is watching the sky for you. No controller calls traffic, no one assigns separation. You look, and you trust that everyone else is looking too. The hard part is that the aircraft most likely to hit you is the hardest one to see. On a collision course it holds a fixed spot in your windscreen and doesn't move, so there's nothing to catch your eye, while it grows from a speck. A converging light aircraft five seconds before impact looks no bigger than a sparrow. Your gaze snags on the traffic sliding across your view, the traffic that will miss you, and passes right over the one that won't.

The short version: the visual signature of a real collision threat is an object that holds a steady bearing and grows, and that is exactly the signature the human eye is worst at catching. A single neuron in the locust, the lobula giant movement detector, is tuned to that signature and quiet to everything else. Pilots are taught the same rule under a different name: constant bearing, decreasing range. That looming computation has already been built into drones, but only to dodge walls and wires. Nobody has aimed it at the job it fits best, filtering a crowded sky down to the one aircraft that is actually converging on you. The catch is that it can decide whether a blob is a threat, but it can't find the blob in the first place.

**Why the eye loses the one that matters**

See-and-avoid is the last line of defense against a midair collision, and its limits are well documented. A pilot's scan covers only a fraction of the sky at any instant, so most of the horizon is unwatched most of the time. Detection improves sharply when a pilot is alerted to roughly where to look; unalerted, with no one calling traffic, it grows far less reliable and holds up only in a narrow set of favorable conditions. And the geometry works against the eye. Motion is what the eye catches, but a collision course produces almost no motion across the windscreen. The threat sits still and grows. Everything harmless drifts past. The eye is pulled toward exactly the wrong things.

**What the locust is built to ignore**

The locust flies in dense swarms without colliding, helped by an identified neuron, the LGMD, that researchers have studied since the early 1970s. The neuron responds to looming: an object approaching on a collision course, expanding on a steady bearing. It stays quiet for objects that drift across the field or recede. Its strength isn't sharp eyesight, since the locust's vision is coarse. Its strength is discarding nearly everything it sees and firing only for the one pattern that means impact.

Pilots are taught that same pattern in cockpit language. Constant bearing, decreasing range: if another aircraft holds a fixed position relative to your nose and grows, the two of you are converging on the same point in space. The neuron's tuning and the pilot's rule pick out one signature. The Bearing Scope above lets you watch it happen. On a collision course the sight-lines in the plan view stay parallel, a ladder rather than a fan, and the intruder in the windscreen holds still and swells.

This crosses over cleanly for a specific reason. The locust's trick is not a sense organ bound to a medium, the way a fish's lateral line reads water pressure and would be useless in thin air. It is a computation run on a stream of images, and light behaves the same in a cockpit as in a swarm. A computation ports where a sensor cannot.

**Where this has, and hasn't, been tried**

Being straight about the prior art is the whole game. The looming computation is not sitting untouched. Engineers turned the LGMD into a working robot around 2000 and have carried it through ground robots, cars, and drones since; one quadcopter design splits the field of view into four regions, each with its own LGMD, competing to steer the escape. This is a mature research area with hundreds of contributors.

But that drone work points the neuron at obstacles: walls, power lines, rocks, trees, other drones in a swarm. Meanwhile aviation's own detect-and-avoid research, aimed squarely at spotting other aircraft, mostly solves the vision problem a different way, with deep-learning object detectors trained on large image sets. The two lines barely touch. What I could not find anyone doing is using the looming primitive as a traffic sense for the see-and-avoid problem at an untowered field.

There is movement in the neighborhood, and honesty demands naming it: at least one group has used optical flow, a close cousin of looming, to warn a pilot of a converging aircraft. So reading visual motion for midair threats is a live idea. The under-walked seam is narrower and, I think, sharper. The deep-learning detectors carry a known weakness, raising false alarms on clouds and clutter, mistaking a puff of vapor for an aircraft. Suppressing incoherent background motion in favor of one coherently expanding object is precisely what the LGMD does. Its best role may be as the filter in front of a detector rather than the detector itself, throwing out the drifting cloud so the detector only has to judge what remains.

**The honest catch**

The looming computation is a discriminator, not a detector. It rules on whether an expanding blob is on a collision course; it does not find the blob. And finding it is the hard part. At any useful range the intruder is a handful of dim, low-contrast pixels against a bright or cluttered sky, and something else has to locate that speck before looming can weigh in.

Two more limits keep it honest. It is a daylight layer: vision fails at night and in cloud, exactly the conditions where a running engine's sound would still carry. And it warns, it does not resolve. The neuron produces an alarm and a rough direction, not the negotiated maneuver a cooperative system like TCAS computes for two transponding aircraft. That fits one job well, telling a pilot at an untowered field where to snap their eyes. It does not replace a controller, and it does not replace transponders and ADS-B for the aircraft that carry them.

**So what — for the reader**

If you fly at untowered fields, build detect-and-avoid systems, or write the rules for either, the question worth carrying into your work isn't "can a machine see traffic." It's "can it ignore the sky that doesn't matter." The detectors keep getting better at finding candidate targets. The unglamorous, unsolved half is suppressing the false alarms that make an alerting system cry wolf until a pilot stops trusting it. An answer to that exact problem is already flying in the locust, and it has already been reduced to code that runs on a drone. The step nobody has taken is to aim it at the traffic instead of the wall.

The aircraft that will hit you is the one that sits still. The locust's neuron is built to notice precisely that, and to let the rest of the sky go by. The eye it could help is already in the cockpit.

**Sources and further reading**

- Z. Qin, J. Peng, S. Yue, Q. Fu, "A bio-inspired research paradigm of collision perception neurons enabling neuro-robotic integration: the LGMD case," *Journal of the Royal Society Interface*, 2025 — the best single entry point on the locust neuron and its robotic use. https://doi.org/10.1098/rsif.2025.0433
- J. Zhao, Q. Fu, et al., "An LGMD Based Competitive Collision Avoidance Strategy for UAV," 2019 — the four-subfield quadcopter design, validated in real flight. https://arxiv.org/abs/1904.07206
- J. Zhao, H. Wang, N. Bellotto, C. Hu, J. Peng, S. Yue, "Enhancing LGMD's Looming Selectivity for UAV With Spatial-Temporal Distributed Presynaptic Connections," *IEEE TNNLS*, 2021. https://arxiv.org/abs/2005.04397
- E. Bauer et al., "AirTrack: Onboard Deep Learning Framework for Long-Range Aircraft Detection and Tracking," 2022 — representative deep-learning detect-and-avoid. https://arxiv.org/abs/2209.12849
- "AVOIDDS: Aircraft Vision-based Intruder Detection Dataset and Simulator," Stanford, 2023. https://arxiv.org/abs/2306.11203
- "Early Detection of Flying Obstacles Using Optical Flow to Assist the Pilot in Avoiding Mid-Air Collisions," *Applied Sciences*, 2026 — the optical-flow (looming-adjacent) pilot-assist work. https://doi.org/10.3390/app16052388
- "Vision-Based Flying Obstacle Detection for Avoiding Midair Collisions: A Systematic Review," *Journal of Imaging*, 2023 — source for the see-and-avoid scan limits and the "sparrow" figure. https://doi.org/10.3390/jimaging9100194
- *Limitations of the See-and-Avoid Principle* — the standard reference on alerted versus unalerted visual acquisition. https://skybrary.aero/sites/default/files/bookshelf/259.pdf

**FAQ**

**What does "constant bearing, decreasing range" mean?**

It is the geometry of a collision course. If another aircraft stays in the same spot relative to your nose while the distance closes, your two paths are converging on the same point at the same moment. Because the aircraft isn't moving across your windscreen, there's little motion to catch your eye, which is what makes a genuine collision threat so easy to miss.

**What is the locust's LGMD neuron?**

The lobula giant movement detector is a single identified neuron in the locust's visual system that responds specifically to looming, an object approaching on a collision course, and stays quiet for objects that drift past or move away. It has been studied since the early 1970s and modeled in software for collision avoidance on robots and drones.

**Can a camera or drone see other aircraft the way a pilot is supposed to?**

Increasingly, yes, for finding candidate targets: onboard deep-learning systems can detect and track distant aircraft. The harder, less-solved part is rejecting false alarms from clouds and clutter and reliably judging which detected object is actually converging. Vision-based approaches also fail at night and in cloud, so they are one layer of defense rather than a complete answer.

*How this is made: research for this piece is drafted with AI tools and then revised and fact-checked by a named human editor. Every factual claim is verified against a real, checkable source, listed above. Where a connection is interesting but unproven, we label it as such rather than assert it. The synthesis — the bridge between fields — is the human's. The credibility is the whole point.*
