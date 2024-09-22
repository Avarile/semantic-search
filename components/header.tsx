import React from 'react'
import {ModeToggle} from './mode-toggle'
import {IconLogo} from './ui/icons'
import {cn} from '@/lib/utils'
import HistoryContainer from './history-container'
import {SiBlogger, SiAngular} from "react-icons/si";

export const Header: React.FC = async () => {
    return (
        <header
            className="fixed w-full p-1 md:p-2 flex justify-between items-center z-10 backdrop-blur md:backdrop-blur-none bg-background/80 md:bg-transparent">
            <div className={"flex flex-column gap-2"}>
                <a href="/">
                    <SiBlogger className={cn('w-5 h-5')}/>
                    <span className="sr-only">Semantic-avarile</span>
                </a>
                <a href="https://blog.avarile.com">
                    <SiAngular className={cn('w-5 h-5')}/>
                    <span className="sr-only">Back to Blog</span>
                </a>
            </div>
            <div className="flex gap-0.5">
                <ModeToggle/>
                <HistoryContainer location="header"/>
            </div>
        </header>
    )
}

export default Header
