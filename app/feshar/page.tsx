'use client'
import React, { useState, ChangeEvent } from 'react';
import imageCompression from 'browser-image-compression';
import { Button } from "@/components/ui/button"
import { Input } from '@/components/ui/input';

export default function Component() {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [compressedFile, setCompressedFile] = useState<Blob | null>(null);
    const [quality, setQuality] = useState<number>(0.8);
    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            setSelectedFile(event.target.files[0]);
        }
    };

    const handleUpload = async () => {
        if (!selectedFile) return;

        const options = {
            maxSizeMB: 1,
            maxWidthOrHeight: 1024,
            useWebWorker: true,
        };

        try {
            const compressed = await imageCompression(selectedFile, options);
            setCompressedFile(compressed);
        } catch (error) {
            console.error('Error compressing the file:', error);
        }
    };

    const downloadCompressedFile = () => {
        if (!compressedFile) return;

        const url = URL.createObjectURL(compressedFile);
        const a = document.createElement('a');
        a.href = url;
        a.download = `compressed-${selectedFile?.name}`;
        a.click();
        URL.revokeObjectURL(url);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8 bg-gray-100 dark:bg-gray-900">
            <div className="max-w-md w-full space-y-6">
                <div className="text-center">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">Image Compressor</h1>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">Optimize your images for faster loading times.</p>
                </div>

                <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 space-y-4">
                    <div className="flex items-center justify-between">
                        <label htmlFor="quality" className="text-gray-700 dark:text-gray-300">
                            Compression Level
                        </label>
                        <div className="flex items-center space-x-2">
                            <input
                                id="quality"
                                type="range"
                                min="0"
                                max="100"
                                defaultValue="80"
                                onChange={() => setQuality}
                                className="w-32 accent-primary-500 dark:accent-primary-400"
                            />
                            <span className="text-gray-700 dark:text-gray-300">{quality * 100} %</span>
                        </div>
                    </div>
                    <div className="flex items-center justify-center rounded-lg p-8 space-y-2">
                        <div className="text-center">
                            <Input type='file' accept="image/*" onChange={handleFileChange} />
                        </div>
                    </div>
                    {!compressedFile && (<div className="flex justify-end space-x-2">
                        <Button onClick={handleUpload} disabled={!selectedFile}>
                            Compress
                            <DownloadIcon className="ml-2 w-4 h-4" />
                        </Button>
                    </div>)}
                    {compressedFile && (
                        <div className='flex justify-end items-center gap-5'>
                            <Button variant="secondary" onClick={() => setCompressedFile(null)}>Cancel</Button>
                            <Button onClick={downloadCompressedFile} className='px-2 py-4'>Download</Button>
                            <h2 className='text-green-600 text-bold'>Successful</h2>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

function DownloadIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" x2="12" y1="15" y2="3" />
        </svg>
    )
}


function UploadIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="17 8 12 3 7 8" />
            <line x1="12" x2="12" y1="3" y2="15" />
        </svg>
    )
}