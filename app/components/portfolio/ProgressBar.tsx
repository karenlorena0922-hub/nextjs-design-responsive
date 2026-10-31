"use client";

import { useEffect, useState } from "react";

export function ProgressBar() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const update = () => { const scrollable = document.documentElement.scrollHeight - window.innerHeight; setProgress(scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0); };
    update(); window.addEventListener("scroll", update, { passive: true }); window.addEventListener("resize", update);
    return () => { window.removeEventListener("scroll", update); window.removeEventListener("resize", update); };
  }, []);
  return <div className="progress-track" aria-hidden="true"><div className="progress-fill" style={{ width: progress + "%" }} /></div>;
}
