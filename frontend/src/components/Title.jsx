// eslint-disable-next-line react/prop-types
function Title({ titleText }) {
  return <h1 className="title-page"> {titleText ?? "undefined"} </h1>;
}

export default Title;
