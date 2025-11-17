import { Accordion, ConceptBlock } from '@/shared/ui';
import { MainBlockData } from '../data';

interface IUser {
   id: number;
   name: string;
   age: number;
   email: string;
   friendsId?: number[];
}

type PartialUser = Omit<IUser, 'id' | 'friendsId'>;

const MainBlock = () => {
   return (
      <div className="flex flex-col gap-12">
         <section>
            <h2 className="max-md:px-4">
               Typescript - язык со статической типизацией, который по умолчанию использует строгую типизацию, но предоставляет ослаблять её когда
               необходимо (например any).
            </h2>
            <div className="flex flex-col gap-4">
               <Accordion
                  data={MainBlockData.map(item => {
                     return {
                        button: {
                           className: 'w-full h-12 text-left bg-white text-black pl-4 rounded-xl text-base cursor-pointer transition-all',
                           children: item.title,
                        },
                        body: (
                           <div className="flex flex-col shadow-2xl bg-white rounded-b-xl">
                              {item.codeBlocks.map((block, index) => {
                                 return (
                                    <ConceptBlock
                                       className="!bg-none grow"
                                       key={index}
                                       title={
                                          block.title && {
                                             main: block.title.main,
                                             subtitle: block.title.subtitle,
                                          }
                                       }
                                       descr={block.descr}
                                       codeBlock={{
                                          title: block.codeBlock.title,
                                          code: block.codeBlock.code,
                                       }}
                                    />
                                 );
                              })}
                           </div>
                        ),
                     };
                  })}
                  classNameItem="main-block-spoller"
               />
            </div>
         </section>
      </div>
   );
};

export default MainBlock;
