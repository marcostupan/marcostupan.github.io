import React from "react";
import Link from "next/link";

const DashboardCard = ({ title, imageUrl, link }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <Link legacyBehavior href={link} target="_blank">
        <a target="_blank">
          <img className="w-full" src={imageUrl} alt={title} />
          <div className="p-4">
            <h3 className="text-xl font-semibold">{title}</h3>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default DashboardCard;
