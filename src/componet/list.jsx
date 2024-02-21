function studentinfo() {
  let frindsname = ["shivam", "tanu", "vartika"];
  return (
    <>
      <h1>Frinds</h1>
      <ol>
        {frindsname.map((item, index) => (
          <li key={index}>{item} </li>
        ))}
      </ol>
    </>
  );
}

export default studentinfo;
