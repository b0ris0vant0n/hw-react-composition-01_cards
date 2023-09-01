import { PropsWithChildren } from 'react';


const Card = ({title, text, link, children} : PropsWithChildren<{title: string, text: string, link: string}>) => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      {children}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <a href={link} className="btn btn-primary">Go</a>
      </div>
    </div>
  );
};
export default Card;
