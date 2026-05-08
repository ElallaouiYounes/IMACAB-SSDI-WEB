import PageIcon from "@/components/user/page-icon";
import Header from "@/components/user/header";
import SubHeader from "@/components/user/sub-header";
import Dots from "@/components/user/dots";
import IdentificationForm from "@/components/user/identification-form";

export default function Page() {
  return (
    <div className="flex min-h-full w-full flex-col items-center md:justify-center px-2 md:px-6 md:py-4 lg:px-10">
      <PageIcon />

      <div className="mt-5 max-w-4xl text-center md:mt-7">
        <Header />
        <SubHeader />
      </div>

      <div className="mt-5 md:mt-7">
        <Dots />
      </div>

      <div className="mt-6 w-full max-w-3xl md:mt-8">
        <IdentificationForm />
      </div>
    </div>
  );
}