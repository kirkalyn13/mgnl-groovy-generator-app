interface IErrorProps {
    error: string
}

const Error = ({ error }: IErrorProps) => {
  return (
          <div className="bg-red-50 border border-red-200 rounded-xl px-5 py-4">
            <p className="text-sm text-red-600 font-medium">Error</p>
            <p className="text-sm text-red-500 mt-1">{error}</p>
          </div>
        )
}

export default Error