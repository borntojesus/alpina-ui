import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Link from "next/link";



const ClinicCard = (props) => {
	return (

	<div className="clinic">
		<div className="container clinic__container">
			<div className="clinic__main-card main-card">
				<img src={props.logo} alt={props.title}/>

				<div className="main-card__clinic-title">
					{props.name}<br/>
					{props.type}
				</div>
				<div className="main-card__clinic-description">
					{props.description}
				</div>
				<div className="main-card__raiting">
					{props.raiting}
				</div>
				
				<div className="clinic-section__web-site">
				<Link href={props.webSite}>Офіційний сайт</Link>
				</div>
				{/* <div className="main-card__rewiew">
					{props.rewiew}
				</div> */}
			</div>
			

			<div className="clinic__clinic-section clinic-section ">
				<div className="clinic-section__head">
					<div className="clinic-section__name-adress">
						{props.name}
					</div>
					<div className="clinic-section__raiting-box">
						<div className="clinic-section__raiting">
							{props.raiting}
						</div>
					</div>
				</div>
				<div className="clinic-section__tags">
				{/* attributes.iconTag */}
					{props.tags.map(({id, attributes}) => (
                <div className='tag' key={id}>{attributes.name}</div>
        ))}
				</div>
				{/* <div className="clinic-section__services">
					{props.services}
				</div> */}
				<div className="clinic-section__client-field">
					<div className="clinic-section__work-time">
						{props.worktime}
					</div>
					<div className="clinic-section__button">
						<button>Записатися</button>
					</div>
				</div>
				<div className="clinic-section__text">
					<h2>Послуги і переваги:</h2><br/>
						<ReactMarkdown
					children={props.services}
					remarkPlugins={[remarkGfm]}
				/>
				</div>
			</div>

		</div>
	</div>

)}
export default ClinicCard;

