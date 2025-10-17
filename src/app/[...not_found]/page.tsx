import { NO_INDEX_PAGE } from '@/shared/constants';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
   title: 'Страница не существует!',
   ...NO_INDEX_PAGE,
};

export default function NotFoundPage() {
   return (
      <div className="text-center flex-center-all flex-col h-full w-full">
         <p className="text-6xl font-medium">Ошибка 404.</p>
         <p className="mt-5 text-xl">Страница не найдена.</p>
         <Link href="/" className="mt-8 text-blue-500 font-medium">
            Перейти на главную
         </Link>
      </div>
   );
}
