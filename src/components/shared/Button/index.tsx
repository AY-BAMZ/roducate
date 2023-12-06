import { cn } from '@/lib';
import React, { ReactNode } from 'react';

interface ButtonProps {
    children: ReactNode;
    className?: any;
    type?: string;
}

function Button({ children, className, type }: ButtonProps) {
    return (
        <button
            className={cn(
                'px-5 py-3 text-[16px] w-fit leading-[20px] text-white rounded bg-primary-default',
                className,
                {
                    'bg-[#54A6FF]': type === 'secondary',
                }
            )}
        >
            {children}
        </button>
    );
}

export default Button;
