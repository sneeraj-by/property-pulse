import Link from "next/link";
import React from "react";

const InfoBox = ({ backgroundColor, heading, children, buttonInfo }) => {
  return (
    <div className={`${backgroundColor} p-6 rounded-lg shadow-md`}>
      <h2 className="text-2xl font-bold">{heading}</h2>
      <p className="mt-2 mb-4">{children}</p>
      <Link
        href={buttonInfo.path}
        className={`inline-block ${buttonInfo.bgColor} text-white rounded-lg px-4 py-2 hover:bg-blue-600`}
      >
        {buttonInfo.text}
      </Link>
    </div>
  );
};

export default InfoBox;
