import './Portrait.css';

export default function Portrait({ label = 'PORTRAIT IMAGE', caption, variant = 'default', src, alt }) {
  return (
    <figure className={`portrait portrait--${variant}`}>
      {src ? (
        <div className="portrait__frame portrait__frame--photo">
          <img className="portrait__img" src={src} alt={alt || label} loading="lazy" />
        </div>
      ) : (
        <div className="portrait__frame" role="img" aria-label={`Placeholder for ${label.toLowerCase()}`}>
          <span className="portrait__mark">[{label}]</span>
          <div className="portrait__grain" aria-hidden="true" />
        </div>
      )}
      {caption && (
        <figcaption className="portrait__caption">
          {caption.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </figcaption>
      )}
    </figure>
  );
}
