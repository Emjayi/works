import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const layout = ({ children }: any) => {
    return (
        <div className='container flex flex-col gap-12 h-screen w-screen justify-center items-center'>
            {children}
            <Link href="./"><Button variant="outline">Back</Button></Link>
        </div>
    )
}

export default layout