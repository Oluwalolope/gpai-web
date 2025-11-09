import HeaderDashboard from "../UI/HeaderDashboard";
import SidebarNavigation from "../UI/SidebarNavigation";
import Calculator from "./Calculator";


const GPACalculator = () => {
  return (
    <div className="min-h-dvh bg-slate-50 overflow-x-hidden pb-16 lg:pb-0  lg:flex lg:flex-col">
      <HeaderDashboard />

      <main className="container mx-auto max-w-7xl min-h-dvh px-4 lg:px-0 lg:grid lg:grid-cols-5 lg:grid-rows-2 lg:gap-4 lg:flex-1">
        <SidebarNavigation  />
        
        <section className={'col-span-4 row-span-2'}>
        {/* <h3 className="text-lg font-semibold text-gray-700">GPAi Calculator</h3> */}
        
        <div className="text-center mt-3 mb-12">
          <Calculator />
        </div>
          
        </section>
     </main>
    </div>
  );
}
 
export default GPACalculator;