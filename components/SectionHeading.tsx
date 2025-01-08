
type SectionHeadingprops = {
    children: React.ReactNode
}

export default function SectionHeading(
    {children}:SectionHeadingprops) {
  
    return (
    <h2 className="text-3xl text-gray-600 font-semibold capitalize mb-4 tracking-widest">
            {children}    
    </h2>
  )
}
