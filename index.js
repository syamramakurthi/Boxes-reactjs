const Box = (props) => {
  const { text, className } = props;

  return (
    <div className={`box $ {classname}`}>
      <p className="box-title"> {text} </p>
    </div>
  );
};

const element = (
  <div className="box-app-container">
    <h1 className="heading">Boxes</h1>
    <div className="boxes-container">
      <Box text="Small" className="small-box" />
      <Box text="Medium" className="medium-box" />
      <Box text="Large" className="large-box" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
