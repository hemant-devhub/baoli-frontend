import "./PageHero.css";
import Container from "../Container/Container";

export default function PageHero({
    title,
    subtitle
}){

    return (
        <section className="page-hero">
            <Container>
                <span>{subtitle}</span>
                <h1>{title}</h1>
            </Container>
        </section>
    )
}