import { FC, useState } from 'react';
import { toast } from 'react-toastify';
import Highlight from 'react-highlight';

type Props = {
  children: React.ReactNode
};

export const CodeBlock: FC<Props> = ({ children }) => {
  const [copied, setCopied] = useState(false);
  const codeText = Array.isArray(children) ? children[0].props.text : '';

  const handleCodeCopy = async():Promise<void> => {
    try {
      await navigator.clipboard.writeText(codeText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (errorCodeCopy) {
      toast.error(`Copy failed: ${errorCodeCopy}`);
    }
  };

  const languageMatch = codeText.match(/\/\/ Language:\s*(\w+)/);
  const language = languageMatch ? languageMatch[1] : 'javascript';

  return (
    <div className='mb-4'>
      <div className='flex justify-between bg-[#504e4e] rounded-tl-2xl rounded-tr-2xl px-5 py-2'>
        <span className='text-xs text-gray-100 font-normal'>{language}</span>
        <button
          type='button'
          className='text-xs text-gray-100 font-normal'
          onClick={handleCodeCopy}
        >
          <span>{copied ? 'Copied!' : 'Copy'}</span>
        </button>
      </div>

      <Highlight className="javascript rounded-bl-2xl rounded-br-2xl text-base">
        {children}
      </Highlight>
    </div>
  );
};
