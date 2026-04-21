interface IScriptOutputProps {
    result: Result
}

const ScriptOutput = ({ result}: IScriptOutputProps) => {
  return (
    <div className="relative">
        <pre className="overflow-y-auto max-h-96 bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm text-gray-800 font-mono leading-relaxed whitespace-pre-wrap break-words">
        {result.script}
        </pre>
    </div>
  )
}

export default ScriptOutput