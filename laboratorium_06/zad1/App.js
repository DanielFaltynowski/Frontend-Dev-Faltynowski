import './App.css';
import PrimaryHeadline from "./PrimaryHeadline";
import Paragraph from "./Paragraph";
import SecondaryHeadLine from "./SecondaryHeadLine";
import {ThemeContext} from "./ThemeContext";
import {colors} from "./Colors";

function App() {
  return (
      <ThemeContext.Provider value={colors}>
        <div className="App">
          <PrimaryHeadline></PrimaryHeadline>
            <SecondaryHeadLine text={"Lorem ipsum dolor."}></SecondaryHeadLine>
            <Paragraph text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. A beatae blanditiis cum cupiditate debitis dicta eaque est excepturi, inventore ipsum numquam, obcaecati repellat sed tempore vel veritatis voluptatem! Eum, repellendus!"}></Paragraph>
        </div>
      </ThemeContext.Provider>
  );
}

export default App;
