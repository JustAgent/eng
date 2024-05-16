import "./Header.scss";

export const Header = (props) => {
  return (
    <div className="headerWrapper" style={{justifyContent: `${props.text !== "WeWalk" && "center"}`, padding: `${props.text !== "WeWalk" && 0}` }}>
      <h1 className="headerTitle">{props.text}</h1>
    </div>
  );
};
