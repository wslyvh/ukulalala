interface Props {
  pattern: string[]
  className?: string;
}

export default function Tab(props: Props) {
  let className = '';
  if (props.className) className += ` ${props.className}`;

  return (
    <>
      <div className={className}>
        <pre>
          {props.pattern.map((line, i) => (
            <div key={i}>{line}</div>
          ))}
        </pre>
      </div>
    </>
  );
}
