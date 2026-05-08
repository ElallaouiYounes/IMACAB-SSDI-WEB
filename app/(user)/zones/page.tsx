import Dots from "@/components/user/dots";
import Header from "@/components/user/header";
import PageIcon from "@/components/user/page-icon";
import SubHeader from "@/components/user/sub-header";

export default function Page() {


  return (
    <div className="flex flex-col items-center gap-2">
      <PageIcon />
      <Header />
      <SubHeader />
      <Dots />
    </div>
  )
}