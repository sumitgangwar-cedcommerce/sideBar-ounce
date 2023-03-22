import { AlertCircle, Book, HelpCircle, Home, Phone, Settings, ShoppingBag } from 'react-feather';
import { Outlet, useNavigate } from 'react-router';
import './App.css';
import { logo } from './assets/Logo';
import Badge from './Badge/Badge';
import SideBar from './SideBar';

function Dashboard() {

    const nav = useNavigate()

    const menu = [
        {
            id: 'home',
            label: 'Home',
            path: '/',
            icon: <Home size="20" color="#1c2433" />,
            badge:<Badge type='success' variant='accent' size='small'>New</Badge>
        },
        {
            id: 'proList',
            label: 'Product List',
            path: '/productList',
            icon: <ShoppingBag size="20" color="#1c2433" />,
            children: [
                {
                    id: 'pro1',
                    label: 'pro1',
                    path: '/product1',
                    badge:<Badge type='success' size='small'>54</Badge>
                    // icon: <Book size='24' color='#1c2433' />
                },
                {
                    id: 'pro2',
                    label: 'pro2',
                    path: '/product2',
                    // icon: <Book size='24' color='#1c2433' />,
                    // children: [
                    //     {
                    //         id: 'pro2.1',
                    //         label: 'pro2.1',
                    //         path: '/product2.1',
                    //         icon: <Book size='24' color='#1c2433' />
                    //     },
                    //     {
                    //         id: 'pro2.2',
                    //         label: 'pro2.2',
                    //         path: '/product2.2',
                    //         icon: <Book size='24' color='#1c2433' />,
                    //         // children:[
                    //         //   {
                    //         //     id: 'pro2.2.1',
                    //         //     label:'pro2.2.1',
                    //         //     path:'/product1',
                    //         //     icon:<Book size='24' color='#1c2433' />
                    //         //   },
                    //         //   {
                    //         //     id: 'pro2.2.2',
                    //         //     label:'pro2.2.2',
                    //         //     path:'/product2.2.2',
                    //         //     icon:<Book size='24' color='#1c2433' />
                    //         //   },
                    //         //   {
                    //         //     id: 'pro2.2.3',
                    //         //     label:'pro2.2.3',
                    //         //     path:'/product2.2.3',
                    //         //     icon:<Book size='24' color='#1c2433' />
                    //         //   }
                    //         // ]
                    //     },
                    //     {
                    //         id: 'pro2.3',
                    //         label: 'pro2.3',
                    //         path: '/product2.3',
                    //         icon: <Book size='24' color='#1c2433' />
                    //     }
                    // ]
                },
                {
                    id: 'pro3',
                    label: 'pro3',
                    path: '/product3',
                    // icon: <Book size='24' color='#1c2433' />
                }
            ]
        },
        {
            id: 'setting',
            label: 'Setting',
            path: '/setting',
            icon: <Settings size="20" color="#1c2433" />
        },
        {
            id: 'help',
            label: 'Help',
            path: '/help',
            icon: <HelpCircle size="20" color="#1c2433" />
        },
        {
            id: 'faq',
            label: 'FAQ',
            path: '/faq',
            icon: <AlertCircle size="20" color="#1c2433" />
        }
    ]

    const menu2 = [
        {
            id: 'get',
            label: 'Get In Touch',
            path: '/getInTouch',
            icon: <Home size="20" color="#1c2433" />,
            badge:<Badge type='success' size='small'>5</Badge>,
            children: [
                {
                    id: 'pro1',
                    label: 'pro1',
                    path: '/product1',
                    badge:<Badge type='success' size='small'>54</Badge>
                    // icon: <Book size='24' color='#1c2433' />
                },
                {
                    id: 'pro2',
                    label: 'pro2',
                    path: '/product2',
                    // icon: <Book size='24' color='#1c2433' />,
                    // children: [
                    //     {
                    //         id: 'pro2.1',
                    //         label: 'pro2.1',
                    //         path: '/product2.1',
                    //         icon: <Book size='24' color='#1c2433' />
                    //     },
                    //     {
                    //         id: 'pro2.2',
                    //         label: 'pro2.2',
                    //         path: '/product2.2',
                    //         icon: <Book size='24' color='#1c2433' />,
                    //         // children:[
                    //         //   {
                    //         //     id: 'pro2.2.1',
                    //         //     label:'pro2.2.1',
                    //         //     path:'/product1',
                    //         //     icon:<Book size='24' color='#1c2433' />
                    //         //   },
                    //         //   {
                    //         //     id: 'pro2.2.2',
                    //         //     label:'pro2.2.2',
                    //         //     path:'/product2.2.2',
                    //         //     icon:<Book size='24' color='#1c2433' />
                    //         //   },
                    //         //   {
                    //         //     id: 'pro2.2.3',
                    //         //     label:'pro2.2.3',
                    //         //     path:'/product2.2.3',
                    //         //     icon:<Book size='24' color='#1c2433' />
                    //         //   }
                    //         // ]
                    //     },
                    //     {
                    //         id: 'pro2.3',
                    //         label: 'pro2.3',
                    //         path: '/product2.3',
                    //         icon: <Book size='24' color='#1c2433' />
                    //     }
                    // ]
                },
                {
                    id: 'pro3',
                    label: 'pro3',
                    path: '/product3',
                    // icon: <Book size='24' color='#1c2433' />
                }
            ]
        },
        {
            id: 'mobile',
            label: 'Contact Us',
            path: '/contactUs',
            icon: <Phone size="20" color="#1c2433" />,
            // badge:<Badge type='success' size='small'></Badge>
        }
    ]

    const handelMenuChange = (newPath: string) => {
        console.log('newPath => ', newPath);
        nav(newPath)
    }

    return (
        <div className="App">
            <SideBar
                logo={logo}
                // menu={menu}
                onChange={handelMenuChange}
            >
                <SideBar.Section 
                    title="General"
                    menu={menu}
                    onChange={handelMenuChange}
                />
                <SideBar.Section 
                    title="Support"
                    menu={menu2}
                    onChange={handelMenuChange}
                />
            </SideBar>
            <Outlet />
        </div>
    );
}

export default Dashboard;
