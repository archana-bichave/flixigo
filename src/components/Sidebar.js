import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { sidebarSections } from "../utils/sidebarLinks";

const activeLinkClasses = "bg-gray-700 text-white";
const inactiveLinkClasses = "text-gray-300 hover:bg-gray-700 hover:text-white";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <aside className="fixed top-16 left-0 h-[calc(100vh-4rem)] w-56 bg-gray-800 p-4 text-white z-40 overflow-y-auto">
      {sidebarSections.map((section, sectionIndex) => (
        <div key={section.title ?? `section-${sectionIndex}`} className="mb-6">
          {section.title && (
            <h2 className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-400">
              {section.title}
            </h2>
          )}
          <ul className="space-y-1">
            {section.items.map((item) => (
              <li key={item.id}>
                <NavLink
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) =>
                    `block rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                      isActive ? activeLinkClasses : inactiveLinkClasses
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
};

export default Sidebar;