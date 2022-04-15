import react from "react";

const Colors = ({ colors, setImgIndex }) => {
  return (
    <div className="color">
      {colors.map((color, index) => (
        <button
          key={index}
          style={{
            background: `linear-gradient(90deg , ${color.col1} 50% , ${color.col2} 50%)`,
          }}
          onClick={() => setImgIndex(index)}
        ></button>
      ))}
    </div>
  );
};

export default Colors;
