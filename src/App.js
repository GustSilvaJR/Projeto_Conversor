import './style/App.css';
import Conversor from './component/Conversor'
import Card from './component/Card';

function App() {
  return (
    <div className='row'>
      <Card moedaA='USD' moedaB='BRL'/>
      <Card moedaA='EUR' moedaB='BRL'/>
      <Card moedaA='ARS' moedaB='BRL'/>
      <Card moedaA='RUB' moedaB='BRL'/>

    </div>

  );
}

export default App;
