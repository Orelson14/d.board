import { ArrowUpRight, Calendar, Download } from "lucide-react";
import Badge from "../ui/badge/Badge";

export default function EcommerceMetrics() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-2xl font-bold text-gray-900 mb-2 sm:mb-0">Dashboard</h2>
        <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
          <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 border rounded-lg bg-white shadow-sm hover:bg-gray-50 w-full sm:w-auto">
            <Calendar size={16} />
            Calendar
          </button>
          <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 border rounded-lg bg-white shadow-sm hover:bg-gray-50 w-full sm:w-auto">
            <Download size={16} />
            Export
          </button>
        </div>
      </div>

      {/* Metrics */}
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Total Sales */}
        <div className="flex-1 rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Total sales
            </span>
            <ArrowUpRight size={16} className="text-gray-400" />
          </div>
          <div className="flex items-end justify-between mt-5">
            <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
              $32,892
            </h4>
            <Badge color="success">+52%</Badge>
          </div>
        </div>

        {/* Total Customers */}
        <div className="flex-1 rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Total customers
            </span>
            <ArrowUpRight size={16} className="text-gray-400" />
          </div>
          <div className="flex items-end justify-between mt-5">
            <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
              1,831
            </h4>
            <Badge color="success">+34%</Badge>
          </div>
        </div>

        {/* Conversion Rate */}
        <div className="flex-1 rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Conversion rate
            </span>
            <ArrowUpRight size={16} className="text-gray-400" />
          </div>
          <div className="flex items-end justify-between mt-5">
            <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
              96.8%
            </h4>
            <Badge color="success">+14%</Badge>
          </div>
        </div>
      </div>
    </div>
  );
}