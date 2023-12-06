import React, { ReactNode } from 'react';

interface ProvidersProps {
    children: ReactNode;
}

function Providers({ children }: ProvidersProps) {
    return <>{children}</>;
}

export default Providers;
