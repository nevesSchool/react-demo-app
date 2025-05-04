import './ExploreContainer.css';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div id="container">
      <strong>My first React Ionic App!</strong>
      <p>Check my projects on <a target="_blank" rel="noopener noreferrer" href="https://github.com/nevesSchool?tab=repositories">GitHub!</a></p>
    </div>
  );
};

export default ExploreContainer;
