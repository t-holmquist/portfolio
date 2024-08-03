const MagicButton = ({
  title, icon, position, handleClick, otherClasses
}: {
  title: string, icon: React.ReactNode, position: string, handleClick?: () => void; otherClasses?: string; 
}) => {
  return (
    <button onClick={handleClick} className="border-slate-500 border-[2px] w-fit relative inline-flex h-12 overflow-hidden hover:scale-105 transition-all rounded-2xl p-[1px] focus:outline-none">  
        <span className={`${otherClasses} inline-flex h-full w-full cursor-pointer items-center justify-center rounded-2xl bg-slate-800 hover:bg-slate-900 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2`}>
            {position === 'left' && icon}
            {title}
            {position === 'right' && icon}
        </span>
    </button>
  )
}

export default MagicButton