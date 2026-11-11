import { Link } from "react-router-dom";
import { stories } from "../data/stories";
import StoryCard from "../components/StoryCard";

function Home() {
  const featuredStory = stories[0];

  return (
    <main>
      <section className="hero">
        <p className="eyebrow">WELCOME TO QUIET PAGES</p>

        <h1>Stories worth slowing down for.</h1>

        <p className="hero-description">
          A quiet corner of the internet for short stories, thoughtful reading,
          and moments of imagination.
        </p>

        <Link to="/stories" className="primary-button">
          Explore stories
        </Link>
      </section>

      <section className="featured-section">
        <p className="eyebrow">FEATURED STORY</p>

        {featuredStory && <StoryCard story={featuredStory} />}
      </section>
    </main>
  );
}

export default Home;
