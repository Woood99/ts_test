import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export interface CodeBlockProps {
   title: string;
   code: string;
   language?: string;
}

const CodeBlock = ({ title, code, language = 'typescript' }: CodeBlockProps) => {
   return (
      <div className="code-example">
         <div className="code-header">{title}</div>
         <SyntaxHighlighter className="code-block" language={language} style={atomDark} customStyle={{ margin: 0, borderRadius: '0 0 6px 6px' }}>
            {code}
         </SyntaxHighlighter>
      </div>
   );
};

export default CodeBlock;
