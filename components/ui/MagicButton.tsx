const MagicButton = ({
  title, icon, position, handleClick, otherClasses, children
}: {
  title: string, icon?: React.ReactNode, position?: string, handleClick?: () => void; otherClasses?: string; children?: React.ReactNode;
}) => {
  return (
    <button onClick={handleClick} className="w-fit inline-flex md:hover:scale-105 active:bg-brandAccent transition-transform rounded-xl">  
        {children}
        <span className={`${otherClasses} inline-flex h-full w-full p-3 cursor-pointer items-center justify-center font-bold rounded-xl font-oswald text-brandTextWhite gap-2`}>
            {position === 'left' && icon}
            {title}
            {position === 'right' && icon}
        </span>
    </button>
  )
}

export default MagicButton