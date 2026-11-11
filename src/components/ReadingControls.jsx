function ReadingControls({ setFontSize }) {
  return (
    <div className="reading-controls">
      <span>Text size</span>

      <button
        onClick={() => setFontSize((size) => Math.max(16, size - 2))}
        aria-label="Decrease text size"
      >
        A−
      </button>

      <button
        onClick={() => setFontSize((size) => Math.min(28, size + 2))}
        aria-label="Increase text size"
      >
        A+
      </button>
    </div>
  );
}

export default ReadingControls;
