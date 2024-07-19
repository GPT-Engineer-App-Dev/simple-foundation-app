import { Button } from "@/components/ui/button";
import { useState } from "react";

const HomePage = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleButtonClick = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Welcome to Our App</h1>
      <p className="mb-6">This is a simple bare-bones application that you can build upon.</p>
      <Button onClick={handleButtonClick}>Click me!</Button>
      {showAlert && (
        <div className="mt-4 p-4 bg-green-100 text-green-700 rounded">
          Hello! This is a simple alert.
        </div>
      )}
    </div>
  );
};

export default HomePage;