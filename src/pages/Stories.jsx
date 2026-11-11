import { stories } from "../data/stories";
import StoryCard from "../components/StoryCard";

function Stories() {
  return (
    <main className="page-container">
      <section className="page-heading">
        <p className="eyebrow">THE LIBRARY</p>
        <h1>Stories</h1>
        <p>Explore the stories available to read.</p>
      </section>

      <section className="stories-grid">
        {stories.map((story) => (
          <StoryCard key={story.id} story={story} />
        ))}
      </section>
    </main>
  );
}

export default Stories;
