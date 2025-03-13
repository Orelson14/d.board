import {
  Search,
  Filter,
  Eye,
  Link,
  MousePointerClick,
  Globe,
  Info,
  MonitorCheckIcon,
} from "lucide-react";
import { AreaChart, Area, ResponsiveContainer } from "recharts";

const ordersData = [
  { value: 180 },
  { value: 260 },
  { value: 310 },
  { value: 420 },
  { value: 170 },
  { value: 490 },
  { value: 430 },
];

const incomeData = [
  { value: 1100 },
  { value: 1450 },
  { value: 1700 },
  { value: 2100 },
  { value: 1750 },
  { value: 2300 },
  { value: 2200 },
];

export default function ProductDashboard() {
  return (
    <div className="max-w-7xl mx-auto overflow-hidden rounded-2xl border border-gray-200 bg-white px-8 pb-8 pt-6 dark:border-gray-800 dark:bg-white/[0.03]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
        <h2 className="text-3xl font-semibold">Your Products</h2>
        <div className="flex gap-3 mt-4 sm:mt-0">
          <div className="relative shadow-lg">
            <Search className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <button className="flex items-center shadow-lg gap-2 px-4 py-2 border rounded-md hover:bg-gray-100">
            <Filter className="w-5 h-5" /> Filter
          </button>
        </div>
      </div>

      {/* Product Card */}
      <div className="flex items-center gap-6 p-5 border rounded-xl shadow-sm mb-8">
        <img
          src="./images/product/product-01.jpg"
          alt="Macbook Pro Air"
          className="w-20 h-20 object-cover rounded-lg"
        />
        <div>
          <h3 className="text-xl font-semibold">Macbook Pro Air</h3>
          <a href="#" className="text-blue-500 flex items-center gap-1">
            <Link className="w-5 h-5" /> product link
          </a>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-3 gap-6">
        {/* Product Stats */}
        <div className="p-5 border rounded-lg shadow-sm">
          <p className="text-gray-600 flex items-center gap-1 border-b pb-2">
            <Eye className="w-5 h-5 text-gray-400" /> Product views:
            <span className="font-semibold">1,389</span>
          </p>
          <p className="text-gray-600 flex items-center gap-1 border-b pb-2">
            <MousePointerClick className="w-5 h-5 text-gray-400" /> Total clicks:
            <span className="font-semibold">1,269</span>
          </p>
          <p className="text-gray-600 flex items-center gap-1 border-b pb-2">
            <Globe className="w-5 h-5 text-gray-400" /> Network clicks:
            <span className="font-semibold">839</span>
          </p>
          <p className="text-gray-600 flex items-center gap-1">
            <MonitorCheckIcon className="w-5 h-5 text-gray-400" /> Clicks ratio:
            <span className="font-semibold">97%</span>
          </p>
        </div>

        {/* Total Orders */}
        <div className="p-5 border rounded-lg shadow-sm">
          <div className="flex justify-between items-center">
            <p className="text-gray-600">Total Orders</p>
            <Info className="w-5 h-5 text-gray-400" />
          </div>
          <p className="text-3xl font-bold">402</p>
          <ResponsiveContainer width="100%" height={60}>
            <AreaChart data={ordersData}>
              <defs>
                <linearGradient id="colorOrders" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#16a34a" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#16a34a" stopOpacity={0} />
                </linearGradient>
              </defs>
              <Area type="monotone" dataKey="value" stroke="#16a34a" fill="url(#colorOrders)" strokeWidth={3} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Total Income */}
        <div className="p-5 border rounded-lg shadow-sm">
          <div className="flex justify-between items-center">
            <p className="text-gray-600">Total Income</p>
            <Info className="w-5 h-5 text-gray-400" />
          </div>
          <p className="text-3xl font-bold">$2,283</p>
          <ResponsiveContainer width="100%" height={60}>
            <AreaChart data={incomeData}>
              <defs>
                <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#2563eb" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#2563eb" stopOpacity={0} />
                </linearGradient>
              </defs>
              <Area type="monotone" dataKey="value" stroke="#2563eb" fill="url(#colorIncome)" strokeWidth={3} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}