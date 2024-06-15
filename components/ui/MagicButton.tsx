const MagicButton = ({
  title, icon, position, handleClick, otherClasses
}: {
  title: string, icon: React.ReactNode, position: string, handleClick?: () => void; otherClasses?: string; 
}) => {
  return (
    <button onClick={handleClick} className="border-slate-200 border-[1px] w-60 relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none">  
        <span className={`${otherClasses} inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2`}>
            {position === 'left' && icon}
            {title}
            {position === 'right' && icon}
        </span>
    </button>
  )
}

export default MagicButton