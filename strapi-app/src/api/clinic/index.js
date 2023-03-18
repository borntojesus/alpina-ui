import {useRouter} from "next/router";
import Link from "next/link";

import ClinicList from "@/components/Good/GoodList";

const ClinicPage = (props) => {
    const serviceData = props.data.data;

    console.log(props.data);
console.log(props.data.attributes)

    console.log(serviceData);
    return <div className="container">

        {serviceData.map(({id, attributes }) => (
            <Link key={id} href={'/clinic/' + attributes.slug}>
            <ClinicList
                            logo={attributes.logo.data[0].attributes.url}
                            type={attributes.type}
                            name={attributes.name}
                            description={attributes.description}
                            raiting={attributes.raiting}
                            tags={attributes.tags.data.attributes}
                            />
            </Link>
        ))}

    </div>

}
export default ClinicPage;


export async function getStaticProps(context) {
    const res = await fetch(`${process.env.API_URL}/clinics?populate[0]=tags&populate[1]=star&populate[2]=logo.media`)
    const data = await res.json()
    console.log(context);
    return {
        props: {data}, // will be passed to the page component as props
    }
}