"use client"
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const router = useRouter()
const page = () => {
    const games = [
        { name: "TicTokToe", slug: "tic-tac-toe" },
        { name: "Trivia", slug: "trivia" },
        { name: "Hangman", slug: "hangman" },
        { name: "Memory", slug: "memory" },
        { name: "Snake", slug: "snake" },
        { name: "Minesweeper", slug: "minesweeper" },
    ]
    return (
        <div className='grid grid-rows-2 grid-cols-3 gap-4'>
            {games.map(({ slug, name }, index) => {
                return (
                    <div key={index} onClick={() => router.push(`/games/${slug}`)} className='bg-white hover:cursor-pointer rounded-lg shadow-lg shadow-black/5 w-64 h-40 flex flex-col justify-center items-center hover:bg-white/30 duration-300'>{name}</div>
                )
            })}
        </div>

    )
}

export default page