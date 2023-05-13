'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { GoSearch } from 'react-icons/go';

import './Navbar.scss';
import images from '../../constants/images';
import Searchbar from '../SearchBar/Searchbar';



const Navbar = () => {
    const [vueSearchList, setVueSearchList] = useState(false);

    return (
        <nav className="navbar">
            <div className='search-section'>
                <Link href='/' className='logo'>
                    <Image 
                        className='image'
                        src={ images.facebook_logo }
                        alt='Facebook'
                    />
                </Link>
                <div 
                    className='search'
                    onClick={ () => setVueSearchList(true) }
                >
                    <GoSearch />
                    <p>Rechercher sur Facebook</p>
                </div>
                { vueSearchList && <Searchbar setVueSearchList={ setVueSearchList } /> }
            </div>
            
        </nav>
    );
};

export default Navbar;