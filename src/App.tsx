import Filtering from './sections/Filtering';
import BookPage from './sections/Book-page';
import Result from './sections/Result';
import Topbar from './sections/Topbar';
import './App.scss';

function App() {
  return (
    <>
      <Topbar />
      <Filtering />
      <Result />
    </>
  );
}

export default App;

