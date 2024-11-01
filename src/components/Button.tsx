// This is a simple exemple of a NESTED button component that we will use in our app.
function Button() {
  return (
    <button>Click me!</button>
  );
}

export function MyTestButton() {
  return (
    <div>
      <h2>Welcome to my app Thomas, this is a React Gift App</h2>
      <Button />
    </div>
  );
}