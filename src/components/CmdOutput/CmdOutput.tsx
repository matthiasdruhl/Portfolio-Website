import { CommandOutput } from '../../types/command';

export const CmdOuput = ({ output }: { output: CommandOutput }) => {
  const styleClasses = output.isItalic ? 'italic text-gray-500' : 'text-gray-300';

  switch (output.type) {
    case 'list':
      // This is the output from the original history, which is just a list of names
      return (
        <div className="flex flex-wrap gap-2">
          {(output.content as unknown as string[]).map((name, i) => (
             <span key={i} className="text-cyan-400">{name}</span>
          ))}
        </div>
      );
    case 'message':
      return <p className={styleClasses}>{output.content as string}</p>;
    case 'empty':
      return <p className={styleClasses}>{output.content as string}</p>;
    default:
      return null;
  }
};