function Button() {
  // let count = 0;
  // const handleClick = (name) => {
  //     if (count < 3) {
  //         count++;
  //         console.log(`Hello ${name} you clicked me ${count} time/s`);
  //     } else {
  //         console.log(`${name} stop clicking me 😡`);
  //     }
  // };

  const handleClick = (e) => (e.target.textContent = "Ouch! 😡");

  return (
    <div style={{ textAlign: "center", marginBottom: "15px", }}>
      <button onDoubleClick={(e) => handleClick(e)}>Click me ✨</button>
    </div>
  );
}

export default Button;
