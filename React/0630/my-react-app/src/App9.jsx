import { useState } from "react";

function App() {
  // 스피시즈
  const [data, setData] = useState([
    { name: "벨라", species: "고양이", age: "5", id: 111 },
    { name: "루시", species: "강아지", age: "3", id: 112 },
    { name: "데이지", species: "토끼", age: "2", id: 113 },
    { name: "몰리", species: "고양이", age: "1", id: 114 },
    { name: "매기", species: "강아지", age: "6", id: 115 }
  ]);

  const [name, setName] = useState("");
  const [species, setSpecies] = useState("");
  const [age, setAge] = useState("");

  console.log(name, species, age);
  console.log(data);

  const addPet = () => {
    if (name && species && age) {
      const newData = {
        name,
        species,
        age,
        id: Date.now()
      }
      setData([...data, newData]);
      setName('');
      setAge('');
      setSpecies('');
    }
  }

  return (
    <>
      <div>
        <label>이름:</label>
        <input 
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>종:</label>
        <input 
          type="text"
          value={species}
          onChange={(e) => setSpecies(e.target.value)}
        />
      </div>
      <div>
        <label>나이:</label>
        <input 
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>
      <button onClick={addPet}>입력</button>
      <div>
        {data.map((pet) => (
          <div key={pet.id}>
            <div>{pet.name} - {pet.species} - {pet.age}</div>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
