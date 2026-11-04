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
    <div className="group relative">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-px rounded-xl bg-gradient-to-r from-green-500/50 via-emerald-400/30 to-green-500/50 opacity-0 blur-sm transition duration-500 group-focus-within:opacity-100"
      />

      <div className="relative overflow-hidden rounded-xl border border-gray-800 bg-gray-900 shadow-lg shadow-black/30 transition-colors group-focus-within:border-green-500/40">
        <div
          aria-hidden="true"
          className={`h-0.5 bg-gradient-to-r from-transparent via-green-400 to-transparent ${loading ? "animate-pulse" : "opacity-40"}`}
        />

        <div className="p-5 sm:p-6">
          <div className="mb-4 flex items-center gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-green-500/30 bg-green-500/10 text-green-400">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
            </span>
            <label htmlFor="groovy-query" className="block text-sm font-medium text-gray-200">
              Describe the Groovy script you need
            </label>
          </div>

          <textarea
            id="groovy-query"
            className="w-full resize-none rounded-lg border border-gray-700 bg-gray-950 px-4 py-3 text-sm text-gray-100 placeholder-gray-500 transition focus:border-transparent focus:outline-none focus:ring-2 focus:ring-green-500 disabled:opacity-60"
            rows={4}
            placeholder="e.g. Generate a Magnolia CMS Groovy script to retrieve all published pages..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={loading}
          />
          <ListInput title="Workspaces" placeholder="e.g. website, dam, articles..." values={workspaces} setValues={setWorkspaces}  />
          <ListInput title="Expected properties" placeholder="e.g. path, slug, status..." showTip={false} values={properties} setValues={setProperties}  />

          <div className="mt-5 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
            <span className="flex items-center justify-center gap-1.5 text-xs text-gray-500 sm:justify-start">
              Press
              <kbd className="rounded border border-gray-700 bg-gray-800 px-1.5 py-0.5 font-sans text-[11px] text-gray-300">Cmd</kbd>
              +
              <kbd className="rounded border border-gray-700 bg-gray-800 px-1.5 py-0.5 font-sans text-[11px] text-gray-300">Enter</kbd>
              to generate
            </span>
            <button
              onClick={handleGenerate}
              disabled={loading || !query.trim()}
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-green-500/20 transition hover:-translate-y-0.5 hover:from-green-400 hover:to-emerald-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 disabled:translate-y-0 disabled:cursor-not-allowed disabled:from-gray-700 disabled:to-gray-700 disabled:text-gray-400 disabled:shadow-none sm:w-auto"
            >
              {loading ? (
                <>
                  <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25" />
                    <path d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth="4" strokeLinecap="round" className="opacity-75" />
                  </svg>
                  Generating...
                </>
              ) : (
                <>
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                    <path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4L12 2z" />
                  </svg>
                  Generate
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InputCard