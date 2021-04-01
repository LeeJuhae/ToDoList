import '../styles/Form.css';
import Priority from './Priority';

const Form = ({value, priority, onClick, onChange, onCreate, onKeyPress}) => {
	return (
		<div>
			<Priority priority={priority} onClick={onClick}/>
			<div className="form">
				<input value={value} onChange={onChange} onKeyPress={onKeyPress} />
				<div className="create-button" onClick={onCreate}>
					ADD
				</div>
			</div>
		</div>
	);
}

export default Form;
