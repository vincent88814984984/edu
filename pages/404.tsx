export default function Custom404() {
    return <h1>404 -</h1>
}

export async function getStaticProps() {
    return {
        redirect: {
            destination: '/',
        }
    }
}