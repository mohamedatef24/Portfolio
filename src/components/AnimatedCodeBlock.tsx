import React, { useMemo } from "react";

type CodeToken = {
  text: string;
  className: string;
  href?: string;
};

const tokenClassMap: Record<string, string> = {
  "code-string": "text-accent font-bold",
  "code-punctuation": "text-foreground/80",
  "code-key": "text-highlight font-bold",
  "code-this": "text-accent-alt italic font-bold",
  "code-string-skills": "text-accent font-bold",
};

const renderToken = (token: CodeToken, text: string, key: React.Key) => {
  const className = tokenClassMap[token.className] || "text-foreground";
  const isComplete = text === token.text;

  if (token.href && isComplete) {
    const isMailto = token.href.startsWith("mailto:");
    return (
      <a
        key={key}
        href={token.href}
        className={`${className} hover:underline cursor-pointer`}
        {...(!isMailto && { target: "_blank", rel: "noopener noreferrer" })}
      >
        {text}
      </a>
    );
  }

  return (
    <span key={key} className={className}>
      {text}
    </span>
  );
};

const AnimatedCodeBlock = () => {
  // Each line is an array of tokens: { text, className, href? }
  const codeLines = useMemo((): CodeToken[][] => [
    [
      { text: 'const', className: 'code-key' },
      { text: ' developer ', className: 'code-this' },
      { text: '=', className: 'code-punctuation' },
      { text: ' {', className: 'code-punctuation' },
    ],
    [
      { text: '  name', className: 'code-key' },
      { text: ': ', className: 'code-punctuation' },
      { text: "'Mohamed Atef'", className: 'code-string' },
      { text: ',', className: 'code-punctuation' },
    ],
    [
      { text: '  title', className: 'code-key' },
      { text: ': ', className: 'code-punctuation' },
      { text: "'AI Engineer'", className: 'code-string' },
      { text: ',', className: 'code-punctuation' },
    ],
    [
      { text: '  location', className: 'code-key' },
      { text: ': ', className: 'code-punctuation' },
      { text: "'Giza, Egypt'", className: 'code-string' },
      { text: ',', className: 'code-punctuation' },
    ],
    [
      { text: '  email', className: 'code-key' },
      { text: ': ', className: 'code-punctuation' },
      { text: "'mo7amed3atf24@gmail.com'", className: 'code-string', href: 'mailto:mo7amed3atf24@gmail.com' },
      { text: ',', className: 'code-punctuation' },
    ],
    [
      { text: '  github', className: 'code-key' },
      { text: ': ', className: 'code-punctuation' },
      { text: "'mohamedatef24'", className: 'code-string', href: 'https://github.com/mohamedatef24' },
      { text: ',', className: 'code-punctuation' },
    ],
    [
      { text: '  linkedin', className: 'code-key' },
      { text: ': ', className: 'code-punctuation' },
      { text: "'mohamed-atef-mawad'", className: 'code-string', href: 'https://www.linkedin.com/in/mohamed-atef-mawad/' },
      { text: ',', className: 'code-punctuation' },
    ],
    [
      { text: '  kaggle', className: 'code-key' },
      { text: ': ', className: 'code-punctuation' },
      { text: "'mo7amed3atf'", className: 'code-string', href: 'https://www.kaggle.com/mo7amed3atf' },
      { text: ',', className: 'code-punctuation' },
    ],
    // AI-related skills, 2 per line, in the requested order
    [
      { text: '  skills', className: 'code-key' },
      { text: ':', className: 'code-punctuation' },
      { text: '[', className: 'code-punctuation' },
      { text: "'LLMs'", className: 'code-string-skills' },
      { text: ', ', className: 'code-punctuation' },
      { text: "'RAG'", className: 'code-string-skills' },
      { text: ',', className: 'code-punctuation' },
      { text: "'LangChain'", className: 'code-string-skills' },
      { text: ',', className: 'code-punctuation' },
      { text: '           ', className: '' },
      { text: "'Agentic AI'", className: 'code-string-skills' },
      { text: ',', className: 'code-punctuation' },
      { text: "'Computer Vision'", className: 'code-string-skills' },
      { text: ', ', className: 'code-punctuation' },
    ],
    [
      { text: '           ', className: '' },
      { text: "'FastAPI'", className: 'code-string-skills' },
      { text: ']', className: 'code-punctuation' },
    ],
    [
      { text: '}', className: 'code-punctuation' },
    ],
  ], []);
  const [lineIdx, setLineIdx] = React.useState(0);
  const [charIdx, setCharIdx] = React.useState(0);
  const [done, setDone] = React.useState(false);

  React.useEffect(() => {
    if (done) return;
    if (lineIdx < codeLines.length) {
      const line = codeLines[lineIdx];
      const totalChars = line.reduce((acc, t) => acc + t.text.length, 0);
      if (charIdx < totalChars) {
        const timeout = setTimeout(() => setCharIdx(charIdx + 1), 18);
        return () => clearTimeout(timeout);
      } else {
        // Move to next line after a short pause
        const timeout = setTimeout(() => {
          setLineIdx(lineIdx + 1);
          setCharIdx(0);
        }, 180);
        return () => clearTimeout(timeout);
      }
    } else {
      setDone(true);
    }
  }, [lineIdx, charIdx, done, codeLines]);

  // Render lines up to current
  const renderedLines = codeLines.slice(0, lineIdx).map((line, i) => (
    <div key={i} className="hero-code-editor-content">
      {line.map((token, j) => renderToken(token, token.text, j))}
    </div>
  ));

  // Render current line up to charIdx
  if (lineIdx < codeLines.length) {
    const line = codeLines[lineIdx];
    let charsLeft = charIdx;
    const tokens = [];
    for (let i = 0; i < line.length; i++) {
      const token = line[i];
      if (charsLeft > 0) {
        const showLen = Math.min(token.text.length, charsLeft);
        tokens.push(renderToken(token, token.text.slice(0, showLen), i));
        charsLeft -= showLen;
      }
    }
    renderedLines.push(
      <div key={lineIdx} className="hero-code-editor-content">
        {tokens}
        <span className="blinking-cursor">|</span>
      </div>
    );
  }

  return <div>{renderedLines}</div>;
};

export default AnimatedCodeBlock; 