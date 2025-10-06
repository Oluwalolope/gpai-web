import LineGraph from "./graph/LineGraph";
import HeaderDashboard from "./HeaderDashboard";
import SidebarNavigation from "./SidebarNavigation";

const Analytics = () => {
      return (
        <div className="min-h-dvh bg-slate-50 overflow-x-hidden pb-16 md:pb-0  md:flex md:flex-col">
          {/* Header */}
          <HeaderDashboard />
    
          {/* Main Content */}
          <main className="container mx-auto max-w-7xl px-4 md:px-0 md:grid md:grid-cols-5 md:grid-rows-2 md:gap-4 md:flex-1">
            {/* Desktop Navigation */}
            <aside className="bg-white hidden md:block  md:row-span-2 ">
              <SidebarNavigation />
            </aside>
            <section className={'col-span-4 row-span-2'}>      
                <article className="bg-white shadow-sm border my-3 rounded-lg px-5 w-full">
                    <h1 className="text-2xl font-bold font-poppins text-dark-text py-3">Analytics</h1>

                    <h2 className="text-2xl font-bold font-poppins text-dark-text py-3 uppercase">cgpa growth</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <LineGraph />
                    </div>

                    {/* SGPA Caurosel */}
                    <h2 className="text-2xl font-bold font-poppins text-dark-text py-3 uppercase">sgpa</h2>

                    <div className="flex flex-wrap gap-2 mt-8 mb-5">

                        <div className="border border-neutral-200 shadow-sm p-6 rounded-md w-full max-w-[300px]">
                            <h3>100L</h3>
                            <p>1st Semester: SGPA 4.20</p>
                            <p>2nd Semester: SGPA 3.95</p>
                        </div>

                        <div className="border border-neutral-200 shadow-sm p-6 rounded-md w-full max-w-[300px]">
                            <h3>200L</h3>
                            <p>1st Semester: SGPA 4.10</p>
                            <p>2nd Semester: SGPA 3.45</p>
                        </div>

                        <div className="border border-neutral-200 shadow-sm p-6 rounded-md w-full max-w-[300px]">
                            <h3>300L</h3>
                            <p>1st Semester: SGPA 5.00</p>
                            <p>2nd Semester: SGPA 4.85</p>
                        </div>

                        <div className="border border-neutral-200 shadow-sm p-6 rounded-md w-full max-w-[300px]">
                            <h3>400L</h3>
                            <p>1st Semester: SGPA 4.70</p>
                            <p>2nd Semester: SGPA 4.65</p>
                        </div>

                    </div>
                </article>
            </section>
         </main>
        </div>
      );
}
 
export default Analytics;