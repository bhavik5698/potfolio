'use client'
export default function WorkCard({ project }) {
    return (
        <div className="relative group overflow-hidden rounded-xl shadow-lg">
            <img
                src={project.imgSrc}
                alt={project.alt}
                className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-80 transition duration-300 flex flex-col justify-end p-4">
                <h3 className="text-white text-xl font-semibold">{project.title}</h3>
                <p className="text-sm text-gray-200 mt-1">{project.description}</p>
                <div className="flex gap-2 mt-2 flex-wrap">
                    {project.tags.map((tag, i) => (
                        <span
                            key={i}
                            className={`${tag.bg} ${tag.text} text-xs font-semibold px-2 py-1 rounded`}
                        >
                            {tag.label}
                        </span>
                    ))}
                </div>
                <div className="flex justify-between mt-3 text-sm">
                    {project.links?.map((link, i) => (
                        <a
                            key={i}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-300 hover:underline"
                        >
                            {link.label}
                        </a>
                    ))}
                    {project.note && (
                        <span className="text-gray-400">{project.note}</span>
                    )}
                </div>
            </div>
        </div>
    );
}
