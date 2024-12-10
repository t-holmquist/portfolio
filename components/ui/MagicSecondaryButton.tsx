const MagicSecondaryButton = ({
    title, icon, position, handleClick, otherClasses
  }: {
    title: string, icon?: React.ReactNode, position?: string, handleClick?: () => void; otherClasses?: string; 
  }) => {
    return (
      <button onClick={handleClick} className="w-fit relative inline-flex overflow-hidden hover:scale-105 transition-all rounded-xl">  
          <span className={`${otherClasses} inline-flex h-full w-full p-3 cursor-pointer items-center justify-center rounded-xl font-bold font-oswald text-brandTextWhite gap-2`}>
              {position === 'left' && icon}
              {title}
              {position === 'right' && icon}
          </span>
      </button>
    )
  }
  
  export default MagicSecondaryButton