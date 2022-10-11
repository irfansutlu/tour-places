const Content = (items)=>{
    const {title, image, desc} = items
    return (
      <div className="card">
        <h3>{title.toUpperCase()}</h3>
        <img src={image} />
        <div className="card-over">
          <p>{desc}</p>
        </div>
      </div>
    );
}

export default Content