import Content from "./component/content";
import Header from "./component/header";
import data from "./helper/data";

function App() {
  return (
    <>
      <Header />
      <h1>POPULAR TOUR PLACES</h1>
      <div className="container">
        {data.map((item) => {
          return (
            <Content
              key={item.key}
              title={item.title}
              image={item.image}
              desc={item.desc}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
