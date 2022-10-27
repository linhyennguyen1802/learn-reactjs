import { useState } from "react";

const State = () => {
  //Component chỉ render lại khi state thay đổi
  // Initial state chỉ dùng cho lần đầu:
  //      VD: state = 1 , nhấn btn cứ tăng dần lên

  /*
    const orders = [100,200,300]
    const total = orders.reduce((total,cur) => total + cur)
    const [counter, setCounter] = useState(total)
    const handleIncrease = () =>{
        setCounter(counter + 1 )
        setCounter(counter + 1 )
        setCounter(counter + 1 )
    }*/

  // Dù gọi setCounter 03 thì nhấn btn nó cũng chỉ +1
  // 1 2 3 4 5
  // Nếu set state với callback thì sẽ khác
  // Nhấn thì nó sẽ tăng 03 đơn vị
  const handleIncrease02 = () => {
    setCounter((prevState) => prevState + 1);
    setCounter((prevState) => prevState + 1);
    setCounter((prevState) => prevState + 1);
  };
  //Dù là gì thì cũng là gom lại r chạy 01 lần và chỉ render ra 01 lần th

  //Initial State với callback
  //React không lấy một function để làm initial state.
  // Nó lấy giá trị đc return ra từ hàm đó làm initial state

  // Ví dụ dưới đây nó sẽ tăng 600 --> 601 602...
  //   nhưng nó sẽ tính toán
  /*
    const orders = [100,200,300]
    const total = orders.reduce((total,cur) => total + cur)
    const [counter, setCounter] = useState(total)
    const handleIncrease = () =>{
        setCounter(prevState => prevState + 1 )
    }
    */
  // Ví dụ này nó sẽ ko tính toán lại
  const orders = [100, 200, 300];
  const [counter, setCounter] = useState(() => {
    const total = orders.reduce((total, cur) => total + cur);
    return total;
  });
  const handleIncrease = () => {
    setCounter((prevState) => prevState + 1);
  };

  //Set State với giá trị mới
  // Dùng callback
  const [infor, setInfor] = useState({
    name: "Linh cute",
    age: 18,
    address: "Tp.HCM",
  });

  const handleUpdate = () => {
    setInfor((prevState) => {
      return {
        ...prevState,
        // thêm tất cả các giá trị cũ + bio
        bio: "yeumauhong",
      };
    });
  };

  //Random gift
  const gifts: any = ["CPU 19", "RAM 32GB", "KEYBOARD", "MOUSE", "USB"];
  const [gift, setGift] = useState();
  const radndomGift = () => {
    const index = Math.floor(Math.random() * gifts.length);
    setGift(gifts[index]);
  };

  //One-way binding : Ràng buộc 01 chiều
  //Two-way binding: ràng buộc 02 chiều
  // ReactJS dùng one-way binding. VueJS dùng two-way binding
  // Ràng buộc 01 chiều bao gồm:
  //     - Tương tác với giao diện
  // Ràng buộc 02 chiều bao gồm:
  //     - Tương tác với giao diện
  //     - Chiều dữ liệu
  //  VD 01 chiều: nhập text vào input text. componenet thay đổi giá trị theo giá trị nhập vào
  //  VD 02 chiều: sửa trong component, giao diện cũng thay đổi theo

  // Vì dụ : ko có dòng value={name} ở input thì là one-way
  // Có dòng value={name} ở input thì là two-way

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // Two-way binding radio:
  //Gỉa sử đây là API đc trả về
  const courses: any = [
    {
      id: 1,
      name: "HTML,CSS",
    },
    {
      id: 2,
      name: "JavaScript",
    },
    {
      id: 3,
      name: "Python",
    },
  ];

  const [checked, setChecked] = useState(2);
  const handleSubmit = () => {};

  //Two-way binding checkbox;
  const frames: any = [
    {
      id: 1,
      name: "ReactJS",
    },
    {
      id: 2,
      name: "Angular",
    },
    {
      id: 3,
      name: "Vue",
    },
  ];

  const [checked02, setChecked02]: any = useState([]);
  const handleCheck = (id: any) => {
    setChecked02((prev: any) => {
      const isChecked = checked02.includes(id);
      if (isChecked) {
        return checked02.filter((item: any) => item !== id);
      } else {
        return [...prev, id];
      }
    });
    console.log(checked02);
  };
  const handleSubmit02 = () => {
    console.log({ id: checked02 });
  };
  return (
    <div className="State">
      <h1>{counter}</h1>
      <button onClick={handleIncrease}>Increase</button>

      <h1>{JSON.stringify(infor)}</h1>
      <button onClick={handleUpdate}>Update</button>

      <div>
        <h1>{gift || "No gift"}</h1>
        <button onClick={radndomGift}>Get gift</button>
      </div>

      <div style={{ padding: 32 }}>
        <input value={name} onChange={(e) => setName(e.target.value)}></input>
        <button onClick={() => setName("Linh cute")}>Change</button>

        <input value={email} onChange={(e) => setEmail(e.target.value)}></input>
        <button onClick={() => setEmail("linhnguyen@gmail.com")}>
          Change Email
        </button>
      </div>

      <div style={{ padding: 20 }}>
        {courses.map((course: any) => (
          <div key={course.id}>
            <input
              type="radio"
              checked={checked === course.id}
              onChange={() => setChecked02(course.id)}
            />
            <label>{course.name}</label>
          </div>
        ))}

        <button onClick={handleSubmit}>Submit</button>
      </div>

      <div style={{ padding: 20 }}>
        {frames.map((frame: any) => (
          <div key={frame.id}>
            <input
              type="checkbox"
              checked={checked02.includes(frame.id)}
              onChange={() => handleCheck(frame.id)}
            />
            <label>{frame.name}</label>
          </div>
        ))}

        <button onClick={handleSubmit02}>Submit</button>
      </div>
    </div>
  );
};

export default State;
