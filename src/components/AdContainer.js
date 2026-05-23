"use client";

import { useEffect } from "react";

export default function AdContainer({ type = "leaderboard", slotId = "1234567890" }) {
  useEffect(() => {
    // If running in browser and Adsense is available, push to googleads array
    try {
      if (typeof window !== "undefined") {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (e) {
      console.warn("Google AdSense push error:", e.message);
    }
  }, []);

  // Set sizing classes based on type
  let adClass = "ad-leaderboard";
  let fallbackStyle = { width: "100%", height: "90px" };

  if (type === "rectangle") {
    adClass = "ad-rectangle";
    fallbackStyle = { width: "300px", height: "250px" };
  } else if (type === "skyscraper") {
    adClass = "ad-skyscraper";
    fallbackStyle = { width: "300px", height: "600px" };
  }

  return (
    <div className={`ad-container ${adClass}`}>
      <span className="ad-label">Advertisement</span>
      
      {/* Google AdSense Responsive Slot */}
      <ins
        className="adsbygoogle"
        style={{ display: "block", ...fallbackStyle }}
        data-ad-client="ca-pub-XXXXXXXXXXXXX" // Replace with your publisher ID
        data-ad-slot={slotId}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
      
      {/* Mock Indicator for Visual Layout Checks */}
      <div 
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#FAF9F6",
          zIndex: -1,
          color: "#BFB8AD",
          fontSize: "12px",
          border: "1px dashed #D2C9BD",
          borderRadius: "6px"
        }}
      >
        Google AdSense - {type.toUpperCase()} ({fallbackStyle.width}x{fallbackStyle.height})
      </div>
    </div>
  );
}
