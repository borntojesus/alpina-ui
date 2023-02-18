import {useRouter} from "next/router";
import Link from "next/link";

import BlogCard from "@/components/BlogCard/BlogCard";





const ServiceList = (props) => {
    const router = useRouter()
    console.log(props.data);

    const serviceData = props.data.data;


    console.log(serviceData[0].attributes.Name);
    console.log(serviceData[1]);
    return <div>

        {serviceData.map(({id, attributes }) => (
            <Link key={id} href={'/service/' + attributes.slug}> <BlogCard name={attributes.Name}/></Link>
        ))}

    </div>

}
export default ServiceList;


export async function getStaticProps(context) {
    const res = await fetch(`http://localhost:1337/api/services/`)
    const data = await res.json()
    console.log(context);
    return {
        props: {data}, // will be passed to the page component as props
    }
}
