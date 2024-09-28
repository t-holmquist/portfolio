const MagicButton = ({
  title, icon, position, handleClick, otherClasses
}: {
  title: string, icon: React.ReactNode, position: string, handleClick?: () => void; otherClasses?: string; 
}) => {
  return (
    <button onClick={handleClick} className="border-slate-300 border w-fit relative inline-flex overflow-hidden hover:scale-105 transition-all rounded-2xl">  
        <span className={`${otherClasses} inline-flex h-full w-full p-3 cursor-pointer items-center justify-center bg-brandPrimary hover:bg-[#de947e] text-sm font-medium text-white gap-2`}>
            {position === 'left' && icon}
            {title}
            {position === 'right' && icon}
        </span>
    </button>
  )
}

export default MagicButton