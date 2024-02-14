import './error-indicator.css';
import icon from './error.gif';

type ErrorIndicatorProps = {
  errorMsg: null | string;
};

export const ErrorIndicator = (props: ErrorIndicatorProps) => {
  return (
    <div className="error-indicator">
      <img src={icon} alt="error icon" />
      <span className="boom">BOOM!</span>
      <span>something has gone terribly wrong</span>
      <span>(but we already sent droids to fix it)</span>
      <p className='err-msg'>{props.errorMsg}</p>
    </div>
  );
};
