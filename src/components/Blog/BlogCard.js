import Image from "next/image";

const BlogCard = (props) => (
	<div className="color">

	<div className="blog">
		<div className="container blog__container">
			<div className="blog__card">
				
				<div className="blog__card-author">
					{props.authorName}
					{props.authorDate}
				</div>
				<div className="blog__card-title">
					{props.title}
				</div>
				<div className="blog__card-description">
					{props.description}
				</div>
				<div className="blog__card-tags">
				{props.tags.map(({id, attributes}) => (
                <div className='tag' key={id}>{attributes.name}</div>
        ))}
				</div>
				<img src={props.image} alt={props.title} />
			</div>
		</div>
	</div>

</div>
)
export default BlogCard;