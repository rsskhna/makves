import dashboard from '../assets/dashboard.svg'
import sales from '../assets/sales.svg'
import costs from '../assets/sales-up.svg'
import payments from '../assets/wallet.svg'
import finances from '../assets/finances.svg'
import messages from '../assets/messages.svg'
import settings from '../assets/settings.svg'
import support from '../assets/call.svg'

export const firstSectionLinks = [
    {
        name: 'Dashboard',
        iconSrc: dashboard,
        to: '/'
    },
    {
        name: 'Sales',
        iconSrc: sales,
        to: '/sales'
    },
    {
        name: 'Costs',
        iconSrc: costs,
        to: '/costs'
    },
    {
        name: 'Payments',
        iconSrc: payments,
        to: '/payments'
    },
    {
        name: 'Finances',
        iconSrc: finances,
        to: '/finances'
    },
    {
        name: 'Messages',
        iconSrc: messages,
        to: '/messages'
    },
]

export const secondSectionLinks = [
    {
        name: 'Settings',
        iconSrc: settings,
        to: '/settings'
    },
    {
        name: 'Support',
        iconSrc: support,
        to: '/support'
    },
]