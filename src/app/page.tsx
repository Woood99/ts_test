import { MainBlock } from '@/shared/components';
import type { Metadata } from 'next';

export const metadata: Metadata = {
   title: 'Главная страница',
};

const Home = () => {
   return (
      <main className="my-6">
         <div className="container">
            <MainBlock />
         </div>
      </main>
   );
};

export default Home;
