import React from "react";
import Link from "next/link";
import InfoBox from "./InfoBox";

const InfoBoxes = () => {
  return (
    <section>
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <InfoBox
            backgroundColor="bg-gray-100"
            heading="For Renters"
            buttonInfo={{
              path: "/properties",
              bgColor: "bg-black",
              text: "Browse Properties",
            }}
          >
            Find your dream rental property. Bookmark properties and contact
            owners.
          </InfoBox>
          <InfoBox
            backgroundColor="bg-blue-100"
            heading="For Property Owners"
            buttonInfo={{
              path: "/properties/add",
              bgColor: "bg-blue-500",
              text: "Add Property",
            }}
          >
            List your properties and reach potential tenants. Rent as an airbnb
            or long term.
          </InfoBox>
        </div>
      </div>
    </section>
  );
};

export default InfoBoxes;
