import EcommerceMetrics from "../../components/ecommerce/EcommerceMetrics";
import MonthlySalesChart from "../../components/ecommerce/MonthlySalesChart";
import Bubble from "../../components/ecommerce/Bubble";
import MonthlyTarget from "../../components/ecommerce/MonthlyTarget";
import RecentOrders from "../../components/ecommerce/RecentOrders";
import DemographicCard from "../../components/ecommerce/DemographicCard";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-12 gap-x-5 gap-y-5 md:gap-6">
        {/* Left Section */}
        <div className="col-span-12 xl:col-span-9 space-y-6">
          <EcommerceMetrics />

          <MonthlySalesChart />

          <RecentOrders />
        </div>

        {/* Right Section */}
        <div className="col-span-12 xl:col-span-3 space-y-6">
          <Bubble />

          <MonthlyTarget />

          <DemographicCard />
        </div>
      </div>
    </>
  );
}
