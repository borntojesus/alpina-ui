import Link from "next/link";
import remarkGfm from 'remark-gfm';
import { useRouter } from "next/router";
import ReactMarkdown from 'react-markdown';
import ClinicCard from "@/components/Good/GoodCard";


const Clinics = (props) => {

	const {name, type, services, text, description, worktime, webSite, gallery, raiting } = props.data.attributes;
	const tags = props.data.attributes.tags.data;
	const logo = props.data.attributes.logo.data[0].attributes.url;




	console.log("logo", logo)

	console.log("props", props)
	// console.log("tags2", props.data.attributes)

	return (
		<div>
			<ClinicCard
				logo={logo}
				type={type}
				name={name}
				description={description}
				// name={name}
				worktime={worktime}
				services={services}
				text={text}
				raiting={raiting}
				tags={tags}
				webSite={webSite}
				gallery={gallery}
			/>

		</div>
	);
};
export default Clinics;

export async function getStaticProps(context) {
  const res = await fetch(

    `${process.env.API_URL}/clinics?filters[slug][$eq]=${context.params.slug}&populate[0]=tags&populate[1]=logo.media&populate[2]=gallery.media`
  );

  const response = await res.json();

  return {
    props: { data: response.data[0] }, // will be passed to the page component as props
  };
}

export async function getStaticPaths() {

  const res = await fetch(`${process.env.API_URL}/clinics/`);
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

