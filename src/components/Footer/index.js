import React from 'react';

const Footer = () => {
    return (
        <div className='container'>
            <footer className='d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top'>
                <div className='col-md-4 d-flex align-items-center'>
                    <a href='#' className='mb-3 me-2 mb-md-0 text-decoration-none lh-1'>
                        <svg className='bi' width='30' height='24'>
                            {/* <use xlink:href='#bootstrap'></use> */}
                        </svg>
                    </a>
                    <span className='text-muted'>Follow us on social </span>
                    <ul className='nav col-md-4 justify content-end list-unlisted d-flex'>
                        <li className='ms-3'>
                            <a className='text-muted' href='#'>
                                <svg className='bi' width='24' height='24'>
                                    {/* <use xlink:href='#twitter'></use> */}
                                </svg>
                            </a>
                        </li>
                        <li className='ms-3'>
                            <a className='text-muted' href='#'>
                                <svg className='bi' width='24' height='24'>
                                    {/* <use xlink:href='#facebook'></use> */}
                                </svg>
                            </a>
                            <li className='ms-3'>
                                <a className='text-muted' href='#'>
                                    <svg className='bi' width='24' height='24'>
                                        {/* <use xlink:href='#instagram'></use> */}
                                    </svg>
                                </a>
                            </li>
                        </li>
                    </ul>
                </div>
            </footer>

        </div>
    );
}

export default Footer;
