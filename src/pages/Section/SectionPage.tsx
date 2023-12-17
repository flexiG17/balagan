import React from 'react'
import styles from './SectionPage.module.scss'
import Layout from "../../components/layout/Layout";
import PageTitle from "../../components/PageTitle/PageTitle";
import SingleSectionPage from "../../components/Section/SingleSectionPage";

const SectionPage = () => {
    return (
        <Layout>
            <SingleSectionPage/>
        </Layout>
    )
}

export default SectionPage