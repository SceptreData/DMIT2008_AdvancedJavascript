const domContainer = document.querySelector("#react-container");
// Use straight JSX to work with existing components

const friendData = [
  {
    firstName: "David",
    lastName: "Bergeron",
    avatar: "@",
    email: "pants@pants.com"
  },

  {
    firstName: "James",
    lastName: "Bond",
    avatar: ":)",
    email: "007@mi6.co.uk"
  },

  {
    firstName: "Anne",
    lastName: "Hathaway",
    avatar: "(>'.')>",
    email: "catwoman@gmail.com"
  }
];
const App = () => {
  return (
    <>
      <Greeting name="David" date={new Date().toString()} />
      <Friends data={friendData} />
    </>
  );
};
ReactDOM.render(<App />, domContainer);
