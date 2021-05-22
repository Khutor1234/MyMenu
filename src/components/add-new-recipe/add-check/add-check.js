import React from 'react';

// eslint-disable-next-line react/prop-types
const AddCheck = ({onCheck, checkedBreakfast, checkedLunch, checkedDinner}) => {
    return(
        <div className = 'add-new-recipe_check'>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" name="breakfast" id="inlineRadio1" value="breakfast"
                onChange = {onCheck} checked = {checkedBreakfast} ></input>
                <label className="form-check-label" htmlFor="inlineRadio1">Завтрак</label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" name="lunch" id="inlineRadio2" value="lunch"
                onChange = {onCheck} checked = {checkedLunch} ></input>
                <label className="form-check-label" htmlFor="inlineRadio2">Обед</label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" name="dinner" id="inlineRadio3" value="dinner"
                onChange = {onCheck} checked = {checkedDinner} ></input>
                <label className="form-check-label" htmlFor="inlineRadio3">Ужин</label>
            </div>
        </div>
    )
}

export default AddCheck;