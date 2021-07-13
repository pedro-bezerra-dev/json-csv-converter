import { Header } from '../components/Header';
import { Main } from '../components/Main';
import { Footer } from '../components/Footer';
import { Button } from '../components/Button';

export function Home() {
  return (
    <>
      <Header />
      <Main>
        <Button>
          TEXT
        </Button>
      </Main>
      <Footer />
    </>
  );
}
