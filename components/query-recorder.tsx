'use client'

import {useEffect, useState, useRef} from 'react'
import {useRouter} from 'next/navigation'
import type {AI, UIState} from '@/app/actions'
import {useUIState, useActions, useAIState} from 'ai/rsc'
import {cn} from '@/lib/utils'
import {UserMessage} from './user-message'
import {Button} from './ui/button'
import {ArrowRight, Plus} from 'lucide-react'
import {EmptyScreen} from './empty-screen'
import Textarea from 'react-textarea-autosize'
import {generateId} from 'ai'
import {useAppState} from '@/lib/utils/app-state'


interface ChatPanelProps {
    messages: UIState
    query?: string
}

export function QueryRecorder() {

    // variable declarations
    const [voiceFile, setVoiceFile] = useState(null)
    const [recording, setRecording] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [transcript, setTranscript] = useState<string | null>(null)
    const [error, setError] = useState<string | null>(null)

    // function declarations
    const startTranscription = async (voiceFileUrl: string) => {
        setIsLoading(true)
        // const transcript = await openaiService.getTranscription(voiceFileUrl)
        if (transcript === null) {
            setError('Error transcribing the audio')
            console.error("transcription failed")
            setIsLoading(false)
        }
        setTranscript(transcript)
        setIsLoading(false)
    }

    return (
        <div
            className={
                'fixed bottom-8 left-0 right-0 top-10 mx-auto h-screen flex flex-col items-center justify-center'
            }
        >
            <Button onClick={async () => {
                if (recording) {
                } else {
                }
            }
            }>{recording ? "Recording" : "Transcription in process"}</Button>
        </div>
    )
}