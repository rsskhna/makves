import './sidebar.scss';
import logo from '../assets/logo.png'

import dashboard from '../assets/dashboard.svg'
import sales from '../assets/sales.svg'
import costs from '../assets/sales-up.svg'
import payments from '../assets/wallet.svg'
import finances from '../assets/finances.svg'
import messages from '../assets/messages.svg'
import settings from '../assets/settings.svg'
import support from '../assets/call.svg'
import {firstSectionLinks, secondSectionLinks} from "../data/linksData.js";

const Sidebar = (theme) => {
    function handleClickField(evt) {
        const sidebarLinkActive = document.querySelector('.sidebar__field-link_active');

        if (evt.target.classList.contains('sidebar__field')) {
            sidebarLinkActive.classList.remove('sidebar__field-link_active');
            evt.target.querySelector('.sidebar__field-link').classList.add('sidebar__field-link_active');
        }
    }

    function handleClickButton() {
        const sidebar = document.querySelector('.sidebar');
        const button = document.querySelector('.sidebar__button');
        const fieldText = document.querySelectorAll('.sidebar__field-text');
        const companyName = document.querySelector('.sidebar__company-name');

        sidebar.classList.toggle('sidebar_narrow');
        button.classList.toggle('sidebar__button_inactive');
        fieldText.forEach(text => {
            text.classList.toggle('sidebar__field-text_invisible');
        })
        companyName.classList.toggle('sidebar__company-name_invisible');
    }

    return (
        <>
            <div className='sidebar' onClick={handleClickField}>
                <div className='sidebar__logo-section'>
                    <img className='sidebar__logo' src={logo} alt='logo'/>

                    <p className='sidebar__company-name'>Technifly</p>
                </div>

                <ul className='sidebar__fields'>
                    {firstSectionLinks.map((link, index) => {
                        return (
                            <li className='sidebar__field'>
                                <a className={link.className} href='#'>
                                    <img className='sidebar__field-icon' src={link.iconSrc} alt={link.name}/>
                                    <p className='sidebar__field-text'>{link.name}</p>
                                </a>
                            </li>
                        )
                    })}
                </ul>

                <ul className='sidebar__fields sidebar__fields_margin-top'>
                    {secondSectionLinks.map(link => {
                        return (
                            <li className='sidebar__field'>
                                <a className={link.className} href='#'>
                                    <img className='sidebar__field-icon' src={link.iconSrc} alt={link.name}/>
                                    <p className='sidebar__field-text'>{link.name}</p>
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </div>

            <button className='sidebar__button' type='button' onClick={handleClickButton}></button>
        </>
    )
}

export default Sidebar;