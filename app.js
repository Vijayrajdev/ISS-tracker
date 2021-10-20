const fetchSpaceStation = async () => {
  const res = await fetch("https://api.wheretheiss.at/v1/satellites/25544");
  const data = await res.json();
  console.log(data);
};

fetchSpaceStation();
