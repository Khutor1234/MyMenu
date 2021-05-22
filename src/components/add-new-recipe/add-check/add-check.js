import React from 'react';

const AddCheck = () => {
    return(
        <div className = 'add-new-recipe_check'>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio1" value="option1"></input>
                <label className="form-check-label" htmlFor="inlineRadio1">Завтрак</label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio2" value="option2"></input>
                <label className="form-check-label" htmlFor="inlineRadio2">Обед</label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio3" value="option3"></input>
                <label className="form-check-label" htmlFor="inlineRadio3">Ужин</label>
            </div>
        </div>
    )
}

export default AddCheck;