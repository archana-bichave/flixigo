import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import { sidebarItemsById } from "../utils/sidebarLinks";

const SectionPage = () => {
  const { sectionId } = useParams();
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const section = sidebarItemsById[sectionId];

  if (!section || section.to === "/") {
    return <Navigate to="/" replace />;
  }

  return (
    <div className={`pt-20 p-6 ${isMenuOpen ? "sm:ml-56" : ""}`}>
      <h1 className="mb-3 text-3xl font-bold text-gray-900">{section.label}</h1>
      {section.description && (
        <p className="mb-6 text-gray-600">{section.description}</p>
      )}
      <div className="rounded-lg border border-dashed border-gray-300 bg-white/5 p-6 text-gray-500">
        Content for <span className="font-semibold">{section.label}</span> is
        coming soon.
      </div>
    </div>
  );
};

export default SectionPage;
