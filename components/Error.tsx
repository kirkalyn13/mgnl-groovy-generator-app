interface IErrorProps {
    error: string
}

const Error = ({ error }: IErrorProps) => {
  return (
          <div className="bg-red-950/30 border border-red-800 rounded-xl px-5 py-4">
            <p className="text-sm text-red-400 font-medium">Error</p>
            <p className="text-sm text-red-300 mt-1">{error}</p>
          </div>
        )
}

export default Error