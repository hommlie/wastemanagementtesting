import React from "react";

const BsfInnovation = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-8">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to BSF Innovation</h1>
        <p className="text-lg mb-6">This is a placeholder page for the BSF Innovation initiative.</p>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-2">Getting Started</h2>
          <p className="mb-4">Here is some dummy welcome data to show the route works.</p>
          <ul className="text-left list-disc list-inside space-y-2">
            <li>Mission: Explore sustainable waste technologies</li>
            <li>Focus: Circular economy and resource recovery</li>
            <li>Contact: hello@ecosystem.example (dummy)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BsfInnovation;
