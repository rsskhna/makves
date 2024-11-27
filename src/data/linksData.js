import dashboard from '../assets/dashboard.svg'
import sales from '../assets/sales.svg'
import costs from '../assets/sales-up.svg'
import payments from '../assets/wallet.svg'
import finances from '../assets/finances.svg'
import messages from '../assets/messages.svg'
import settings from '../assets/settings.svg'
import support from '../assets/call.svg'

const field = 'sidebar__field-link';
const active = 'sidebar__field-link_active';

export const firstSectionLinks = [
    {
        name: 'Dashboard',
        iconSrc: dashboard,
        className: `${field} ${active}`
    },
    {
        name: 'Sales',
        iconSrc: sales,
        className: `${field}`
    },
    {
        name: 'Costs',
        iconSrc: costs,
        className: `${field}`
    },
    {
        name: 'Payments',
        iconSrc: payments,
        className: `${field}`
    },
    {
        name: 'Finances',
        iconSrc: finances,
        className: `${field}`
    },
    {
        name: 'Messages',
        iconSrc: messages,
        className: `${field}`
    },
]

export const secondSectionLinks = [
    {
        name: 'Settings',
        iconSrc: settings,
        className: `${field}`
    },
    {
        name: 'Support',
        iconSrc: support,
        className: `${field}`
    },
]