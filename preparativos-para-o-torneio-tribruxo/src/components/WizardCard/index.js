import "./styles.css";

function WizardCard({ image, name, house }) {
  return (
    <div className="cardDiv">
      <img src={image} alt={name} className={`image ${house}`}></img>
      <p className={`name ${house}`}>{name}</p>
      <p className={`house ${house}`}>{house}</p>
    </div>
  );
}

export default WizardCard;
