import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { useState } from "react";
import { Dropdown } from "../ui/dropdown/Dropdown";
import { DropdownItem } from "../ui/dropdown/DropdownItem";

export default function MonthlySalesChart() {
  const options: ApexOptions = {
    colors: ["#2D63E2"],
    chart: {
      type: "bar",
      height: 220,
      toolbar: { show: false },
      fontFamily: "Outfit, sans-serif",
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "40%", // Ajustement pour l'espacement
        borderRadius: 5,
        borderRadiusApplication: "end",
      },
    },
    dataLabels: { enabled: false },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: [
        "Jan","", "Feb","", "Mar","", "Apr","", "May","", "Jun","", "Jul","", "Aug","", "Sep","", "Oct","", "Nov","", "Dec",
      ],
      axisBorder: { show: false },
      axisTicks: { show: false },
      labels: { style: { fontSize: "14px", fontWeight: 500 } },
      tickAmount: 12,
    },
    yaxis: { show: false },
    grid: { show: false },
    tooltip: {
      y: { formatter: (val: number) => `${val}` },
    },
  };

  const series = [
    {
      name: "Main Sales",
      data: [168, 120, 100, 137, 100, 50, 90, 190, 200, 385, 210, 201, 190, 175, 298, 40, 260, 100, 40, 287, 240, 295, 350],
    },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-2xl border border-gray-200 bg-white px-5 pt-5 dark:border-gray-800 dark:bg-gray-900 sm:px-6 sm:pt-6">
      <div className="flex items-center justify-between">
        <div className="relative">
          <Dropdown isOpen={isOpen} onClose={() => setIsOpen(false)} className="w-40 p-2">
            <DropdownItem className="hover:bg-gray-100 dark:hover:bg-gray-700">View More</DropdownItem>
            <DropdownItem className="hover:bg-gray-100 dark:hover:bg-gray-700">Delete</DropdownItem>
          </Dropdown>
        </div>
      </div>
      <div className="w-full overflow-x-auto">
        <Chart options={options} series={series} type="bar" height={220} />
      </div>
    </div>
  );
}
