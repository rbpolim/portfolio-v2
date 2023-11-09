type HeadingProps = {
  title: string
}

export const Heading = ({ title }: HeadingProps) => {
  return (
    <div className="flex items-center gap-x-4">
      <h2 className="text-5xl font-black md:text-7xl">
        {title}
      </h2>
      <div className="rounded-full sm:w-full sm:h-1 bg-foreground" />
    </div>
  )
}