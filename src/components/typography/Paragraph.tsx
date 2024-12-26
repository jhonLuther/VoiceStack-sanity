import { cn } from '~/lib/utils'

type ParagraphProps = {
  className?: string;
  dangerouslySetInnerHTML?: { __html: string }; 
  children?: React.ReactNode;
};

const Paragraph: React.FC<ParagraphProps> = ({
  className = '',
  dangerouslySetInnerHTML,
  children,
}) => {
  
  if (dangerouslySetInnerHTML) {
    return (
      <p
        className={cn(
          'text-gray-700 !leading-6 text-[16px] font-light md:max-w-3xl [&_span]:text-vs-blue',
          className
        )}
        dangerouslySetInnerHTML={dangerouslySetInnerHTML}
      />
    );
  }

  return (
    <p
      className={cn(
        'text-gray-700 !leading-6 text-[16px] font-light md:max-w-3xl',
        className
      )}
    >
      {children}
    </p>
  );
};

export default Paragraph;
