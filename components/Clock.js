import React, { useEffect, useState } from "react";


export default function Clock(props) {
  const [taskTime, setTaskTime] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  
   useEffect(()=>{
    const now = new Date();
    console.log('====================================');
    console.log(now);
    console.log('====================================');

    let reminders =[]
    let newReminders = [...reminders , ...props.tasks.map(item=>`${item.date.split('-')[1]}/${item.date.split('-')[2]}/${item.date.split('-')[0]} ${item.time}`)]
   
      console.log(newReminders);
    
    const remindersSorted= newReminders.sort(function(a,b){
      
      return new Date(a) - new Date(b);
    });
    
    let unique = [...new Set(remindersSorted)];
    console.log(remindersSorted);


    
   },[props.tasks])


  
  
  useEffect(() => {
    const target = new Date('12/18/2021 22:52:00');


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

        

        setTaskTime(true);


      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      {taskTime ? (
        <>
          <h1>It's Time For You'r Task </h1>
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
              {/* {tasks.map((item) => {
                return (
                  <ul className="text-3xl font-bold text-black">
                    <li>{item.title}</li>
                    <li>{item.message}</li>
                    <li>{item.title}{item.time}</li>
                  </ul>
                );
              })} */}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

