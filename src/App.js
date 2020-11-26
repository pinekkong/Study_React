import './App.css';
import Hello from './Hello';
import Wrapper from './Wrapper';
import Counter from './Counter';
import InputSample from './InputSample';
import UserList from './UserList';

function App() {
  const name = 'react';
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24,
    padding: '1rem'
  }

  return (
    <div>
      <Wrapper>
        <Hello name="react" color='red' isSpecial={true}/>
        <Hello name="react" color='blue' isSpecial pen='pen'/>
        <Hello name="react" color='red' />
        <div style={style}>{name}</div>
        <div className='gray-box'></div>
      </Wrapper>
      <Counter></Counter>
      <InputSample></InputSample>
      <UserList></UserList>
    </div>
  );
}

export default App;
