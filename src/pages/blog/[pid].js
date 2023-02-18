import { useRouter } from "next/router";

const Post = (props) => {
	const router = useRouter()
	const { pid } = router.query
	const BlogPost = props.data.data;
	console.log(props.data);
	console.log(BlogPost);

	return (
		<>
			{BlogPost.attributes.Name}

		</>
	)
}
export default Post;

export async function getStaticProps(context) {
	const res = await fetch(`http://localhost:1337/api/blogs/${context.params.pid}`)
	const data = await res.json()

	return {
		props: { data }, // will be passed to the page component as props
	}
}

export async function getStaticPaths() {
	return {
		paths: [{ params: { pid: '1' } }, { params: { pid: '2' } }],
		fallback: false, // can also be true or 'blocking'
	}
}
