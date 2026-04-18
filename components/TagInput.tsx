import { useState } from 'react'

interface ITagInputProps {
    tags: string[]
    setTags: React.Dispatch<React.SetStateAction<string[]>>
}

const TagInput = ({ tags, setTags }: ITagInputProps) => {
  const [input, setInput] = useState("");
  
    const handleKeyDown = (e: { key: string; preventDefault: () => void; }) => {
      if ((e.key === "Enter" || e.key === ",") && input.trim()) {
        e.preventDefault();
        if (!tags.includes(input.trim())) {
          setTags([...tags, input.trim()]);
        }
        setInput("");
      }
      if (e.key === "Backspace" && !input && tags.length) {
        setTags(tags.slice(0, -1));
      }
    };
  
    const removeTag = (tag: string) => setTags(tags.filter((t) => t !== tag));
  
    return (
      <div className="flex flex-wrap gap-2 border border-gray-300 bg-gray-50 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-green-500 focus-within:border-transparent min-h-[42px]">
        {tags.map((tag: string) => (
          <span
            key={tag}
            className="flex items-center gap-1 bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-md"
          >
            {tag}
            <button
              onClick={() => removeTag(tag)}
              className="text-green-600 hover:text-green-900 leading-none"
            >
              &times;
            </button>
          </span>
        ))}
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="e.g. username, email, pageTitle..."
          className="flex-1 min-w-[120px] bg-transparent text-sm text-gray-800 placeholder-gray-400 outline-none"
        />
      </div>
    );
}

export default TagInput