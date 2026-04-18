interface IQueryEchoProps {
    result: Result
}

const QueryEcho = ({ result }: IQueryEchoProps) => {
  return (
    <div className="border-t border-gray-100 pt-3">
        <p className="text-xs text-gray-400">
        <span className="font-medium text-gray-500">Query:</span> {result.query}
        </p>
    </div>
  )
}

export default QueryEcho