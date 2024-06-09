"use client"
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Hangman = () => {

    const [gussed, setGuessed] = useState("");
    const [guess, setGuess] = useState(5);
    const [word, setWord] = useState("");
    const [isGameOver, setIsGameOver] = useState(false);
    const [wordGuess, setWordGuess] = useState<string[]>([]);
    const [win, setWin] = useState(false);

    useEffect(() => {
        if (guess === 0) {
            setIsGameOver(true)
        }
    }, [guess])
    useEffect(() => {
        if ((wordGuess.concat().join("") === word) && word) {
            setWin(true)
        } else {
            setWin(false)
        }
    }, [wordGuess])

    const randomWord = (num: number) => {
        async function fetchData(num: number) {
            const response = await fetch(`https://random-word-api.herokuapp.com/word?length=${num}`)
            const data = await response.json()
            const word = data[0]
            const wordArr = word.split("")
            setWord(word)
            setWordGuess(wordArr.fill("__", 1))
        }
        fetchData(num)
    }

    const handleRestart = () => {
        setIsGameOver(false)
        setGuessed("")
        setGuess(5)
        setWord("")
        setWordGuess([])
        const min = 3;
        const max = 7;
        const num = Math.floor(Math.random() * (max - min + 1)) + min;
        randomWord(num)
        console.log(num)
    }
    const handleGuess = (letter: string) => {
        if (word.includes(letter)) {
            const newWordGuess = wordGuess.map((char, index) => (word[index] === letter ? letter : char));
            setWordGuess(newWordGuess);
            setGuessed(letter);
        } else {
            setGuess((prev) => prev - 1);
        }
    };

    return (
        <div className="h-[500px] w-96 text-center justify-between bg-transparent md:bg-black flex flex-col rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl md:bg-opacity-30 md:border border-gray-100">
            <h1>Hangman</h1>
            {(!isGameOver) && (!win) && <p className='text-red-500'>{guess}</p>}
            {(isGameOver) && (!win) && <p className='text-red-500'>You Lose!</p>}
            {(win) && <p className='text-green-500'>You Win!</p>}
            <div className='flex flex-col gap-2 h-24 flex-wrap justify-center p-1 bg-slate-500 mt-4'>
                <div className='flex justify-center'>
                    {wordGuess.map((letter, index) => (
                        <span key={index} className='w-8 h-8 content-center rounded-md'>
                            {letter}
                        </span>))}
                </div>
                {((isGameOver) || (win)) && <p>{word}</p>}
            </div>
            <div className='flex gap-2 w-full flex-wrap justify-center p-10'>
                {"abcdefghijklmnopqrstuvwxyz".split('').map((letter, index) => (
                    <p key={index} className='bg-gray-300 visited:bg-gray-800 hover:bg-gray-300/50 cursor-pointer duration-150 w-8 h-8 content-center rounded-md' onClick={() => { handleGuess(letter) }}>{letter}</p>
                ))}
            </div>

            <button className='bg-green-600 hover:bg-green-800 duration-150 text-white p-2 rounded-b-md' onClick={() => handleRestart()}>{(isGameOver) ? "Restart" : "New Word"}</button>
        </div>
    )
}

export default Hangman;
