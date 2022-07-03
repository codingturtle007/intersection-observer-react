const Card = (props) => {
  return(
    <div className="card mb-5" key={props.value}>
      <img 
        style={{ width: '20em', height: '22em'}} 
        src={props.url} 
        alt="Card image cap" 
      />
      <div>
        <b className="card-text">
          Random title {props.value}
        </b>
      </div>
    </div>
  );
}

export default Card;