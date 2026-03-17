import React, { useState } from "react";
import Footer from "../components/Footer";
import bgImg from "../assets/img/banner/page-title.jpg";
import { Link } from "react-router-dom";
import SidebarInner from "../components/SidebarInner";
import HeaderProfile from "../components/HeaderProfile";

function AudioAIPage() {
  const [text, setText] = useState("");
  const [audioGenerated, setAudioGenerated] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleGenerate = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setAudioGenerated(true);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="main-wrapper">
     
      <div style={{ position: "relative", zIndex: 9999 }}>
         <HeaderProfile />
      </div>

    {/* PAGE TITLE */}
           <section
                 className="page-title-section top-position1 bg-img cover-background secondary-overlay"
                 style={{
                   backgroundImage: `linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)), url(${bgImg})`,
                   backgroundSize: "cover",
                   backgroundPosition: "center",
                 }}
               >
                 <div className="container">
                   <div className="row">
                     <div className="col-md-12">
                       <div className="text-center">
                         <div className="position-relative">
                           <h4>User Dashboard</h4>
                         </div>
         
                         <ul>
                           <li>
                             <Link to="/">Home</Link>
                           </li>
                           <li>Audio AI</li>
                         </ul>
                       </div>
                     </div>
                   </div>
                 </div>
               </section>

      {/* DASHBOARD */}

      <section className="py-5">
        <div className="container">
          <div className="row">

            {/* SIDEBAR */}

           <SidebarInner />

            {/* MAIN CONTENT */}

            <div className="col-lg-9">

              <div className="d-flex justify-content-between align-items-center mb-3 border-bottom">
                <h4 className="text-white mb-4">Audio AI</h4>
              </div>

              <div className="row mb-4 g-3">

                {/* LEFT SIDE */}

                <div className="col-lg-7">

                  <div className="prompt-box">
                    <textarea
                      rows="3"
                      placeholder="Describe your audio (podcast intro, narration, music beat etc...)"
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                    ></textarea>
                  </div>

                  {/* VOICE STYLE */}

                  <div className="setting-card">
                    <h6 className="mb-3">Voice Style</h6>

                    <button className="option-btn active">Male</button>
                    <button className="option-btn">Female</button>
                    <button className="option-btn">Robot</button>
                    <button className="option-btn">Narrator</button>
                  </div>

                  {/* DURATION */}

                  <div className="setting-card">
                    <h6 className="mb-3">Duration</h6>

                    <button className="option-btn active">10 sec</button>
                    <button className="option-btn">30 sec</button>
                    <button className="option-btn">60 sec</button>
                  </div>

                  {/* LANGUAGE */}

                  <div className="setting-card">
                    <h6 className="mb-3">Language</h6>

                    <select className="form-select bg-dark text-white border-dark">
                      <option>English</option>
                      <option>Spanish</option>
                      <option>German</option>
                      <option>French</option>
                      <option>Hindi</option>
                    </select>
                  </div>

                </div>

                {/* RIGHT SIDE */}

                <div className="col-lg-5">

                  <div className="preview-card">
                    <h6 className="mb-3">Preview</h6>

                    {loading ? (
                      <p className="text-white">Generating audio...</p>
                    ) : (
                      <audio controls style={{ width: "100%" }}>
                        <source
                          src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
                          type="audio/mp3"
                        />
                      </audio>
                    )}
                  </div>

                </div>

                {/* GENERATE BUTTON */}

                <div className="col-lg-7">
                  <button
                    className="btn btn-primary"
                    onClick={handleGenerate}
                  >
                    {loading ? "Generating..." : "Generate Audio"}
                  </button>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default AudioAIPage;