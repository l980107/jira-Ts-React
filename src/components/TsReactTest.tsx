import { useArray } from "../utils/useArray";
interface Person {
  name: string;
  age: number;
}

const TsReactTest = () => {
  const persons: Person[] = [
    {
      name: "jack",
      age: 24,
    },
    {
      name: "ma",
      age: 22,
    },
    {
      name: "li",
      age: 22,
    },
    {
      name: "lei",
      age: 22,
    },
  ];

  const { add, removeIndex, clear, value } = useArray(persons);

  return (
    <div>
      {/* 点击以后增加 john */}
      <button onClick={() => add({ name: "john", age: 22 })}>add john</button>
      {/* 点击以后删除第一项 */}
      <button onClick={() => removeIndex(0)}>remove</button>
      {/* 点击以后情况列表 */}
      <button style={{ marginBottom: "50px" }} onClick={() => clear()}>
        clear list
      </button>
      {value.map((person, index) => (
        <div style={{ marginBottom: "30px" }}>
          <span style={{ color: "red" }}> {index} </span>
          <span>{person.name}</span>
          <span>{person.age}</span>
        </div>
      ))}
    </div>
  );
};

export default TsReactTest;
