import Filter from './components/Filter';
import GlobalStyle from './components/GlobalStyled/GlobalStyled';
import Header from './components/Header';
import List from './components/List';
import Wrapper from './components/Wrapper';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Wrapper>
        <Filter />
        <List />
      </Wrapper>
    </>
  );
}

export default App;
