"use client"
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Hangman = () => {

    const [gussed, setGuessed] = useState("");
    const [guess, setGuess] = useState(5);
    const [word, setWord] = useState("");
    const [isGameOver, setIsGameOver] = useState(false);

    if (guess === 0) {
        setIsGameOver(true)
    }

    const randomWord = () => {
        async function fetchData() {
            const response = await fetch("https://random-word-api.herokuapp.com/word")
            const data = await response.json()
            setWord(data[0])
        }
        fetchData()
    }


    useEffect(() => {
        if (word.includes(gussed)) {
            setGuessed("")
        } else {
            setGuess(guess - 1)
            setGuessed("")
        }
    }, [gussed])

    return (
        <div className="h-[500px] w-96 text-center justify-between bg-black flex flex-col rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-30 border border-gray-100">
            <h1>Hangman</h1>
            {(guess > 0) && <p className='text-red-500'>{guess}</p>}
            {(guess === 0) && <p className='text-red-500'>You Lose</p>}
            <div className='flex flex-col gap-2 flex-wrap justify-center p-1 bg-slate-500 mt-4'>
                <div className='flex justify-center'>
                    {word.split("").map((letter, index) => (
                        <span className='w-8 h-8 content-center rounded-md'>
                            {letter === gussed ? letter : "-"}
                        </span>
                    ))}
                </div>
                <p>{word}</p>
            </div>
            <div className='flex gap-2 w-full flex-wrap justify-center p-10'>
                {"abcdefghijklmnopqrstuvwxyz".split('').map((letter, index) => (
                    <p className='bg-gray-300 hover:bg-gray-300/50 cursor-pointer duration-150 w-8 h-8 content-center rounded-md' onClick={() => { setGuessed(letter) }}>{letter}</p>
                ))}
            </div>

            <button className='bg-green-600 hover:bg-green-800 duration-150 text-white p-2 rounded-b-md' onClick={randomWord}>Start</button>
        </div>
    )
}

export default Hangman;
