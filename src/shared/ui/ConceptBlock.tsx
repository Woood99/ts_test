import cn from 'clsx';
import CodeBlock, { CodeBlockProps } from './CodeBlock';

export interface IConceptBlock {
   className?: string;
   title: {
      main: string;
      subtitle: string;
   };
   descr?: string;
   codeBlock: CodeBlockProps;
}

const ConceptBlock = ({ className, title, descr, codeBlock }: IConceptBlock) => {
   return (
      <div className={cn('concept-block', className)}>
         <p className="concept-title">
            <b>{title.main} - </b>
            <span>{title.subtitle}</span>
         </p>
         {descr && <div className="concept-descr" dangerouslySetInnerHTML={{ __html: descr }} />}
         <CodeBlock {...codeBlock} />
      </div>
   );
};

export default ConceptBlock;
