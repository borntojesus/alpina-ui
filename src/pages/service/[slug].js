const Service = (props) => {
  const { Name } = props.data.attributes;
  return (
    <div>
      <h1>{Name}</h1>
    </div>
  );
};

export async function getStaticProps(context) {
  const res = await fetch(
    `${process.env.API_URL}/services?filters[slug][$eq]=${context.params.slug}`
  );
  const response = await res.json();

  return {
    props: { data: response.data[0] }, // will be passed to the page component as props
  };
}

export async function getStaticPaths() {
  const res = await fetch(`${process.env.API_URL}/services/`);
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

export default Service;
