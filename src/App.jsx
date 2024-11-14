import { useState, useEffect } from 'react'
import './App.css'
import Result from './components/Result';
import Button from './components/Button';

function App() {

  const [message, setMessage] = useState('Let the Game Begin');
  const choices = ['Rock', 'Paper', 'Scissors'];
  const [userChoice, setUserChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');
  const [userWinCount, setUserWinCount] = useState(0);
  const [computerWinCount, setComputerWinCount] = useState(0);

  const onClickHandler = (event) => {
    setUserChoice(event);

    const index = Math.floor(Math.random() * (2 - 0 + 1) + 0);
    setComputerChoice(choices[index]);
  }
 
  useEffect(() => {
    if (userChoice !== '') { // user has made selection 
      findWinner();
      setUserChoice('');
    }
  }, [userChoice]);

  const findWinner = () => {
    console.log('userChoice was', userChoice);
    console.log('computerChoice was', computerChoice);
    if (userChoice === computerChoice) {
      setMessage('Its a Tie');
    } else if (
      (userChoice === 'Rock' && computerChoice === 'Scissors') ||
      (userChoice === 'Scissors' && computerChoice === 'Paper') || 
      (userChoice === 'Paper' && computerChoice === 'Rock')
    ) {
      setMessage('You Win this round');
      setUserWinCount(userWinCount + 1);
    } else {
      setMessage('Computer Wins this round');
      setComputerWinCount(computerWinCount + 1);
    }
  }

  useEffect(() => {
    if (userWinCount === 3) {
      setMessage('You Win the Game, Lets play again');
      setUserWinCount(0);
      setComputerWinCount(0);
    } else if (computerWinCount === 3) {
      setMessage('Computer Wins the Game, Lets play again');
      setUserWinCount(0);
      setComputerWinCount(0);
    }
  }, [userWinCount, computerWinCount]);

  return (
    <>
      <Result message={message}/>
      <p> User Win Count: {userWinCount}</p>
      <p> Computer Win Count: {computerWinCount}</p>
      {
        choices.map((choice) => <Button buttonName={choice} onClickHandler={onClickHandler} key={choice}/>)
      }

    </>
  )
}

export default App
