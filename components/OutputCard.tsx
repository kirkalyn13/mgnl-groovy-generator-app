import { Ref } from "react"
import MetaRow from "./MetaRow"
import ScriptOutput from "./ScriptOutput"
import QueryEcho from "./QueryEcho"

interface IOutputCardProps {
    result: Result
    outputRef: Ref<HTMLDivElement> | undefined
    handleCopy: () => void
}

const OutputCard = ({ result, outputRef, handleCopy}: IOutputCardProps) => {
  return (
          <div ref={outputRef} className="bg-gray-900 border border-gray-800 rounded-xl p-6 flex flex-col gap-4">
            <MetaRow result={result} handleCopy={handleCopy} />
            <ScriptOutput result={result} />
            <QueryEcho result={result} />
          </div>
        )
}

export default OutputCard