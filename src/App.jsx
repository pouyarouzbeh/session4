// import StudentList from "./components/StudentList";

import Panel from "./components/Panel";
// import ColoredBox from "./components/ColoredBox"

// import Card from "./components/Card"

export default function App() {
  // const students = [
  //   { id: 1, name: "Ali",   score: 88 },
  //   { id: 2, name: "Sara",  score: 95 },
  //   { id: 3, name: "Reza",  score: 72 },
  //   { id: 4, name: "Zahra", score: 99 },
  // ];

  return (
    <> 

      {/* <Card title= "کارت 1" description = "این کارت دانشجویی من است"/>
      <Card title = "کارت 2" description ="این کارت ملی من است"/>
      <Card title = "کارت 3" description="این کارت گواهینامه من است "/> */}



    {/* <div>
      <h1>کلاس برنامه‌نویسی</h1>
      <StudentList items={students} />
    </div> */}


    <Panel title="اعلان">
      <p>فروش ویژه تا جمعه ادامه دارد.</p>
      <button>بیشتر بدانید</button>
    </Panel>


      <Panel title="هشدار">
        <p>سلام</p>
        <button> سلام</button>
      </Panel>





      {/* <ColoredBox color="#dff0d8">
        <h3>پیام موفقیت</h3>
        <p>عملیات با موفقیت انجام شد.</p>
      </ColoredBox>

      <ColoredBox color="#f2dede">
        <h3>پیام خطا</h3>
        <p>مشکلی رخ داد؛ لطفاً دوباره تلاش کنید.</p>
      </ColoredBox>

      <ColoredBox>
        <h3>پیام پیش‌فرض</h3>
        <p>این جعبه از رنگ پیش‌فرض استفاده می‌کند.</p>
      </ColoredBox> */}
</>
  );
}
