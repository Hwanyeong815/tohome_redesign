import { CheckboxStyle } from './style';

const Checkbox = ({ checked, onChange, disabled }) => {
    return (
        <CheckboxStyle>
            <input type="checkbox" checked={checked} onChange={onChange} disabled={disabled} />
            <span className="custom-check" />
        </CheckboxStyle>
    );
};

export default Checkbox;
