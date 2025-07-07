import { useState } from "react"


interface QuestionProps {
    question: string;
    answer: string;
}

const Question = ({ question, answer }: QuestionProps) => {
    const [open, setOpen] = useState(false)
    return (
        <div className="w-[60%] rounded-lg overflow-hidden mb-4">
        <div 
          onClick={() => setOpen(!open)} 
          className="flex items-center cursor-pointer p-4 bg-primary text-secondary font-semibold text-xl hover:bg-opacity-90 transition"
        >
          <span className="mr-4">G</span>
          <p className="flex-1">{question}</p>

        </div>
  
        <div 
          className={`
            bg-tertiary text-primary 
            transition-all duration-300 ease-in-out 
            overflow-hidden
            ${open ? 'max-h-auto opacity-100 py-4 px-6' : 'max-h-0 opacity-0 py-0 px-6'}
          `}
        >
          <p>{answer}</p>
        </div>
      </div> 
    )
}

export default Question