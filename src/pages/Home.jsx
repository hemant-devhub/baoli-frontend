import Hero from "../components/home/Hero";
import FeaturedCollections from "../components/home/FeaturedCollections";
import BrandStory from "../components/home/BrandStory";
import SignatureProducts from "../components/home/SignatureProducts";

export default function Home() {
    return (
        <>
            <Hero />
            <FeaturedCollections />
            <BrandStory />
            <SignatureProducts />
        </>
    );
    }