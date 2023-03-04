import Link from "next/link";
import remarkGfm from 'remark-gfm';
import { useRouter } from "next/router";
import ReactMarkdown from 'react-markdown';
import BlogCard from "@/components/Blog/BlogCard";
import TagsPage from "@/components/Blog/BlogTags"; 


const OneBlogPage = (props) => {
	const { title, description, richtext } = props.data.attributes;
	const {url} = props.data.attributes.image.data[0].attributes;
	const {authorName, authorDescription, authorDate } = props.data.attributes.authors.data[0].attributes;
	const {tags}=props.data.attributes;

	return (
		<div>
			<BlogCard 
				title={title}
				authorName={authorName}
				authorDescription={authorDescription}
				authorDate={authorDate}
				image={url} 
				description={description}
				tags={tags.data}
			/>
			<div className="container">
				<ReactMarkdown 
					children={richtext} 
					remarkPlugins={[remarkGfm]} 
				/>
			</div>
		</div>
	);
};
export default OneBlogPage;

export async function getStaticProps(context) {
	const res = await fetch(
		`${process.env.API_URL}/blogs?filters[slug][$eq]=${context.params.slug}&populate=*`
	);
	const response = await res.json();

	return {
		props: { data: response.data[0] }, // will be passed to the page component as props
	};
}

export async function getStaticPaths() {
	
	const res = await fetch(`${process.env.API_URL}/blogs?populate=*`);
	const data = await res.json();

	return {
		paths: data.data.map(({ attributes }) => ({
			params: {
				slug: attributes.slug,
			},
		})),
		fallback: false, // can also be true or 'blocking'
	};
}

