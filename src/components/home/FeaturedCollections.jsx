import "./FeaturedCollections.css";

const collections = [
    {
        title: "Tote Bags",
        image: "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/original/guess-com/BG967224CLO/0/oQQCpdmLOH-BG967224CLO_1.jpg",
    },

    {
        title: "Shoulder Bags",
        image: "https://images.unsplash.com/photo-1591561954557-26941169b49e",
    },

    {
        title: "Evening Bags",
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3",
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