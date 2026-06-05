import "./FeaturedCollections.css";

const collections = [
    {
        title: "Tote Bags",
        image: "https://www.hocheparis.in/cdn/shop/files/2nd_image_lifestyle_11.jpg?v=1733125219",
    },

    {
        title: "Shoulder Bags",
        image: "https://cdn.mos.cms.futurecdn.net/25PGLdjfLjKMcRZtviPksZ.jpg",
    },

    {
        title: "Evening Bags",
        image: "https://www.urbanspacestore.in/cdn/shop/files/01_0168e46d-e2cc-46ce-9721-8ea696abfc6b.webp?v=1764142463&width=1500",
    },
];

export default function FeaturedCollections() {
    return (
        <section className="featured-collections">
            <div className="section-header">
                <span>Curated Categories</span>
                <h2>Explore The Collection</h2>
            </div>

            <div className="collection-grid">
                {collections.map((item, index) => (
                    <div key={index} className="collection-card">
                        <div className="image-wrapper">
                            <img src={item.image} alt={item.title} />
                        </div>

                        <div className="collection-content">
                            <h3>{item.title}</h3>

                            <button>Discover</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}