import { Settings, Edit, MoreVertical } from "lucide-react";

export default function BubbleStoreCard() {
  return (
    <div className="w-full sm:w-96 rounded-2xl border border-gray-200 bg-gray-100 dark:border-gray-800 dark:bg-white/[0.03]">
      <div className="px-6 pt-6 bg-white rounded-2xl pb-12 dark:bg-gray-900 flex flex-col items-center">
        {/* Logo */}
        <div className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center">
          <span className="text-white text-4xl font-bold">✤</span>
        </div>

        {/* Nom et lien */}
        <h2 className="mt-4 text-xl font-semibold flex items-center dark:text-white">
          Bubble Store
          <span className="ml-2 bg-blue-100 text-blue-600 text-sm font-bold px-3 py-1 rounded-md">
            PRO
          </span>
        </h2>
        <p className="text-gray-500 text-base mt-1">bubble.upscale.com</p>

        {/* Actions */}
        <div className="mt-5 flex gap-6">
          <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center">
            <Edit className="w-6 h-6 text-gray-600" />
          </button>
          <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center">
            <Settings className="w-6 h-6 text-gray-600" />
          </button>
          <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center">
            <MoreVertical className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
}