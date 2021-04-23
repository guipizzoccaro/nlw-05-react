import { useRouter } from 'next/router'
import { GetStaticProps } from 'next'
import { api } from '../../services/api'


export default function Episode() {

    const router = useRouter()

    return (
        <h1></h1>
    )
}

//parei aqui

export const getStaticProps: GetStaticProps = async (ctx) => {
    const { slug } = ctx.params

    const { data } = await api.get(`/episodes/${slug}`)

    return {
        props: {},
        revalidate: 60 * 60 * 24, //24 horas
    }
}