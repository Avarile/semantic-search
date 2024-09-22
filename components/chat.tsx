'use client'

import React, {useEffect} from 'react'
import {usePathname} from 'next/navigation'
import {ChatPanel} from './chat-panel'
import {ChatMessages} from './chat-messages'
import {useUIState} from 'ai/rsc'

import {Text} from '@radix-ui/themes'
import {QueryRecorder} from "@/components/query-recorder";
import {SiAngular} from "react-icons/si";
import {cn} from "@/lib/utils";

type ChatProps = {
    id?: string
    query?: string
}

export function Chat({id, query}: ChatProps) {
    const path = usePathname()
    const [messages] = useUIState()

    useEffect(() => {
        if (!path.includes('search') && messages.length === 1) {
            window.history.replaceState({}, '', `/search/${id}`)
        }
    }, [id, path, messages, query])

    return (
        <div
            className="px-8 sm:px-12 pt-12 md:pt-14 pb-14 md:pb-24 max-w-3xl mx-auto flex flex-col space-y-3 md:space-y-4">
            <div className="flex justify-center gap-2">
                <a href="https://blog.avarile.com">
                    <SiAngular className={cn('w-5 h-5')}/>
                    <span className="sr-only">Back to Blog</span>
                </a>
                <Text as={"label"} weight={"bold"} align={'center'} size={"3"}>Semantic Search Engine</Text>
            </div>
            <ChatMessages messages={messages}/>
            <ChatPanel messages={messages} query={query}/>
        </div>
    )
}
