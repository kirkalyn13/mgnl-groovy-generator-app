import { useAtom } from "jotai"
import ListInput from "./ListInput"
import { propertiesAtom, workspaceAtom } from "../store"


interface IInputCard {
    query: string
    loading: boolean
    handleKeyDown: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void
    handleGenerate: () => void
    setQuery: React.Dispatch<React.SetStateAction<string>>
}

const InputCard = ({ query, loading, handleKeyDown, handleGenerate, setQuery }: IInputCard) => {
  const [ workspaces, setWorkspaces] = useAtom(workspaceAtom);
  const [ properties, setProperties] = useAtom(propertiesAtom);

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Describe the Groovy script you need
          </label>
          <textarea
            className="w-full rounded-lg border border-gray-700 bg-gray-950 px-4 py-3 text-sm text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none transition"
            rows={4}
            placeholder="e.g. Generate a Magnolia CMS Groovy script to retrieve all published pages..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={loading}
          />
          <ListInput title="Workspaces" placeholder="e.g. website, dam, articles..." values={workspaces} setValues={setWorkspaces}  />
          <ListInput title="Expected properties" placeholder="e.g. path, slug, status..." showTip={false} values={properties} setValues={setProperties}  />
          <div className="flex items-center justify-between mt-3">
            <span className="text-xs text-gray-500">Press Cmd+Enter to generate</span>
            <button
              onClick={handleGenerate}
              disabled={loading || !query.trim()}
              className="bg-green-600 hover:bg-green-700 disabled:bg-gray-700 disabled:cursor-not-allowed text-white text-sm font-medium px-5 py-2 rounded-lg transition"
            >
              Generate
            </button>
          </div>
        </div>
  )
}

export default InputCard