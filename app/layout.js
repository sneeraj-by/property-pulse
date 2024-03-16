import "@/assets/styles/globals.css";

export const metadata = {
  title: "Property Pulse | Find the property",
  description: "Find the property for rent",
  keyword: "rental, find rentals, find properties",
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
};

export default MainLayout;
