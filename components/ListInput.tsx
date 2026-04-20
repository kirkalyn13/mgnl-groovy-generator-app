import TagInput from './TagInput';

interface IListInputProps {
    title: string
    isOptional?: boolean
    placeholder: string
    showTip?: boolean
    values: string[]
    setValues: React.Dispatch<React.SetStateAction<string[]>>
}

const ListInput = ({ title, isOptional = true, placeholder, showTip = true, values, setValues }: IListInputProps) => {
  
  return (
    <>
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
            {title + (isOptional && " (Optional)")}
            {showTip && <span className="text-gray-400 font-normal ml-1">(press Enter or comma to add)</span>}
            </label>
            <TagInput placeholder={placeholder} tags={values} setTags={setValues} />
        </div>
    </>
  )
}

export default ListInput