import '../styles/Form.css';
import Priority from './Priority';

const Form = ({ value, priority, onClick, onChange, onCreate, onKeyPress }) => {
  return (
    <>
      <Priority priority={priority} onClick={onClick} />
      <div className='form'>
        <input
          value={value}
          onChange={onChange}
          onKeyPress={onKeyPress}
          placeholder='Input todo item'
        />
        <div className='create-button' onClick={onCreate}>
          ADD
        </div>
      </div>
    </>
  );
};

export default Form;
