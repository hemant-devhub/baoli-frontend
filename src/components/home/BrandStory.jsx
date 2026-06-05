import "./BrandStory.css"

export default function BrandStory() {
    return (
        <section className="brand-story">

            <div className="brand-image">
                <img
                    src="https://media.voguearabia.com/photos/68ed000eb99195c4c5636b37/master/w_1600%2Cc_limit/VOME1025-partnershipprada%2520Water%2520mark4.jpg"
                    alt="Baoli"
                />
            </div>

            <div className="brand-content">
                <span>Out Philosophy</span>

                <h2>
                    Design To Be
                    <br />
                    Carried For Years
                </h2>

                <p>
                At BAOLI, every handbag is created with an appreciation
                for timeless design, exceptional craftsmanship, and
                understated luxury.
                </p>

                <p>
                Rather than following trends, we focus on creating
                pieces that seamlessly become part of a woman's daily
                life — elegant today, relevant tomorrow.
                </p>

                <button>
                    Learn More
                </button>
            </div>
        </ section>
    )
}