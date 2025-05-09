import React from 'react';
import Header from '../components/Header';
import RightAside from '../components/HomeLayout/RightAside';
import { useLoaderData, useParams } from 'react-router';
import NewsDetailsCard from '../components/NewsDetailsCard';

const NewsDetails = () => {

    const {id} = useParams();
    const data = useLoaderData();

    const news = data.find(singleNews=>singleNews.id==id);


    return (
        <div>
            <header className='mb-6'>
                <Header></Header>
            </header>
            <main className='w-11/12 mx-auto grid grid-cols-12 gap-5'>
                <section className='col-span-9'>
                    <h2 className='font-semibold text-xl mb-5'>Dragon News</h2>
                    <NewsDetailsCard news={news}></NewsDetailsCard>
                </section>
                <aside className='col-span-3'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;