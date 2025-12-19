
import React from 'react';
import { useCMS } from '../context/CMSContext';

interface Props {
  value: string;
  onChange: (val: string) => void;
  className?: string;
  element?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
}

const EditableText: React.FC<Props> = ({ value, onChange, className = '', element = 'p' }) => {
  const { isAdmin } = useCMS();
  const Element = element as any;

  if (!isAdmin) {
    return <Element className={className}>{value}</Element>;
  }

  return (
    <div className={`relative group ${className}`}>
      <Element
        contentEditable
        suppressContentEditableWarning
        onBlur={(e: any) => onChange(e.target.innerText)}
        className={`outline-none border-b border-dashed border-amber-500/30 hover:border-amber-500 focus:border-amber-500 min-h-[1em] min-w-[20px]`}
      >
        {value}
      </Element>
    </div>
  );
};

export default EditableText;
