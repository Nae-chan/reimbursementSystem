import React from "react";


/**
 * This container components holds the table for status
 * */
//take in props
interface IStatusProps {
    status: number;
}
export class StatusComponent extends React.PureComponent<IStatusProps>{
    render() {
        
        return (
            <form>
                <div className="form-check">
                <label htmlFor="Status">Status</label>
                </div>
        <div className="form-check">
            <input className="form-check-input" type="radio" name="statuesRadios" id="statusRadios1" value="1" />
            Pending
        </div>
        <div className="form-check">
            <input className="form-check-input" type="radio" name="statuesRadios" id="statusRadios2" value="2" />
            Approved
        </div>
        <div className="form-check">
            <input className="form-check-input" type="radio" name="statuesRadios" id="statusRadios2" value="5" />
            Denied
        </div>
        </form>
        )
    }
}