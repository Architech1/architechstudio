<!DOCTYPE html>
<html lang="en" xml:lang="en">
<head>
<meta charset="UTF-8">
<title>Responsive merged website</title>
<link rel="canonical" href="https://kirsten-gwk862kmgg.figweb.site/">
<meta name="description" content="Created with figma.to.website">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">

<!-- EXACT MOBILE DESIGN CSS: active only at mobile breakpoint -->

<!-- EXACT DESKTOP DESIGN CSS: active only above mobile breakpoint -->

<!-- Breakpoint switch only. No visual redesign or component modification. -->
  <link rel="stylesheet" href="style.css">
  <script src="script.js" defer></script>
  <script src="brands-loader.js" defer></script>
<style>
/* ---- video carousel: click-to-play ---- */
.video-track > div { position: relative; overflow: hidden; }
.vc-play {
  position: absolute; inset: 0; z-index: 5; display: flex; align-items: center; justify-content: center;
  background: rgba(0,0,0,.18); border: 0; padding: 0; margin: 0; cursor: pointer; -webkit-tap-highlight-color: transparent;
}
.vc-play .vc-circle {
  width: 64px; height: 64px; border-radius: 50%; background: rgba(255,255,255,.92);
  display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 18px rgba(0,0,0,.35);
  transition: transform .2s ease;
}
.vc-play:hover .vc-circle { transform: scale(1.08); }
.vc-play .vc-circle::before {
  content: ""; margin-left: 5px; border-style: solid; border-width: 11px 0 11px 18px;
  border-color: transparent transparent transparent #111;
}
.vc-playing .vc-play { display: none; }
.vc-thumb { position:absolute; inset:0; width:100%; height:100%; object-fit:cover; object-position:50% 30%; z-index:4; pointer-events:none; background:#111; }
.vc-thumb.vc-gone { display:none; }
.folder-video { cursor: pointer; object-fit: cover; object-position: 50% 30%; }
/* stop the auto-scrolling carousel while a video is playing */
.video-marquee-wrapper.vc-any-playing,
.video-marquee-wrapper.vc-any-playing * { animation-play-state: paused !important; }
@media (max-width: 767px) { .vc-play .vc-circle { width: 48px; height: 48px; } .vc-play .vc-circle::before { border-width: 8px 0 8px 14px; margin-left: 4px; } }
</style>
<style id="hero-fix-css">
.hero-slideshow{position:absolute;inset:0;width:100%;height:100%;overflow:hidden;background:#0a0a0a linear-gradient(135deg,#111,#222)}
.hero-slideshow .hero-slide{position:absolute;inset:0;width:100%;height:100%;max-width:none;object-fit:cover;object-position:center center;display:block;transform:none!important}
.hero-slideshow .hero-overlay{position:absolute;inset:0;z-index:2;pointer-events:none;background:linear-gradient(to top,rgba(0,0,0,.65),rgba(0,0,0,.25) 55%,rgba(0,0,0,.45))}
@media (max-width:768px){.hero-slideshow .hero-slide{object-position:50% 40%}}
</style>
<style id="splash-css">
/* ---- loading splash screen ---- */
#splash-screen{position:fixed;inset:0;z-index:100000;background:#000;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:22px;opacity:1;visibility:visible;transition:opacity .7s ease,visibility .7s ease}
#splash-screen.hide{opacity:0;visibility:hidden;pointer-events:none}
#splash-screen .sp-logo{width:96px;height:96px;object-fit:contain;opacity:0;transform:scale(.85);animation:spLogo .9s cubic-bezier(.2,.8,.2,1) .1s forwards}
#splash-screen .sp-name{width:min(260px,62vw);height:auto;object-fit:contain;opacity:0;transform:translateY(10px);animation:spName .9s cubic-bezier(.2,.8,.2,1) .45s forwards}
#splash-screen .sp-bar{width:min(180px,46vw);height:2px;background:rgba(255,255,255,.18);border-radius:2px;overflow:hidden;margin-top:6px;opacity:0;animation:spName .6s ease .8s forwards}
#splash-screen .sp-bar::after{content:"";display:block;height:100%;width:40%;background:#fff;border-radius:2px;animation:spBar 1.2s ease-in-out infinite}
@keyframes spLogo{to{opacity:1;transform:scale(1)}}
@keyframes spName{to{opacity:1;transform:none}}
@keyframes spBar{0%{transform:translateX(-110%)}100%{transform:translateX(280%)}}
@media (max-width:768px){#splash-screen .sp-logo{width:72px;height:72px}#splash-screen{gap:18px}}
html.splash-lock,html.splash-lock body{overflow:hidden !important}
@media (prefers-reduced-motion:reduce){#splash-screen .sp-logo,#splash-screen .sp-name,#splash-screen .sp-bar{animation:none;opacity:1;transform:none}#splash-screen .sp-bar::after{animation:none;width:100%}}
</style>
<script>document.documentElement.classList.add('splash-lock');</script>
<script>/* earliest possible preload of the first hero image + first video thumbnails (urls remembered from the previous visit) */
(function(){try{function pl(u){var l=document.createElement('link');l.rel='preload';l.as='image';l.href=u;l.setAttribute('fetchpriority','high');document.head.appendChild(l);}
var h=JSON.parse(localStorage.getItem('heroUrls')||'[]');pl(h[0]||'gallery-images/alcove_img_2.jpg');
var t=JSON.parse(localStorage.getItem('thumbPattern')||'null');if(t){for(var i=1;i<=3;i++)pl(t.d+i+'.'+t.e);}}catch(e){}})();</script>
<style id="loc-css">
/* "We are located at" row: icon + text sit side by side and wrap by themselves (mobile + desktop) */
.loc-row{display:flex !important;flex-direction:row !important;align-items:flex-start !important;justify-content:flex-start !important;gap:12px;
  width:auto !important;height:auto !important;min-width:0 !important;overflow:visible !important;font-family:Poppins,sans-serif;color:#fff;pointer-events:none}
.loc-row svg{flex:0 0 auto;display:block}
.loc-row .loc-text{display:block;min-width:0;max-width:270px}
.loc-row .loc-title{display:block;font-size:14px;line-height:20px;font-weight:600;color:#fff;white-space:normal}
.loc-row .loc-places{display:block;margin-top:4px;font-size:13px;line-height:20px;font-weight:400;color:rgba(255,255,255,.85);white-space:normal}
@media (min-width:769px){.loc-row{gap:16px}.loc-row .loc-text{max-width:460px}.loc-row .loc-title{font-size:18px;line-height:26px}.loc-row .loc-places{font-size:16px;line-height:26px}}
</style>
</head>
<body>
<div id="splash-screen" role="status" aria-label="Loading">
  <img class="sp-logo" src="images/img_2_ae94dedb.png" alt="" decoding="async" fetchpriority="high">
  <img class="sp-name" src="images/img_1_a07ed1c8.png" alt="Company name" decoding="async" fetchpriority="high">
  <div class="sp-bar" aria-hidden="true"></div>
</div>
<script>
/* Splash: stays at least 4s, hides once the page has loaded (hard stop after 9s so it can never get stuck). */
(function () {
  var el = document.getElementById('splash-screen'), start = Date.now(), done = false;
  function hide() {
    if (done) return; done = true;
    el.classList.add('hide');
    document.documentElement.classList.remove('splash-lock');
    setTimeout(function () { if (el.parentNode) el.parentNode.removeChild(el); }, 900);
  }
  function ready() { setTimeout(hide, Math.max(0, 4000 - (Date.now() - start))); }
  if (document.readyState === 'complete') ready(); else window.addEventListener('load', ready);
  setTimeout(hide, 9000);
})();
</script>

<div class="responsive-mobile" id="mobile-design">

<div class="dragScroll" id="__x2d_body">
<div id="navbar-container">
<div class="pointer-events-none" id="ChatGPT_Image_Sep_21_2026_10_34_49_AM_2">
<img alt="ChatGPT Image Sep 21, 2026, 10_34_49 AM 2" decoding="async" fetchpriority="high" id="__1" src="images/img_1_a07ed1c8.png"/>
</div>
<div class="pointer-events-none" id="ChatGPT_Image_Sep_21_2026_10_40_54_AM_2">
<img alt="ChatGPT Image Sep 21, 2026, 10_40_54 AM 2" decoding="async" fetchpriority="high" id="__2" src="images/img_2_ae94dedb.png"/>
</div>
<a href="#contact_section" id="navbar-contact-us" style="text-decoration:none;color:inherit;cursor:pointer;display:block;pointer-events:auto;">
<span class="pointer-events-auto text" id="Button_CONTACT_US"><span id="__0">CONTACT US</span></span>
</a>

</div>
<div id="Container">
<div id="home-image-slider-1">
<div class="pointer-events-none" id="Image">
<!-- HERO SLIDESHOW (mobile): filled automatically with ONLY the images in the "slider" folder (see script below). -->
<div class="custom-slideshow hero-slideshow" style="position:absolute; inset:0; width:100%; height:100%; overflow:hidden; background:#111;">
  <div class="hero-overlay" aria-hidden="true"></div>
</div>
</div>
</div>
<span class="pointer-events-none text" id="Heading_2_Seamless_Freight_Solutions_Global_Reach"><span id="__4">Sculpting Timeless<br id="__5"/>Architectural Legacies</span></span>
<span class="pointer-events-none text" id="Heading_2_From_air_to_sea_to_land_we_move_your_cargo_safely_swiftly_and_securely_across_the_world_Trust_us_for_hassle_free_logistics_and_on_time_deliveries_"><span id="__6">Led by Dr. Ar. Sarath Sasi P and Co-Founder Jishana, delivering 480+ iconic residential, commercial, and interior landmarks across Bangalore and Kerala with engineering precision. </span></span>
<a href="#contact_section" id="Button" role="button" class="goto-contact">
<span class="pointer-events-none text" id="_9979_987"><span id="__7">REQUEST A QUOTE</span></span>
</a>
<div class="pointer-events-none" id="home-navigator-1">
</div>
<div class="pointer-events-none" id="home-navigator-2">
</div>
<div id="home_down_arrow_svg">
<div id="home_down_arrow_svg_0">
<svg class="pointer-events-none" fill="none" height="14" id="Vector" preserveaspectratio="none" viewbox="0 0 27 14" width="27" xmlns="http://www.w3.org/2000/svg"><path d="M0.53125 0.53125L13.0312 13.0312L25.5312 0.53125" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.06383"></path></svg>
</div>
</div>
<div id="about_section">
<span class="pointer-events-none text" id="Heading_2_ABOUT_US"><span id="__8">ABOUT US</span></span>
<span class="pointer-events-none text" id="Heading_2_Comprehensive_Freight_Forwarding_Solutions"><span id="__9">Architectural Excellence &amp; Design Mastery Since 2009<br id="__10"/></span></span>
<h2 id="Heading_2">
<span class="pointer-events-none text" id="_9979_997"><span id="__11">Led by Dr. Ar. Sarath Sasi P (PhD in Sustainable Architecture – University of Greenwich, UK; B.Arch, B.Tech Civil Engineering, MBA in Project Planning &amp; Management) and Co-Founder Jishana, ARCHITECT STUDIO combines structural engineering expertise with world-class interior craftsmanship.<br id="__12"/><br id="__13"/></span></span>
<span class="pointer-events-none text" id="_9979_998"><span id="__14">With 480+ completed projects, 400+ design-driven landmarks, and 40+ trusted contractors across Bangalore and Kerala, our firm is honored with National Architecture &amp; Interior Design Awards for "Most Promising Interior Designer 2021" and "Most Luxurious Interior Designer 2022".<br id="__15"/></span></span>
</h2>
<div id="testimonials_section" class="founder-card-slider">
<img alt="Background" decoding="async" fetchpriority="high" id="__16" src="images/img_4_e73c3c45.png"/>
<div class="founder-slide active" data-slide="0">
<span class="pointer-events-none text" id="Heading_2_Exceptional_service_and_support_Our_logistics_have_never_been_more_efficient_Exceptional_service_and_support_Our_logistics_have_never_been_more_efficient_"><span id="__17">We believe that a house becomes a home when it personalizes your space. It should show off your tastes and personality, work with your lifestyle, and maybe make your guests a little jealous.<br id="__18"/></span></span>
<div id="Group_54">
<div class="pointer-events-none" id="Image_0" style="border-radius:50%;overflow:hidden;">
<img alt="Image" decoding="async" fetchpriority="high" id="__19" src="images/img_27_97e48d30.jpg" style="object-fit:cover;width:100%;height:100%;object-position:center top;transform:none !important;"/>
</div>
<span class="pointer-events-none text" id="Heading_2_Olly_Schroeder"><span id="__20">Dr. Ar. Sarath Sasi P</span></span>
<span class="pointer-events-none text" id="Heading_2_Olly_Schroeder_0"><span id="__21">Founder / Architect</span></span>
</div>
</div>
<div class="founder-slide" data-slide="1">
<span class="pointer-events-none text" id="Heading_2_Exceptional_service_and_support_Our_logistics_have_never_been_more_efficient_Exceptional_service_and_support_Our_logistics_have_never_been_more_efficient_"><span id="__17_co">Great architecture and luxury interiors live at the intersection of functionality, warmth, and artistic detail. Every space we design tells a story unique to the people who call it home.<br/></span></span>
<div id="Group_54">
<div class="pointer-events-none" id="Image_0" style="border-radius:50%;overflow:hidden;">
<img alt="Jishana Co-Founder" decoding="async" fetchpriority="high" id="__19_co" src="images/jishana_cofounder.jpg" style="object-fit:cover;width:100%;height:100%;object-position:center 20%;transform:none !important;"/>
</div>
<span class="pointer-events-none text" id="Heading_2_Olly_Schroeder"><span id="__20_co">Jishana</span></span>
<span class="pointer-events-none text" id="Heading_2_Olly_Schroeder_0"><span id="__21_co">Co-Founder</span></span>
</div>
</div>
</div>
</div>
<div id="Container_0">
<div id="Background">
<div class="video-marquee-wrapper" id="Region_Media_carousel" role="region">
<div class="video-marquee-track" id="Container_1">
<div class="video-track">
        <div id="Group_Modern_Architecture_Concepts" role="group">
          <video class="folder-video" playsinline preload="metadata" disablepictureinpicture style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover; border:0; background:#111;"></video>
        </div>
        <div id="Group_Sustainable_Architecture" role="group">
          <video class="folder-video" playsinline preload="metadata" disablepictureinpicture style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover; border:0; background:#111;"></video>
        </div>
        <div style="background-color: rgb(0, 0, 0); border-radius: 14px; flex-direction: column; flex-shrink: 0; justify-content: center; align-items: start; width: 350px; height: 500px; display: flex; position: relative; overflow: hidden;" role="group">
          <video class="folder-video" playsinline preload="metadata" disablepictureinpicture style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover; border:0; background:#111;"></video>
        </div>
        <div style="background-color: rgb(0, 0, 0); border-radius: 14px; flex-direction: column; flex-shrink: 0; justify-content: center; align-items: start; width: 350px; height: 500px; display: flex; position: relative; overflow: hidden;" role="group">
          <video class="folder-video" playsinline preload="metadata" disablepictureinpicture style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover; border:0; background:#111;"></video>
        </div>
        <div style="background-color: rgb(0, 0, 0); border-radius: 14px; flex-direction: column; flex-shrink: 0; justify-content: center; align-items: start; width: 350px; height: 500px; display: flex; position: relative; overflow: hidden;" role="group">
          <video class="folder-video" playsinline preload="metadata" disablepictureinpicture style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover; border:0; background:#111;"></video>
        </div>
        <div style="background-color: rgb(0, 0, 0); border-radius: 14px; flex-direction: column; flex-shrink: 0; justify-content: center; align-items: start; width: 350px; height: 500px; display: flex; position: relative; overflow: hidden;" role="group">
          <video class="folder-video" playsinline preload="metadata" disablepictureinpicture style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover; border:0; background:#111;"></video>
        </div>
      </div>
      <div class="video-track" aria-hidden="true">
        <div id="Group_Modern_Architecture_Concepts" role="group">
          <video class="folder-video" playsinline preload="metadata" disablepictureinpicture style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover; border:0; background:#111;"></video>
        </div>
        <div id="Group_Sustainable_Architecture" role="group">
          <video class="folder-video" playsinline preload="metadata" disablepictureinpicture style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover; border:0; background:#111;"></video>
        </div>
        <div style="background-color: rgb(0, 0, 0); border-radius: 14px; flex-direction: column; flex-shrink: 0; justify-content: center; align-items: start; width: 350px; height: 500px; display: flex; position: relative; overflow: hidden;" role="group">
          <video class="folder-video" playsinline preload="metadata" disablepictureinpicture style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover; border:0; background:#111;"></video>
        </div>
        <div style="background-color: rgb(0, 0, 0); border-radius: 14px; flex-direction: column; flex-shrink: 0; justify-content: center; align-items: start; width: 350px; height: 500px; display: flex; position: relative; overflow: hidden;" role="group">
          <video class="folder-video" playsinline preload="metadata" disablepictureinpicture style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover; border:0; background:#111;"></video>
        </div>
        <div style="background-color: rgb(0, 0, 0); border-radius: 14px; flex-direction: column; flex-shrink: 0; justify-content: center; align-items: start; width: 350px; height: 500px; display: flex; position: relative; overflow: hidden;" role="group">
          <video class="folder-video" playsinline preload="metadata" disablepictureinpicture style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover; border:0; background:#111;"></video>
        </div>
        <div style="background-color: rgb(0, 0, 0); border-radius: 14px; flex-direction: column; flex-shrink: 0; justify-content: center; align-items: start; width: 350px; height: 500px; display: flex; position: relative; overflow: hidden;" role="group">
          <video class="folder-video" playsinline preload="metadata" disablepictureinpicture style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover; border:0; background:#111;"></video>
        </div>
      </div>
</div>
</div>
</div>
</div>
</div>
<div id="about-salient-features">
<span class="pointer-events-none text" id="_9979_1153"><span id="__30">OUR SALIENT FEATURES</span></span>
<div class="salient-marquee-wrapper" id="Container_0_0">
  <div class="salient-marquee-track">
    <div class="salient-track">
      <div class="pointer-events-none" id="__31">
        <img alt="ChatGPT Image Sep 21, 2026, 10_48_19 AM 1" decoding="async" id="__32" loading="lazy" src="images/img_6_9bf72b74.png"/>
      </div>
      <span class="pointer-events-none text" id="_9979_1156"><span id="__33">Sustainable<br id="__34"/>Design</span></span>
      <div class="pointer-events-none" id="__34_0">
        <img alt="ChatGPT Image Sep 21, 2026, 10_48_19 AM 2" decoding="async" id="__35" loading="lazy" src="images/img_6_9bf72b74.png"/>
      </div>
      <span class="pointer-events-none text" id="_9979_1158"><span id="__36">480+ Completed<br id="__37"/>Projects &amp; Villas</span></span>
      <div class="pointer-events-none" id="__37_0">
        <img alt="ChatGPT Image Sep 21, 2026, 10_48_19 AM 3" decoding="async" id="__38" loading="lazy" src="images/img_6_9bf72b74.png"/>
      </div>
      <span class="pointer-events-none text" id="_9979_1160"><span id="__39">National Award Winner<br id="__40"/>2021 &amp; 2022 Excellence</span></span>
      <div class="pointer-events-none" id="__40_0">
        <img alt="ChatGPT Image Sep 21, 2026, 10_48_19 AM 4" decoding="async" id="__41" loading="lazy" src="images/img_6_9bf72b74.png"/>
      </div>
      <span class="pointer-events-none text" id="_9979_1162"><span id="__42">Sustainable Architecture<br id="__43"/>PhD Certified </span></span>
      <div class="pointer-events-none" id="__43_0">
        <img alt="ChatGPT Image Sep 21, 2026, 10_48_19 AM 1" decoding="async" id="__44" loading="lazy" src="images/img_7_23b13d34.png"/>
      </div>
      <span class="pointer-events-none text" id="_9979_1164"><span id="__45">40+ Expert Contractors<br id="__46"/>&amp; Turnkey Execution</span></span>
    </div>
    <div class="salient-track" aria-hidden="true">
      <div class="pointer-events-none" id="__31">
        <img alt="ChatGPT Image Sep 21, 2026, 10_48_19 AM 1" decoding="async" id="__32" loading="lazy" src="images/img_6_9bf72b74.png"/>
      </div>
      <span class="pointer-events-none text" id="_9979_1156"><span id="__33">Sustainable<br id="__34"/>Design</span></span>
      <div class="pointer-events-none" id="__34_0">
        <img alt="ChatGPT Image Sep 21, 2026, 10_48_19 AM 2" decoding="async" id="__35" loading="lazy" src="images/img_6_9bf72b74.png"/>
      </div>
      <span class="pointer-events-none text" id="_9979_1158"><span id="__36">480+ Completed<br id="__37"/>Projects &amp; Villas</span></span>
      <div class="pointer-events-none" id="__37_0">
        <img alt="ChatGPT Image Sep 21, 2026, 10_48_19 AM 3" decoding="async" id="__38" loading="lazy" src="images/img_6_9bf72b74.png"/>
      </div>
      <span class="pointer-events-none text" id="_9979_1160"><span id="__39">National Award Winner<br id="__40"/>2021 &amp; 2022 Excellence</span></span>
      <div class="pointer-events-none" id="__40_0">
        <img alt="ChatGPT Image Sep 21, 2026, 10_48_19 AM 4" decoding="async" id="__41" loading="lazy" src="images/img_6_9bf72b74.png"/>
      </div>
      <span class="pointer-events-none text" id="_9979_1162"><span id="__42">Sustainable Architecture<br id="__43"/>PhD Certified </span></span>
      <div class="pointer-events-none" id="__43_0">
        <img alt="ChatGPT Image Sep 21, 2026, 10_48_19 AM 1" decoding="async" id="__44" loading="lazy" src="images/img_7_23b13d34.png"/>
      </div>
      <span class="pointer-events-none text" id="_9979_1164"><span id="__45">40+ Expert Contractors<br id="__46"/>&amp; Turnkey Execution</span></span>
    </div>
  </div>
</div>
</div>
<div id="Group_53">
<div id="services_section">
<span class="pointer-events-none text" id="Heading_2_SERVICES"><span id="__47">SERVICES</span></span>
<span class="pointer-events-none text" id="Heading_2_What_we_can_do_for_you"><span id="__48">What we can do for you</span></span>
<div id="Background_Border">
<svg class="pointer-events-none" fill="none" height="60" id="SVG_2" preserveaspectratio="none" viewbox="0 0 60 60" width="60" xmlns="http://www.w3.org/2000/svg"><path d="M15 9.375C15 8.87773 15.1976 8.4008 15.5491 8.04915C15.9008 7.69756 16.3777 7.5 16.875 7.5H20.625C21.1223 7.5 21.5992 7.69756 21.9509 8.04915C22.3024 8.4008 22.5 8.87773 22.5 9.375V13.125C22.5 13.6223 22.3024 14.0992 21.9509 14.4509C21.5992 14.8024 21.1223 15 20.625 15H16.875C16.3777 15 15.9008 14.8024 15.5491 14.4509C15.1976 14.0992 15 13.6223 15 13.125V9.375ZM26.25 9.375C26.25 8.87773 26.4476 8.4008 26.7991 8.04915C27.1508 7.69756 27.6277 7.5 28.125 7.5H31.875C32.3723 7.5 32.8492 7.69756 33.2009 8.04915C33.5524 8.4008 33.75 8.87773 33.75 9.375V13.125C33.75 13.6223 33.5524 14.0992 33.2009 14.4509C32.8492 14.8024 32.3723 15 31.875 15H28.125C27.6277 15 27.1508 14.8024 26.7991 14.4509C26.4476 14.0992 26.25 13.6223 26.25 13.125V9.375ZM39.375 7.5C38.8777 7.5 38.4008 7.69756 38.0491 8.04915C37.6976 8.4008 37.5 8.87773 37.5 9.375V13.125C37.5 13.6223 37.6976 14.0992 38.0491 14.4509C38.4008 14.8024 38.8777 15 39.375 15H43.125C43.6223 15 44.0992 14.8024 44.4509 14.4509C44.8024 14.0992 45 13.6223 45 13.125V9.375C45 8.87773 44.8024 8.4008 44.4509 8.04915C44.0992 7.69756 43.6223 7.5 43.125 7.5H39.375ZM15 20.625C15 20.1277 15.1976 19.6508 15.5491 19.2991C15.9008 18.9476 16.3777 18.75 16.875 18.75H20.625C21.1223 18.75 21.5992 18.9476 21.9509 19.2991C22.3024 19.6508 22.5 20.1277 22.5 20.625V24.375C22.5 24.8723 22.3024 25.3492 21.9509 25.7009C21.5992 26.0524 21.1223 26.25 20.625 26.25H16.875C16.3777 26.25 15.9008 26.0524 15.5491 25.7009C15.1976 25.3492 15 24.8723 15 24.375V20.625ZM28.125 18.75C27.6277 18.75 27.1508 18.9476 26.7991 19.2991C26.4476 19.6508 26.25 20.1277 26.25 20.625V24.375C26.25 24.8723 26.4476 25.3492 26.7991 25.7009C27.1508 26.0524 27.6277 26.25 28.125 26.25H31.875C32.3723 26.25 32.8492 26.0524 33.2009 25.7009C33.5524 25.3492 33.75 24.8723 33.75 24.375V20.625C33.75 20.1277 33.5524 19.6508 33.2009 19.2991C32.8492 18.9476 32.3723 18.75 31.875 18.75H28.125ZM37.5 20.625C37.5 20.1277 37.6976 19.6508 38.0491 19.2991C38.4008 18.9476 38.8777 18.75 39.375 18.75H43.125C43.6223 18.75 44.0992 18.9476 44.4509 19.2991C44.8024 19.6508 45 20.1277 45 20.625V24.375C45 24.8723 44.8024 25.3492 44.4509 25.7009C44.0992 26.0524 43.6223 26.25 43.125 26.25H39.375C38.8777 26.25 38.4008 26.0524 38.0491 25.7009C37.6976 25.3492 37.5 24.8723 37.5 24.375V20.625ZM16.875 30C16.3777 30 15.9008 30.1976 15.5491 30.5491C15.1976 30.9008 15 31.3777 15 31.875V35.625C15 36.1223 15.1976 36.5992 15.5491 36.9509C15.9008 37.3024 16.3777 37.5 16.875 37.5H20.625C21.1223 37.5 21.5992 37.3024 21.9509 36.9509C22.3024 36.5992 22.5 36.1223 22.5 35.625V31.875C22.5 31.3777 22.3024 30.9008 21.9509 30.5491C21.5992 30.1976 21.1223 30 20.625 30H16.875ZM26.25 31.875C26.25 31.3777 26.4476 30.9008 26.7991 30.5491C27.1508 30.1976 27.6277 30 28.125 30H31.875C32.3723 30 32.8492 30.1976 33.2009 30.5491C33.5524 30.9008 33.75 31.3777 33.75 31.875V35.625C33.75 36.1223 33.5524 36.5992 33.2009 36.9509C32.8492 37.3024 32.3723 37.5 31.875 37.5H28.125C27.6277 37.5 27.1508 37.3024 26.7991 36.9509C26.4476 36.5992 26.25 36.1223 26.25 35.625V31.875ZM39.375 30C38.8777 30 38.4008 30.1976 38.0491 30.5491C37.6976 30.9008 37.5 31.3777 37.5 31.875V35.625C37.5 36.1223 37.6976 36.5992 38.0491 36.9509C38.4008 37.3024 38.8777 37.5 39.375 37.5H43.125C43.6223 37.5 44.0992 37.3024 44.4509 36.9509C44.8024 36.5992 45 36.1223 45 35.625V31.875C45 31.3777 44.8024 30.9008 44.4509 30.5491C44.0992 30.1976 43.6223 30 43.125 30H39.375Z" fill="black"></path><path d="M7.5 3.75C7.5 2.75544 7.89512 1.80161 8.59837 1.09835C9.30161 0.395088 10.2555 0 11.25 0H48.75C49.7445 0 50.6984 0.395088 51.4016 1.09835C52.1049 1.80161 52.5 2.75544 52.5 3.75V56.25C52.5 57.2445 52.1049 58.1984 51.4016 58.9016C50.6984 59.6049 49.7445 60 48.75 60H11.25C10.2555 60 9.30161 59.6049 8.59837 58.9016C7.89512 58.1984 7.5 57.2445 7.5 56.25V3.75ZM48.75 3.75H11.25V56.25H22.5V46.875C22.5 46.3777 22.6976 45.9008 23.0491 45.5491C23.4008 45.1976 23.8777 45 24.375 45H35.625C36.1223 45 36.5992 45.1976 36.9509 45.5491C37.3024 45.9008 37.5 46.3777 37.5 46.875V56.25H48.75V3.75Z" fill="black"></path></svg>
<span class="pointer-events-none text" id="Heading_2_Air_Freight"><span id="__49">Architectural <br id="__50"/>Planning</span></span>
<span class="pointer-events-none text" id="Heading_2_Fast_and_reliable_air_freight_services_ensuring_your_cargo_reaches_its_destination_swiftly_and_securely_"><span id="__51">Master planning, 3D structural <br id="__52"/>analysis, sustainable biophilic <br id="__53"/>design, and statutory municipal <br id="__54"/>approvals for luxury estates.</span></span>
</div>
<div id="Background_Border_0">
<svg class="pointer-events-none" fill="none" height="60" id="SVG_3" preserveaspectratio="none" viewbox="0 0 60 60" width="60" xmlns="http://www.w3.org/2000/svg"><path d="M45.9375 3.75C44.3269 3.75 42.6675 4.28813 41.4075 5.54813C40.14 6.81561 39.375 8.71311 39.375 11.25V11.3156C37.8128 11.5411 36.3843 12.322 35.3512 13.5153C34.318 14.7085 33.7496 16.2342 33.75 17.8125V23.4375C33.75 23.6861 33.8487 23.9246 34.0246 24.1004C34.2004 24.2763 34.4389 24.375 34.6875 24.375H45.9375C46.1861 24.375 46.4246 24.2763 46.6004 24.1004C46.7763 23.9246 46.875 23.6861 46.875 23.4375V17.8125C46.8754 16.2342 46.307 14.7085 45.2738 13.5153C44.2407 12.322 42.8122 11.5411 41.25 11.3156V11.25C41.25 9.09939 41.8913 7.7175 42.7331 6.87372C43.5825 6.02437 44.7375 5.625 45.9375 5.625C47.1375 5.625 48.2925 6.02437 49.1419 6.87372C49.9856 7.7175 50.625 9.09939 50.625 11.25V51.66C48.9862 52.0125 47.8238 53.2856 47.3438 54.9356C47.3438 54.9356 46.875 56.25 47.8125 56.25H55.3125C56.25 56.25 55.7812 54.9375 55.7812 54.9375C55.3012 53.2875 54.1388 52.0125 52.5 51.66V11.25C52.5 8.71311 51.735 6.81561 50.4675 5.54813C49.2075 4.28813 47.55 3.75 45.9375 3.75Z" fill="black"></path><path d="M5.625 33.75C5.625 32.7554 6.02009 31.8016 6.72333 31.0983C7.42663 30.3951 8.38043 30 9.375 30H23.4375C24.12 30 24.7613 30.1819 25.3125 30.5025C25.8826 30.1733 26.5293 30 27.1875 30H41.25C42.2446 30 43.1984 30.3951 43.9017 31.0983C44.6049 31.8016 45 32.7554 45 33.75V37.815C46.1081 38.3419 46.875 39.4725 46.875 40.7812V52.5C46.875 52.9973 46.6775 53.4742 46.3258 53.8258C45.9742 54.1775 45.4973 54.375 45 54.375V55.7812C45 55.9056 44.9506 56.0248 44.8627 56.1127C44.7748 56.2006 44.6556 56.25 44.5312 56.25H41.7188C41.5944 56.25 41.4752 56.2006 41.3873 56.1127C41.2994 56.0248 41.25 55.9056 41.25 55.7812V54.375H9.375V55.7812C9.375 55.9056 9.32563 56.0248 9.23772 56.1127C9.1498 56.2006 9.03059 56.25 8.90622 56.25H6.09375C5.96943 56.25 5.8502 56.2006 5.7623 56.1127C5.67439 56.0248 5.625 55.9056 5.625 55.7812V54.375C5.12772 54.375 4.6508 54.1775 4.29918 53.8258C3.94754 53.4742 3.75 52.9973 3.75 52.5V40.7812C3.75 39.4725 4.51687 38.3437 5.625 37.815V33.75ZM41.25 33.75H26.25V43.125H40.3125V40.7812C40.3125 39.8869 40.6687 39.075 41.25 38.4844V33.75ZM10.3125 46.875V50.625H40.3125V46.875H10.3125ZM10.3125 43.125H24.375V33.75H9.375V38.4844C9.95628 39.0769 10.3125 39.8869 10.3125 40.7812V43.125Z" fill="black"></path></svg>
<span class="pointer-events-none text" id="Heading_2_Sea_Freight"><span id="__55">Luxury Interior <br id="__56"/>Design</span></span>
<span class="pointer-events-none text" id="Heading_2_Cost_effective_ocean_shipping_solutions_for_bulk_and_containerized_cargo_"><span id="__57">Award-winning bespoke interiors, <br id="__58"/>custom Italian joinery, handpicked <br id="__59"/>materials, curated art, and atmospheric <br id="__60"/>lighting choreography.</span></span>
</div>
<div id="Background_Border_1">
<div id="fa_brands_houzz">
<div id="SVG_4">
<svg class="pointer-events-none" fill="none" height="56" id="Vector_2" preserveaspectratio="none" viewbox="0 0 58 56" width="58" xmlns="http://www.w3.org/2000/svg"><path d="M38.6316 44.3589H23.0238V66.531H0V0H16.339V15.5189L61.8643 28.2311V66.531H38.6316V44.3589Z" fill="black"></path></svg>
</div>
</div>
<span class="pointer-events-none text" id="Heading_2_Land_Freight"><span id="__61">Renovation &amp; <br id="__62"/>Remodeling</span></span>
<span class="pointer-events-none text" id="Heading_2_Dependable_land_freight_services_ensuring_safe_and_timely_delivery_of_your_goods_across_any_distance_"><span id="__63">Reliable construction and remodeling services, delivering quality workmanship and durable spaces built to your needs.</span></span>
</div>
<div id="Background_Border_2">
<div id="SVG_5">
<svg class="pointer-events-none" fill="none" height="60" id="Vector_3" preserveaspectratio="none" viewbox="0 0 60 60" width="60" xmlns="http://www.w3.org/2000/svg"><path d="M60 21.6775H0C0.415385 14.1502 1.98461 6.7321 4.61538 -0.140625H55.3846C58.0154 6.7321 59.5846 14.1502 60 21.6775ZM9.2308 27.1321H50.7693V59.8594H46.1538V32.5866H32.3077V59.8594H9.2308V27.1321ZM13.8462 43.4957H27.6923V32.5866H13.8462V43.4957Z" fill="black"></path></svg>
</div>
<span class="pointer-events-none text" id="Heading_2_Customs_Clearance"><span id="__64">Commercial &amp; <br id="__65"/>Hospitality</span></span>
<span class="pointer-events-none text" id="Heading_2_Streamlined_customs_clearance_services_simplifying_the_process_and_ensuring_your_shipments_move_smoothly_across_borders_"><span id="__66">Inspiring commercial spaces, boutique hotels, upscale <br id="__67"/>restaurants, and corporate headquarters engineered for <br id="__68"/>productivity and brand distinction.</span></span>
</div>
<div id="Background_Border_3">
<div id="dinkie_icons_building_construction">
<div id="SVG_6">
<svg class="pointer-events-none" fill="none" height="53" id="Vector_4" preserveaspectratio="none" viewbox="0 0 60 53" width="60" xmlns="http://www.w3.org/2000/svg"><path d="M43.0426 37.8225H37.5881V43.277H32.1335V48.7316H59.4062V43.277H53.9518V37.8225H48.4972V43.277H43.0426V37.8225ZM43.0426 37.8225H48.4972V16.0043H59.4062V10.5497H21.2245V-0.359375H15.7699V10.5497H-0.59375V21.4588H10.3153V16.0043H15.7699V26.9133H21.2245V16.0043H43.0426V37.8225ZM10.3153 59.6406H26.679V26.9133H21.2245V32.3679H15.7699V26.9133H10.3153V59.6406ZM15.7699 54.1861V48.7316H21.2245V54.1861H15.7699ZM15.7699 43.277V37.8225H21.2245V43.277H15.7699Z" fill="black"></path></svg>
</div>
</div>
<span class="pointer-events-none text" id="Heading_2_Warehousing"><span id="__69">Turnkey <br id="__70"/>Construction</span></span>
<span class="pointer-events-none text" id="Heading_2_Streamlined_customs_clearance_services_simplifying_the_process_and_ensuring_your_shipments_move_smoothly_across_borders_0"><span id="__71">Reliable construction and remodeling services, delivering quality workmanship and durable spaces built to your needs.</span></span>
</div>
</div>
<div id="meet_the_team_section_mobile">
<span class="pointer-events-none text team-section-overline"><span>MEET THE TEAM</span></span>
<span class="pointer-events-none text team-section-heading"><span>Leadership &amp; Key Partners</span></span>
<div class="team-cards-grid">
<div class="team-card">
<div class="team-card-image">
<img alt="Dr. Ar. Sarath Sasi P - Founder" decoding="async" loading="lazy" src="images/img_27_97e48d30.jpg" style="object-position: center top;" />
</div>
<div class="team-card-info">
<span class="team-member-name">Dr. Ar. Sarath Sasi P</span>
<span class="team-member-role">Founder / Architect</span>
</div>
</div>
<div class="team-card">
<div class="team-card-image">
<img alt="Ms. Jishana - Co-Founder" decoding="async" loading="lazy" src="images/jishana_cofounder.jpg" style="object-position: center 20%;" />
</div>
<div class="team-card-info">
<span class="team-member-name">Ms. Jishana</span>
<span class="team-member-role">Co-Founder</span>
</div>
</div>
<div class="team-card">
<div class="team-card-image">
<img alt="Mr. Justin - Managing Director / Studio Director" decoding="async" loading="lazy" src="images/justin.png" style="object-position: center 20%;" />
</div>
<div class="team-card-info">
<span class="team-member-name">Mr. Justin</span>
<span class="team-member-role">Managing Director / Studio Director</span>
</div>
</div>
<div class="team-card">
<div class="team-card-image">
<img alt="Mr. Sreerag - Product Manager" decoding="async" loading="lazy" src="images/sreerag.jpg" style="object-position: center top;" />
</div>
<div class="team-card-info">
<span class="team-member-name">Mr. Sreerag</span>
<span class="team-member-role">Business Development Director </span>
</div>
</div>
<div class="team-card">
<div class="team-card-image">
<img alt="Ms. Akhila - Head of Interior Design" decoding="async" loading="lazy" src="images/akhila.jpg" style="object-position: center 15%;" />
</div>
<div class="team-card-info">
<span class="team-member-name">Ms. Akhila</span>
<span class="team-member-role">Head of Interior Design</span>
</div>
</div>
<div class="team-card">
<div class="team-card-image">
<img alt="Mr. Athul - Project Coordinator" decoding="async" loading="lazy" src="images/athul.png" style="object-position: center 15%;" />
</div>
<div class="team-card-info">
<span class="team-member-name">Mr. Athul</span>
<span class="team-member-role">Project Coordinator</span>
</div>
</div>
<div class="team-card">
<div class="team-card-image">
<img alt="edrope - Digital Partner" decoding="async" loading="lazy" src="images/edrope.jpg" style="object-position: center;" />
</div>
<div class="team-card-info">
<span class="team-member-name">edrope</span>
<span class="team-member-role">Digital Partner</span>
</div>
</div>
</div>
</div>
<div id="brands_we_use_section_mobile">
<span class="pointer-events-none text brands-section-overline"><span>BRANDS WE USE</span></span>
<span class="pointer-events-none text brands-section-heading"><span>Premium Materials &amp; Hardware</span></span>
<div class="brands-marquee-wrapper" id="brands_marquee_mobile">
  <div class="brands-marquee-track">
    <!-- filled automatically by brands-loader.js from images/brands/1.png, 2.jpg ... -->
  </div>
</div>
</div>
<div id="testimonials_section_0">
<div id="testimonial-center-container">
<span class="pointer-events-none text" id="Heading_2_TESTIMONIALS"><span id="__72">TESTIMONIALS</span></span>
<span class="pointer-events-none text" id="Heading_2_What_Our_Clients_Say"><span id="__73">What Our Clients Say</span></span>
<div class="dragScroll" id="testimonial-cards-container" style="display: flex; gap: 20px; overflow-x: auto; padding: 20px 20px; align-items: flex-start; scroll-snap-type: x mandatory; padding-top: 30px;">
<div style="flex: 0 0 85%; display: flex; flex-direction: column; gap: 15px; scroll-snap-align: center;">
<span style="color: #fff; font-family: Poppins, sans-serif; font-size: 13px; line-height: 22px; white-space: normal;">“We approached ARCHITECH for our home interior and loved the transformation. The modern, elegant design feels comfortable, while excellent material selection, attention to detail, and finishing made the experience exceptional.”</span>
<div style="display: flex; align-items: center; gap: 15px; margin-top: 10px;">
<span style="color: #fff; font-family: Poppins, sans-serif; font-size: 14px; font-weight: 600;">Harindra Singh</span>
</div>
</div>

<div style="flex: 0 0 85%; display: flex; flex-direction: column; gap: 15px; scroll-snap-align: center;">
<span style="color: #fff; font-family: Poppins, sans-serif; font-size: 13px; line-height: 22px; white-space: normal;">“ARCHITECH beautifully transformed our old house into a fresh, modern space. They understood our needs, respected its character, and delivered excellent execution. We highly recommend their team.”</span>
<div style="display: flex; align-items: center; gap: 15px; margin-top: 10px;">
<span style="color: #fff; font-family: Poppins, sans-serif; font-size: 14px; font-weight: 600;">Rohith Kumar</span>
</div>
</div>

<div style="flex: 0 0 85%; display: flex; flex-direction: column; gap: 15px; scroll-snap-align: center;">
<span style="color: #fff; font-family: Poppins, sans-serif; font-size: 13px; line-height: 22px; white-space: normal;">“Really happy with ARCHITECH’s work. They understood our ideas, added thoughtful design inputs, and executed everything beautifully. Professional, responsive, and detail-oriented, they transformed our home into a space we truly love.”</span>
<div style="display: flex; align-items: center; gap: 15px; margin-top: 10px;">
<span style="color: #fff; font-family: Poppins, sans-serif; font-size: 14px; font-weight: 600;">Mayank Singh</span>
</div>
</div>
</div>
</div>
</div>
<div id="promo_video_section">
<span class="pointer-events-none text" id="Heading_2_Navigating_borders_delivering_trust_"><span id="__112">Crafting spaces,<br id="__113"/>inspiring generations.</span></span>
<span class="pointer-events-none text" id="Heading_2_Swift_secure_and_seamless_shipping_connecting_global_trade_with_trusted_logistics_solutions_tailored_for_every_need_"><span id="__114">Sustainable architecture and bespoke luxury interiors</span></span>
<span class="text goto-contact quote-link" id="Heading_2_Request_a_Quote" role="link" tabindex="0"><span id="__117">Request a Quote</span></span>
<div id="arrow_right_circle_svg">
<svg class="pointer-events-none" fill="none" height="23" id="arrow_right_circle_svg_0" preserveaspectratio="none" viewbox="0 0 23 23" width="23" xmlns="http://www.w3.org/2000/svg"><path d="M11.4974 21.0827C16.7902 21.0827 21.0807 16.7921 21.0807 11.4994C21.0807 6.20662 16.7902 1.91602 11.4974 1.91602C6.20467 1.91602 1.91406 6.20662 1.91406 11.4994C1.91406 16.7921 6.20467 21.0827 11.4974 21.0827Z" fill="#195677" stroke="#195677" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.64286"></path><path d="M11.5 15.3327L15.3334 11.4994L11.5 7.66602" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.64286"></path><path d="M7.66406 11.5H15.3307" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.64286"></path></svg>
</div>
<div id="promo-video-container">
<div id="Container_7">
<div class="custom-slideshow" style="position: absolute; inset: 0; width: 100%; height: 100%; border-radius: 12px; overflow: hidden;">
  <img src="images/multiple.jpeg" class="slide" style="position: absolute; width: 100%; height: 100%; object-fit: cover; transition: opacity 1.5s ease-in-out; opacity: 1;">
  <img src="images/Award Winner on a Vibrant Red Carpet.png" class="slide" style="position: absolute; width: 100%; height: 100%; object-fit: cover; transition: opacity 1.5s ease-in-out; opacity: 0;">
  <img src="images/certificte.png" class="slide" style="position: absolute; width: 100%; height: 100%; object-fit: cover; transition: opacity 1.5s ease-in-out; opacity: 0;">
</div>
<div id="promo_video_new_mp4">
<div class="pointer-events-none" id="__15_0">

</div>
<div class="pointer-events-none" id="__16_0">

</div>
</div>
</div>
</div>
</div>
<div id="contact_section">
<div class="pointer-events-none" id="Image_5">
<img alt="Image" decoding="async" id="__120" loading="lazy" src="images/img_12_638f7581.png"/>
</div>
<span class="pointer-events-none text" id="Heading_2_CONTACT_US"><span id="__121">CONTACT US</span></span>
<span class="pointer-events-none text" id="Heading_2_Let_s_Discuss_Your_Freight_Needs"><span id="__122">Let's Discuss Your<br id="__123"/>Architectural Dream</span></span>
<span class="pointer-events-none text" id="Heading_2_Ready_to_experience_top_notch_freight_forwarding_services_Contact_our_team_today_to_get_started_"><span id="__124"><br>Ready to design an extraordinary home,<br id="__125"/>Contact Dr. Ar. Sarath Sasi P and our design studio today</span></span>
<div id="Image_6">
<div id="phone_svg">
<svg class="pointer-events-none" fill="none" height="27" id="Vector_5" preserveaspectratio="none" viewbox="0 0 26 27" width="26" xmlns="http://www.w3.org/2000/svg"><path d="M25.4226 19.6736V23.4235C25.424 23.7717 25.3527 24.1163 25.2133 24.4352C25.0738 24.7542 24.8693 25.0405 24.6128 25.2759C24.3562 25.5112 24.0534 25.6904 23.7236 25.8019C23.3938 25.9135 23.0444 25.9549 22.6977 25.9236C18.8512 25.5056 15.1564 24.1912 11.9101 22.0861C8.88996 20.1669 6.32932 17.6063 4.41015 14.5861C2.29762 11.3251 0.982953 7.61232 0.572648 3.74856C0.541407 3.40289 0.582487 3.05451 0.693269 2.72559C0.80405 2.39667 0.982107 2.09442 1.2161 1.83809C1.4501 1.58175 1.7349 1.37695 2.05238 1.23672C2.36987 1.09648 2.71307 1.02389 3.06015 1.02356H6.81014C7.41675 1.01759 8.00489 1.23241 8.46484 1.62798C8.9248 2.02354 9.22528 2.57287 9.31016 3.17356C9.46841 4.37365 9.76194 5.55194 10.1851 6.68607C10.3533 7.13348 10.3898 7.61969 10.29 8.08714C10.1903 8.5546 9.95871 8.98373 9.62264 9.32355L8.03516 10.911C9.81457 14.0405 12.4057 16.6316 15.5352 18.411L17.1226 16.8236C17.4625 16.4875 17.8916 16.2559 18.359 16.1562C18.8265 16.0565 19.3127 16.0929 19.7601 16.261C20.8943 16.6843 22.0726 16.9778 23.2726 17.1361C23.8799 17.2217 24.4344 17.5276 24.8308 17.9955C25.2272 18.4633 25.4379 19.0605 25.4226 19.6736Z" stroke="#0072AC" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.04545"></path></svg>
</div>
</div>
<span class="pointer-events-none text" id="Heading_2_Call_Us"><span id="__126">Call Us</span></span>
<a class="text contact-num" id="Heading_2_Link_966_535_964_692" href="https://wa.me/916235506520" target="_blank" rel="noopener"><span id="__127">+91 62355 06520</span></a>
<a class="text contact-num" id="Heading_2_Link_966_535_964_692_0" href="tel:+919746201737"><span id="__128">+91 97462 01737</span></a>
<div id="Image_7">
<svg class="pointer-events-none" fill="none" height="30" id="mail_svg" preserveaspectratio="none" viewbox="0 0 26 30" width="26" xmlns="http://www.w3.org/2000/svg"><path d="M2.92187 5H22.9219C24.2969 5 25.4219 6.125 25.4219 7.50002V22.5C25.4219 23.875 24.2969 25 22.9219 25H2.92187C1.54688 25 0.421875 23.875 0.421875 22.5V7.50002C0.421875 6.125 1.54688 5 2.92187 5Z" stroke="#0072AC" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.04545"></path><path d="M25.4219 7.5L12.9219 16.25L0.421875 7.5" stroke="#0072AC" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.04545"></path></svg>
</div>
<span class="pointer-events-none text" id="Heading_2_Email"><span id="__129">Email</span></span>
<span class="pointer-events-none text" id="Heading_2_Link_info_globalsolutionlog_com"><span id="__130">sarath@architechstudio.com</span></span>
<div id="Image_8" class="loc-row">
<svg class="pointer-events-none" fill="none" height="30" id="address_svg" preserveaspectratio="none" viewbox="0 0 26 30" width="26" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#_9979_1087__clip0_9979_1087)"><path d="M24.1719 12.5C24.1719 21.25 12.9219 28.75 12.9219 28.75C12.9219 28.75 1.67188 21.25 1.67188 12.5C1.67188 9.51629 2.85714 6.65484 4.96692 4.54505C7.07673 2.43526 9.93816 1.25 12.9219 1.25C15.9056 1.25 18.767 2.43526 20.8768 4.54505C22.9866 6.65484 24.1719 9.51629 24.1719 12.5Z" stroke="#0072AC" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.14286"></path><path d="M12.9219 16.25C14.9929 16.25 16.6719 14.5711 16.6719 12.5C16.6719 10.4289 14.9929 8.75 12.9219 8.75C10.8508 8.75 9.17188 10.4289 9.17188 12.5C9.17188 14.5711 10.8508 16.25 12.9219 16.25Z" stroke="#0072AC" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.14286"></path></g><defs><clippath id="_9979_1087__clip0_9979_1087"><rect fill="white" height="30" transform="translate(-2.07812)" width="30"></rect></clippath></defs></svg>
<span class="loc-text"><span class="loc-title">We are located at</span><span class="loc-places">Kerala, Wayanad, Kozhikode, Karnataka (Bangalore), Hyderabad, Dubai, UK</span></span>
</div>
<div id="Background_Border_4">
<div id="contactForm">
<span class="pointer-events-none text" id="_9979_1094"><span id="__136">First Name*</span></span>
<input id="firstName" type="text" value=""/>
<span class="pointer-events-none text" id="_9979_1096"><span id="__137">Last Name</span></span>
<input id="lastName" type="text" value=""/>
<span class="pointer-events-none text" id="_9979_1098"><span id="__138">Email*</span></span>
<input id="email" type="text" value=""/>
<span class="pointer-events-none text" id="_9979_1100"><span id="__139">Phone Number*</span></span>
<input id="phone" type="text" value=""/>
<span class="pointer-events-none text" id="_9979_1102"><span id="__140">Company</span></span>
<input id="companyName" type="text" value=""/>
<span class="pointer-events-none text" id="_9979_1104"><span id="__141">Service looking for?</span></span>
<div class="pointer-events-none" id="contact-role" style="pointer-events:auto !important;">
<input id="service" type="text" list="service-list-d" placeholder="Type or choose a service" autocomplete="off" style="width:100%;height:100%;box-sizing:border-box;pointer-events:auto !important;background:transparent;border:0;outline:0;font:inherit;color:inherit;padding:0 12px;"/>
<datalist id="service-list-d"><option value="Architectural Planning"></option><option value="Interior Design"></option><option value="Renovation &amp; Remodeling"></option><option value="Commercial &amp; Hospitality"></option><option value="Turnkey Construction"></option></datalist>
</div>
<span class="pointer-events-none text" id="_9979_1106"><span id="__142">Message*</span></span>
<input id="message" type="text" value=""/>
<button id="Button_0">
<span class="pointer-events-none text" id="_9979_1109"><span id="__143">SUBMIT</span></span>
</button>
</div>
</div>
</div>
<div id="Group_41">
<span class="pointer-events-none" id="Horizontal_Divider"></span>
<span class="pointer-events-none text" id="Heading_2_Services"><span id="__144">Services</span></span>
<span class="pointer-events-none text" id="Heading_2_Air_Freight_0"><span id="__145">Architectural Planning</span></span>
<span class="pointer-events-none text" id="Heading_2_Sea_Freight_0"><span id="__146">Interior Design</span></span>
<span class="pointer-events-none text" id="Heading_2_Land_Freight_0"><span id="__147">Renovation &amp; Remodeling</span></span>
<span class="pointer-events-none text" id="Heading_2_Customs_Clearance_0"><span id="__148">Commercial &amp; Hospitality</span></span>
<span class="pointer-events-none text" id="Heading_2_Warehousing_0"><span id="__149">Turnkey Construction</span></span>
<span class="pointer-events-none text" id="Heading_2_Company"><span id="__150">Company</span></span>
<span class="pointer-events-none text" id="Heading_2_About"><span id="__151">About</span></span>
<span class="pointer-events-none text" id="Heading_2_Services_0"><span id="__152">Services</span></span>
<span class="pointer-events-none text" id="Heading_2_Contact"><span id="__153">Contact</span></span>
<span class="pointer-events-none text" id="Heading_2_Privacy_Policy"><span id="__154">Privacy Policy</span></span>
<span class="pointer-events-none text" id="Heading_2_Cookies"><span id="__155">Cookies</span></span>
<div id="Border">
<div id="linkedin_svg">
<svg class="pointer-events-none" fill="none" height="17" id="linkedin_svg_0" preserveaspectratio="none" viewbox="0 0 20 17" width="20" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#_9979_1126__clip0_9979_1126)"><path d="M2.4356 4.06381C3.78074 4.06381 4.87119 3.15454 4.87119 2.03289C4.87119 0.911231 3.78074 0.00195312 2.4356 0.00195312C1.09045 0.00195312 0 0.911231 0 2.03289C0 3.15454 1.09045 4.06381 2.4356 4.06381Z" fill="black"></path><path d="M4.46526 5.42188H0.405933C0.181858 5.42188 0 5.57353 0 5.76036V15.915C0 16.1019 0.181858 16.2535 0.405933 16.2535H4.46526C4.68934 16.2535 4.87119 16.1019 4.87119 15.915V5.76036C4.87119 5.57353 4.68934 5.42188 4.46526 5.42188Z" fill="black"></path><path d="M16.5647 4.85707C14.8298 4.36152 12.6597 4.79682 11.3582 5.57737C11.3135 5.43182 11.1544 5.3235 10.9653 5.3235H6.90592C6.68185 5.3235 6.5 5.47514 6.5 5.66199V15.8166C6.5 16.0035 6.68185 16.1551 6.90592 16.1551H10.9653C11.1893 16.1551 11.3712 16.0035 11.3712 15.8166V8.51883C12.0272 8.04765 12.8723 7.89736 13.564 8.14243C14.2347 8.37869 14.6187 8.95548 14.6187 9.72384V15.8166C14.6187 16.0035 14.8005 16.1551 15.0245 16.1551H19.0839C19.308 16.1551 19.4898 16.0035 19.4898 15.8166V9.04213C19.4435 6.26044 17.8743 5.23075 16.5647 4.85707Z" fill="black"></path></g><defs><clippath id="_9979_1126__clip0_9979_1126"><rect fill="white" height="16.25" width="20"></rect></clippath></defs></svg>
</div>
</div>
<div id="Border_0">
<div id="instagram_svg">
<div id="instagram_svg_0">
<svg class="pointer-events-none" fill="none" height="20" id="Clip_path_group" preserveaspectratio="none" viewbox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><mask height="20" id="_9979_1133__mask0_9979_1133" maskunits="userSpaceOnUse" style="mask-type:luminance" width="20" x="0" y="0"><path d="M20 0H0V20H20V0Z" fill="white"></path></mask><g mask="url(#_9979_1133__mask0_9979_1133)"><path d="M14.1641 1.66602H5.83072C3.52954 1.66602 1.66406 3.5315 1.66406 5.83268V14.1661C1.66406 16.4672 3.52954 18.3327 5.83072 18.3327H14.1641C16.4653 18.3327 18.3308 16.4672 18.3308 14.1661V5.83268C18.3308 3.5315 16.4653 1.66602 14.1641 1.66602Z" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.66667"></path><path d="M13.3337 9.47525C13.4366 10.1687 13.3181 10.8771 12.9952 11.4994C12.6723 12.1217 12.1613 12.6264 11.5351 12.9416C10.9088 13.2568 10.1991 13.3665 9.50689 13.2551C8.81467 13.1438 8.1752 12.8169 7.67943 12.3212C7.18366 11.8254 6.85684 11.1859 6.74546 10.4937C6.63407 9.80155 6.74379 9.09183 7.059 8.46557C7.37422 7.8393 7.87889 7.32837 8.50122 7.00546C9.12356 6.68254 9.83186 6.56408 10.5254 6.66692C11.2328 6.77182 11.8878 7.10147 12.3935 7.60718C12.8992 8.11288 13.2288 8.76782 13.3337 9.47525Z" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.66667"></path><path d="M14.5781 5.41602H14.5881" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.66667"></path></g></svg>
</div>
</div>
</div>
<div id="Border_1">
<div id="facebook_svg">
<div id="facebook_svg_0">
<svg class="pointer-events-none" fill="none" height="20" id="Vector_6" preserveaspectratio="none" viewbox="0 0 13 20" width="13" xmlns="http://www.w3.org/2000/svg"><path d="M9.4995 3.25H12.4994C12.7753 3.25 12.9993 3.068 12.9993 2.84375V0.40625C12.9993 0.182 12.7753 0 12.4994 0H9.4995C6.46767 0 3.99979 2.00444 3.99979 4.46875V7.3125H0.499975C0.223989 7.3125 0 7.4945 0 7.71875V10.1562C0 10.3805 0.223989 10.5625 0.499975 10.5625H3.99979V19.0938C3.99979 19.3181 4.22378 19.5001 4.49977 19.5001H7.49961C7.7756 19.5001 7.99959 19.3181 7.99959 19.0938V10.5625H11.4994C11.7144 10.5625 11.9054 10.4504 11.9744 10.2846L12.9743 7.84712C13.0254 7.72362 12.9993 7.58712 12.9053 7.48069C12.8103 7.37507 12.6603 7.3125 12.4994 7.3125H7.99959V4.46875C7.99959 3.79682 8.67255 3.25 9.4995 3.25Z" fill="black"></path></svg>
</div>
</div>
</div>
</div>
<span class="pointer-events-none text" id="_9979_1144"><span id="__156">Works</span></span>
<span class="pointer-events-none text" id="_9979_1145"><span id="__157">Explore Our Works</span></span>
<a href="gallery.html" id="Button_2" role="button" style="text-decoration:none;">
<span class="pointer-events-none text" id="_9979_1147"><span id="__158">VIEW ALL WORKS</span></span>
</a>
<div id="Group_47">
<div id="Image_24">
<div class="pointer-events-none" id="__172">
<img alt="ChatGPT Image Sep 21, 2026, 10_48_19 AM 5" decoding="async" id="__159" loading="lazy" src="images/img_6_9bf72b74.png"/>
</div>
</div>

</div>
<div id="Group_45">
<div class="pointer-events-none" id="__85_0">
<img alt="Image" decoding="async" id="__161" loading="lazy" src="gallery-images/alcove_img_2.jpg"/>
</div>
<div id="Content_4"><img alt="Gallery Villa" decoding="async" loading="lazy" src="gallery-images/alcove_img_2.jpg" style="width:100%;height:100%;object-fit:cover;display:block;"/></div>
<div id="Image_9">
<div class="pointer-events-none" id="__91_0">
<img alt="Image" decoding="async" id="__169" loading="lazy" src="gallery-images/alcove_img_3.jpg"/>
</div>
</div>
<div id="Image_10">
<div class="pointer-events-none" id="__92_0">
<img alt="Image" decoding="async" id="__170" loading="lazy" src="gallery-images/alcove_img_5.jpg"/>
</div>
</div>
<div id="Image_12">
<div class="pointer-events-none" id="__93_0">
<img alt="Image" decoding="async" id="__171" loading="lazy" src="gallery-images/alcove_img_6.jpg"/>
</div>
</div>
<div id="Image_13">
<div class="pointer-events-none" id="__94_0">
<img alt="Image" decoding="async" id="__174" loading="lazy" src="gallery-images/alcove_img_7.jpg"/>
</div>
</div>
<div id="Content_11"><img alt="Gallery Villa" decoding="async" loading="lazy" src="gallery-images/alcove_img_8.jpg" style="width:100%;height:100%;object-fit:cover;display:block;"/></div>
<div id="Image_15">
<div class="pointer-events-none" id="__95_0">
<img alt="Image" decoding="async" id="__175" loading="lazy" src="gallery-images/alcove_img_8.jpg"/>
</div>
</div>
</div>
</div>
<a href="https://www.instagram.com/interiorby_sarath/" target="_blank" style="text-decoration:none;color:inherit;cursor:pointer;display:block;pointer-events:auto;">
<div id="Mention_Widget" style="pointer-events:auto;">
<div id="Frame_41">
<div id="Group_2">
<svg class="pointer-events-none" fill="none" height="22" id="Group" preserveaspectratio="none" viewbox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M17.6042 4.96395C17.6042 4.25638 17.0307 3.68505 16.3258 3.68505C15.6208 3.68505 15.0469 4.25638 15.0469 4.96395C15.0469 5.66891 15.6208 6.24023 16.3258 6.24023C17.0307 6.24023 17.6042 5.66891 17.6042 4.96395Z" fill="url(#_9979_1237__paint0_linear_9979_1237)"></path><path d="M19.3088 14.947C19.2614 15.985 19.0878 16.5489 18.9437 16.9235C18.7501 17.4201 18.5191 17.7752 18.1446 18.1477C17.7742 18.5201 17.4191 18.7506 16.9225 18.942C16.5479 19.0883 15.9818 19.2624 14.9439 19.3119C13.8218 19.3613 13.4893 19.3719 10.6437 19.3719C7.80076 19.3719 7.46562 19.3613 6.34348 19.3119C5.30555 19.2624 4.74212 19.0883 4.36752 18.942C3.86828 18.7506 3.51582 18.5201 3.14335 18.1477C2.76824 17.7752 2.53731 17.4201 2.34634 16.9235C2.20217 16.5489 2.02595 15.985 1.98121 14.947C1.92653 13.8248 1.9165 13.4871 1.9165 10.6473C1.9165 7.80175 1.92653 7.4666 1.98121 6.34447C2.02595 5.30654 2.20217 4.7431 2.34634 4.36535C2.53731 3.86927 2.76824 3.51625 3.14335 3.14379C3.51582 2.77187 3.86828 2.5409 4.36752 2.34733C4.74212 2.20055 5.30555 2.02903 6.34348 1.9796C7.46562 1.93012 7.80076 1.91749 10.6437 1.91749C13.4893 1.91749 13.8218 1.93012 14.9439 1.9796C15.9818 2.02903 16.5479 2.20055 16.9225 2.34733C17.4191 2.5409 17.7742 2.77187 18.1446 3.14379C18.5191 3.51625 18.7501 3.86927 18.9437 4.36535C19.0878 4.7431 19.2614 5.30654 19.3088 6.34447C19.3609 7.4666 19.3735 7.80175 19.3735 10.6473C19.3735 13.4871 19.3609 13.8248 19.3088 14.947ZM21.2253 6.25716C21.1732 5.12291 20.9943 4.34799 20.7287 3.67305C20.4583 2.97282 20.0958 2.3794 19.5024 1.78598C18.9116 1.19521 18.3182 0.832724 17.618 0.559174C16.9404 0.29612 16.1681 0.115133 15.0333 0.0656948C13.8985 0.0109692 13.5361 0.000986099 10.6437 0.000986099C7.75392 0.000986099 7.38884 0.0109692 6.25408 0.0656948C5.12192 0.115133 4.35016 0.29612 3.66942 0.559174C2.97184 0.832724 2.37842 1.19521 1.78764 1.78598C1.19422 2.3794 0.831736 2.97282 0.558699 3.67305C0.295645 4.34799 0.11679 5.12291 0.0620645 6.25716C0.012626 7.39191 0 7.75491 0 10.6473C0 13.5371 0.012626 13.8995 0.0620645 15.0343C0.11679 16.1665 0.295645 16.9408 0.558699 17.6189C0.831736 18.3165 1.19422 18.9126 1.78764 19.5034C2.37842 20.0942 2.97184 20.4593 3.66942 20.7323C4.35016 20.9953 5.12192 21.1742 6.25408 21.2263C7.38884 21.2784 7.75392 21.291 10.6437 21.291C13.5361 21.291 13.8985 21.2784 15.0333 21.2263C16.1681 21.1742 16.9404 20.9953 17.618 20.7323C18.3182 20.4593 18.9116 20.0942 19.5024 19.5034C20.0958 18.9126 20.4583 18.3165 20.7287 17.6189C20.9943 16.9408 21.1732 16.1665 21.2253 15.0343C21.2774 13.8995 21.29 13.5371 21.29 10.6473C21.29 7.75491 21.2774 7.39191 21.2253 6.25716Z" fill="url(#_9979_1237__paint1_linear_9979_1237)"></path><path d="M10.6441 14.1922C8.68548 14.1922 7.09619 12.6055 7.09619 10.6469C7.09619 8.68513 8.68548 7.09639 10.6441 7.09639C12.6032 7.09639 14.1946 8.68513 14.1946 10.6469C14.1946 12.6055 12.6032 14.1922 10.6441 14.1922ZM10.6441 5.17724C7.6249 5.17724 5.17969 7.6277 5.17969 10.6469C5.17969 13.6635 7.6249 16.1113 10.6441 16.1113C13.6633 16.1113 16.1111 13.6635 16.1111 10.6469C16.1111 7.6277 13.6633 5.17724 10.6441 5.17724Z" fill="url(#_9979_1237__paint2_linear_9979_1237)"></path><defs><lineargradient gradientunits="userSpaceOnUse" id="_9979_1237__paint0_linear_9979_1237" x1="0.190875" x2="19.5156" y1="21.0708" y2="1.74611"><stop stop-color="#FFD521"></stop><stop offset="0.05" stop-color="#FFD521"></stop><stop offset="0.501119" stop-color="#F50000"></stop><stop offset="0.95" stop-color="#B900B4"></stop><stop offset="0.950079" stop-color="#B900B4"></stop><stop offset="1" stop-color="#B900B4"></stop></lineargradient><lineargradient gradientunits="userSpaceOnUse" id="_9979_1237__paint1_linear_9979_1237" x1="0.192033" x2="19.5327" y1="21.0974" y2="1.75679"><stop stop-color="#FFD521"></stop><stop offset="0.05" stop-color="#FFD521"></stop><stop offset="0.501119" stop-color="#F50000"></stop><stop offset="0.95" stop-color="#B900B4"></stop><stop offset="0.950079" stop-color="#B900B4"></stop><stop offset="1" stop-color="#B900B4"></stop></lineargradient><lineargradient gradientunits="userSpaceOnUse" id="_9979_1237__paint2_linear_9979_1237" x1="0.197444" x2="19.5334" y1="21.0975" y2="1.76155"><stop stop-color="#FFD521"></stop><stop offset="0.05" stop-color="#FFD521"></stop><stop offset="0.501119" stop-color="#F50000"></stop><stop offset="0.95" stop-color="#B900B4"></stop><stop offset="0.950079" stop-color="#B900B4"></stop><stop offset="1" stop-color="#B900B4"></stop></lineargradient></defs></svg>
</div>
<span class="pointer-events-auto text" id="_9979_1241"><span id="__176">VIEW ON INSTAGRAM</span></span>
</div>
</div>
</a>

</div>


</div>
<div class="responsive-desktop" id="desktop-design">

<div class="dragScroll" id="__0">
<div class="dragScroll" id="__x2d_body">
<div id="navbar-container">
<a href="#" style="text-decoration:none;color:inherit;cursor:pointer;pointer-events:auto;"><span class="pointer-events-auto text" id="_9979_972"><span id="__1">HOME</span></span></a>
<a href="#about_section" style="text-decoration:none;color:inherit;cursor:pointer;pointer-events:auto;"><span class="pointer-events-auto text" id="_9979_973"><span id="__2">ABOUT</span></span></a>
<a href="#services_section" style="text-decoration:none;color:inherit;cursor:pointer;pointer-events:auto;"><span class="pointer-events-auto text" id="_9979_974"><span id="__3">SERVICES</span></span></a>
<a href="gallery.html" style="text-decoration:none;color:inherit;cursor:pointer;pointer-events:auto;"><span class="pointer-events-auto text" id="_9979_975"><span id="__4">WORKS</span></span></a>
<a href="#contact_section" id="navbar-contact-us" style="text-decoration:none;color:inherit;cursor:pointer;display:block;pointer-events:auto;">
<span class="pointer-events-auto text" id="_9979_977"><span id="__5">CONTACT US</span></span>
</a>
<div class="pointer-events-none" id="__7">
<img alt="ChatGPT Image Sep 21, 2026, 10_34_49 AM 2" decoding="async" fetchpriority="high" id="__6" src="images/img_24_9ba5aab8.png"/>
</div>
<div class="pointer-events-none" id="__8">
<img alt="ChatGPT Image Sep 21, 2026, 10_40_54 AM 2" decoding="async" fetchpriority="high" id="__9" src="images/img_25_c7687848.png"/>
</div>

</div>
<div id="home-image-slider-1">
<div id="Image_0">
<div class="pointer-events-none" id="__17">
<!-- HERO SLIDESHOW (desktop) -->
<div class="custom-slideshow hero-slideshow" style="position:absolute; inset:0; width:100%; height:100%; overflow:hidden; background:#111;">
  <div class="hero-overlay" aria-hidden="true"></div>
</div>
</div>
</div>
</div>
<span class="pointer-events-none text" id="_9979_539"><span id="__12">Sculpting Timeless<br id="__13"/>Architectural <br id="__14"/>Legacies</span></span>
<span class="pointer-events-none text" id="_9979_540"><span id="__15">Led by Dr. Ar. Sarath Sasi P and Co-Founder Jishana, delivering 480+ iconic residential, commercial, and interior landmarks across Bangalore and Kerala with engineering precision.<br id="__16"/></span></span>
<a href="#contact_section" id="Button" role="button" class="goto-contact">
<span class="pointer-events-none text" id="_9979_542"><span id="__19">REQUEST A QUOTE</span></span>
</a>
<div class="pointer-events-none" id="home-navigator-1">
</div>
<div class="pointer-events-none" id="home-navigator-2">
</div>
<div id="home_down_arrow_svg_0">
<div id="SVG">
<svg class="pointer-events-none" fill="none" height="28" id="Vector" preserveaspectratio="none" viewbox="0 0 53 28" width="53" xmlns="http://www.w3.org/2000/svg"><path d="M1.0625 1.06445L26.0625 26.0644L51.0625 1.06445" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.12766"></path></svg>
</div>
</div>
<div id="about_section">
<span class="pointer-events-none text" id="_9979_549"><span id="__20">ABOUT US</span></span>
<span class="pointer-events-none text" id="_9979_550"><span id="__21">Architectural Excellence &amp; Design Mastery <br id="__22"/>Since 2009</span></span>
<span class="pointer-events-none text" id="Heading_2_Led_by_Dr_Ar_Sarath_Sasi_P_PhD_in_Sustainable_Architecture_Univ_of_Greenwich_UK_B_Arch_B_Tech_Civil_Engineering_MBA_in_Project_Planning_Management_ARCHITECT_STUDIO_bridges_structural_engineering_rigor_with_world_class_interior_craftsmanship_"><span id="__23">Led by Dr. Ar. Sarath Sasi P (PhD in Sustainable Architecture – University of Greenwich, UK; B.Arch, B.Tech Civil Engineering, MBA in Project Planning &amp; Management) and Co-Founder Jishana, ARCHITECT STUDIO combines structural engineering expertise with world-class interior craftsmanship.<br id="__24"/></span></span>
<span class="pointer-events-none text" id="_9979_552"><span id="__25">With 480+ completed projects, 400+ design-driven landmarks, and 40+ trusted <br id="__26"/>contractors across Bangalore and Kerala, our firm is honored with National <br id="__27"/>Architecture &amp; Interior Design Awards for "Most Promising Interior Designer 2021" <br id="__28"/>and "Most Luxurious Interior Designer 2022".</span></span>
<div id="testimonials_section" class="founder-card-slider">
<div id="__46">
<div class="founder-slide active" data-slide="0">
<div id="Group_52">
<div class="pointer-events-none" id="Image" style="border-radius:50%;overflow:hidden;">
<img alt="Image" decoding="async" id="__29" loading="lazy" src="images/img_27_97e48d30.jpg" style="object-fit:cover;width:100%;height:100%;object-position:center top;transform:none !important;"/>
</div>
<span class="pointer-events-none text" id="Heading_2_Olly_Schroeder"><span id="__30">Dr. Ar. Sarath Sasi P</span></span>
<span class="pointer-events-none text" id="Heading_2_Olly_Schroeder_0"><span id="__31">Founder / Architect</span></span>
</div>
<span class="pointer-events-none text" id="_9979_559"><span id="__32">We believe that a house becomes a home <br id="__33"/>when it personalizes your space. It should <br id="__34"/>show off your tastes and personality, work <br id="__35"/>with your lifestyle, and maybe make your <br id="__36"/>guests a little jealous.</span></span>
</div>
<div class="founder-slide" data-slide="1">
<div id="Group_52">
<div class="pointer-events-none" id="Image" style="border-radius:50%;overflow:hidden;">
<img alt="Jishana Co-Founder" decoding="async" id="__29_co" loading="lazy" src="images/jishana_cofounder.jpg" style="object-fit:cover;width:100%;height:100%;object-position:center 20%;transform:none !important;"/>
</div>
<span class="pointer-events-none text" id="Heading_2_Olly_Schroeder"><span id="__30_co">Jishana</span></span>
<span class="pointer-events-none text" id="Heading_2_Olly_Schroeder_0"><span id="__31_co">Co-Founder</span></span>
</div>
<span class="pointer-events-none text" id="_9979_559"><span id="__32_co">Great architecture &amp; luxury interiors live at <br/>the intersection of functionality, warmth, <br/>and artistic detail. Every space we design <br/>tells a story unique to the people who <br/>call it home.</span></span>
</div>
</div>
</div>
<div id="about-salient-features">
<span class="pointer-events-none text" id="_9979_561"><span id="__37">OUR SALIENT FEATURES</span></span>
<div class="salient-marquee-wrapper" id="Container_0">
  <div class="salient-marquee-track">
    <div class="salient-track">
      <div class="pointer-events-none" id="__31_0">
        <img alt="ChatGPT Image Sep 21, 2026, 10_48_19 AM 1" decoding="async" id="__38" loading="lazy" src="images/img_6_9bf72b74.png"/>
      </div>
      <span class="pointer-events-none text" id="_9979_564"><span id="__39">Sustainable<br id="__40"/>Design</span></span>
      <div class="pointer-events-none" id="__34_0">
        <img alt="ChatGPT Image Sep 21, 2026, 10_48_19 AM 2" decoding="async" id="__41" loading="lazy" src="images/img_6_9bf72b74.png"/>
      </div>
      <span class="pointer-events-none text" id="_9979_566"><span id="__42">480+ Completed<br id="__43"/>Projects &amp; Villas</span></span>
      <div class="pointer-events-none" id="__37_0">
        <img alt="ChatGPT Image Sep 21, 2026, 10_48_19 AM 3" decoding="async" id="__44" loading="lazy" src="images/img_6_9bf72b74.png"/>
      </div>
      <span class="pointer-events-none text" id="_9979_568"><span id="__45">National Award Winner<br id="__47"/>2021 &amp; 2022 Excellence</span></span>
      <div class="pointer-events-none" id="__40_0">
        <img alt="ChatGPT Image Sep 21, 2026, 10_48_19 AM 4" decoding="async" id="__48" loading="lazy" src="images/img_6_9bf72b74.png"/>
      </div>
      <span class="pointer-events-none text" id="_9979_570"><span id="__49">Sustainable Architecture<br id="__50"/>PhD Certified </span></span>
      <div class="pointer-events-none" id="__43_0">
        <img alt="ChatGPT Image Sep 21, 2026, 10_48_19 AM 1" decoding="async" id="__51" loading="lazy" src="images/img_7_23b13d34.png"/>
      </div>
      <span class="pointer-events-none text" id="_9979_572"><span id="__52">40+ Expert Contractors<br id="__53"/>&amp; Turnkey Execution</span></span>
    </div>
    <div class="salient-track" aria-hidden="true">
      <div class="pointer-events-none" id="__31_0">
        <img alt="ChatGPT Image Sep 21, 2026, 10_48_19 AM 1" decoding="async" id="__38" loading="lazy" src="images/img_6_9bf72b74.png"/>
      </div>
      <span class="pointer-events-none text" id="_9979_564"><span id="__39">Sustainable<br id="__40"/>Design</span></span>
      <div class="pointer-events-none" id="__34_0">
        <img alt="ChatGPT Image Sep 21, 2026, 10_48_19 AM 2" decoding="async" id="__41" loading="lazy" src="images/img_6_9bf72b74.png"/>
      </div>
      <span class="pointer-events-none text" id="_9979_566"><span id="__42">480+ Completed<br id="__43"/>Projects &amp; Villas</span></span>
      <div class="pointer-events-none" id="__37_0">
        <img alt="ChatGPT Image Sep 21, 2026, 10_48_19 AM 3" decoding="async" id="__44" loading="lazy" src="images/img_6_9bf72b74.png"/>
      </div>
      <span class="pointer-events-none text" id="_9979_568"><span id="__45">National Award Winner<br id="__47"/>2021 &amp; 2022 Excellence</span></span>
      <div class="pointer-events-none" id="__40_0">
        <img alt="ChatGPT Image Sep 21, 2026, 10_48_19 AM 4" decoding="async" id="__48" loading="lazy" src="images/img_6_9bf72b74.png"/>
      </div>
      <span class="pointer-events-none text" id="_9979_570"><span id="__49">Sustainable Architecture<br id="__50"/>PhD Certified </span></span>
      <div class="pointer-events-none" id="__43_0">
        <img alt="ChatGPT Image Sep 21, 2026, 10_48_19 AM 1" decoding="async" id="__51" loading="lazy" src="images/img_7_23b13d34.png"/>
      </div>
      <span class="pointer-events-none text" id="_9979_572"><span id="__52">40+ Expert Contractors<br id="__53"/>&amp; Turnkey Execution</span></span>
    </div>
  </div>
</div>
</div>
</div>
<span class="pointer-events-none" id="Horizontal_Divider"></span>
<span class="pointer-events-none text" id="_9979_574"><span id="__54">Services</span></span>
<div id="Group_48">
<div id="promo_video_section">
<span class="pointer-events-none text" id="_9979_577"><span id="__55">Crafting spaces,<br id="__56"/>inspiring generations.</span></span>
<span class="pointer-events-none text" id="_9979_578"><span id="__57">Sustainable architecture and bespoke luxury interiors engineered <br id="__58"/>with mathematical precision and timeless design sensibility.</span></span>
<span class="text goto-contact quote-link" id="_9979_579" role="link" tabindex="0"><span id="__59">Request a Quote</span></span>
<svg class="pointer-events-none" fill="none" height="32" id="SVG_0" preserveaspectratio="none" viewbox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M15.9975 29.3326C23.3612 29.3326 29.3307 23.3631 29.3307 15.9994C29.3307 8.63555 23.3612 2.66602 15.9975 2.66602C8.6336 2.66602 2.66406 8.63555 2.66406 15.9994C2.66406 23.3631 8.6336 29.3326 15.9975 29.3326Z" fill="#195677" stroke="#195677" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.28571"></path><path d="M16 21.3346L21.3334 16.0014L16 10.668" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.28571"></path><path d="M10.6641 16H21.3307" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.28571"></path></svg>
<div class="pointer-events-none" id="promo-video-container">
<div class="custom-slideshow" style="position: absolute; inset: 0; width: 100%; height: 100%; border-radius: 12px; overflow: hidden;">
  <img src="images/multiple.jpeg" class="slide" style="position: absolute; width: 100%; height: 100%; object-fit: cover; transition: opacity 1.5s ease-in-out; opacity: 1;">
  <img src="images/Award Winner on a Vibrant Red Carpet.png" class="slide" style="position: absolute; width: 100%; height: 100%; object-fit: cover; transition: opacity 1.5s ease-in-out; opacity: 0;">
  <img src="images/certificte.png" class="slide" style="position: absolute; width: 100%; height: 100%; object-fit: cover; transition: opacity 1.5s ease-in-out; opacity: 0;">
</div>
</div>
<div id="Image_2">
<div class="pointer-events-none" id="__14_0">
<img alt="Image" decoding="async" id="__61" loading="lazy" src="images/img_26_3fbdda77.png"/>
</div>
</div>

</div>
<div id="services_section">
<span class="pointer-events-none text" id="_9979_591"><span id="__64">SERVICES</span></span>
<span class="pointer-events-none text" id="_9979_592"><span id="__65">What we can do for you</span></span>
<div id="Background_Border">
<svg class="pointer-events-none" fill="none" height="82" id="SVG_1" preserveaspectratio="none" viewbox="0 0 82 82" width="82" xmlns="http://www.w3.org/2000/svg"><path d="M20.5 12.8125C20.5 12.1329 20.77 11.4811 21.2505 11.0005C21.7311 10.52 22.3829 10.25 23.0625 10.25H28.1875C28.8671 10.25 29.5189 10.52 29.9995 11.0005C30.48 11.4811 30.75 12.1329 30.75 12.8125V17.9375C30.75 18.6171 30.48 19.2689 29.9995 19.7495C29.5189 20.23 28.8671 20.5 28.1875 20.5H23.0625C22.3829 20.5 21.7311 20.23 21.2505 19.7495C20.77 19.2689 20.5 18.6171 20.5 17.9375V12.8125ZM35.875 12.8125C35.875 12.1329 36.145 11.4811 36.6255 11.0005C37.1061 10.52 37.7579 10.25 38.4375 10.25H43.5625C44.2421 10.25 44.8939 10.52 45.3745 11.0005C45.855 11.4811 46.125 12.1329 46.125 12.8125V17.9375C46.125 18.6171 45.855 19.2689 45.3745 19.7495C44.8939 20.23 44.2421 20.5 43.5625 20.5H38.4375C37.7579 20.5 37.1061 20.23 36.6255 19.7495C36.145 19.2689 35.875 18.6171 35.875 17.9375V12.8125ZM53.8125 10.25C53.1329 10.25 52.4811 10.52 52.0005 11.0005C51.52 11.4811 51.25 12.1329 51.25 12.8125V17.9375C51.25 18.6171 51.52 19.2689 52.0005 19.7495C52.4811 20.23 53.1329 20.5 53.8125 20.5H58.9375C59.6171 20.5 60.2689 20.23 60.7495 19.7495C61.23 19.2689 61.5 18.6171 61.5 17.9375V12.8125C61.5 12.1329 61.23 11.4811 60.7495 11.0005C60.2689 10.52 59.6171 10.25 58.9375 10.25H53.8125ZM20.5 28.1875C20.5 27.5079 20.77 26.8561 21.2505 26.3755C21.7311 25.895 22.3829 25.625 23.0625 25.625H28.1875C28.8671 25.625 29.5189 25.895 29.9995 26.3755C30.48 26.8561 30.75 27.5079 30.75 28.1875V33.3125C30.75 33.9921 30.48 34.6439 29.9995 35.1245C29.5189 35.605 28.8671 35.875 28.1875 35.875H23.0625C22.3829 35.875 21.7311 35.605 21.2505 35.1245C20.77 34.6439 20.5 33.9921 20.5 33.3125V28.1875ZM38.4375 25.625C37.7579 25.625 37.1061 25.895 36.6255 26.3755C36.145 26.8561 35.875 27.5079 35.875 28.1875V33.3125C35.875 33.9921 36.145 34.6439 36.6255 35.1245C37.1061 35.605 37.7579 35.875 38.4375 35.875H43.5625C44.2421 35.875 44.8939 35.605 45.3745 35.1245C45.855 34.6439 46.125 33.9921 46.125 33.3125V28.1875C46.125 27.5079 45.855 26.8561 45.3745 26.3755C44.8939 25.895 44.2421 25.625 43.5625 25.625H38.4375ZM51.25 28.1875C51.25 27.5079 51.52 26.8561 52.0005 26.3755C52.4811 25.895 53.1329 25.625 53.8125 25.625H58.9375C59.6171 25.625 60.2689 25.895 60.7495 26.3755C61.23 26.8561 61.5 27.5079 61.5 28.1875V33.3125C61.5 33.9921 61.23 34.6439 60.7495 35.1245C60.2689 35.605 59.6171 35.875 58.9375 35.875H53.8125C53.1329 35.875 52.4811 35.605 52.0005 35.1245C51.52 34.6439 51.25 33.9921 51.25 33.3125V28.1875ZM23.0625 41C22.3829 41 21.7311 41.27 21.2505 41.7505C20.77 42.2311 20.5 42.8829 20.5 43.5625V48.6875C20.5 49.3671 20.77 50.0189 21.2505 50.4995C21.7311 50.98 22.3829 51.25 23.0625 51.25H28.1875C28.8671 51.25 29.5189 50.98 29.9995 50.4995C30.48 50.0189 30.75 49.3671 30.75 48.6875V43.5625C30.75 42.8829 30.48 42.2311 29.9995 41.7505C29.5189 41.27 28.8671 41 28.1875 41H23.0625ZM35.875 43.5625C35.875 42.8829 36.145 42.2311 36.6255 41.7505C37.1061 41.27 37.7579 41 38.4375 41H43.5625C44.2421 41 44.8939 41.27 45.3745 41.7505C45.855 42.2311 46.125 42.8829 46.125 43.5625V48.6875C46.125 49.3671 45.855 50.0189 45.3745 50.4995C44.8939 50.98 44.2421 51.25 43.5625 51.25H38.4375C37.7579 51.25 37.1061 50.98 36.6255 50.4995C36.145 50.0189 35.875 49.3671 35.875 48.6875V43.5625ZM53.8125 41C53.1329 41 52.4811 41.27 52.0005 41.7505C51.52 42.2311 51.25 42.8829 51.25 43.5625V48.6875C51.25 49.3671 51.52 50.0189 52.0005 50.4995C52.4811 50.98 53.1329 51.25 53.8125 51.25H58.9375C59.6171 51.25 60.2689 50.98 60.7495 50.4995C61.23 50.0189 61.5 49.3671 61.5 48.6875V43.5625C61.5 42.8829 61.23 42.2311 60.7495 41.7505C60.2689 41.27 59.6171 41 58.9375 41H53.8125Z" fill="black"></path><path d="M10.25 5.125C10.25 3.76577 10.79 2.4622 11.7511 1.50108C12.7122 0.539954 14.0158 0 15.375 0H66.625C67.9842 0 69.2878 0.539954 70.2489 1.50108C71.21 2.4622 71.75 3.76577 71.75 5.125V76.875C71.75 78.2342 71.21 79.5378 70.2489 80.4989C69.2878 81.46 67.9842 82 66.625 82H15.375C14.0158 82 12.7122 81.46 11.7511 80.4989C10.79 79.5378 10.25 78.2342 10.25 76.875V5.125ZM66.625 5.125H15.375V76.875H30.75V64.0625C30.75 63.3829 31.02 62.7311 31.5005 62.2505C31.9811 61.77 32.6329 61.5 33.3125 61.5H48.6875C49.3671 61.5 50.0189 61.77 50.4995 62.2505C50.98 62.7311 51.25 63.3829 51.25 64.0625V76.875H66.625V5.125Z" fill="black"></path></svg>
<span class="pointer-events-none text" id="_9979_597"><span id="__66">Architectural <br id="__67"/>Planning</span></span>
<span class="pointer-events-none text" id="_9979_598"><span id="__68">Master planning, 3D structural <br id="__69"/>analysis, sustainable biophilic <br id="__70"/>design, and statutory municipal <br id="__71"/>approvals for luxury estates.</span></span>
</div>
<div id="Background_Border_0">
<svg class="pointer-events-none" fill="none" height="92" id="SVG_2" preserveaspectratio="none" viewbox="0 0 92 92" width="92" xmlns="http://www.w3.org/2000/svg"><path d="M70.4375 5.75C67.9679 5.75 65.4235 6.57513 63.4915 8.50713C61.548 10.4506 60.375 13.3601 60.375 17.25V17.3506C57.9797 17.6964 55.7892 18.8938 54.2051 20.7234C52.621 22.5531 51.7494 24.8924 51.75 27.3125V35.9375C51.75 36.3187 51.9014 36.6844 52.171 36.954C52.4406 37.2236 52.8063 37.375 53.1875 37.375H70.4375C70.8187 37.375 71.1844 37.2236 71.454 36.954C71.7236 36.6844 71.875 36.3187 71.875 35.9375V27.3125C71.8756 24.8924 71.004 22.5531 69.4199 20.7234C67.8358 18.8938 65.6453 17.6964 63.25 17.3506V17.25C63.25 13.9524 64.2333 11.8335 65.5241 10.5397C66.8265 9.23737 68.5975 8.625 70.4375 8.625C72.2775 8.625 74.0485 9.23737 75.3509 10.5397C76.6446 11.8335 77.625 13.9524 77.625 17.25V79.212C75.1122 79.7525 73.3298 81.7046 72.5938 84.2346C72.5938 84.2346 71.875 86.25 73.3125 86.25H84.8125C86.25 86.25 85.5312 84.2375 85.5312 84.2375C84.7952 81.7075 83.0128 79.7525 80.5 79.212V17.25C80.5 13.3601 79.327 10.4506 77.3835 8.50713C75.4515 6.57513 72.91 5.75 70.4375 5.75Z" fill="black"></path><path d="M8.625 51.75C8.625 50.225 9.2308 48.7625 10.3091 47.6841C11.3875 46.6058 12.85 46 14.375 46H35.9375C36.984 46 37.9673 46.2789 38.8125 46.7705C39.6866 46.2658 40.6782 46 41.6875 46H63.25C64.775 46 66.2375 46.6058 67.3159 47.6841C68.3942 48.7625 69 50.225 69 51.75V57.983C70.6991 58.7909 71.875 60.5245 71.875 62.5312V80.5C71.875 81.2625 71.5721 81.9938 71.0329 82.5329C70.4938 83.0721 69.7625 83.375 69 83.375V85.5312C69 85.7219 68.9243 85.9047 68.7895 86.0395C68.6547 86.1743 68.4719 86.25 68.2812 86.25H63.9688C63.7781 86.25 63.5953 86.1743 63.4605 86.0395C63.3257 85.9047 63.25 85.7219 63.25 85.5312V83.375H14.375V85.5312C14.375 85.7219 14.2993 85.9047 14.1645 86.0395C14.0297 86.1743 13.8469 86.25 13.6562 86.25H9.34375C9.15313 86.25 8.97031 86.1743 8.83552 86.0395C8.70073 85.9047 8.625 85.7219 8.625 85.5312V83.375C7.8625 83.375 7.13123 83.0721 6.59207 82.5329C6.0529 81.9938 5.75 81.2625 5.75 80.5V62.5312C5.75 60.5245 6.92587 58.7937 8.625 57.983V51.75ZM63.25 51.75H40.25V66.125H61.8125V62.5312C61.8125 61.1599 62.3587 59.915 63.25 59.0094V51.75ZM15.8125 71.875V77.625H61.8125V71.875H15.8125ZM15.8125 66.125H37.375V51.75H14.375V59.0094C15.2663 59.9179 15.8125 61.1599 15.8125 62.5312V66.125Z" fill="black"></path></svg>
<span class="pointer-events-none text" id="_9979_603"><span id="__72">Interior <br id="__73"/>Design</span></span>
<span class="pointer-events-none text" id="_9979_604"><span id="__74">Award-winning bespoke interiors, <br id="__75"/>custom Italian joinery, handpicked <br id="__76"/>materials, curated art, and atmospheric <br id="__77"/>lighting choreography.</span></span>
</div>
<div id="Background_Border_1">
<div id="fa_brands_houzz">
<div id="SVG_3">
<svg class="pointer-events-none" fill="none" height="67" id="Vector_0" preserveaspectratio="none" viewbox="0 0 62 67" width="62" xmlns="http://www.w3.org/2000/svg"><path d="M38.6316 44.3589H23.0238V66.531H0V0H16.339V15.5189L61.8643 28.2311V66.531H38.6316V44.3589Z" fill="black"></path></svg>
</div>
</div>
<span class="pointer-events-none text" id="_9979_609"><span id="__78">Renovation &amp; <br id="__79"/>Remodeling</span></span>
<span class="pointer-events-none text" id="_9979_610"><span id="__80">Reliable construction and remodeling services, delivering quality workmanship and durable spaces built to your needs.</span></span>
</div>
<div id="Background_Border_2">
<div id="pinhead_commercial_building">
<div id="SVG_4">
<svg class="pointer-events-none" fill="none" height="68" id="Vector_1" preserveaspectratio="none" viewbox="0 0 80 68" width="80" xmlns="http://www.w3.org/2000/svg"><path d="M79.7632 24.5273H0C0.552207 16.0654 2.63832 7.72611 6.13563 0H73.6276C77.1249 7.72611 79.211 16.0654 79.7632 24.5273ZM12.2713 30.6592H67.492V67.4502H61.3563V36.791H42.9494V67.4502H12.2713V30.6592ZM18.4069 49.0547H36.8138V36.791H18.4069V49.0547Z" fill="black"></path></svg>
</div>
</div>
<span class="pointer-events-none text" id="_9979_615"><span id="__81">Commercial &amp; <br id="__82"/>Hospitality</span></span>
<span class="pointer-events-none text" id="_9979_616"><span id="__83">Inspiring commercial spaces, boutique hotels, upscale <br id="__84"/>restaurants, and corporate headquarters engineered for <br id="__85"/>productivity and brand distinction.</span></span>
</div>
<div id="Background_Border_3">
<div id="dinkie_icons_building_construction">
<div id="SVG_5">
<svg class="pointer-events-none" fill="none" height="85" id="Vector_2" preserveaspectratio="none" viewbox="0 0 85 85" width="85" xmlns="http://www.w3.org/2000/svg"><path d="M61.0755 53.6667H53.4089V61.3333H45.7422V69H84.0755V61.3333H76.4089V53.6667H68.7422V61.3333H61.0755V53.6667ZM61.0755 53.6667H68.7422V23H84.0755V15.3333H30.4089V0H22.7422V15.3333H-0.257812V30.6667H15.0755V23H22.7422V38.3333H30.4089V23H61.0755V53.6667ZM15.0755 84.3333H38.0755V38.3333H30.4089V46H22.7422V38.3333H15.0755V84.3333ZM22.7422 76.6667V69H30.4089V76.6667H22.7422ZM22.7422 61.3333V53.6667H30.4089V61.3333H22.7422Z" fill="black"></path></svg>
</div>
</div>
<span class="pointer-events-none text" id="_9979_621"><span id="__86">Turnkey <br id="__87"/>Construction</span></span>
<span class="pointer-events-none text" id="_9979_622"><span id="__88">Precision civil execution, structural integrity, premium <br id="__89"/>material sourcing, and milestone delivery backed by 40+ <br id="__90"/>trusted contractors.</span></span>
</div>

</div>
<div id="testimonials_section_0">
<div class="pointer-events-none" id="Image_6">
</div>
<div id="Group_42">

<div id="Content_0"><img alt="Gallery Villa" decoding="async" loading="lazy" src="gallery-images/alcove_img_2.jpg" style="width:100%;height:100%;object-fit:cover;display:block;"/></div>
<div id="Image_10">
<div class="pointer-events-none" id="__92_0">
<img alt="Image" decoding="async" id="__106" loading="lazy" src="gallery-images/alcove_img_2.jpg"/>
</div>
</div>
<div id="Content_8"><img alt="Gallery Villa" decoding="async" loading="lazy" src="gallery-images/alcove_img_5.jpg" style="width:100%;height:100%;object-fit:cover;display:block;"/></div>
</div>
<div id="Group_43">
<div class="pointer-events-none" id="__78_1">
<img alt="Image" decoding="async" id="__107" loading="lazy" src="gallery-images/alcove_img_3.jpg"/>
</div>
<div class="pointer-events-none" id="__78_2">
<img alt="Image" decoding="async" id="__108" loading="lazy" src="gallery-images/alcove_img_5.jpg"/>
</div>
<div id="Content_0_0"><img alt="Gallery Villa" decoding="async" loading="lazy" src="gallery-images/alcove_img_8.jpg" style="width:100%;height:100%;object-fit:cover;display:block;"/></div>
<div id="Content_0_1"><img alt="Gallery Villa" decoding="async" loading="lazy" src="gallery-images/alcove_img_9.jpg" style="width:100%;height:100%;object-fit:cover;display:block;"/></div>
<div id="Content_8_0"><img alt="Gallery Villa" decoding="async" loading="lazy" src="gallery-images/alcove_img_14.jpg" style="width:100%;height:100%;object-fit:cover;display:block;"/></div>
</div>
<div id="Group_44">
<div class="pointer-events-none" id="__84_0">
<img alt="Image" decoding="async" id="__123" loading="lazy" src="gallery-images/alcove_img_6.jpg"/>
</div>
<div class="pointer-events-none" id="__84_1">
<img alt="Image" decoding="async" id="__124" loading="lazy" src="gallery-images/alcove_img_7.jpg"/>
</div>
<div class="pointer-events-none" id="__85_0">
<img alt="Image" decoding="async" id="__125" loading="lazy" src="gallery-images/alcove_img_8.jpg"/>
</div>
<div class="pointer-events-none" id="__85_1">
<img alt="Image" decoding="async" id="__126" loading="lazy" src="gallery-images/alcove_img_9.jpg"/>
</div>
<div id="Content_4"><img alt="Gallery Villa" decoding="async" loading="lazy" src="gallery-images/alcove_img_15.jpg" style="width:100%;height:100%;object-fit:cover;display:block;"/></div>
<div id="Content_4_0"><img alt="Gallery Villa" decoding="async" loading="lazy" src="gallery-images/alcove_img_5.jpg" style="width:100%;height:100%;object-fit:cover;display:block;"/></div><div id="Image_9">
<div class="pointer-events-none" id="__91_0">
<img alt="Image" decoding="async" id="__141" loading="lazy" src="gallery-images/alcove_img_10.jpg"/>
</div>
</div>
<div id="Image_9_0">
<div class="pointer-events-none" id="__91_1">
<img alt="Image" decoding="async" id="__142" loading="lazy" src="gallery-images/alcove_img_11.jpg"/>
</div>
</div>
<div id="Image_10_0">
<div class="pointer-events-none" id="__92_1">
<img alt="Image" decoding="async" id="__143" loading="lazy" src="gallery-images/alcove_img_12.jpg"/>
</div>
</div>
<div id="Image_12">
<div class="pointer-events-none" id="__93_0">
<img alt="Image" decoding="async" id="__144" loading="lazy" src="gallery-images/alcove_img_13.jpg"/>
</div>
</div>
<div id="Image_13">
<div class="pointer-events-none" id="__94_0">
<img alt="Image" decoding="async" id="__145" loading="lazy" src="gallery-images/alcove_img_14.jpg"/>
</div>
</div>
<div id="Content_11"><img alt="Gallery Villa" decoding="async" loading="lazy" src="gallery-images/alcove_img_18.jpg" style="width:100%;height:100%;object-fit:cover;display:block;"/></div>
<div id="Image_15">
<div class="pointer-events-none" id="__95_0">
<img alt="Image" decoding="async" id="__146" loading="lazy" src="gallery-images/alcove_img_15.jpg"/>
</div>
</div>
</div>
<a href="gallery.html" id="Button_2" role="button" style="text-decoration:none;">
<span class="pointer-events-none text" id="_9979_726"><span id="__147">VIEW ALL WORKS</span></span>
</a>
<span class="pointer-events-none text" id="_9979_727"><span id="__148">Works</span></span>
<span class="pointer-events-none text" id="_9979_728"><span id="__149">Explore Our Works</span></span>
</div>
<div id="meet_the_team_section_desktop">
<span class="pointer-events-none text team-section-overline"><span>MEET THE TEAM</span></span>
<span class="pointer-events-none text team-section-heading"><span>Leadership &amp; Key Partners</span></span>
<div class="team-cards-grid">
<div class="team-card">
<div class="team-card-image">
<img alt="Dr. Ar. Sarath Sasi P - Founder" decoding="async" loading="lazy" src="images/img_27_97e48d30.jpg" style="object-position: center top;" />
</div>
<div class="team-card-info">
<span class="team-member-name">Dr. Ar. Sarath Sasi P</span>
<span class="team-member-role">Founder / Architect</span>
</div>
</div>
<div class="team-card">
<div class="team-card-image">
<img alt="Ms. Jishana - Co-Founder" decoding="async" loading="lazy" src="images/jishana_cofounder.jpg" style="object-position: center 20%;" />
</div>
<div class="team-card-info">
<span class="team-member-name">Ms. Jishana</span>
<span class="team-member-role">Co-Founder</span>
</div>
</div>
<div class="team-card">
<div class="team-card-image">
<img alt="Mr. Justin - Managing Director / Studio Director" decoding="async" loading="lazy" src="images/justin.png" style="object-position: center 20%;" />
</div>
<div class="team-card-info">
<span class="team-member-name">Mr. Justin</span>
<span class="team-member-role">Managing Director / Studio Director</span>
</div>
</div>
<div class="team-card">
<div class="team-card-image">
<img alt="Mr. Sreerag - Product Manager" decoding="async" loading="lazy" src="images/sreerag.jpg" style="object-position: center top;" />
</div>
<div class="team-card-info">
<span class="team-member-name">Mr. Sreerag</span>
<span class="team-member-role">Business Development Director </span>
</div>
</div>
<div class="team-card">
<div class="team-card-image">
<img alt="Ms. Akhila - Head of Interior Design" decoding="async" loading="lazy" src="images/akhila.jpg" style="object-position: center 15%;" />
</div>
<div class="team-card-info">
<span class="team-member-name">Ms. Akhila</span>
<span class="team-member-role">Head of Interior Design</span>
</div>
</div>
<div class="team-card">
<div class="team-card-image">
<img alt="Mr. Athul - Project Coordinator" decoding="async" loading="lazy" src="images/athul.png" style="object-position: center 15%;" />
</div>
<div class="team-card-info">
<span class="team-member-name">Mr. Athul</span>
<span class="team-member-role">Project Coordinator</span>
</div>
</div>
<div class="team-card">
<div class="team-card-image">
<img alt="edrope - Digital Partner" decoding="async" loading="lazy" src="images/edrope.jpg" style="object-position: center;" />
</div>
<div class="team-card-info">
<span class="team-member-name">edrope</span>
<span class="team-member-role">Digital Partner</span>
</div>
</div>
</div>
</div>
<div id="brands_we_use_section_desktop">
<span class="pointer-events-none text brands-section-overline"><span>BRANDS WE USE</span></span>
<span class="pointer-events-none text brands-section-heading"><span>Premium Materials &amp; Hardware</span></span>
<div class="brands-marquee-wrapper" id="brands_marquee_desktop">
  <div class="brands-marquee-track">
    <!-- filled automatically by brands-loader.js from images/brands/1.png, 2.jpg ... -->
  </div>
</div>
</div>
<div id="testimonials_section_1">
<span id="Heading_2_TESTIMONIALS"><span class="pointer-events-none text" id="_9979_735"><span id="__150">TESTIMONIALS</span></span></span>
<span id="Heading_2_What_Our_Clients_Say"><span class="pointer-events-none text" id="_9979_741"><span id="__151">What Our Clients Say</span></span></span>
<div id="testimonial-cards-container" style="display: flex; gap: 40px; justify-content: space-between; align-items: stretch;">
  <div style="flex: 1; display: flex; flex-direction: column; gap: 20px;">
    <span style="color: #fff; font-family: Poppins, sans-serif; font-size: 18px; line-height: 32px; white-space: normal;">“We approached ARCHITECH for our home interior and loved the transformation. The modern, elegant design feels comfortable, while excellent material selection, attention to detail, and finishing made the experience exceptional.”</span>
    <div style="display: flex; align-items: center; gap: 15px; margin-top: 20px;">
      <span style="color: #fff; font-family: Poppins, sans-serif; font-size: 18px; font-weight: 600;">Harindra Singh</span>
    </div>
  </div>

  <div style="flex: 1; display: flex; flex-direction: column; gap: 20px;">
    <span style="color: #fff; font-family: Poppins, sans-serif; font-size: 18px; line-height: 32px; white-space: normal;">“ARCHITECH beautifully transformed our old house into a fresh, modern space. They understood our needs, respected its character, and delivered excellent execution. We highly recommend their team.”</span>
    <div style="display: flex; align-items: center; gap: 15px; margin-top: 20px;">
      <span style="color: #fff; font-family: Poppins, sans-serif; font-size: 18px; font-weight: 600;">Rohith Kumar</span>
    </div>
  </div>

  <div style="flex: 1; display: flex; flex-direction: column; gap: 20px;">
    <span style="color: #fff; font-family: Poppins, sans-serif; font-size: 18px; line-height: 32px; white-space: normal;">“Really happy with ARCHITECH’s work. They understood our ideas, added thoughtful design inputs, and executed everything beautifully. Professional, responsive, and detail-oriented, they transformed our home into a space we truly love.”</span>
    <div style="display: flex; align-items: center; gap: 15px; margin-top: 20px;">
      <span style="color: #fff; font-family: Poppins, sans-serif; font-size: 18px; font-weight: 600;">Mayank Singh</span>
    </div>
  </div>
</div>
</div>
<div id="contact_section">
<div id="Image_20">
<div class="pointer-events-none" id="__137_0">
<img alt="Image" decoding="async" id="__173" loading="lazy" src="images/img_35_29ec0a3a.png"/>
</div>
</div>
<span class="pointer-events-none text" id="_9979_768"><span id="__174">CONTACT US</span></span>
<span class="pointer-events-none text" id="_9979_769"><span id="__175">Let's Discuss Your<br id="__176"/>Architectural Dream</span></span>
<span class="pointer-events-none text" id="_9979_770"><span id="__177">Ready to design an extraordinary home, <br id="__178"/>commercial project, or luxury interior? <br id="__179"/>Contact Dr. Ar. Sarath Sasi P and our <br id="__180"/>design studio today.</span></span>
<div id="phone_svg">
<div id="SVG_11">
<svg class="pointer-events-none" fill="none" height="35" id="Vector_3" preserveaspectratio="none" viewbox="0 0 35 35" width="35" xmlns="http://www.w3.org/2000/svg"><path d="M32.7684 24.9049V29.6522C32.7702 30.0929 32.6799 30.5291 32.5034 30.9329C32.3268 31.3367 32.0678 31.6992 31.7431 31.9972C31.4183 32.2951 31.035 32.5219 30.6175 32.6631C30.2 32.8043 29.7576 32.8567 29.3187 32.8171C24.4493 32.288 19.7719 30.624 15.6623 27.9591C11.839 25.5295 8.59734 22.2878 6.16778 18.4645C3.49344 14.3363 1.82914 9.63608 1.30973 4.74477C1.27017 4.30718 1.32218 3.86615 1.46242 3.44975C1.60267 3.03336 1.82807 2.65073 2.1243 2.32623C2.42053 2.00172 2.78106 1.74245 3.18298 1.56492C3.58489 1.38739 4.01938 1.29549 4.45875 1.29508H9.20603C9.97396 1.28752 10.7185 1.55946 11.3008 2.06024C11.883 2.561 12.2634 3.25641 12.3709 4.01686C12.5713 5.5361 12.9428 7.02775 13.4785 8.4635C13.6915 9.02989 13.7376 9.6454 13.6114 10.2372C13.4851 10.829 13.1919 11.3722 12.7664 11.8024L10.7568 13.8121C13.0095 17.7738 16.2896 21.054 20.2514 23.3066L22.261 21.297C22.6914 20.8715 23.2346 20.5783 23.8263 20.4522C24.4181 20.3259 25.0335 20.372 25.6 20.5849C27.0357 21.1206 28.5274 21.4922 30.0466 21.6927C30.8153 21.8011 31.5173 22.1883 32.0191 22.7805C32.5209 23.3728 32.7877 24.1289 32.7684 24.9049Z" stroke="#0072AC" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.58943"></path></svg>
</div>
</div>
<span class="pointer-events-none text" id="_9979_774"><span id="__181">Call Us</span></span>
<a class="text contact-num" id="_9979_775" href="https://wa.me/916235506520" target="_blank" rel="noopener"><span id="__182">+91 62355 06520</span></a>
<a class="text contact-num" id="_9979_776" href="tel:+919746201737"><span id="__183">+91 97462 01737</span></a>
<div id="Image_22">
<svg class="pointer-events-none" fill="none" height="38" id="SVG_12" preserveaspectratio="none" viewbox="0 0 36 38" width="36" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#_9979_778__clip0_9979_778)"><path d="M4.86197 5.83398H30.1954C31.937 5.83398 33.362 7.25898 33.362 9.00067V28.0007C33.362 29.7423 31.937 31.1673 30.1954 31.1673H4.86197C3.12031 31.1673 1.69531 29.7423 1.69531 28.0007V9.00067C1.69531 7.25898 3.12031 5.83398 4.86197 5.83398Z" stroke="#0072AC" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.59091"></path><path d="M33.362 9L17.5287 20.0833L1.69531 9" stroke="#0072AC" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.59091"></path></g><defs><clippath id="_9979_778__clip0_9979_778"><rect fill="white" height="38" transform="translate(0 -0.5)" width="36"></rect></clippath></defs></svg>
</div>
<span class="pointer-events-none text" id="_9979_781"><span id="__184">Email</span></span>
<span class="pointer-events-none text" id="_9979_782"><span id="__185">sarath@architectstudio.in</span></span>
<div id="Image_23" class="loc-row">
<svg class="pointer-events-none" fill="none" height="38" id="SVG_13" preserveaspectratio="none" viewbox="0 0 36 38" width="36" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#_9979_784__clip0_9979_784)"><path d="M31.7812 15.334C31.7812 26.4173 17.5313 35.9173 17.5313 35.9173C17.5313 35.9173 3.28125 26.4173 3.28125 15.334C3.28125 11.5546 4.78258 7.9301 7.45498 5.25771C10.1274 2.58531 13.7519 1.08398 17.5313 1.08398C21.3107 1.08398 24.935 2.58531 27.6074 5.25771C30.2798 7.9301 31.7812 11.5546 31.7812 15.334Z" stroke="#0072AC" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.71429"></path><path d="M17.5313 20.083C20.1547 20.083 22.2813 17.9564 22.2813 15.333C22.2813 12.7097 20.1547 10.583 17.5313 10.583C14.9079 10.583 12.7812 12.7097 12.7812 15.333C12.7812 17.9564 14.9079 20.083 17.5313 20.083Z" stroke="#0072AC" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.71429"></path></g><defs><clippath id="_9979_784__clip0_9979_784"><rect fill="white" height="38" transform="translate(0 -0.5)" width="36"></rect></clippath></defs></svg>
<span class="loc-text"><span class="loc-title">We are located at</span><span class="loc-places">Kerala, Wayanad, Kozhikode, Karnataka (Bangalore), Hyderabad, Dubai, UK</span></span>
</div>
<div id="Background_Border_4">
<span class="pointer-events-none text" id="_9979_791"><span id="__193">First Name*</span></span>
<input id="firstName" type="text" value=""/>
<span class="pointer-events-none text" id="_9979_793"><span id="__194">Last Name</span></span>
<input id="lastName" type="text" value=""/>
<span class="pointer-events-none text" id="_9979_795"><span id="__195">Email*</span></span>
<input id="email" type="text" value=""/>
<span class="pointer-events-none text" id="_9979_797"><span id="__196">Phone Number*</span></span>
<input id="phone" type="text" value=""/>
<span class="pointer-events-none text" id="_9979_799"><span id="__197">Company</span></span>
<input id="companyName" type="text" value=""/>
<span class="pointer-events-none text" id="_9979_801"><span id="__198">Service looking for?</span></span>
<div class="pointer-events-none" id="contact-role" style="pointer-events:auto !important;">
<input id="service" type="text" list="service-list-m" placeholder="Type or choose a service" autocomplete="off" style="width:100%;height:100%;box-sizing:border-box;pointer-events:auto !important;background:transparent;border:0;outline:0;font:inherit;color:inherit;padding:0 12px;"/>
<datalist id="service-list-m"><option value="Architectural Planning"></option><option value="Interior Design"></option><option value="Renovation &amp; Remodeling"></option><option value="Commercial &amp; Hospitality"></option><option value="Turnkey Construction"></option></datalist>
</div>
<span class="pointer-events-none text" id="_9979_803"><span id="__199">Message*</span></span>
<input id="message" type="text" value=""/>
<button id="Button_3">
<span class="pointer-events-none text" id="_9979_806"><span id="__200">SUBMIT</span></span>
</button>
</div>
</div>
<div id="Frame_40">
<span class="pointer-events-none text" id="_9979_808"><span id="__201">Architectural Planning</span></span>
<span class="pointer-events-none text" id="_9979_809"><span id="__202">Interior Design</span></span>
<span class="pointer-events-none text" id="_9979_810"><span id="__203">Renovation &amp; Remodeling</span></span>
<span class="pointer-events-none text" id="_9979_811"><span id="__204">Commercial &amp; Hospitality</span></span>
<span class="pointer-events-none text" id="_9979_812"><span id="__205">Turnkey Construction</span></span>
</div>
<span class="pointer-events-none text" id="_9979_813"><span id="__206">Company</span></span>
<span class="pointer-events-none text" id="_9979_814"><span id="__207">About</span></span>
<span class="pointer-events-none text" id="_9979_815"><span id="__208">Services</span></span>
<span class="pointer-events-none text" id="_9979_816"><span id="__209">Contact</span></span>
<span class="pointer-events-none text" id="_9979_817"><span id="__210">Privacy Policy</span></span>
<span class="pointer-events-none text" id="_9979_818"><span id="__211">Cookies</span></span>
<div id="Frame_39">
<div id="Border">
<div id="linkedin_svg">
<div id="SVG_14">
<svg class="pointer-events-none" fill="none" height="18" id="Clip_path_group" preserveaspectratio="none" viewbox="0 0 22 18" width="22" xmlns="http://www.w3.org/2000/svg"><mask height="18" id="_9979_823__mask0_9979_823" maskunits="userSpaceOnUse" style="mask-type:luminance" width="23" x="-1" y="0"><path d="M21.9062 0H-0.09375V17.875H21.9062V0Z" fill="white"></path></mask><g mask="url(#_9979_823__mask0_9979_823)"><path d="M2.58541 4.47097C4.06506 4.47097 5.26456 3.47077 5.26456 2.23696C5.26456 1.00313 4.06506 0.00292969 2.58541 0.00292969C1.10575 0.00292969 -0.09375 1.00313 -0.09375 2.23696C-0.09375 3.47077 1.10575 4.47097 2.58541 4.47097Z" fill="black"></path><path d="M4.81804 5.96289H0.352776C0.106293 5.96289 -0.09375 6.12971 -0.09375 6.33523V17.5053C-0.09375 17.7109 0.106293 17.8777 0.352776 17.8777H4.81804C5.06452 17.8777 5.26456 17.7109 5.26456 17.5053V6.33523C5.26456 6.12971 5.06452 5.96289 4.81804 5.96289Z" fill="black"></path><path d="M18.1258 5.34199C16.2174 4.79689 13.8303 5.27572 12.3987 6.13432C12.3495 5.97422 12.1745 5.85507 11.9664 5.85507H7.50121C7.25473 5.85507 7.05469 6.02187 7.05469 6.22741V17.3975C7.05469 17.6031 7.25473 17.7698 7.50121 17.7698H11.9664C12.2129 17.7698 12.4129 17.6031 12.4129 17.3975V9.36993C13.1345 8.85164 14.0642 8.68632 14.8251 8.95589C15.5628 9.21578 15.9852 9.85024 15.9852 10.6954V17.3975C15.9852 17.6031 16.1852 17.7698 16.4316 17.7698H20.8969C21.1435 17.7698 21.3434 17.6031 21.3434 17.3975V9.94556C21.2925 6.8857 19.5664 5.75305 18.1258 5.34199Z" fill="black"></path></g></svg>
</div>
</div>
</div>
<div id="Border_0">
<div id="instagram_svg">
<div id="instagram_svg_0">
<svg class="pointer-events-none" fill="none" height="26" id="Clip_path_group_0" preserveaspectratio="none" viewbox="0 0 26 26" width="26" xmlns="http://www.w3.org/2000/svg"><mask height="26" id="_9979_833__mask0_9979_833" maskunits="userSpaceOnUse" style="mask-type:luminance" width="26" x="0" y="0"><path d="M25.1429 0H0V25.1429H25.1429V0Z" fill="white"></path></mask><g mask="url(#_9979_833__mask0_9979_833)"><path d="M17.808 2.0957H7.33184C4.43893 2.0957 2.09375 4.44088 2.09375 7.33379V17.81C2.09375 20.7029 4.43893 23.0481 7.33184 23.0481H17.808C20.701 23.0481 23.0462 20.7029 23.0462 17.81V7.33379C23.0462 4.44088 20.701 2.0957 17.808 2.0957Z" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.09524"></path><path d="M16.7575 11.9117C16.8868 12.7836 16.7379 13.6741 16.3319 14.4564C15.926 15.2388 15.2836 15.8732 14.4964 16.2695C13.709 16.6657 12.8168 16.8037 11.9466 16.6636C11.0764 16.5237 10.2725 16.1127 9.64924 15.4896C9.02598 14.8663 8.61512 14.0623 8.4751 13.1921C8.33507 12.3219 8.473 11.4297 8.86927 10.6424C9.26554 9.85512 9.89999 9.2128 10.6823 8.80686C11.4647 8.4009 12.3551 8.25198 13.2271 8.38127C14.1164 8.51314 14.9398 8.92756 15.5755 9.56331C16.2113 10.199 16.6256 11.0224 16.7575 11.9117Z" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.09524"></path><path d="M18.3359 6.80957H18.3495" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.09524"></path></g></svg>
</div>
</div>
</div>
<div id="Border_1">
<div id="facebook_svg_0">
<div id="SVG_15">
<svg class="pointer-events-none" fill="none" height="23" id="Vector_4" preserveaspectratio="none" viewbox="0 0 15 23" width="15" xmlns="http://www.w3.org/2000/svg"><path d="M10.6641 3.74746H14.1254C14.4439 3.74746 14.7023 3.5376 14.7023 3.27902V0.468432C14.7023 0.209858 14.4439 0 14.1254 0H10.6641C7.16583 0 4.31826 2.31125 4.31826 5.15275V8.43177H0.280019C-0.038427 8.43177 -0.296875 8.64163 -0.296875 8.9002V11.7108C-0.296875 11.9694 -0.038427 12.1792 0.280019 12.1792H4.31826V22.0164C4.31826 22.275 4.57671 22.4848 4.89516 22.4848H8.35651C8.67496 22.4848 8.93342 22.275 8.93342 22.0164V12.1792H12.9717C13.2197 12.1792 13.4401 12.0499 13.5197 11.8589L14.6735 9.04823C14.7324 8.90583 14.7023 8.74843 14.5939 8.62572C14.4843 8.50392 14.3112 8.43177 14.1254 8.43177H8.93342V5.15275C8.93342 4.37797 9.70993 3.74746 10.6641 3.74746Z" fill="black"></path></svg>
</div>
</div>
</div>
</div>
<div id="Group_46">
<div id="Image_24">
<div class="pointer-events-none" id="__172_0">
<img alt="ChatGPT Image Sep 21, 2026, 10_48_19 AM 5" decoding="async" id="__212" loading="lazy" src="images/img_6_9bf72b74.png"/>
</div>
</div>
<div class="pointer-events-none" id="__173_0">
<img alt="ChatGPT Image Sep 21, 2026, 10_33_18 AM 1" decoding="async" id="__213" loading="lazy" src="images/img_13_e1b1dd08.png"/>
</div>
</div>
</div>
<div class="video-marquee-wrapper" id="Region_Media_carousel" role="region">
<div class="video-marquee-track" id="Container_1">
<div class="video-track">
        <div id="Group_Minimalist_Architecture" role="group">
          <video class="folder-video" playsinline preload="metadata" disablepictureinpicture style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover; border:0; background:#111;"></video>
        </div>
        <div id="Group_Futuristic_Architecture" role="group">
          <video class="folder-video" playsinline preload="metadata" disablepictureinpicture style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover; border:0; background:#111;"></video>
        </div>
        <div id="Background_1">
          <video class="folder-video" playsinline preload="metadata" disablepictureinpicture style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover; border:0; background:#111;"></video>
        </div>
        <div id="Background_3">
          <video class="folder-video" playsinline preload="metadata" disablepictureinpicture style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover; border:0; background:#111;"></video>
        </div>
        <div id="Background_5">
          <video class="folder-video" playsinline preload="metadata" disablepictureinpicture style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover; border:0; background:#111;"></video>
        </div>
        <div id="Background_7">
          <video class="folder-video" playsinline preload="metadata" disablepictureinpicture style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover; border:0; background:#111;"></video>
        </div>
      </div>
      <div class="video-track" aria-hidden="true">
        <div id="Group_Minimalist_Architecture" role="group">
          <video class="folder-video" playsinline preload="metadata" disablepictureinpicture style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover; border:0; background:#111;"></video>
        </div>
        <div id="Group_Futuristic_Architecture" role="group">
          <video class="folder-video" playsinline preload="metadata" disablepictureinpicture style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover; border:0; background:#111;"></video>
        </div>
        <div id="Background_1">
          <video class="folder-video" playsinline preload="metadata" disablepictureinpicture style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover; border:0; background:#111;"></video>
        </div>
        <div id="Background_3">
          <video class="folder-video" playsinline preload="metadata" disablepictureinpicture style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover; border:0; background:#111;"></video>
        </div>
        <div id="Background_5">
          <video class="folder-video" playsinline preload="metadata" disablepictureinpicture style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover; border:0; background:#111;"></video>
        </div>
        <div id="Background_7">
          <video class="folder-video" playsinline preload="metadata" disablepictureinpicture style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover; border:0; background:#111;"></video>
        </div>
      </div>
</div>
</div>
<a href="https://www.instagram.com/interiorby_sarath/" target="_blank" style="text-decoration:none;color:inherit;cursor:pointer;display:block;pointer-events:auto;">
<div id="Mention_Widget" style="pointer-events:auto;">
<div id="Frame_41">
<div id="Group_2">
<svg class="pointer-events-none" fill="none" height="35" id="Group" preserveaspectratio="none" viewbox="0 0 35 35" width="35" xmlns="http://www.w3.org/2000/svg"><path d="M28.591 8.06184C28.591 6.91262 27.6596 5.98468 26.5147 5.98468C25.3697 5.98468 24.4375 6.91262 24.4375 8.06184C24.4375 9.20683 25.3697 10.1348 26.5147 10.1348C27.6596 10.1348 28.591 9.20683 28.591 8.06184Z" fill="url(#_9979_966__paint0_linear_9979_966)"></path><path d="M31.361 24.2742C31.2841 25.9601 31.0022 26.876 30.7681 27.4844C30.4536 28.291 30.0785 28.8678 29.4702 29.4727C28.8686 30.0777 28.2918 30.4519 27.4852 30.7629C26.8769 31.0005 25.9575 31.2833 24.2717 31.3637C22.4491 31.444 21.9091 31.4611 17.2873 31.4611C12.6699 31.4611 12.1255 31.444 10.303 31.3637C8.6172 31.2833 7.70207 31.0005 7.09366 30.7629C6.2828 30.4519 5.71034 30.0777 5.10539 29.4727C4.49614 28.8678 4.12106 28.291 3.81089 27.4844C3.57673 26.876 3.29053 25.9601 3.21785 24.2742C3.12903 22.4517 3.11276 21.9031 3.11276 17.2908C3.11276 12.6691 3.12903 12.1247 3.21785 10.3022C3.29053 8.61637 3.57673 7.70125 3.81089 7.08771C4.12106 6.28198 4.49614 5.70862 5.10539 5.10367C5.71034 4.49961 6.2828 4.12446 7.09366 3.81007C7.70207 3.57167 8.6172 3.2931 10.303 3.2128C12.1255 3.13244 12.6699 3.11193 17.2873 3.11193C21.9091 3.11193 22.4491 3.13244 24.2717 3.2128C25.9575 3.2931 26.8769 3.57167 27.4852 3.81007C28.2918 4.12446 28.8686 4.49961 29.4702 5.10367C30.0785 5.70862 30.4536 6.28198 30.7681 7.08771C31.0022 7.70125 31.2841 8.61637 31.361 10.3022C31.4456 12.1247 31.4661 12.6691 31.4661 17.2908C31.4661 21.9031 31.4456 22.4517 31.361 24.2742ZM34.4738 10.1604C34.3893 8.31813 34.0987 7.05951 33.6672 5.96329C33.2281 4.82599 32.6393 3.86217 31.6755 2.89834C30.716 1.93881 29.7521 1.35007 28.6148 0.905777C27.5143 0.478527 26.2599 0.184574 24.4169 0.104275C22.5738 0.0153923 21.9851 -0.000823975 17.2873 -0.000823975C12.5938 -0.000823975 12.0008 0.0153923 10.1578 0.104275C8.31895 0.184574 7.06546 0.478527 5.95982 0.905777C4.82681 1.35007 3.86299 1.93881 2.90346 2.89834C1.93963 3.86217 1.35089 4.82599 0.907431 5.96329C0.480182 7.05951 0.189689 8.31813 0.100804 10.1604C0.0205069 12.0034 0 12.593 0 17.2908C0 21.9843 0.0205069 22.573 0.100804 24.4161C0.189689 26.2549 0.480182 27.5126 0.907431 28.614C1.35089 29.747 1.93963 30.7151 2.90346 31.6747C3.86299 32.6342 4.82681 33.2272 5.95982 33.6707C7.06546 34.0979 8.31895 34.3884 10.1578 34.473C12.0008 34.5576 12.5938 34.5781 17.2873 34.5781C21.9851 34.5781 22.5738 34.5576 24.4169 34.473C26.2599 34.3884 27.5143 34.0979 28.6148 33.6707C29.7521 33.2272 30.716 32.6342 31.6755 31.6747C32.6393 30.7151 33.2281 29.747 33.6672 28.614C34.0987 27.5126 34.3893 26.2549 34.4738 24.4161C34.5584 22.573 34.5789 21.9843 34.5789 17.2908C34.5789 12.593 34.5584 12.0034 34.4738 10.1604Z" fill="url(#_9979_966__paint1_linear_9979_966)"></path><path d="M17.2893 23.049C14.1081 23.049 11.5268 20.4719 11.5268 17.2908C11.5268 14.1045 14.1081 11.5241 17.2893 11.5241C20.4713 11.5241 23.056 14.1045 23.056 17.2908C23.056 20.4719 20.4713 23.049 17.2893 23.049ZM17.2893 8.40703C12.3855 8.40703 8.41406 12.387 8.41406 17.2908C8.41406 22.1902 12.3855 26.166 17.2893 26.166C22.193 26.166 26.1688 22.1902 26.1688 17.2908C26.1688 12.387 22.193 8.40703 17.2893 8.40703Z" fill="url(#_9979_966__paint2_linear_9979_966)"></path><defs><lineargradient gradientunits="userSpaceOnUse" id="_9979_966__paint0_linear_9979_966" x1="0.308607" x2="31.6956" y1="34.2223" y2="2.83547"><stop stop-color="#FFD521"></stop><stop offset="0.05" stop-color="#FFD521"></stop><stop offset="0.501119" stop-color="#F50000"></stop><stop offset="0.95" stop-color="#B900B4"></stop><stop offset="0.950079" stop-color="#B900B4"></stop><stop offset="1" stop-color="#B900B4"></stop></lineargradient><lineargradient gradientunits="userSpaceOnUse" id="_9979_966__paint1_linear_9979_966" x1="0.311897" x2="31.7246" y1="34.2637" y2="2.85093"><stop stop-color="#FFD521"></stop><stop offset="0.05" stop-color="#FFD521"></stop><stop offset="0.501119" stop-color="#F50000"></stop><stop offset="0.95" stop-color="#B900B4"></stop><stop offset="0.950079" stop-color="#B900B4"></stop><stop offset="1" stop-color="#B900B4"></stop></lineargradient><lineargradient gradientunits="userSpaceOnUse" id="_9979_966__paint2_linear_9979_966" x1="0.321977" x2="31.7271" y1="34.2645" y2="2.85933"><stop stop-color="#FFD521"></stop><stop offset="0.05" stop-color="#FFD521"></stop><stop offset="0.501119" stop-color="#F50000"></stop><stop offset="0.95" stop-color="#B900B4"></stop><stop offset="0.950079" stop-color="#B900B4"></stop><stop offset="1" stop-color="#B900B4"></stop></lineargradient></defs></svg>
</div>
<span class="pointer-events-auto text" id="_9979_970"><span id="__238">VIEW ON INSTAGRAM</span></span>
</div>
</div>
</a>
<span class="pointer-events-none text" id="Heading_2_Services"><span id="__239">Services</span></span>
</div>
</div>


</div>

<!-- Floating contact buttons: WhatsApp = desktop only, Call = all devices -->
<div id="floating-contact" aria-label="Quick contact">
  <a class="fc-btn fc-whatsapp" href="https://wa.me/916235506520?text=Hello%2C%20I%27d%20like%20to%20enquire%20about%20your%20architectural%20services." target="_blank" rel="noopener" aria-label="Chat on WhatsApp">
    <span class="fc-icon"><svg viewBox="0 0 24 24" width="26" height="26" fill="#fff" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg></span>
    <span class="fc-label">WhatsApp</span>
  </a>
  <a class="fc-btn fc-enquiry goto-contact" href="#contact_section" aria-label="Enquire now">
    <span class="fc-icon"><svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M8 9h8M8 13h5"/></svg></span>
    <span class="fc-label">Enquiry</span>
  </a>
  <a class="fc-btn fc-call" href="tel:+919746201737" aria-label="Call us">
    <span class="fc-icon"><svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg></span>
    <span class="fc-label">Call</span>
  </a>
</div>
<script>
/* "Request a Quote" (and nav "Contact Us") -> scroll to the Contact section of the layout that is visible.
   Both layouts use id="contact_section", so a plain #link would target the hidden one. */
(function () {
  function go(e) {
    var t = e.target.closest && e.target.closest('.goto-contact, a[href="#contact_section"]');
    if (!t) return;
    var wrap = document.querySelector(window.innerWidth <= 768 ? '.responsive-mobile' : '.responsive-desktop');
    var el = wrap && wrap.querySelector('#contact_section');
    if (!el) return;
    e.preventDefault();
    window.scrollTo({ left: 0, top: Math.max(0, el.getBoundingClientRect().top + (window.pageYOffset || document.documentElement.scrollTop)), behavior: 'smooth' });
  }
  document.addEventListener('click', go, true);
  document.addEventListener('keydown', function (e) { if (e.key === 'Enter' && e.target.classList && e.target.classList.contains('goto-contact')) go(e); }, true);
})();
</script>

<script>
/* Hero slider: shows every image from the "slider" folder in the hero (mobile + desktop).
   For each folder name it tries: (1) images.json, (2) the server's folder listing, (3) numbered / common file names.
   Open the browser console (F12) to see what was found. The old built-in hero slides are removed. */
(function () {
  var DIRS = ['slider/'];
  var EXT = /\.(jpe?g|png|webp|avif|gif)(\?.*)?$/i;
  var EXTS = ['jpg', 'jpeg', 'png', 'webp'];
  var PREFIXES = ['', 'slide', 'slide-', 'slide_', 'hero', 'hero-', 'img', 'image'];
  var DELAY = 4500;    // ms each image stays on screen
  /* FASTEST + SAFEST: type your slider file names here (inside the slider folder), e.g. ['1.jpg','2.jpg','hero-3.webp'].
     When this list is filled, nothing else is searched - the images start loading immediately. */
  var HERO_IMAGES = [];
  /* shown immediately (and whenever the slider folder is missing/empty) so the hero is never blank */
  var FALLBACK = ['gallery-images/alcove_img_2.jpg', 'gallery-images/alcove_img_3.jpg', 'gallery-images/alcove_img_5.jpg'];

  function log() { try { console.info.apply(console, ['[hero slider]'].concat([].slice.call(arguments))); } catch (e) {} }
  function natural(a, b) { return a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }); }
  function canLoad(url) {
    return new Promise(function (resolve) {
      var i = new Image(), done = false;
      function fin(ok) { if (done) return; done = true; resolve(ok); }
      i.onload = function () { fin(true); }; i.onerror = function () { fin(false); };
      setTimeout(function () { fin(false); }, 5000);
      i.src = url;
    });
  }
  function fromManifest(dir) {
    return fetch(dir + 'images.json', { cache: 'no-store' }).then(function (r) {
      if (!r.ok) throw 0; return r.json();
    }).then(function (arr) { return arr.map(function (x) { return String(x).indexOf('/') === -1 ? dir + x : x; }); });
  }
  function fromListing(dir) {
    return fetch(dir, { cache: 'no-store' }).then(function (r) {
      if (!r.ok) throw 0; return r.text();
    }).then(function (text) {
      var doc = new DOMParser().parseFromString(text, 'text/html'), out = [];
      doc.querySelectorAll('a[href]').forEach(function (a) {
        var h = a.getAttribute('href').split('?')[0];
        if (EXT.test(h)) out.push(dir + h.split('/').pop());
      });
      return out.sort(natural);
    });
  }
  function fromNumbered(dir) {
    // stage 1: which "<prefix><number>.<ext>" pattern exists? try number 1 first, then 0 and 2 only if needed
    function probe(nums) {
      var probes = [];
      nums.forEach(function (n) { PREFIXES.forEach(function (pf) { EXTS.forEach(function (ex) { probes.push({ pf: pf, ex: ex, n: n, url: dir + pf + n + '.' + ex }); }); }); });
      return Promise.all(probes.map(function (pr) { return canLoad(pr.url).then(function (ok) { return ok ? pr : null; }); }))
        .then(function (h) { return h.filter(Boolean); });
    }
    return probe([1]).then(function (h) { return h.length ? h : probe([0, 2]); }).then(function (hits) {
      if (!hits.length) return [];
      var first = hits.sort(function (a, b) { return a.n - b.n; })[0], out = [];
      // stage 2: walk upward with that prefix; 4 numbers at a time, all extensions at once
      function check(n) {
        return Promise.all(EXTS.map(function (ex) { var u = dir + first.pf + n + '.' + ex; return canLoad(u).then(function (ok) { return ok ? u : null; }); }))
          .then(function (r) { return r.filter(Boolean)[0] || null; });
      }
      function chunk(st) {
        if (st > 80) return Promise.resolve(out);
        var ns = [st, st + 1, st + 2, st + 3];
        return Promise.all(ns.map(check)).then(function (res) {
          for (var i = 0; i < res.length; i++) { if (!res[i]) return out; out.push(res[i]); }
          return chunk(st + 4);
        });
      }
      return chunk(first.n);
    });
  }
  function findIn(dir) {      // manifest + folder listing are asked at the same time (not one after the other)
    return Promise.all([
      fromManifest(dir).catch(function () { return []; }),
      fromListing(dir).catch(function () { return []; })
    ]).then(function (r) {
      if (r[0] && r[0].length) { log('found via images.json in', dir, r[0].length); return r[0]; }
      if (r[1] && r[1].length) { log('found via folder listing in', dir, r[1].length); return r[1]; }
      return fromNumbered(dir).then(function (c) { if (c.length) log('found numbered files in', dir, c.length); return c; });
    });
  }
  function find() {
    function step(i) {
      if (i >= DIRS.length) return Promise.resolve([]);
      return findIn(DIRS[i]).then(function (r) { return r.length ? r : step(i + 1); });
    }
    return step(0);
  }
  var KEY = 'heroUrls', timer = null;
  function readCache() { try { return JSON.parse(localStorage.getItem(KEY) || '[]'); } catch (e) { return []; } }
  function writeCache(a) { try { localStorage.setItem(KEY, JSON.stringify(a)); } catch (e) {} }

  function build(urls) {
    var boxes = Array.prototype.slice.call(document.querySelectorAll('.hero-slideshow'));
    if (!urls.length) { log('no images found. Add slider/images.json with your file names, or name files 1.jpg, 2.jpg ...'); return; }
    if (!boxes.length) return;
    var groups = boxes.map(function (box) {
      Array.prototype.forEach.call(box.querySelectorAll('img.slide, img.hero-slide'), function (old) { old.remove(); });   // only slider-folder images are shown
      var overlay = box.querySelector('.hero-overlay');
      return urls.map(function (u, i) {
        var im = document.createElement('img');
        im.className = 'hero-slide';
        im.alt = 'Project image ' + (i + 1); im.draggable = false; im.decoding = 'async'; im.dataset.src = u;
        if (i === 0) im.src = u;                 // only the first image loads now; the next ones load one after another
        if (i === 0) { im.fetchPriority = 'high'; im.loading = 'eager';
          im.onerror = function () { writeCache([]); if (!im.dataset.retry) { im.dataset.retry = 1; find().then(function (f) { if (f.length) { writeCache(f); build(f); } else if (urls !== FALLBACK) build(FALLBACK); }); } };
        } else { im.loading = 'eager'; }
        im.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center;transition:opacity 1.5s ease-in-out;opacity:' + (i === 0 ? 1 : 0) + ';';
        box.insertBefore(im, overlay || null);
        return im;
      });
    });
    log('showing', urls.length, 'images', urls);
    if (urls.length < 2) return;
    var cur = 0;
    function load(i) { groups.forEach(function (g) { var im = g[i]; if (im && !im.src) im.src = im.dataset.src; }); }
    function ready(i) { return groups.every(function (g) { return g[i].complete && g[i].naturalWidth > 0; }); }
    var first = groups[0][0];
    if (first.complete) load(1); else first.addEventListener('load', function () { load(1); }, { once: true });
    if (timer) clearInterval(timer);
    timer = setInterval(function () {
      if (document.hidden) return;
      var nxt = (cur + 1) % urls.length;
      load(nxt);
      if (!ready(nxt)) return;                      // next image not downloaded yet: keep showing the current one
      groups.forEach(function (g) { g[cur].style.opacity = 0; g[nxt].style.opacity = 1; });
      cur = nxt;
      load((cur + 1) % urls.length);                // start downloading the one after, so it is ready in time
    }, DELAY);
  }

  var explicit = HERO_IMAGES.map(function (x) { return String(x).indexOf('/') === -1 ? DIRS[0] + x : x; });
  var cached = explicit.length ? [] : readCache();
  if (explicit.length) {
    writeCache(explicit);
    build(explicit);
  } else if (cached.length) {            // repeat visit: show the hero image immediately, refresh the list in the background
    build(cached);
    find().then(function (f) { if (f.length) writeCache(f); }).catch(function () {});
  } else {
    build(FALLBACK);                      // first visit: show an image right now, don't wait for the search
    find().then(function (f) { if (f.length) { writeCache(f); build(f); } }).catch(function (e) { log('error', e); });
  }
})();
</script>

<script>
/* Loads every video from the "insta video" folder into the carousel (click to play, with sound). */
(function () {
  var DIR = 'insta%20video/';
  var EXT = /\.(mp4|webm|mov|m4v|ogv)(\?.*)?$/i;
  var EXTS = ['mp4', 'mov', 'webm', 'm4v'];
  var MOBILE_SCALE = 0.62;   // mobile card size: 1 = original, smaller number = smaller cards
  var GAP_BTN = 28;          // px between the cards and the "VIEW ON INSTAGRAM" button
  var CARD_GAP = 14;         // px between cards (only applied if cards overlap each other)
  var SECTION_GAP = { mobile: 48, desktop: 72 };   // max empty space (px) allowed between sections; set both to 0 to switch off

  function natural(a, b) { return a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }); }

  /* ---------- find the videos ---------- */
  function canLoad(url) {   // light HEAD request: no video data is downloaded
    var ctl = window.AbortController ? new AbortController() : null;
    var to = setTimeout(function () { if (ctl) ctl.abort(); }, 5000);
    return fetch(url, { method: 'HEAD', signal: ctl ? ctl.signal : undefined }).then(function (r) {
      clearTimeout(to); return r.ok;
    }).catch(function () { clearTimeout(to); return false; });
  }
  function fromNumbered() {   // checks 6 numbers at once, all extensions of a number at once
    var out = [], CH = 6;
    function check(n) {
      return Promise.all(EXTS.map(function (e) { var u = DIR + n + '.' + e; return canLoad(u).then(function (ok) { return ok ? u : null; }); }))
        .then(function (r) { return r.filter(Boolean)[0] || null; });
    }
    function chunk(st) {
      if (st > 60) return Promise.resolve(out);
      var ns = []; for (var i = 0; i < CH; i++) ns.push(st + i);
      return Promise.all(ns.map(check)).then(function (res) {
        for (var i = 0; i < res.length; i++) { if (!res[i]) return out; out.push(res[i]); }
        return chunk(st + CH);
      });
    }
    return chunk(1);
  }
  function fromListing() {
    return fetch(DIR, { cache: 'no-store' }).then(function (r) {
      if (!r.ok) throw new Error('no listing');
      return r.text();
    }).then(function (text) {
      var doc = new DOMParser().parseFromString(text, 'text/html'), out = [];
      doc.querySelectorAll('a[href]').forEach(function (a) {
        var h = a.getAttribute('href').split('?')[0];
        if (EXT.test(h)) out.push(DIR + h.split('/').pop());
      });
      return out.sort(natural);
    });
  }
  function fromManifest() {
    return fetch(DIR + 'videos.json', { cache: 'no-store' }).then(function (r) {
      if (!r.ok) throw new Error('no manifest');
      return r.json();
    }).then(function (arr) {
      return arr.map(function (x) { return String(x).indexOf('/') === -1 ? DIR + x : x; });
    });
  }
  function firstNonEmpty(fns) {
    return fns.reduce(function (p, fn) {
      return p.then(function (list) {
        if (list && list.length) return list;
        return fn().catch(function () { return []; });
      });
    }, Promise.resolve([]));
  }

  /* ---------- your own thumbnails: thumbnail/1.jpg, 2.jpg ... ----------
     Video number N (1.mp4, 2.mp4 ...) gets thumbnail/N.jpg. If a number has no image,
     the card falls back to the automatic best-frame cover below. */
  var THUMB_DIRS = ['thumbnail/', 'thumbnails/'];
  var THUMB_EXTS = ['jpg', 'jpeg', 'png', 'webp', 'JPG', 'JPEG', 'PNG', 'WEBP'];
  var thumbCache = {};

  function videoNumber(url, index) {
    var name = decodeURIComponent(url.split('?')[0].split('/').pop());
    var m = /(\d+)\.[a-z0-9]+$/i.exec(name);
    return m ? parseInt(m[1], 10) : index + 1;
  }
  function imageExists(src) {
    return new Promise(function (resolve) {
      var im = new Image();
      im.onload = function () { resolve(true); };
      im.onerror = function () { resolve(false); };
      im.src = src;
    });
  }
  var thumbPattern = null, patternP = null;
  try { thumbPattern = JSON.parse(localStorage.getItem('thumbPattern') || 'null'); } catch (e) {}
  function probe(list) {      // all candidates at once; first one (in list order) that exists wins
    return Promise.all(list.map(function (src) { return imageExists(src).then(function (ok) { return ok ? src : null; }); }))
      .then(function (r) { return r.filter(Boolean)[0] || null; });
  }
  function learn(src) {
    if (src && !thumbPattern) {
      var m = /^(.*\/)\d+\.(\w+)$/.exec(src);
      if (m) { thumbPattern = { d: m[1], e: m[2] }; try { localStorage.setItem('thumbPattern', JSON.stringify(thumbPattern)); } catch (e) {} }
    }
    return src;
  }
  function findThumb(n) {
    if (thumbCache[n]) return thumbCache[n];
    var all = [];
    THUMB_DIRS.forEach(function (d) { THUMB_EXTS.forEach(function (e) { all.push(d + n + '.' + e); }); });
    var p;
    function guessThen() {
      var g = thumbPattern.d + n + '.' + thumbPattern.e;
      return imageExists(g).then(function (ok) { return ok ? g : probe(all); });
    }
    if (thumbPattern) p = guessThen();
    else if (patternP) p = patternP.then(function () { return thumbPattern ? guessThen() : probe(all); });
    else { p = probe(all).then(learn); patternP = p; }
    return (thumbCache[n] = p);
  }

  /* ---------- playback ---------- */
  function allVideos() { return document.querySelectorAll('video.folder-video'); }

  function sync() {   // freeze the auto-scroll while any video is playing
    document.querySelectorAll('.video-marquee-wrapper').forEach(function (wrap) {
      var playing = false;
      wrap.querySelectorAll('video.folder-video').forEach(function (v) {
        var isPlaying = !v.paused && !v.ended;
        v.parentNode.classList.toggle('vc-playing', isPlaying);
        if (isPlaying) playing = true;
      });
      wrap.classList.toggle('vc-any-playing', playing);
    });
  }

  function playVideo(v) {
    allVideos().forEach(function (o) { if (o !== v && !o.paused) o.pause(); });  // one at a time
    if (v.dataset.seekCover) { v.currentTime = 0; delete v.dataset.seekCover; }
    var th = v.parentNode.querySelector('.vc-thumb'); if (th) th.classList.add('vc-gone');   // thumbnail disappears only now
    loadSrc(v, 'auto');
    v.dataset.started = '1';
    v.muted = false; v.volume = 1;
    var p = v.play();
    if (p && p.catch) p.catch(function () {});
  }

  /* ---------- SPEED TRICKS ----------
     1) no video file is downloaded until the card is near the screen (IntersectionObserver)
     2) cards with a thumbnail/N.jpg only show that small image - the video itself is fetched
        the moment the visitor hovers / touches / clicks the card (warm-up), so play starts fast
     3) cards without a thumbnail load just the first bytes and show a frame via #t=0.5
     4) only one connection-friendly preload at a time: 'metadata' for visible, 'auto' on click */
  function loadSrc(v, mode) {
    if (!v.dataset.src) return;
    if (!v.getAttribute('src')) {
      v.preload = mode || 'metadata';
      v.src = v.dataset.src;
      if (mode !== 'auto') v.load();
    } else if (mode === 'auto' && v.preload !== 'auto') {
      v.preload = 'auto';
    }
  }
  var io = ('IntersectionObserver' in window) ? new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (!en.isIntersecting) return;
      var v = en.target.querySelector('video');
      io.unobserve(en.target);
      if (!v) return;
      if (v.dataset.hasThumb) return;                 // thumbnail is enough until the visitor interacts
      loadSrc(v, 'metadata');                          // no thumbnail: grab first frame only
    });
  }, { rootMargin: '300px 300px' }) : null;

  function setupSlot(slot, url, index) {
    var v = slot.querySelector('video');
    if (!v) return;
    v.muted = false; v.loop = false; v.autoplay = false;
    v.removeAttribute('autoplay'); v.removeAttribute('loop');
    v.setAttribute('playsinline', ''); v.setAttribute('webkit-playsinline', '');
    v.preload = 'none';
    delete v.dataset.started; delete v.dataset.seekCover; delete v.dataset.hasThumb; v.removeAttribute('poster'); v.removeAttribute('src');
    v.dataset.src = url + (url.indexOf('#') === -1 ? '#t=0.5' : '');   // #t=0.5 -> browser shows a real frame as cover
    findThumb(videoNumber(url, index || 0)).then(function (thumb) {
      if (thumb) {
        v.dataset.hasThumb = '1';
        var box = v.parentNode;
        Array.prototype.forEach.call(box.querySelectorAll('.vc-thumb'), function (o) { o.remove(); });
        var ti = document.createElement('img');            // stays on top of the video until the visitor clicks play
        ti.className = 'vc-thumb'; ti.alt = ''; ti.decoding = 'async'; ti.draggable = false;
        if ((index || 0) < 4) ti.fetchPriority = 'high';
        ti.src = thumb;
        box.appendChild(ti);
      }
      if (io) io.observe(slot); else if (!thumb) loadSrc(v, 'metadata');
    });
    ['pointerenter', 'touchstart', 'focusin'].forEach(function (ev) {
      slot.addEventListener(ev, function () { loadSrc(v, 'auto'); }, { passive: true, once: true });
    });

    slot.querySelectorAll('.vc-play').forEach(function (b) { b.remove(); });
    var btn = document.createElement('button');
    btn.type = 'button'; btn.className = 'vc-play'; btn.setAttribute('aria-label', 'Play video');
    btn.innerHTML = '<span class="vc-circle"></span>';
    btn.addEventListener('click', function (e) { e.stopPropagation(); playVideo(v); });
    slot.appendChild(btn);

    v.addEventListener('click', function () { if (v.paused) playVideo(v); else v.pause(); });
    ['play', 'playing', 'pause', 'ended', 'emptied'].forEach(function (ev) { v.addEventListener(ev, sync); });
  }

  /* ---------- sizes, gaps and overlaps ----------
     Mobile: cards are scaled down, bottom edge stays put (so nothing else on the page moves).
     Then the "VIEW ON INSTAGRAM" button is placed exactly GAP_BTN px under the cards,
     and cards that overlap each other are spaced apart. */
  function fixLayout() {
    [['mobile-design', true], ['desktop-design', false]].forEach(function (pair) {
      var root = document.getElementById(pair[0]);
      if (!root) return;
      var isMobile = pair[1];
      var wrap = root.querySelector('.video-marquee-wrapper');
      if (!wrap) return;
      var widget = root.querySelector('#Mention_Widget');
      var slots = Array.prototype.slice.call(wrap.querySelectorAll('.video-track > div'));
      if (!slots.length) return;

      // 1) undo what earlier runs did (restore each card's original inline style)
      slots.forEach(function (s) {
        if (s.dataset.vcOrig === undefined) s.dataset.vcOrig = s.getAttribute('style') || '';
        if (s.dataset.vcOrig) s.setAttribute('style', s.dataset.vcOrig); else s.removeAttribute('style');
      });

      var first = slots[0];
      var r0 = first.getBoundingClientRect();
      if (!r0.width || !r0.height) return;            // this layout is hidden right now
      var origBottom = r0.bottom, origTop = r0.top;

      // 2) smaller cards on mobile, bottom edge kept where it was
      if (isMobile) {
        var sizes = slots.map(function (s) { return [s.offsetWidth, s.offsetHeight]; });
        slots.forEach(function (s, i) {
          if (!sizes[i][0] || !sizes[i][1]) return;
          s.style.setProperty('width', (sizes[i][0] * MOBILE_SCALE) + 'px', 'important');
          s.style.setProperty('min-width', (sizes[i][0] * MOBILE_SCALE) + 'px', 'important');
          s.style.setProperty('height', (sizes[i][1] * MOBILE_SCALE) + 'px', 'important');
          s.style.setProperty('flex', '0 0 auto', 'important');
        });
        var dy = origBottom - first.getBoundingClientRect().bottom;
        if (Math.abs(dy) > 0.5) slots.forEach(function (s) { s.style.translate = '0 ' + dy + 'px'; });
      }

      // 3) cards must not overlap each other
      var row = slots.filter(function (s) { return s.parentNode === first.parentNode; });
      var overlap = false;
      for (var i = 1; i < row.length; i++) {
        var a = row[i - 1].getBoundingClientRect(), b = row[i].getBoundingClientRect();
        if (b.left < a.right - 1 && Math.abs(a.top - b.top) < a.height * 0.5) overlap = true;
      }
      if (overlap) {
        wrap.querySelectorAll('.video-track').forEach(function (t) {
          t.style.setProperty('display', 'flex', 'important');
          t.style.setProperty('align-items', 'flex-end', 'important');
        });
        slots.forEach(function (s) {
          s.style.setProperty('position', 'relative', 'important');
          s.style.setProperty('left', 'auto', 'important');
          s.style.setProperty('top', 'auto', 'important');
          s.style.setProperty('margin-right', CARD_GAP + 'px', 'important');
          s.style.setProperty('flex-shrink', '0', 'important');
        });
      }

      // 4) the "VIEW ON INSTAGRAM" button is placed by positionInstaCta() (script.js) after all layout steps
    });
  }

  /* ---------- one standard gap between sections ----------
     Finds every empty horizontal band on the page (no text, image, video or coloured box in it).
     Any band taller than SECTION_GAP is trimmed down to SECTION_GAP and everything below moves up.
     Bands already smaller than SECTION_GAP are left alone. */
  var touched = [];
  function remember(el) {
    if (el.__vcSaved) return;
    var st = el.style;
    el.__vcSaved = { t: st.getPropertyValue('translate'), h: st.getPropertyValue('height'), hp: st.getPropertyPriority('height'),
                     mh: st.getPropertyValue('min-height'), mhp: st.getPropertyPriority('min-height'),
                     xh: st.getPropertyValue('max-height'), xhp: st.getPropertyPriority('max-height') };
    touched.push(el);
  }
  function resetSpacing() {
    touched.forEach(function (el) {
      var s = el.__vcSaved, st = el.style;
      if (s.t) st.setProperty('translate', s.t); else st.removeProperty('translate');
      if (s.h) st.setProperty('height', s.h, s.hp); else st.removeProperty('height');
      if (s.mh) st.setProperty('min-height', s.mh, s.mhp); else st.removeProperty('min-height');
      if (s.xh) st.setProperty('max-height', s.xh, s.xhp); else st.removeProperty('max-height');
      delete el.__vcSaved;
    });
    touched = [];
  }

  function parseColor(c) {
    var m = /rgba?\(\s*([\d.]+)[ ,]+([\d.]+)[ ,]+([\d.]+)(?:[ ,/]+([\d.%]+))?\s*\)/.exec(c || '');
    if (!m) return null;
    var a = m[4] === undefined ? 1 : (m[4].indexOf('%') > -1 ? parseFloat(m[4]) / 100 : parseFloat(m[4]));
    return { r: +m[1], g: +m[2], b: +m[3], a: a };
  }
  function pageColor(root) {
    for (var n = root; n; n = n.parentElement) {
      var c = parseColor(getComputedStyle(n).backgroundColor);
      if (c && c.a > 0.05) return c;
    }
    return { r: 255, g: 255, b: 255, a: 1 };
  }
  function parseTranslate(str) {
    if (!str || str === 'none') return [0, 0];
    var p = str.split(/\s+/);
    return [parseFloat(p[0]) || 0, parseFloat(p[1]) || 0];
  }

  function normalizeSpacing() {
    [['mobile-design', SECTION_GAP.mobile], ['desktop-design', SECTION_GAP.desktop]].forEach(function (pair) {
      var root = document.getElementById(pair[0]), STD = pair[1];
      if (!root || !STD) return;
      var rr = root.getBoundingClientRect();
      if (!rr.width || !rr.height) return;                 // this layout is hidden right now
      var rootTop = rr.top, rootH = rr.height, bg = pageColor(root);
      var paint = [];
      var SKIP = { SCRIPT: 1, STYLE: 1, NOSCRIPT: 1, LINK: 1, META: 1, TEMPLATE: 1 };
      var range = document.createRange();

      function add(n, top, bottom) {
        paint.push([top, bottom]);
      }

      function build(el) {
        if (SKIP[el.tagName]) return null;
        var cs = getComputedStyle(el);
        if (cs.display === 'none' || cs.position === 'fixed' || cs.position === 'sticky') return null;
        var r = el.getBoundingClientRect();
        var tag = el.tagName.toLowerCase();
        var hasBox = r.width > 0 && r.height > 0;
        var node = {
          el: el, top: r.top - rootTop, bottom: r.bottom - rootTop, pos: cs.position, display: cs.display,
          translate: cs.translate, height: parseFloat(cs.height), hasBox: hasBox, children: [],
          pTop: Infinity, pBottom: -Infinity          // extent of what is actually visible inside this element
        };
        // does this element paint something visible?
        if (hasBox) {
          var painted = false;
          if (/^(img|video|canvas|iframe|input|textarea|select|svg|picture|object|embed)$/.test(tag)) painted = true;
          else if (!(r.height > rootH * 0.45 && el.children.length)) {      // ignore huge page-wide wrappers
            var c = parseColor(cs.backgroundColor);
            if (c && c.a > 0.02) {
              var same = c.a > 0.95 && Math.abs(c.r - bg.r) < 3 && Math.abs(c.g - bg.g) < 3 && Math.abs(c.b - bg.b) < 3;
              if (!same) painted = true;
            }
            if (cs.backgroundImage && cs.backgroundImage !== 'none') painted = true;
            ['Top', 'Bottom'].forEach(function (s) {
              var bc = parseColor(cs['border' + s + 'Color']);
              if (parseFloat(cs['border' + s + 'Width']) > 0 && cs['border' + s + 'Style'] !== 'none' && bc && bc.a > 0.02) painted = true;
            });
          }
          if (painted) {
            add(node, node.top, node.bottom);
            node.pTop = Math.min(node.pTop, node.top); node.pBottom = Math.max(node.pBottom, node.bottom);
          }
        }
        if (tag === 'svg') return node;
        // text
        for (var k = 0; k < el.childNodes.length; k++) {
          var tn = el.childNodes[k];
          if (tn.nodeType === 3 && tn.nodeValue.trim()) {
            range.selectNodeContents(tn);
            var tr = range.getBoundingClientRect();
            if (tr.width > 0 && tr.height > 0) {
              add(node, tr.top - rootTop, tr.bottom - rootTop);
              node.pTop = Math.min(node.pTop, tr.top - rootTop);
              node.pBottom = Math.max(node.pBottom, tr.bottom - rootTop);
            }
          }
        }
        for (var i = 0; i < el.children.length; i++) {
          var ch = build(el.children[i]);
          if (ch) {
            node.children.push(ch);
            node.pTop = Math.min(node.pTop, ch.pTop);
            node.pBottom = Math.max(node.pBottom, ch.pBottom);
          }
        }
        return node;
      }

      var tree = build(root);
      if (!tree || !paint.length) return;

      // empty bands between painted content
      paint.sort(function (a, b) { return a[0] - b[0]; });
      var merged = [], cur = [paint[0][0], paint[0][1]];
      for (var i = 1; i < paint.length; i++) {
        if (paint[i][0] <= cur[1] + 0.5) cur[1] = Math.max(cur[1], paint[i][1]);
        else { merged.push(cur); cur = [paint[i][0], paint[i][1]]; }
      }
      merged.push(cur);
      var gaps = [];
      for (var j = 1; j < merged.length; j++) {
        var g = merged[j][0] - merged[j - 1][1];
        if (g > STD + 8) gaps.push({ top: merged[j - 1][1], bottom: merged[j][0], shrink: Math.round(g - STD) });
      }
      if (!gaps.length) return;

      function shiftFor(top) { var s = 0; gaps.forEach(function (g) { if (g.bottom <= top + 1) s += g.shrink; }); return s; }
      function overlaps(top, bottom) { return gaps.some(function (g) { return top < g.bottom - 1 && bottom > g.top + 1; }); }
      function shrinkWithin(n) { var s = 0; gaps.forEach(function (g) { if (g.top >= n.top - 1 && g.bottom <= n.bottom + 1) s += g.shrink; }); return s; }

      function shift(n, d) {
        remember(n.el);
        var b = parseTranslate(n.translate);
        n.el.style.setProperty('translate', b[0] + 'px ' + (b[1] - d) + 'px');
      }
      function shrinkHeight(n) {
        var s = shrinkWithin(n);
        if (!s || !isFinite(n.height)) return;
        remember(n.el);
        n.el.style.setProperty('height', Math.max(0, n.height - s) + 'px', 'important');
        n.el.style.setProperty('min-height', '0px', 'important');
      }
      function walk(n, applied) {
        if (!isFinite(n.pTop)) return;                 // nothing visible inside: leave it alone
        var d = shiftFor(n.pTop) - applied;
        var rigid = !overlaps(n.pTop, n.pBottom);
        var canMove = n.pos !== 'static' || (!n.children.length && n.display !== 'inline' && n.display !== 'contents');
        if (rigid && canMove) { if (d) shift(n, d); return; }          // whole block sits between gaps: move it as one piece
        var applied2 = applied;
        if (canMove && d) { shift(n, d); applied2 = applied + d; }
        if (n.hasBox) shrinkHeight(n);
        n.children.forEach(function (c) { walk(c, applied2); });
      }
      walk(tree, 0);
    });
  }

  /* ---------- keep sections from overlapping / drifting apart ----------
     The page is a fixed-position design, so when screen size (or text size) changes, one section can run
     into the next or leave a hole. shiftBelow() moves a section and everything under it by the amount needed,
     and grows / shrinks the page height by the same amount. Used for:
       1) "VIEW ON INSTAGRAM" button  ->  "Tools we use"
       2) "Meet the team" grid        ->  the section after it  */
  function activeWrapper() {
    return document.querySelector(window.innerWidth <= 768 ? '.responsive-mobile' : '.responsive-desktop');
  }
  function wrapperScale(wrapper) {
    var wr = wrapper.getBoundingClientRect();
    var s = wrapper.offsetWidth ? wr.width / wrapper.offsetWidth : 1;
    return (s && isFinite(s)) ? s : 1;
  }
  function maxBottom(root) {            // lowest visible edge inside an element (screen px)
    var b = root.getBoundingClientRect().bottom;
    root.querySelectorAll('*').forEach(function (e) {
      var r = e.getBoundingClientRect();
      if (r.width > 0 && r.height > 0) b = Math.max(b, r.bottom);
    });
    return b;
  }

  function shiftBelow(wrapper, next, delta, keepStill) {
    var nextTop = next.getBoundingClientRect().top;
    var moved = [];
    (function collect(parent) {
      Array.prototype.forEach.call(parent.children, function (el) {
        if (/^(SCRIPT|STYLE|LINK|META|TEMPLATE|NOSCRIPT)$/.test(el.tagName)) return;
        if (keepStill && keepStill(el)) return;
        var cs = getComputedStyle(el);
        if (cs.display === 'none' || cs.position === 'fixed' || cs.position === 'sticky') return;
        var r = el.getBoundingClientRect();
        if (r.top >= nextTop - 2 && (r.width > 0 || r.height > 0)) { moved.push(el); return; }
        if (r.height < 1 || (r.top < nextTop - 2 && r.bottom > nextTop + 2) || el.contains(next)) collect(el);
      });
    })(wrapper);
    if (!moved.length) return;
    moved.forEach(function (el) {
      remember(el);
      var b = parseTranslate(getComputedStyle(el).translate);
      el.style.setProperty('translate', b[0] + 'px ' + (b[1] + delta) + 'px');
    });
    // every box that encloses the section grows / shrinks by the same amount
    var nextBottom = next.getBoundingClientRect().bottom;
    for (var a = next.parentElement; a && a !== wrapper; a = a.parentElement) {
      var ar = a.getBoundingClientRect();
      if (ar.bottom < nextBottom - 1 || ar.height < 2) continue;
      var h0 = parseFloat(getComputedStyle(a).height);
      if (!isFinite(h0)) continue;
      remember(a);
      var nh = Math.max(0, h0 + delta) + 'px';
      a.style.setProperty('height', nh, 'important');
      a.style.setProperty('min-height', nh, 'important');
      if (getComputedStyle(a).maxHeight !== 'none') a.style.setProperty('max-height', nh, 'important');
    }
  }

  function ensureGap(wrapper, upperBottom, next, STD, keepStill) {
    var scale = wrapperScale(wrapper);
    var gap = (next.getBoundingClientRect().top - upperBottom) / scale;
    if (Math.abs(gap - STD) <= 8) return;                 // already a proper gap
    var delta = STD - gap;                                 // + push down, - pull up
    if (!isFinite(delta) || Math.abs(delta) < 0.5) return;
    shiftBelow(wrapper, next, delta, keepStill);
  }

  function sectionGap() { return window.innerWidth <= 768 ? (SECTION_GAP.mobile || 48) : (SECTION_GAP.desktop || 72); }

  function ensureCtaClearance() {
    var wrapper = activeWrapper(); if (!wrapper || !wrapper.getBoundingClientRect().width) return;
    var cta = wrapper.querySelector('#Mention_Widget');
    var mq = wrapper.querySelector('.tools-marquee-wrapper');
    var next = mq && mq.closest('[id^="about-salient-features"]');
    if (!cta || !next) return;
    ensureGap(wrapper, maxBottom(cta), next, sectionGap(), function (el) {
      return el === cta || cta.contains(el) || el.classList.contains('video-marquee-wrapper');
    });
  }

  function ensureTeamClearance() {
    var wrapper = activeWrapper(); if (!wrapper || !wrapper.getBoundingClientRect().width) return;
    var team = wrapper.querySelector('[id^="meet_the_team_section"]');
    var grid = team && team.querySelector('.team-cards-grid');
    if (!grid) return;
    var scale = wrapperScale(wrapper);
    var gb = maxBottom(grid);
    // the section box is exactly as tall as its content (so nothing is hidden or left empty)
    var tr = team.getBoundingClientRect();
    remember(team);
    team.style.setProperty('height', Math.max(0, (gb - tr.top) / scale) + 'px', 'important');
    // the next section = the closest one below it in the same container
    var next = null, best = Infinity, ref = team.getBoundingClientRect().top;
    Array.prototype.forEach.call(team.parentElement.children, function (el) {
      if (el === team) return;
      var r = el.getBoundingClientRect();
      if (r.height < 20 || r.width < 20) return;
      var d = r.top - ref;
      if (d > 10 && d < best) { best = d; next = el; }
    });
    if (!next) return;
    ensureGap(wrapper, gb, next, sectionGap(), null);
  }

  function syncWrapperHeight() {      // the scaled page wrapper must be exactly as tall as the page
    var isMobile = window.innerWidth <= 768;
    var wrapper = document.querySelector(isMobile ? '.responsive-mobile' : '.responsive-desktop');
    var rootEl = wrapper && wrapper.firstElementChild;
    if (!rootEl) return;
    var hh = rootEl.getBoundingClientRect().height;
    if (hh > 0) wrapper.style.height = hh + 'px';
  }

  window.__vcResetSpacing = resetSpacing;   // script.js calls this before it re-fits the page, so no stale heights are restored

  function layoutAll() {
    var place = window.__positionInstaCta || function () {};
    resetSpacing();
    fixLayout();
    place();                 // button directly under the cards (before spacing is evened out)
    normalizeSpacing();
    place();                 // same distance again after the spacing pass
    ensureCtaClearance();    // and never overlapping / drifting away from the next section
    ensureTeamClearance();   // team grid: exact height, proper gap to the section after it
    syncWrapperHeight();
  }

  /* ---------- build ---------- */
  function apply(list) {
    if (!list.length) console.warn('No videos found in ' + DIR);
    document.querySelectorAll('.video-track').forEach(function (track) {
      var base = Array.prototype.filter.call(track.children, function (el) { return el.tagName === 'DIV'; });
      if (!base.length || !list.length) return;
      list.forEach(function (url, i) {
        var slot = base[i];
        if (!slot) { slot = base[i % base.length].cloneNode(true); track.appendChild(slot); }
        setupSlot(slot, url, i);
      });
      for (var i = list.length; i < base.length; i++) base[i].remove();
    });
    layoutAll();
  }

  /* layout listeners are attached right away, whether or not videos are found */
  function startLayout() {
    layoutAll();
    window.addEventListener('load', function () { layoutAll(); setTimeout(layoutAll, 800); });
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(layoutAll);
    var t;
    window.addEventListener('resize', function () { clearTimeout(t); t = setTimeout(layoutAll, 150); });
    window.addEventListener('orientationchange', function () { clearTimeout(t); t = setTimeout(layoutAll, 250); });
    document.querySelectorAll('img').forEach(function (im) {      // late-loading photos can change heights
      if (!im.complete) im.addEventListener('load', function () { clearTimeout(t); t = setTimeout(layoutAll, 120); });
    });
  }

  function discover() {
    return Promise.all([fromManifest().catch(function () { return []; }), fromListing().catch(function () { return []; })]).then(function (r) {
      if (r[0] && r[0].length) return r[0];
      if (r[1] && r[1].length) return r[1];
      return fromNumbered().catch(function () { return []; });
    });
  }
  function init() {
    startLayout();
    var cached = []; try { cached = JSON.parse(localStorage.getItem('videoList') || '[]'); } catch (e) {}
    if (cached.length) apply(cached);          // repeat visit: cards + thumbnails appear straight away
    discover().then(function (list) {
      if (!list.length) return;
      try { localStorage.setItem('videoList', JSON.stringify(list)); } catch (e) {}
      if (JSON.stringify(list) !== JSON.stringify(cached)) apply(list);
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
</script>

<script>
/* Contact form -> Google Apps Script -> email (no mail app opened) */
(function () {
  var SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbygdbAjrsukBNvEeJq1UV1YD1LV2KUrHJM7TKTjHcYUrpghefOk4c4GfA-_3sP18q0N/exec';

  function toast(msg, ok) {
    var t = document.createElement('div');
    t.textContent = msg;
    t.style.cssText = 'position:fixed;left:50%;bottom:30px;transform:translateX(-50%);z-index:999999;padding:14px 22px;border-radius:8px;color:#fff;font:15px/1.4 sans-serif;box-shadow:0 6px 24px rgba(0,0,0,.25);max-width:90vw;text-align:center;background:' + (ok ? '#2e7d32' : '#c62828');
    document.body.appendChild(t);
    setTimeout(function () { t.remove(); }, 4500);
  }

  function val(box, id) { var el = box.querySelector('#' + id); return el ? el.value.trim() : ''; }

  function getService(box) {
    var role = box.querySelector('#contact-role');
    if (!role) return '';
    var f = role.querySelector('select, input');
    if (f && f.value) return f.value;
    var sel = role.querySelector('.selected, .active, [aria-selected="true"], [data-selected="true"]');
    if (sel) return sel.textContent.trim();
    return role.textContent.trim();
  }

  function setLabel(btn, text) {
    var s = btn.querySelector('span span') || btn.querySelector('span');
    if (s) s.textContent = text;
  }

  document.addEventListener('click', function (e) {
    var btn = e.target.closest && e.target.closest('#Button_0, #Button_3');
    if (!btn) return;
    e.preventDefault();
    if (btn.dataset.busy) return;

    var box = btn.closest('#contactForm') || btn.closest('#Background_Border_4') || btn.parentElement;
    var d = {
      firstName: val(box, 'firstName'),
      lastName: val(box, 'lastName'),
      email: val(box, 'email'),
      phone: val(box, 'phone'),
      companyName: val(box, 'companyName'),
      service: getService(box),
      message: val(box, 'message')
    };

    if (!d.firstName || !d.email || !d.phone || !d.message) {
      return toast('Please fill in all required (*) fields.', false);
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email)) {
      return toast('Please enter a valid email address.', false);
    }
    if (SCRIPT_URL.indexOf('PASTE_') === 0) {
      return toast('Form is not connected yet (Apps Script URL missing).', false);
    }

    var label = btn.textContent.trim();
    btn.dataset.busy = '1';
    setLabel(btn, 'SENDING...');

    fetch(SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors', // Apps Script doesn't return CORS headers; request still goes through
      body: new URLSearchParams(d)
    }).then(function () {
      toast('Thank you! Your enquiry has been sent.', true);
      box.querySelectorAll('input').forEach(function (i) { i.value = ''; });
    }).catch(function () {
      toast('Could not send. Please try again or call us.', false);
    }).finally(function () {
      delete btn.dataset.busy;
      setLabel(btn, label);
    });
  }, true);
})();
</script>
</body>
</html>
