import React from "react";
import { Info } from "lucide-react";

export default function DeviceStats() {
  return (
    <div className="w-96 bg-white rounded-2xl p-6 border border-gray-200 dark:border-gray-800 dark:bg-white/[0.03]">
      {/* Header */}
      <div className="flex justify-between items-center">
        <span className="text-gray-600 dark:text-gray-400 text-base font-semibold">Total Devices</span>
        <Info className="text-gray-400 dark:text-gray-500 w-5 h-5" />
      </div>

      {/* Total Count */}
      <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mt-2">24,632</h2>

      {/* Progress Bar */}
      <div className="mt-4 w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full relative overflow-hidden">
        <div 
          className="h-3 bg-blue-600 rounded-full transition-all duration-700 ease-in-out" 
          style={{ width: "89%" }} 
        ></div>
      </div>

      {/* Stats */}
      <div className="mt-5 space-y-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 bg-blue-600 rounded-full"></span>
            <span className="text-gray-800 dark:text-gray-300 text-base font-medium">Product views</span>
          </div>
          <span className="text-gray-800 dark:text-gray-300 text-base font-medium">89%</span>
        </div>
        
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 bg-gray-500 rounded-full"></span>
            <span className="text-gray-500 dark:text-gray-400 text-base font-medium">Total clicks</span>
          </div>
          <span className="text-gray-500 dark:text-gray-400 text-base font-medium">11%</span>
        </div>
      </div>
    </div>
  );
}
