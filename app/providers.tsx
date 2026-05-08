'use client';

import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/query-clients";
import { ReactQueryDevtools} from "@tanstack/react-query-devtools"

interface ProviderProps {
    children : React.ReactNode,
}

const Provider = ({children}:ProviderProps) => {

    return (
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools />
            {children}
        </QueryClientProvider>
    )
}

export default Provider;