interface ILoaderProps {
  message: string
}

const Loader = ({ message }: ILoaderProps) => {
  return (
    <div
      role="status"
      aria-live="polite"
      className="relative overflow-hidden rounded-xl border border-gray-800 bg-gray-900 shadow-lg shadow-black/30"
    >
      <div
        aria-hidden="true"
        className="h-0.5 animate-pulse bg-gradient-to-r from-transparent via-green-400 to-transparent"
      />

      <div className="p-5 sm:p-6">
        <div className="flex items-center gap-3">
          <div className="flex gap-1" aria-hidden="true">
            <span className="h-2 w-2 animate-bounce rounded-full bg-green-400 [animation-delay:0ms]"></span>
            <span className="h-2 w-2 animate-bounce rounded-full bg-green-400 [animation-delay:150ms]"></span>
            <span className="h-2 w-2 animate-bounce rounded-full bg-green-400 [animation-delay:300ms]"></span>
          </div>
          <span className="text-sm font-medium text-gray-300">{message}</span>
        </div>

        <div className="mt-5 space-y-2.5 rounded-lg border border-gray-800 bg-gray-950 p-4" aria-hidden="true">
          <div className="h-2.5 w-4/5 animate-pulse rounded bg-gray-800"></div>
          <div className="h-2.5 w-3/5 animate-pulse rounded bg-gray-800 [animation-delay:150ms]"></div>
          <div className="h-2.5 w-2/3 animate-pulse rounded bg-gray-800 [animation-delay:300ms]"></div>
          <div className="h-2.5 w-2/5 animate-pulse rounded bg-green-500/20 [animation-delay:450ms]"></div>
        </div>
      </div>
    </div>
  );
}

export default Loader