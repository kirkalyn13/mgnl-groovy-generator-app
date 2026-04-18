interface ILoaderProps {
  message: string
}

const Loader = ({ message }: ILoaderProps) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 px-6">
      <div className="flex items-center gap-3 py-4 px-2">
      <div className="flex gap-1">
        <span className="w-2 h-2 rounded-full bg-green-500 animate-bounce [animation-delay:0ms]"></span>
        <span className="w-2 h-2 rounded-full bg-green-500 animate-bounce [animation-delay:150ms]"></span>
        <span className="w-2 h-2 rounded-full bg-green-500 animate-bounce [animation-delay:300ms]"></span>
        </div>
        <span className="text-sm text-gray-500">{message}</span>
      </div>
    </div>
  );
}

export default Loader