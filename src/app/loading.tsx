import React from "react";

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-licBlue/5">
      <div className="text-center">
        <div className="inline-block h-16 w-16 animate-spin rounded-full border-4 border-licBlue border-t-transparent"></div>
        <h2 className="mt-4 text-xl font-semibold text-licBlue">Loading...</h2>
        <p className="text-gray-600">Please wait while we prepare your experience</p>
      </div>
    </div>
  );
}
