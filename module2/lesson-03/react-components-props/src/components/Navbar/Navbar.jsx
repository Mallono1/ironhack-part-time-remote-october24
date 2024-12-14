import Button from '../Button/Button';
function Navbar () {
    return (
      <nav>
        <p>React - Components & props</p>
        <Button content={"Click here"} />
        <Button content={"Show form"}/>
        <Button content={"Display..."}/>
      </nav>
    );
  }
  
export default Navbar;