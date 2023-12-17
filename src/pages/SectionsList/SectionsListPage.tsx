import React from "react";
import styles from './SectionsListPage.module.scss'
import Layout from "../../components/layout/Layout";
import PageTitle from "../../components/PageTitle/PageTitle";
import SectionsComponent from "../../components/Section/SectionsTable/SectionsComponent";

const SectionsListPage = () => {
    return (
        <Layout>
            <PageTitle title={'РАЗДЕЛЫ'}/>
            <SectionsComponent/>
        </Layout>
    )
}

export default SectionsListPage