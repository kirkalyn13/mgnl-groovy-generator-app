interface IMetaRowProps {
    result: Result
    handleCopy: () => void
}

const MetaRow = ({ result, handleCopy }: IMetaRowProps) => {
  return (
    <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-green-500"></span>
        <span className="text-sm font-medium text-gray-700">Generated Script</span>
        </div>
        <div className="flex items-center gap-3">
        {result.retries > 0 && (
            <span className="text-xs text-amber-600 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full">
            {result.retries} retry
            </span>
        )}
        <button
            onClick={handleCopy}
            className="text-xs text-green-600 hover:text-green-700 border border-green-200 hover:border-green-400 px-3 py-1 rounded-lg transition"
        >
            Copy
        </button>
        </div>
    </div>
  )
}

export default MetaRow