import React, { useEffect, useState } from "react";

const AgeGatePopUp = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const isAdult = localStorage.getItem("isAdult");

    if (!isAdult) {
      setShowPopup(true);
    }
  }, []);

  const handleSelect = (value) => {
    localStorage.setItem("isAdult", value ? "yes" : "no");
    setShowPopup(false);

    // Optional reload
    // window.location.reload();
  };

  if (!showPopup) return null;

  return (
    <div className="modal d-block" style={{ background: "rgba(0,0,0,0.8)" }}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content text-center p-4" style={{ background: "#8b0000" }}>
          <h4>Are you 18+?</h4>
          <p>Please confirm your age to continue</p>

          <div className="d-flex justify-content-center gap-3 mt-3">
            <button
              className="btn btn-success"
              onClick={() => handleSelect(true)}
            >
              Yes, I am 18+
            </button>

            <button
              className="btn btn-danger"
              onClick={() => handleSelect(false)}
            >
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgeGatePopUp;