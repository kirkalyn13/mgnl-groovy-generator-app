import { useState } from 'react'
import TagInput from './TagInput';

interface IPropertiesProps {
    properties: string[]
    setProperties: React.Dispatch<React.SetStateAction<string[]>>
}

const Properties = ({ properties, setProperties }: IPropertiesProps) => {
  
  return (
    <>
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
            Expected properties (Optional)
            <span className="text-gray-400 font-normal ml-1">(press Enter or comma to add)</span>
            </label>
            <TagInput tags={properties} setTags={setProperties} />
        </div>
    </>
  )
}

export default Properties