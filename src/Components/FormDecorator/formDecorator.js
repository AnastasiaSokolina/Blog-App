import './formDecorator.scss';
import classNames from 'classnames';

export default function FormDecorator(props) {
  const { className, children, title } = props;
  const classnameForDecorator = classNames({
    formDecorator: true,
    [className]: true,
  });

  return (
    <div className={classnameForDecorator}>
      <div className="formDecorator__container">
        <div className="formDecorator__block">
          <h3 className="formDecorator__title">{title}</h3>
          { children }
        </div>
      </div>
    </div>
  );
}
