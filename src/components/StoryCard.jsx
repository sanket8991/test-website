import { Link } from "react-router-dom";

function StoryCard({ story }) {
  return (
    <article className="story-card">
      <p className="eyebrow">SHORT STORY</p>

      <h2>{story.title}</h2>

      <p>{story.description}</p>

      <Link to={`/stories/${story.id}`} className="read-link">
        Read story →
      </Link>
    </article>
  );
}

export default StoryCard;
