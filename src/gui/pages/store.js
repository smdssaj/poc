import React, { useState } from 'react';
import { IoLogoApple } from "react-icons/io"
import { IoMdCart } from "react-icons/io"

import image from "../assets/profile.webp"
import donut from "../assets/donut.png"
import food from "../assets/food.png"

import { Page } from '../components/page'
import { Ratting } from '../components/ratting';
import { FixedButton } from '../components/fixed-button';
import { Slider } from '../components/slider';
import { RowList } from '../components/row-list';
import { IconRadio } from '../components/icon-radio';

export function StorePage() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <body>
            <Page title="Coffee shop" imgSrc={image}>
                <Ratting rating={0.0} />
                <RowList>
                    <IconRadio name="category" value="Sweet" icon={donut}/>
                    <IconRadio name="category" value="All" icon={food}/>
                </RowList>
                <FixedButton title="My cart 0" Icon={IoMdCart} onClick={() => setIsOpen(true)} />
                <Slider isOpen={isOpen}>
                    <Page title="Cart" close={() => setIsOpen(false)}>
                        <div style={{ height: "200vh" }}></div>
                        <FixedButton title="pay" Icon={IoLogoApple} onClick={() => setIsOpen(true)} />
                    </Page>
                </Slider>
                <div style={{ height: "200vh" }}></div>
                {/* <Cart isOpen={false} cart={{numberOfItems: 0}}/> */}
            </Page>
        </body>
    )
}
