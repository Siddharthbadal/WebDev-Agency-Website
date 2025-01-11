import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mb-4 px-4 text-center  text-gray-600 border-t-4">
        <small>
            &copy;2025 Weber Dever. 
        </small>
        <p className="text-sm ">
            <span>Developed with NextJS.  
                <Link href={"https://www.linkedin.com/in/siddharthbadal"} target="_blank" className="text-gray-700 font-semibold hover:text-gray-800"> {" "}Sidd</Link>
            </span>
        </p>
    </footer>
  )
}
