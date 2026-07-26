import "./SectionHeading.css";

export default function SectionHeading({
    subtitle,
    title
}){

    return (
        <div className="section-heading">
            <span>{subtitle}</span>
            <h2>{title}</h2>
        </div>
    )
}