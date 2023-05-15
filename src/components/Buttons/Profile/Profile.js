import Link from 'next/link';
import Image from 'next/image';
import { IoSettingsSharp } from 'react-icons/io5';
import { BsChevronRight } from 'react-icons/bs';
// import { BsFillQuestionCircleFill }

import './Profile.scss';
import images from '@/constants/images';



const Profile = () => {
  return (
    <div className='profile-container'>
        <Link href='/' className='header'>
            <Image 
                className='image'
                src={ images.choaib }
                alt='Choaib ELMADI'
            />
            <p>Choaib Elmadi JS</p>
        </Link>
        <div className='parameters'>
            <div className='param'>
                <div className='icon'>
                    <IoSettingsSharp size={ 20 } />
                </div>
                <p>Paramètres et confidentialité</p>
                <BsChevronRight size={ 22 } />
            </div>
            <div className='param'>
                <div className='icon'>
                    <IoSettingsSharp size={ 20 } />
                </div>
                <p>Paramètres et confidentialité</p>
                <BsChevronRight size={ 22 } />
            </div>
            <div className='param'>
                <div className='icon'>
                    <IoSettingsSharp size={ 20 } />
                </div>
                <p>Paramètres et confidentialité</p>
                <BsChevronRight size={ 22 } />
            </div>
        </div>
    </div>
  );
};

export default Profile;