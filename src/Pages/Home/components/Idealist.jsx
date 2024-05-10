import Ideaitem from "./Ideaitem";

const Idealist = ({ ideas ,refreshData}) => {
  return (
    <div>
      {ideas.map((idea, index) => (
        <Ideaitem key={index} idea={idea} index={index} refreshData={refreshData} />
      ))}
    </div>
  );
};

export default Idealist;
