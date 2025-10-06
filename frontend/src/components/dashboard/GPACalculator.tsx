import YearCalculator from "../calculators/YearCalculator";
import HeaderDashboard from "./HeaderDashboard";
import SidebarNavigation from "./SidebarNavigation";


const GPACalculator = () => {
  return (
    <div className="min-h-dvh bg-slate-50 overflow-x-hidden pb-16 md:pb-0  md:flex md:flex-col">
      {/* Header */}
      <HeaderDashboard />

      {/* Main Content */}
      <main className="container mx-auto max-w-7xl px-4 md:px-0 md:grid md:grid-cols-5 md:grid-rows-2 md:gap-4 md:flex-1">
        {/* Desktop Navigation */}
        <aside className="bg-white hidden md:block  md:row-span-2 ">
          <SidebarNavigation  />
        </aside>
        <section className={'col-span-4 row-span-2'}>
        {/* <h3 className="text-lg font-semibold text-gray-700">GPAi Calculator</h3> */}
        
        <div className="text-center mt-3 mb-12">
          <YearCalculator />
        </div>
          
        </section>
     </main>
    </div>
  );
}
 
export default GPACalculator;