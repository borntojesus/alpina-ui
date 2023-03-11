// import BlogTags from "./BlogTags";

const BlogList = (props) => (
	<div className="container">
		<div className="blog-list">
			<article className="blog-list__item">
				<img className="blog-list__img" src={props.image} alt={props.title}/>
				<div className="blog-list__author">
					<div className="author-name">
						{props.authorName}
					</div>
					<div className="author-date">
						{props.date}
					</div>
				</div>
				<div className="blog-list__title">
					{props.title}
					<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M1 11L11 1M11 1H1M11 1V11" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
					</svg>
				</div>
				<div className="blog-list__description" style={{ width: '348px', maxWidth: '100%' }}>
					{props.description}
				</div>
				<div className="blog-list__tags">
					{/* <BlogTags/> */}
				</div>
			</article>
		</div>
</div>
)
export default BlogList;
