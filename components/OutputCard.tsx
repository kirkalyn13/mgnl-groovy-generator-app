import { Ref, useEffect, useRef, useState } from "react"
import MetaRow from "./MetaRow"
import ScriptOutput from "./ScriptOutput"
import QueryEcho from "./QueryEcho"

interface IOutputCardProps {
    result: Result
    outputRef?: Ref<HTMLDivElement>
    handleCopy: () => Promise<boolean> | boolean | void
}

const OutputCard = ({ result, outputRef, handleCopy }: IOutputCardProps) => {
  const [status, setStatus] = useState<"copied" | "failed" | null>(null)
  const timer = useRef<ReturnType<typeof setTimeout>>()

  useEffect(() => () => clearTimeout(timer.current), [])

  const onCopy = async () => {
    const ok = await handleCopy()
    setStatus(ok === false ? "failed" : "copied")
    clearTimeout(timer.current)
    timer.current = setTimeout(() => setStatus(null), 1800)
  }

  return (
    <div
      ref={outputRef}
      className="relative flex flex-col gap-4 rounded-xl border border-gray-800 bg-gray-900 p-6 shadow-lg shadow-black/30"
    >
      <div role="status" aria-live="polite" className="pointer-events-none absolute -top-3 right-4">
        {status && (
          <span
            className={`rounded-full border px-3 py-1 text-xs font-medium shadow-lg ${
              status === "copied"
                ? "border-green-500/40 bg-green-950 text-green-300"
                : "border-red-500/40 bg-red-950 text-red-300"
            }`}
          >
            {status === "copied" ? "Copied to clipboard" : "Copy failed"}
          </span>
        )}
      </div>

      <MetaRow result={result} handleCopy={onCopy} />
      <ScriptOutput result={result} />
      <QueryEcho result={result} />
    </div>
  )
}

export default OutputCard