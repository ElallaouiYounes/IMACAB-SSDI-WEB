import Dots from "@/components/user/dots";
import Header from "@/components/user/header";
import PageIcon from "@/components/user/page-icon";
import SubHeader from "@/components/user/sub-header";
import UserRouteGuard from "@/components/user/user-route-guard";


export default function Page () {

    return (
        <UserRouteGuard>
            <div className="flex min-h-full w-full flex-col items-center px-2 md:px-6 md:py-4 lg:px-10">
                <PageIcon />
            
                <div className="mt-5 max-w-4xl text-center md:mt-7">
                    <Header />
                    <SubHeader />
                </div>
            
                <div className="mt-5 md:mt-7">
                    <Dots />
                </div>
        
            </div>
        </UserRouteGuard>
    )
}