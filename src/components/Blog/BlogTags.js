import Link from "next/link";
// import remarkGfm from 'remark-gfm';
import { useRouter } from "next/router";

const BlogTags = (props) => {
	const router = useRouter()

	return <div>
		{props.tags.map(({id, attributes}) => (
						<div className='tag' key={id}>{attributes.name}</div>
		))}
	</div>
}
export default BlogTags;