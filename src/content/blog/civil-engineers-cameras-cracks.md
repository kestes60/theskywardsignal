---
title: 'Civil Engineers Taught Cameras to Read Cracks. Small Aircraft Operators Are Still Priced Out of Looking.'
description: "Fatigue is the failure mode that tore the roof off a 737 in flight. Civil engineers spent a decade teaching cheap cameras to find cracks in bridges and pavement; small aircraft operators still can't reach that tool."
pubDate: 2026-07-05
---

*By Keith Estes — a self-taught builder using AI to mine research across every field for aviation's next breakthrough. Published July 5, 2026. Research current as of July 4, 2026.*

*Fatigue is the failure mode that tore the roof off a 737 in flight. Civil engineers spent a decade teaching cheap cameras to find cracks in bridges and pavement; small aircraft operators still can't reach that tool.*

<div id="fatigue-scope">
<style>
#fatigue-scope *{box-sizing:border-box;margin:0;padding:0}
#fatigue-scope{
  --sky-0:#15123a; --sky-1:#241a4d; --sky-2:#3a2b60; --mauve:#8f4d6e;
  --warm:#d67a53; --amber:#f2a866; --ink:#ece7f7;
  --muted:rgba(236,231,247,.60); --faint:rgba(236,231,247,.40);
  --line:rgba(236,231,247,.14); --panel:rgba(255,255,255,.035);
  position:relative; color:var(--ink);
  font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;
  line-height:1.55; letter-spacing:.1px;
  background:linear-gradient(160deg,#15123a 0%,#241a4d 46%,#3a2b60 78%,#5b3a5e 100%);
  border-radius:14px; padding:clamp(18px,3.5vw,34px); overflow:hidden;
}
#fatigue-scope .mono{font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace}
#fatigue-scope .eyebrow{
  font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;
  text-transform:uppercase; letter-spacing:.28em; font-size:11px; color:var(--amber);
}
#fatigue-scope h1{
  font-size:clamp(26px,4.6vw,42px); line-height:1.05; font-weight:700;
  letter-spacing:-.5px; margin:.35rem 0 .5rem;
}
#fatigue-scope h1 .thin{font-weight:300;color:var(--muted)}
#fatigue-scope .dek{color:var(--muted); font-size:clamp(14px,1.9vw,16px); max-width:60ch}
#fatigue-scope .rule{height:1px;background:var(--line);margin:22px 0}
#fatigue-scope .caution{
  display:flex; gap:12px; align-items:flex-start;
  border:1px solid rgba(242,168,102,.34); background:rgba(242,168,102,.07);
  border-radius:10px; padding:13px 15px; margin:18px 0 8px; font-size:13.5px; color:#f6d9bd;
}
#fatigue-scope .caution b{color:var(--amber)}
#fatigue-scope .caution .ic{flex:0 0 auto;margin-top:2px;font-size:15px}
#fatigue-scope .grid{display:grid;grid-template-columns:1fr 1fr;gap:18px;margin-top:8px}
@media(max-width:760px){#fatigue-scope .grid{grid-template-columns:1fr}}
#fatigue-scope .panel{
  position:relative; background:var(--panel); border:1px solid var(--line);
  border-radius:12px; padding:18px; backdrop-filter:blur(3px);
}
#fatigue-scope .panel::before,#fatigue-scope .panel::after{
  content:'';position:absolute;width:10px;height:10px;border:1px solid rgba(242,168,102,.5)
}
#fatigue-scope .panel::before{top:8px;left:8px;border-right:0;border-bottom:0}
#fatigue-scope .panel::after{bottom:8px;right:8px;border-left:0;border-top:0}
#fatigue-scope .p-num{font-family:ui-monospace,monospace;font-size:11px;color:var(--faint);letter-spacing:.2em}
#fatigue-scope .p-title{font-size:18px;font-weight:650;margin:2px 0 3px}
#fatigue-scope .p-sub{font-size:13px;color:var(--muted);margin-bottom:14px}
/* scope / dropzone */
#fatigue-scope .scope{
  position:relative; border:1px dashed rgba(236,231,247,.28); border-radius:10px;
  background:rgba(0,0,0,.28); aspect-ratio:4/3; display:flex; align-items:center;
  justify-content:center; overflow:hidden; cursor:pointer; transition:border-color .2s,background .2s;
}
#fatigue-scope .scope.drag{border-color:var(--amber);background:rgba(242,168,102,.08)}
#fatigue-scope .scope canvas{max-width:100%;max-height:100%;display:block}
#fatigue-scope .scope .hint{position:absolute;text-align:center;color:var(--faint);font-size:13px;padding:16px;pointer-events:none}
#fatigue-scope .scope .hint .big{font-size:26px;display:block;margin-bottom:8px;color:var(--muted)}
#fatigue-scope video{display:none}
#fatigue-scope .controls{display:flex;gap:10px;flex-wrap:wrap;margin-top:12px;align-items:center}
#fatigue-scope button, #fatigue-scope .btn{
  font:inherit; font-size:13px; color:var(--ink); cursor:pointer;
  background:rgba(236,231,247,.06); border:1px solid var(--line);
  border-radius:8px; padding:8px 13px; transition:background .15s,border-color .15s;
}
#fatigue-scope button:hover,#fatigue-scope .btn:hover{background:rgba(242,168,102,.14);border-color:rgba(242,168,102,.4)}
#fatigue-scope button.primary{background:var(--warm);border-color:var(--warm);color:#1a1226;font-weight:600}
#fatigue-scope button.primary:hover{background:var(--amber);border-color:var(--amber)}
#fatigue-scope button:disabled{opacity:.4;cursor:not-allowed}
#fatigue-scope .slider-row{margin-top:14px;font-size:12px;color:var(--muted)}
#fatigue-scope .slider-row label{display:flex;justify-content:space-between;margin-bottom:6px}
#fatigue-scope .slider-row .val{color:var(--amber);font-family:ui-monospace,monospace}
#fatigue-scope input[type=range]{width:100%;accent-color:var(--amber)}
#fatigue-scope .readout{
  margin-top:13px;font-size:12.5px;color:var(--muted);
  border-left:2px solid rgba(242,168,102,.5);padding:2px 0 2px 12px;min-height:1.5em
}
#fatigue-scope .readout b{color:var(--amber)}
/* form */
#fatigue-scope .field{margin-bottom:12px}
#fatigue-scope .field label{display:block;font-size:12px;color:var(--muted);margin-bottom:5px;letter-spacing:.03em}
#fatigue-scope select,#fatigue-scope input[type=number]{
  width:100%; font:inherit; font-size:14px; color:var(--ink);
  background:rgba(0,0,0,.28); border:1px solid var(--line);
  border-radius:8px; padding:9px 11px;
}
#fatigue-scope select:focus,#fatigue-scope input:focus{outline:none;border-color:var(--amber)}
#fatigue-scope .two{display:grid;grid-template-columns:1fr 1fr;gap:10px}
#fatigue-scope .fleet{margin-top:6px;display:flex;flex-direction:column;gap:10px}
#fatigue-scope .card{
  border:1px solid var(--line);border-radius:9px;padding:13px 14px;background:rgba(0,0,0,.2);font-size:13px
}
#fatigue-scope .card .ch{display:flex;justify-content:space-between;align-items:baseline;margin-bottom:8px}
#fatigue-scope .card .name{font-weight:650;font-size:14px}
#fatigue-scope .card .rm{cursor:pointer;color:var(--faint);font-size:12px;background:none;border:none;padding:2px 6px}
#fatigue-scope .card .rm:hover{color:var(--amber)}
#fatigue-scope .factors{list-style:none;display:flex;flex-direction:column;gap:6px}
#fatigue-scope .factors li{display:flex;gap:8px;align-items:flex-start;color:var(--muted)}
#fatigue-scope .factors li .dot{flex:0 0 auto;width:7px;height:7px;border-radius:50%;margin-top:6px;background:var(--amber)}
#fatigue-scope .factors li.low .dot{background:rgba(236,231,247,.3)}
#fatigue-scope .escalate{margin-top:11px;padding-top:10px;border-top:1px solid var(--line);font-size:12.5px;color:#f6d9bd}
#fatigue-scope .escalate b{color:var(--amber)}
#fatigue-scope .empty{color:var(--faint);font-size:13px;font-style:italic;padding:6px 0}
#fatigue-scope .foot{margin-top:20px;font-size:11px;color:var(--faint);line-height:1.6}
</style>
<div class="eyebrow">The Skyward Signal · Field Tool</div>
<h1>Fatigue Scope <span class="thin">— what a camera can and can't tell you</span></h1>
<p class="dek">Computer-vision crack detection is real, and it's moving fast. But a photo has hard limits a certified inspection doesn't. This tool shows you both sides — so you know when cheap screening is enough, and when it's time to pay for the real thing.</p>
<div class="caution">
  <span class="ic">▲</span>
  <div><b>This is a demonstration, not an inspection.</b> Nothing here can determine whether an aircraft is airworthy. A camera sees surface marks only — it cannot see the subsurface fatigue where cracks usually begin. Certified inspection by a licensed mechanic, using proper equipment, remains required and irreplaceable. When in doubt, get the real inspection before you fly.</div>
</div>
<div class="grid">
  <!-- PANEL 1 -->
  <div class="panel">
    <div class="p-num">PANEL 01</div>
    <div class="p-title">See what the machine sees</div>
    <div class="p-sub">Drop in a photo of a metal surface. The scope highlights every crack-like edge it finds — watch how much else it flags too.</div>
    <div class="scope" id="scope">
      <div class="hint" id="hint"><span class="big">⌖</span>Tap to upload, or drop an image here</div>
      <canvas id="cv"></canvas>
    </div>
    <video id="video" playsinline></video>
    <input type="file" id="file" accept="image/*" hidden>
    <div class="controls">
      <button class="primary" id="pick">Upload image</button>
      <button id="cam">Use camera</button>
      <button id="snap" disabled>Capture</button>
      <button id="clear" disabled>Clear</button>
    </div>
    <div class="slider-row">
      <label><span>Detection sensitivity</span><span class="val" id="sensVal">medium</span></label>
      <input type="range" id="sens" min="8" max="60" value="26">
    </div>
    <div class="readout" id="readout">Load an image to run the edge scan.</div>
  </div>
  <!-- PANEL 2 -->
  <div class="panel">
    <div class="p-num">PANEL 02</div>
    <div class="p-title">When should you pay for the real thing?</div>
    <div class="p-sub">Add your aircraft to see which factors raise its fatigue exposure. This won't tell you it's safe — it points you toward the inspection.</div>
    <div class="field">
      <label>Aircraft type</label>
      <select id="type">
        <option value="">Select type…</option>
        <option value="piston-single">Light piston, single-engine</option>
        <option value="piston-twin">Light piston, twin-engine</option>
        <option value="turboprop">Turboprop</option>
        <option value="jet">Light jet (pressurized)</option>
        <option value="rotor">Helicopter / rotorcraft</option>
        <option value="experimental">Experimental / homebuilt</option>
      </select>
    </div>
    <div class="two">
      <div class="field">
        <label>Age (years)</label>
        <input type="number" id="age" min="0" max="80" placeholder="e.g. 32">
      </div>
      <div class="field">
        <label>Est. flight cycles</label>
        <input type="number" id="cycles" min="0" placeholder="takeoffs/landings">
      </div>
    </div>
    <div class="field">
      <label>Primary mission</label>
      <select id="mission">
        <option value="">Select mission…</option>
        <option value="training">Training / pattern work (high cycles)</option>
        <option value="short">Short hops / local flights</option>
        <option value="xc">Long cross-country (fewer cycles)</option>
        <option value="mixed">Mixed use</option>
      </select>
    </div>
    <div class="controls">
      <button class="primary" id="add">Add aircraft</button>
    </div>
    <div class="fleet" id="fleet">
      <div class="empty">No aircraft added yet.</div>
    </div>
  </div>
</div>
<div class="foot">
  Fatigue Scope is an educational demonstration published by The Skyward Signal. It performs no airworthiness assessment and is not a substitute for inspection by a certified mechanic or the maintenance requirements that apply to your aircraft. All processing happens in your browser; no image ever leaves your device.
</div>
<script>
(function(){
  var root=document.getElementById('fatigue-scope');
  var scope=root.querySelector('#scope'), cv=root.querySelector('#cv'), ctx=cv.getContext('2d',{willReadFrequently:true});
  var hint=root.querySelector('#hint'), file=root.querySelector('#file'), video=root.querySelector('#video');
  var sens=root.querySelector('#sens'), sensVal=root.querySelector('#sensVal'), readout=root.querySelector('#readout');
  var bPick=root.querySelector('#pick'), bCam=root.querySelector('#cam'), bSnap=root.querySelector('#snap'), bClear=root.querySelector('#clear');
  var srcImg=null, stream=null;
  function sensLabel(v){ if(v<18)return 'low'; if(v<32)return 'medium'; if(v<46)return 'high'; return 'extreme'; }
  function fitDims(w,h){ var maxW=560,maxH=460,s=Math.min(maxW/w,maxH/h,1); return [Math.round(w*s),Math.round(h*s)]; }
  function run(){
    if(!srcImg) return;
    var d=fitDims(srcImg.width||srcImg.videoWidth, srcImg.height||srcImg.videoHeight);
    cv.width=d[0]; cv.height=d[1];
    ctx.drawImage(srcImg,0,0,cv.width,cv.height);
    var img=ctx.getImageData(0,0,cv.width,cv.height), px=img.data, w=cv.width, h=cv.height;
    // grayscale
    var g=new Float32Array(w*h);
    for(var i=0;i<w*h;i++){ g[i]=0.299*px[i*4]+0.587*px[i*4+1]+0.114*px[i*4+2]; }
    // sobel
    var thr=parseInt(sens.value,10), hits=0, total=0;
    var out=ctx.createImageData(w,h), o=out.data;
    for(var y=0;y<h;y++){
      for(var x=0;x<w;x++){
        var idx=y*w+x, k=idx*4;
        // dim original as backdrop
        o[k]=px[k]*0.42; o[k+1]=px[k+1]*0.42; o[k+2]=px[k+2]*0.46; o[k+3]=255;
        if(x===0||y===0||x===w-1||y===h-1) continue;
        var gx=(g[idx-w-1]+2*g[idx-1]+g[idx+w-1])-(g[idx-w+1]+2*g[idx+1]+g[idx+w+1]);
        var gy=(g[idx-w-1]+2*g[idx-w]+g[idx-w+1])-(g[idx+w-1]+2*g[idx+w]+g[idx+w+1]);
        var mag=Math.sqrt(gx*gx+gy*gy); total++;
        if(mag>thr){
          hits++;
          var t=Math.min(1,(mag-thr)/90);
          o[k]=Math.min(255,120+t*135);
          o[k+1]=Math.min(255,80+t*110);
          o[k+2]=40;
          o[k+3]=255;
        }
      }
    }
    ctx.putImageData(out,0,0);
    var pct=total?Math.round(hits/total*100):0;
    readout.innerHTML='Scan complete. <b>'+pct+'% of the surface</b> lit up as a crack-like edge at '+sensLabel(sens.value)+' sensitivity. Every scratch, rivet line, paint edge, and shadow gets flagged the same as a real crack — telling them apart is exactly the trained judgment a phone can’t supply.';
  }
  function loadFromDataURL(url){
    var im=new Image();
    im.onload=function(){ srcImg=im; hint.style.display='none'; cv.style.display='block'; bClear.disabled=false; run(); };
    im.src=url;
  }
  function handleFile(f){ if(!f)return; var r=new FileReader(); r.onload=function(e){ loadFromDataURL(e.target.result); }; r.readAsDataURL(f); }
  bPick.addEventListener('click',function(){ file.click(); });
  scope.addEventListener('click',function(){ if(!srcImg && !stream) file.click(); });
  file.addEventListener('change',function(e){ handleFile(e.target.files[0]); });
  scope.addEventListener('dragover',function(e){ e.preventDefault(); scope.classList.add('drag'); });
  scope.addEventListener('dragleave',function(){ scope.classList.remove('drag'); });
  scope.addEventListener('drop',function(e){ e.preventDefault(); scope.classList.remove('drag'); if(e.dataTransfer.files[0]) handleFile(e.dataTransfer.files[0]); });
  sens.addEventListener('input',function(){ sensVal.textContent=sensLabel(sens.value); if(srcImg) run(); });
  bCam.addEventListener('click',function(){
    if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia){ readout.textContent='Camera not available here — upload a photo instead. (Live camera works on the published site.)'; return; }
    navigator.mediaDevices.getUserMedia({video:{facingMode:'environment'}}).then(function(s){
      stream=s; video.srcObject=s; video.play(); hint.style.display='none'; cv.style.display='block';
      video.addEventListener('loadedmetadata',function(){
        cv.width=video.videoWidth; cv.height=video.videoHeight; ctx.drawImage(video,0,0,cv.width,cv.height);
      });
      bSnap.disabled=false; bClear.disabled=false;
      readout.textContent='Camera live. Aim at a metal surface and press Capture.';
    }).catch(function(){ readout.textContent='Camera blocked here — upload a photo instead. (Live camera works on the published site over HTTPS.)'; });
  });
  bSnap.addEventListener('click',function(){
    if(!stream)return;
    var tmp=document.createElement('canvas'); tmp.width=video.videoWidth; tmp.height=video.videoHeight;
    tmp.getContext('2d').drawImage(video,0,0);
    stopCam();
    loadFromDataURL(tmp.toDataURL('image/jpeg'));
    bSnap.disabled=true;
  });
  function stopCam(){ if(stream){ stream.getTracks().forEach(function(t){t.stop();}); stream=null; } }
  bClear.addEventListener('click',function(){
    stopCam(); srcImg=null; ctx.clearRect(0,0,cv.width,cv.height); cv.style.display='none';
    hint.style.display='block'; bClear.disabled=true; bSnap.disabled=true;
    readout.textContent='Load an image to run the edge scan.';
  });
  /* ---- Panel 2: educational triage ---- */
  var typeSel=root.querySelector('#type'), ageIn=root.querySelector('#age'), cycIn=root.querySelector('#cycles'),
      missionSel=root.querySelector('#mission'), fleet=root.querySelector('#fleet');
  var list=[];
  var typeNames={'piston-single':'Light piston single','piston-twin':'Light piston twin','turboprop':'Turboprop','jet':'Light jet','rotor':'Helicopter / rotorcraft','experimental':'Experimental / homebuilt'};
  function factorsFor(a){
    var f=[];
    if(a.age>=25) f.push([true,'Airframe age '+a.age+' yrs — older structures have accumulated more fatigue loading over their service life.']);
    else if(a.age>=1) f.push([false,'Airframe age '+a.age+' yrs — relatively low time-in-service, but age alone never rules fatigue out.']);
    if(a.cycles>=20000) f.push([true,'High cycle count ('+a.cycles.toLocaleString()+') — fatigue tracks takeoff/landing cycles more than flight hours.']);
    else if(a.cycles>=5000) f.push([true,'Moderate cycle count ('+a.cycles.toLocaleString()+') — worth watching; cycles drive fatigue crack initiation.']);
    else if(a.cycles>0) f.push([false,'Lower cycle count ('+a.cycles.toLocaleString()+') — but cycles are only part of the picture.']);
    if(a.type==='jet') f.push([true,'Pressurized fuselage — repeated pressurization cycles load the skin and are a classic fatigue site.']);
    if(a.type==='rotor') f.push([true,'Rotorcraft — high-vibration environment; fatigue-critical components often carry mandatory life limits.']);
    if(a.type==='experimental') f.push([true,'Experimental / homebuilt — inspection history and build standards vary; structural provenance matters.']);
    if(a.mission==='training') f.push([true,'Training / pattern mission — many takeoff-landing cycles per hour concentrates fatigue loading fast.']);
    if(a.mission==='short') f.push([true,'Short-hop profile — a high ratio of cycles to hours raises cumulative fatigue exposure.']);
    if(a.mission==='xc') f.push([false,'Long cross-country profile — fewer cycles per hour, but not zero fatigue exposure.']);
    if(!f.length) f.push([false,'No elevated factors flagged from these inputs — which is not a clean bill of health.']);
    return f;
  }
  function render(){
    if(!list.length){ fleet.innerHTML='<div class="empty">No aircraft added yet.</div>'; return; }
    fleet.innerHTML='';
    list.forEach(function(a,i){
      var f=factorsFor(a);
      var lis=f.map(function(x){ return '<li class="'+(x[0]?'':'low')+'"><span class="dot"></span><span>'+x[1]+'</span></li>'; }).join('');
      var el=document.createElement('div'); el.className='card';
      el.innerHTML='<div class="ch"><span class="name">'+a.name+'</span><button class="rm" data-i="'+i+'">remove</button></div>'+
        '<ul class="factors">'+lis+'</ul>'+
        '<div class="escalate"><b>What to do:</b> regardless of the above, follow your required inspection schedule and Airworthiness Directives, and have a certified mechanic (A&P/IA) inspect any area of concern. If you suspect a crack, get a certified inspection <b>before further flight</b>.</div>';
      fleet.appendChild(el);
    });
    fleet.querySelectorAll('.rm').forEach(function(b){ b.addEventListener('click',function(){ list.splice(+b.dataset.i,1); render(); }); });
  }
  root.querySelector('#add').addEventListener('click',function(){
    if(!typeSel.value){ typeSel.focus(); return; }
    var a={ type:typeSel.value, name:typeNames[typeSel.value]||'Aircraft',
      age:parseInt(ageIn.value,10)||0, cycles:parseInt(cycIn.value,10)||0, mission:missionSel.value };
    list.push(a); render();
    ageIn.value=''; cycIn.value=''; typeSel.value=''; missionSel.value='';
  });
})();
</script>
</div>

*Above: a working demonstration. Upload a photo of any metal surface and watch the scope flag the cracks — and every scratch, rivet, and shadow along with them.*

On April 28, 1988, an Aloha Airlines 737 leveled off at 24,000 feet over Hawaii and a section of its roof tore away. About eighteen feet of upper fuselage was simply gone. One flight attendant, Clarabelle Lansing, was swept out of the airplane; she was the only fatality, and the crew somehow landed the crippled jet on Maui. The NTSB traced the cause to metal fatigue: a row of tiny cracks that had grown for years at the rivet holes of a fuselage lap joint, linked together, and let go all at once.

A passenger later told investigators she had noticed a crack in the fuselage as she boarded that morning. She assumed someone else had seen it. She said nothing.

That is what fatigue does. It hides.

The short version: fatigue grows quietly at rivet holes and lap joints until something gives, and catching it early takes inspection equipment small operators can rarely afford. Civil engineers have spent more than a decade teaching cheap cameras and neural networks to find cracks in bridges and pavement, some of it from ordinary smartphone photos. That toolkit is now crossing into aviation, but as a screening layer for the operator who can't afford frequent structural checks, it hasn't been built. It could be. The catch is that a camera only sees the surface, and fatigue starts below it, so the honest version flags where to get a real inspection and never pretends to be one.

**Aloha had a maintenance program. The little guy doesn't.**

Aloha was a scheduled airline with inspectors, checks, and a budget, and the damage still went undetected until the fuselage failed. A single-pilot operator, a small charter outfit, or an experimental builder runs on a fraction of that. The specialized inspections that catch fatigue early, trained eyes plus ultrasonic or eddy-current equipment, cost real money and real downtime. Frequent structural screening is exactly what a small operator can least afford to run. That gap is where a capability from a different field starts to matter.

**Where fatigue starts, and why it's expensive to find**

A fatigue crack doesn't begin as the obvious split you'd catch on a walkaround. It starts at a stress concentration: the sharp edge of a countersunk rivet hole, a fastener bore, the overlap of a lap joint. Often it grows below the surface, a little more with every pressurization cycle and every hard landing. By the time a crack is long enough to see with the naked eye, it is usually late in its life. Finding it earlier means non-destructive testing, ultrasonic probes, eddy-current sensors, dye penetrant, and inspectors trained to use them. That equipment and labor is what a small operator struggles to reach on any regular schedule.

**Who already made crack-hunting cheap**

Civil and structural engineers. For over a decade they have been pointing cameras at aging concrete and steel, bridges, pavement, buildings, and training neural networks to find and measure cracks automatically. In 2017, Young-Jin Cha and colleagues showed a convolutional neural network could detect concrete cracks in ordinary photographs. The next year, Hiroya Maeda's team trained a network to spot and classify road damage from pictures taken with an ordinary smartphone while driving past. The whole point of that work was cost: photograph the structure with cheap hardware, let the model do the first-pass looking, and send a human only to the places that light up.

**What that gives a small aircraft operator**

The same camera-and-model approach is now crossing into aviation. Recent work applies deep learning to aircraft surface defect detection; researchers at the German Aerospace Center have built vision models that locate the tip of a fatigue crack in metal; a 2025 study validated a camera-based fatigue-crack assessment method on an aircraft plate. I won't pretend this connection is untouched. Computer vision is already walking into aircraft inspection, and I'd be misleading you to claim otherwise.

The part I haven't found anyone building sits one step to the side. The aviation work aims at big maintenance shops and airline automation. The civil work aims at bridge and highway owners. The cheap, phone-in-your-pocket toolkit civil engineers spent a decade refining hasn't been handed down to the tier that needs cheap the most: the single-pilot operator, the small charter, the experimental builder, as a screening layer that says "this spot is worth a real look." That is the bridge. Not a replacement for inspection. A cheap first pass that tells you where to spend the expensive one.

**The honest catch**

A camera reads surfaces. Fatigue begins under them. The cracks that opened up Aloha 243 started at the knife edge of rivet holes, inside the joint, invisible to any lens until they had already done their work. No phone photo sees that. And by regulation, no software output decides whether an aircraft may fly; an airworthiness determination requires certified people and proper equipment.

So the only honest version of this tool is triage. It can raise a flag. It can never clear you to fly. The real danger here isn't a missed crack; it's a false all-clear, a "looks fine" that talks an operator out of the inspection they needed. A screening tool that reassures is worse than no tool. Build it so it always points toward the certified inspection, never away from it. Play with the scope at the top of this page and you'll see the honest version of that idea: it flags the crack, and it flags every scratch, rivet, and shadow next to it. Telling those apart is the trained judgment a camera can't supply.

**So what — for the reader**

If you fly, fix, insure, or regulate small aircraft, a cheap screening tier is coming whether or not anyone builds it carefully. The question to carry into your own work is which version arrives first: the honest one that flags and escalates, or the overclaiming one that quietly reassures. Whoever ships the honest version earns trust that lasts. Whoever ships the other one gets someone hurt and sours the idea for everyone.

The passenger on Aloha 243 saw the crack and said nothing, because she assumed the system already had it handled. The useful tool is the one that makes an operator go look. Not the one that tells them to relax.

**Sources and further reading**

- NTSB Aircraft Accident Report AAR-89/03, <em>Aloha Airlines Flight 243</em>. <a href="https://www.ntsb.gov/investigations/AccidentReports/Reports/AAR8903.pdf" target="_blank">ntsb.gov</a>
- FAA Lessons Learned, <em>Aloha Airlines Flight 243 (N73711)</em>. <a href="https://www.faa.gov/lessons_learned/transport_airplane/accidents/N73711" target="_blank">faa.gov</a>
- Cha, Choi & Büyüköztürk, "Deep learning-based crack damage detection using CNNs," <em>Computer-Aided Civil and Infrastructure Engineering</em>, 2017. <a href="https://doi.org/10.1111/mice.12263" target="_blank">doi.org</a>
- Maeda et al., "Road damage detection and classification using deep neural networks with smartphone images," <em>CACAIE</em>, 2018. <a href="https://onlinelibrary.wiley.com/doi/10.1111/mice.12387" target="_blank">wiley.com</a>
- Melching, Strohmann, Requena & Breitbarth (German Aerospace Center / DLR), "Explainable machine learning for precise fatigue crack tip detection," <em>Scientific Reports</em>, 2022. <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9184622/" target="_blank">nih.gov</a>
- "Vision-based automatic fatigue crack visualization and assessment in metallic structures," 2025 — validated on an aircraft plate. <a href="https://www.sciencedirect.com/science/article/abs/pii/S0263224125018809" target="_blank">sciencedirect.com</a>
- Wang, Lu, Liu & Qian, "DEE-Net: A Multi-Scale Discriminative Edge Enhancement Network for Aircraft Surface Defect Detection," <em>MDPI Aerospace</em>, 2026. <a href="https://doi.org/10.3390/aerospace13070568" target="_blank">doi.org</a>
- "Aircraft Fatigue: Causes, Effects, & Solutions," J.A. Air Center. <a href="https://www.jaair.com/2023/10/02/what-is-aircraft-fatigue" target="_blank">jaair.com</a>

**FAQ**

**Can a phone app detect metal fatigue in an aircraft?**

Not reliably, and not on its own. A camera can flag surface cracks and marks, but fatigue usually begins below the surface at fastener holes, where no photo can see it. Treat any phone-based tool as a screening aid that tells you where to get a certified inspection, never as a substitute for one.

**Does computer-vision crack detection replace aircraft inspection?**

No. Vision models can speed up the first-pass looking and flag areas of concern, but an airworthiness determination legally requires a certified mechanic and proper equipment. The technology assists a trained inspector; it does not replace one.

**Where do fatigue cracks usually begin?**

At stress concentrations: the edges of rivet and fastener holes, lap joints, and similar bores, often below the visible surface. In the 1988 Aloha Airlines accident, multiple small fatigue cracks at a lap joint's rivet holes linked together and caused an explosive decompression at altitude.

*How this is made: research for this piece is drafted with AI tools and then revised and fact-checked by a named human editor. Every factual claim is verified against a real, checkable source, listed above. Where a connection is interesting but unproven, we label it as such rather than assert it. The synthesis — the bridge between fields — is the human's. The credibility is the whole point.*
