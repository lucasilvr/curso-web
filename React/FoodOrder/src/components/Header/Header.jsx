import logoImg from '../../assets/logo.jpg';
import Button from '../../UI/Button.jsx';

export default function () {
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="A restaurant" />
        <h1>ReactFood</h1>
      </div>
      <nav>
        <Button textOnly={true}/* se estiver só textOnly ja reconhece como true*/>Cart(0)</Button>
      </nav>
    </header>
  );
}
  