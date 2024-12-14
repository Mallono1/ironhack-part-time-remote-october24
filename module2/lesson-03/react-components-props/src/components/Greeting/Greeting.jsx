const Greeting = (props) => {
    // props --> { name }
    const { name, gender } = props; // --> const name = props.name
    const message = `Hello ${name}!`;

    return (
      <div>
        <u>{message}</u>
        <p>I am {gender}</p>
      </div>
    );
  }
   
  export default Greeting;