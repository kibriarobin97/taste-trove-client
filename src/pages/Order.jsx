import Cover from "../components/Cover";
import orderImg from "../assets/shop/order.jpg";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../hooks/useMenu";
import OrderTab from "../components/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {

    const categories = ['salad', 'pizza', 'soups', 'desserts', 'drinks']
    const { category } = useParams()
    const initialIndex = categories.indexOf(category)

    const [tabIndex, setTabIndex] = useState(initialIndex)

    const [menu] = useMenu()
    const drinks = menu.filter(item => item.category === 'drinks')
    const dessert = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'soup')

    return (
        <div className="min-h-[calc(100vh-276px)]">
            <Helmet>
                <title>Order Food | Taste Trove</title>
            </Helmet>
            <Cover img={orderImg} title={'Order Food'}></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab><p className={`${tabIndex == 0 ? 'border-[#D99904] border-b-2 pb-1' : ''}`}>Salad</p></Tab>
                    <Tab><p className={`${tabIndex == 1 ? 'border-[#D99904] border-b-2 pb-1' : ''}`}>Pizza</p></Tab>
                    <Tab><p className={`${tabIndex == 2 ? 'border-[#D99904] border-b-2 pb-1' : ''}`}>Soups</p></Tab>
                    <Tab><p className={`${tabIndex == 3 ? 'border-[#D99904] border-b-2 pb-1' : ''}`}>Desserts</p></Tab>
                    <Tab><p className={`${tabIndex == 4 ? 'border-[#D99904] border-b-2 pb-1' : ''}`}>Drinks</p></Tab>
                </TabList>
                <TabPanel>
                    <OrderTab items={salad}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={pizza}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={soup}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={dessert}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={drinks}></OrderTab>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;