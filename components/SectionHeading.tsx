
type SectionHeadingprops = {
    children: React.ReactNode
}

export default function SectionHeading(
    {children}:SectionHeadingprops) {
  
    return (
    <h2 className="text-3xl text-gray-600 font-medimun capitalize mb-4">
            {children}    
    </h2>
  )
}
