import React, { useState, Fragment } from 'react';
import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";

const Blog = () => {

    const [open, setOpen] = useState(0);
    const handleOpen = value => {
        setOpen(open === value ? 0 : value);
    };

    const customAnimation = {
        mount: { scale: 1 },
        unmount: { scale: 0 },
    };

    return (
        <div>
            <h1 className='text-5xl font-bold text-center mt-6'>FAQ</h1>

            <div className='m-12'>
                <div className='my-5'>
                    <Fragment>
                        <Accordion open={open === 1} animate={customAnimation}>
                            <AccordionHeader onClick={() => handleOpen(1)}>
                                <div className='flex items-center justify-between'>
                                    <span className='text-lg font-semibold'>Context API</span>
                                    <div className='bg-blue-500 text-white rounded-full h-8 w-8 flex items-center justify-center'>
                                        <span className='text-lg font-bold'>+</span>
                                    </div>
                                </div>
                            </AccordionHeader>
                            <AccordionBody>
                                <div className='py-6 text-justify'>
                                    <span className='text-lg font-bold'>Here are some situations where you might consider using Context API:</span><br /><br />
                                    <span className='text-lg font-bold'>1.</span> When you need to pass data down to deeply nested components: If you have a component tree with many levels of nesting, it can be cumbersome to pass props down through each level of the tree. Context API provides a way to make data available to all components in the tree, regardless of how deeply nested they are.<br /><br />
                                    <span className='text-lg font-bold'>2.</span> When you have data that is used in multiple places: If you have data that is used in multiple components throughout your application, it can be useful to store that data in a centralized location using Context API. This makes it easier to update the data in one place and have those changes reflected throughout the application.<br /><br />
                                    <span className='text-lg font-bold'>3.</span> When you need to manage global state: If you have data that needs to be accessed and updated across multiple components, you can use Context API to manage global state. This can simplify your code and reduce the likelihood of bugs caused by inconsistent state.
                                </div>
                            </AccordionBody>
                        </Accordion>
                    </Fragment>
                </div>
                {/* Other accordion items */}
            </div>
        </div>
    );
};

export default Blog;
