// components/WorkSection.js
import WorkCard from "./WorkCard";
import { projects } from "../data/projects";

export default function WorkSection() {
    return (
        <section className="work section" id="work">
            <h2 className="section-title">Work</h2>

            <div className="work__container bd-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, i) => (
                    <WorkCard key={i} project={project} />
                ))}
            </div>
        </section>
    );
}
