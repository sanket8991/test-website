import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getStoryById } from "../data/stories";
import ReadingControls from "../components/ReadingControls";

function StoryReader() {
  const { storyId } = useParams();
  const story = getStoryById(storyId);
  const [fontSize, setFontSize] = useState(19);

  if (!story) {
    return (
      <main className="page-container">
        <h1>Story not found</h1>
        <Link to="/stories">Back to stories</Link>
      </main>
    );
  }

  return (
    <main className="reader-container">
      <Link to="/stories" className="back-link">
        ← Back to stories
      </Link>

      <header className="reader-header">
        <p className="eyebrow">SHORT STORY</p>
        <h1>{story.title}</h1>
        <p>{story.description}</p>
      </header>

      <ReadingControls setFontSize={setFontSize} />

      <article className="story-content" style={{ fontSize: `${fontSize}px` }}>
        {story.parts.map((part) => (
          <section key={part.part} className="story-part">
            <h2>Part {part.part}</h2>

            {part.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </section>
        ))}
      </article>

      <div className="pdf-download">
        <p>Prefer reading the original document?</p>
        <a href={story.pdf} target="_blank" rel="noreferrer">
          Open original PDF ↗
        </a>
      </div>
    </main>
  );
}

export default StoryReader;
