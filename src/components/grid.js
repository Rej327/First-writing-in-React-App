const GridStyle = () => {
  const text = "This is Grid";

  return (
    <div className="grid-Style">
      <div className="grid-one">
        <h2 className="grid-text">{text} 1</h2>
      </div>
      <div className="grid-one">
        <h2 className="grid-text">{text} 2</h2>
      </div>
      <div className="grid-one">
        <h2 className="grid-text">{text} 3</h2>
      </div>
    </div>
  );
};

export default GridStyle;
