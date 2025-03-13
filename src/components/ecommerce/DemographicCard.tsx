import { MoreDotIcon } from "../../icons";

export default function TopRegionCard() {
  const regions = [
    { country: "United States", continent: "North America", users: "8,904", flag: "./images/country/country-01.svg" },
    { country: "France", continent: "Europe", users: "4,748", flag: "./images/country/country-02.svg" },
    { country: "Singapore", continent: "Asia", users: "4,673", flag: "./images/country/country-03.svg" },
    { country: "United Kingdom", continent: "Europe", users: "3,321", flag: "./images/country/country-04.svg" },
    { country: "Yemen", continent: "Asia", users: "3,321", flag: "./images/country/country-05.svg" },
  ];

  return (
    <div className="w-96 rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] sm:p-6">
      <div className="flex justify-between">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">Top Region</h3>
        <MoreDotIcon className="text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 size-6" />
      </div>
      <div className="mt-4 space-y-4">
        {regions.map((region, index) => (
          <div key={index} className="flex items-center justify-between border-b pb-3 last:border-none">
            <div className="flex items-center gap-3">
              <img src={region.flag} alt={region.country} className="w-6 h-6 rounded-full" />
              <div>
                <p className="font-semibold text-gray-800 dark:text-white/90">{region.country}</p>
                <span className="block text-gray-500 text-sm dark:text-gray-400">{region.continent}</span>
              </div>
            </div>
            <p className="font-medium text-gray-800 dark:text-white/90">{region.users} users</p>
          </div>
        ))}
      </div>
    </div>
  );
}
