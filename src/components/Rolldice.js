import React,{useState} from 'react';
import Die from './Die';
import './Die.css';

const Rolldice = () => {
  const sides = ["one","two","three","four","five","six"]
  
  const [die,setDie] = useState({
    die1:'one', die2:'one'
  });
  const [rolling,setRolling] = useState(false);

  const Roll = () => {

   const newDie1 = sides[Math.floor(Math.random() * sides.length)];

   const newDie2 = sides[Math.floor(Math.random() * sides.length)]

   setDie({die1:newDie1, die2:newDie2});
   setRolling(true);
  };

   setTimeout(() => {
    setRolling(false)
  }, 1000);

  return(
    <div className = 'Rolldice'>
      <div className='Rolldice-container'>
      <Die face={die.die1} rolling={rolling}/>
      <Die face={die.die2}  rolling={rolling}/>
      </div>
      <button 
      disabled = {rolling}
      onClick = {Roll}>
        {rolling ?  "Rolling..." : "Roll dice!"}
      </button>
    </div>
  );
};
export default Rolldice;