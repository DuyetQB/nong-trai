
import React from 'react'
import Head from "next/head";

export default function Product ({ productId, title }) {
    return (
        <div>
            <Head>
                <title>Sản phẩm - {productId} - {title}</title>
                <meta name="description" content={title} />
                <link rel="icon" href="/favicon.ico" />
                <meta name="keywords" content={title} />
                <meta name="author" content="Đinh Sĩ Duyệt" />
            </Head>
            <section>
                <h1>Sản phẩm - {productId} - {title}</h1>
                <p>{title}</p>
                <h3>hehehehh</h3>
            </section>
        </div>
    )
}


export async function getStaticProps({ params = {} } = {}) {
    return {
        props: {
            productId: params.productId,
            title: `Product ${params.productId}`
        }, // will be passed to the page component as props
    }
}

export async function getStaticPaths() {
    const paths = [...new Array(5)].map((i, index) => {
        return {
            params: {
                productId: `${index + 1} `
            }
        }
    }
    );
    return {
        paths,
        fallback: true // false or 'blocking'
    };
}
