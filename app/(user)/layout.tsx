import Navbar from "@/components/user/navbar";
import Sidebar from "@/components/user/sidebar";
import Footer from "@/components/user/footer";
import Process from "@/components/user/phone-process";

const UserLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-backg overflow-hidden">
      <Navbar />

      <main className="mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 px-2 md:px-3 lg:px-4 py-6">
        <Sidebar />
        <Process />

        <section className="min-h-180 md:col-span-2 lg:col-span-3 rounded-2xl border border-slate-200 bg-white shadow-sm px-4 py-4">
          {children}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default UserLayout;