
interface PrimaryButtonProps {
    text : string
}

const PrimaryButton = ({text} : PrimaryButtonProps) => {

    return (
        <button className="rounded-[16px] text-gray-900 py-2 px-4 bg-tertiary font-[600] cursor-pointer hover:bg-secondary duration-200">{text}</button>
    )
}

export default PrimaryButton