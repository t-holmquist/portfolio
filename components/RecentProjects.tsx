import { projects } from "@/data"

const RecentProjects = () => {
  return (
    <div className="py-20">
        <h1 className="heading">
            Take a look at some {' '}
            <span className="text-purple">recent projects</span>
        </h1>
        <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
            {projects.map(({ id, title, des, img, iconLists, link }) => (
                <div key={id} className="flex items-center justify-center lg:min-h-[32.5] h-[25rem] sm:w-96 w-[80vw]">
                    {title}
                </div>
            ))}
        </div>
    </div>
  )
}

export default RecentProjects