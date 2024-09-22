import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import {Text} from "@radix-ui/themes";

const exampleMessages = [
  {
    heading: 'What is the forecast of Melbourne housing market in 2024?',
    message: 'What is the forecast of Melbourne housing market in 2024?'
  },
  {
    heading: 'Why is Nvidia growing rapidly?',
    message: 'Why is Nvidia growing rapidly?'
  },
  {
    heading: 'How does the RAG works for Fintech companies?',
    message: 'How does the RAG works for Fintech companies?'
  },
  {
    heading: 'List all logistics companies in the South Melbourne area <= Hi, Boss, Click here for example of Company Search',
    message: 'List all logistics companies in the South Melbourne area, provide contact info if possible.'
  }
]
export function EmptyScreen({
  submitMessage,
  className
}: {
  submitMessage: (message: string) => void
  className?: string
}) {
  return (
    <div className={`mx-auto w-full transition-all ${className}`}>
      <div className="bg-background p-2">
        <div className="mt-4 flex flex-col items-start space-y-2 mb-4">
          {exampleMessages.map((message, index) => (
            <Button
              key={index}
              variant="link"
              className="h-auto p-0 text-base text-wrap justify-start text-left"
              name={message.message}
              onClick={async () => {
                submitMessage(message.message)
              }}
            >
              <ArrowRight size={16} className="mr-2 text-muted-foreground min-w-4" />
                {message.heading}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
