interface IMetaRowProps {
    result: Result
    handleCopy: () => void
}

const MetaRow = ({ result, handleCopy }: IMetaRowProps) => {
  return (
    <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-green-500"></span>
        <span className="text-sm font-medium text-gray-300">Generated Script</span>
        </div>
        <div className="flex items-center gap-3">
        {result.retries > 0 && (
            <span className="text-xs text-amber-400 bg-amber-950/50 border border-amber-800 px-2 py-0.5 rounded-full">
            {result.retries} retry
            </span>
        )}
        <button
            onClick={handleCopy}
            className="text-xs text-green-400 hover:text-green-300 border border-green-800 hover:border-green-600 px-3 py-1 rounded-lg transition"
        >
            Copy
        </button>
        </div>
    </div>
  )
}

export default MetaRow