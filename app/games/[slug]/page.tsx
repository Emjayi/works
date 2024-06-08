"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const Game = () => {
    const router = useRouter();
    console.log(router)

    return (
        <div>Game</div>
    )
}

export default Game