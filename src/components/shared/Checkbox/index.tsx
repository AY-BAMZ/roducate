import { cn } from '@/lib';
import Image from 'next/image';
import React, { useState } from 'react';
import Checked from '@/assets/images/Ceklist.svg';
import UnChecked from '@/assets/images/vuesax/bold/tick-square.svg';

function Checkbox() {
    const [checked, setChecked] = useState(false);
    return (
        <>
            {checked ? (
                <Image
                    src={Checked}
                    alt=""
                    width={24}
                    height={24}
                    className={cn('')}
                    onClick={() => setChecked(false)}
                />
            ) : (
                <Image
                    src={UnChecked}
                    alt=""
                    width={24}
                    height={24}
                    className={cn('')}
                    onClick={() => setChecked(true)}
                />
            )}
        </>
    );
}

export default Checkbox;
