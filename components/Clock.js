import React, { useEffect, useState } from "react";
import axios from "axios";

// export async function getStaticProps(context) {
//     const res = await fetch(`https://tasks-scheduler-apps.herokuapp.com/home/tasks`)
//     const data = await res.json()

//     if (!data) {
//       return {
//         notFound: true,
//       }
//     }

//     return {
//       props: { data }, // will be passed to the page component as props
//     }
//   }

export default function Clock(props) {
  const [partyTime, setPartyTime] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [tasks, setTasks] = useState([]);
  const [reminder, setReminder] = useState(['12/17/2021 08:42:59']);
//   useEffect(() => {
//     const interval = setInterval(() => {
//       console.log("hi");
//       setReminder(JSON.parse(localStorage.getItem("task")))
//       console.log(dates);
//       axios("https://tasks-scheduler-apps.herokuapp.com/home/tasks")
//         .then((res) => {
//           console.log(res.data);
//           const data = res.data;
//           setTasks(data)
//           const arr = data.map(item=>`${item.date} ${item.time}`)
//           console.log(arr,'arr');
//         //   setReminder(reminder=>[...reminder,...arr]);
//         //   console.log('reminders',reminder);
//         //   console.log(tasks);
//         })
//         .catch((err) => {
//           console.log("something happen with ApI ", err);
//         });
//     }, 30000);
//     return () => clearInterval(interval);
//   }, []);
  
  
  useEffect(() => {
    const s = '12/17/2021 08:42:59'
    if (props.task){
      s = props.task
    }

    
    const target = new Date(s);

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);

      if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        setPartyTime(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      {partyTime ? (
        <>
          <h1>You Have A Task Now Please Go To Do It</h1>
          <video autoPlay loop muted>
            <source src="/party.mp4" />
          </video>
        </>
      ) : (
        <>
          <h1>be attention you have a task close</h1>
          <div className=" border-4 border-green-500 bg-slate-400 rounded-md m-2 w-2/6 grid justify-center">
            <div className="border-4 border-collapse border-zinc-900 p-2">
              <div className="flex gap-2 ">
                <div className=" border-4 p-2 border-dashed border-green flex gap-2 ">
                  <span className="font-bold">{days}</span>
                  <span className="font-bold">Days</span>
                </div>
                <span className="font-bold text-3xl">:</span>
                <div className="border-4 p-2 border-dashed border-green flex gap-2">
                  <span className="time">{hours}</span>
                  <span className="label">Hours</span>
                </div>
                <span className="font-bold text-3xl">:</span>
                <div className="border-4 p-2 border-dashed border-green">
                  <span className="time">{minutes}</span>
                  <span className="label">Minutes</span>
                </div>
                <span className="font-bold text-3xl">:</span>
                <div className="border-4 p-2 border-dashed border-green">
                  <span className="time">{seconds}</span>
                  <span className="label">Seconds</span>
                </div>
              </div>
            </div>

            <div>
              {tasks.map((item) => {
                return (
                  <ul className="text-3xl font-bold text-black">
                    <li>{item.title}</li>
                    <li>{item.message}</li>
                    <li>{item.title}{item.time}</li>
                  </ul>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

// import React, { useState, useEffect } from "react";

// export default function Clock() {
//   const [days, setDay] = useState(0);
//   const [hours, setHour] = useState(0);
//   const [minutes, setMinute] = useState(0);
//   const [seconds, setSecond] = useState(0);

//   useEffect(() => {
//     const target = new Date("12/16/2021 06:14:59");

//     const interval = setInterval(() => {
//       const now = new Date();
//       const difference = target.getTime() - now.getTime();
//       const d = Math.floor(difference / (1000 * 60 * 60 * 24));
//       setDay(d);
//       const h = Math.floor(
//         (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
//       );
//       setHour(h);
//       const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
//       setMinute(m);
//       const s = Math.floor((difference % (1000 * 60)) / 1000);
//       setSecond(s);
//       console.log('hi')
//     }, 1000);
//     return () => clearInterval(interval);
//   }, []);
//   return (
//     <div>
//       <h2>Time Over</h2>

//       <div className="timer-wrapper">
//         <div className="timer-inner">
//           <div className="timer-segment">
//             <span className="time">{days}</span>
//             <span className="Label text-2xl text-black">Days</span>
//           </div>
//           <div className="timer-segment">
//             <span className="time">{hours}</span>
//             <span className="label">Hours</span>
//           </div>
//           <div className="timer-segment">
//             <span className="time">{minutes}</span>
//             <span className="label">Minutes</span>
//           </div>
//           <div className="timer-segment">
//             <span className="time">{seconds}</span>
//             <span className=" Label">Seconds</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
