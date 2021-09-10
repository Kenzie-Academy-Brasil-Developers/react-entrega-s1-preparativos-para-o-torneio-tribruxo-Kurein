import WizardCard from "../WizardCard";
import "./styles.css";

function randomNumberList(number) {
  return Math.floor(Math.random() * number);
}

function handleList(list) {
  let listTest = list;
  let newList = [];

  for (let i = 0; i < 3; i++) {
    let wizard = listTest[randomNumberList(listTest.length)];
    listTest = listTest.filter((element) => element.house !== wizard.house);
    newList.push(wizard);
  }

  return newList;
}

function TourneyParticipants({ list }) {
  let newList = handleList(list);

  return (
    <div className="mainDiv">
      {newList.map((element) => {
        return (
          <WizardCard
            key={element.actor}
            image={element.image}
            name={element.name}
            house={element.house}
          />
        );
      })}
    </div>
  );
}

export default TourneyParticipants;
