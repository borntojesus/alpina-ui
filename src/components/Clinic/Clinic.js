
const Clinic = (props) => {
	// console.log(props.stars)
	return (

    <div className="clinic-section">
        <div className="clinic-section__name-adress">
            {props.nameadress}
        </div>
        <div className="clinic-section__tags">
            {props.tags}
        </div>
        <div className="clinic-section__services">
            {props.services}
        </div>
        <div className="clinic-section__client-field">
            <div className="clinic-section__work-time">
                {props.worktime}
            </div>
            <div className="clinic-section__button">
                <button>Записатися</button>
            </div>
        </div>
    </div>

)}
export default Clinic;

