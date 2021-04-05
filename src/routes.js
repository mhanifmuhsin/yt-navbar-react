import React from 'react';
const JuniorStudent = React.lazy(() => import('./JuniorStudent'))
const Profile = React.lazy(() => import('./Profile'))
const Home = React.lazy(() => import('./Home'))

const routes = [
   
    { path: '/students/juniorStudent', Component: JuniorStudent },
    { path: '/profile', Component: Profile },
    { path: '/', Component: Home },
]
export default routes