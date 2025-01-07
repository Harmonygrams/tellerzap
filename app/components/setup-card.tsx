'use client';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Link from 'next/link';

interface SetupCardProps {
    name : string; 
    description : string; 
    percentage : number;
    link : string; 
}
export function SetupCard ({name, description, percentage, link} : SetupCardProps) {
    return(
        <Link href={link} className='flex justify-between border p-4 rounded-lg flex-4 cursor-pointer hover:bg-gray-100 transition-bg duration-200 items-center'>
            <div className='flex flex-col gap-2'>
                {/* Name of card */}
                <p className='font-semibold'>{name}</p>
                {/* Desciption */}
                <p className='font-light text-xs text-gray-700'>{description} </p>
            </div>
            <div className='w-16 h-16'>
                {/* Status */}
                <CircularProgressbar value={percentage} text={`${percentage}%`} strokeWidth={20}/>;
            </div>
        </Link>
    )
}