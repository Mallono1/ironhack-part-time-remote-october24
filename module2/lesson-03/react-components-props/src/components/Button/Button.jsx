function Button({ content }) {
    console.log('content', content)
    return (
      <a href="https://reactjs.org">
        <button> {content} </button>
      </a>
    );
  }
   
  export default Button;