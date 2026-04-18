const Header = () => {
  return (
    <header className="bg-green-700 text-white px-6 py-4 flex items-center gap-3 shadow-sm">
      <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
        <span className="text-green-700 font-bold text-sm">M</span>
      </div>
      <div>
        <h1 className="text-lg font-semibold leading-none">Magnolia Groovy Generator</h1>
        <p className="text-green-200 text-xs mt-0.5">RAG-powered CMS script generator</p>
      </div>
      <div className="ml-auto flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-green-300 inline-block"></span>
        <span className="text-green-200 text-xs">API connected</span>
      </div>
    </header>
  );
}

export default Header