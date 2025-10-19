import { Accordion, ConceptBlock } from '@/shared/ui';
import MainBlockData from './main-block-data';

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
                              {item.codeBlocks.map((codeBlock, index) => {
                                 return (
                                    <ConceptBlock
                                       className="!bg-none grow"
                                       key={index}
                                       title={{
                                          main: codeBlock.title.main,
                                          subtitle: codeBlock.title.subtitle,
                                       }}
                                       descr={codeBlock.descr}
                                       codeBlock={{
                                          title: codeBlock.codeBlock.title,
                                          code: codeBlock.codeBlock.code,
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
