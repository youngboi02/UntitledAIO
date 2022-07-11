import React from 'react'
import {CakeIcon, LockClosedIcon, PhotographIcon} from '@heroicons/react/outline'

export default function Menu({}) {
    return (
        <div className="ml-10 h-200 w-14 bg-[#3A3D54] rounded menu-properties">
            <div className='top-menu-options'>
                <img src="/imgs/package.png" className="menu-picture-1 m-2 transition-all" />
                <img src="/imgs/personal.png" className="menu-picture-2 m-2 transition-all" />
                <img src="/imgs/signal.png" className="menu-picture-3 m-2 transition-all" />
            </div>
            <div className='bottom-menu-options'>
                <img src="/imgs/user.png" className="menu-picture-4 m-2 transition-all" />
                <img src="/imgs/settings.png" className="menu-picture-5 m-2 transition-all" />
                <img src="/imgs/sign-out.png" className="menu-picture-6 ml-3 mb-2 transition-all" />
            </div>

        </div>
    )
}
