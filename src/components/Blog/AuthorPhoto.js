import Image from "next/image";

const AuthorPhoto = (props) => (

<div className="container author__container">
		<img src={props.avatar} alt={props.title} />
		<div className="author__name">
			{props.authorName}
		</div>
		<div className="author__description">
			{props.authorDescription}
		</div>				
</div>
)
export default AuthorPhoto;