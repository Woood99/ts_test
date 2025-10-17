import cn from 'clsx';
import CodeBlock, { CodeBlockProps } from './CodeBlock';

interface Props {
   className?: string;
   title: {
      main: string;
      subtitle: string;
   };
   codeBlock: CodeBlockProps;
}

const ConceptBlock = ({ className, title, codeBlock }: Props) => {
   return (
      <div className={cn('concept-block', className)}>
         <p className="concept-title">
            <b>{title.main} - </b>
            <span>{title.subtitle}</span>
         </p>
         <CodeBlock {...codeBlock} />
      </div>
   );
};

export default ConceptBlock;
