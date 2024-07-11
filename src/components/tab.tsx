interface Props {
  name: string
  pattern: string[]
  inline?: boolean
  className?: string
}

export default function Tab(props: Props) {
  let className = '';
  if (props.className) className += ` ${props.className}`;

  let tabClassName = 'justify-center text-center mt-4'
  if (props.inline) tabClassName += ' flex flex-row gap-4'

  return (
    <>
      <div className={className}>
        <strong>{props.name}</strong>
        <pre className={tabClassName}>
          {props.pattern.map((line, i) => (
            <div key={i}>{line}</div>
          ))}
        </pre>
      </div>
    </>
  );
}
