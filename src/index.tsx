import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainPage from "./pages/Main/MainPage";
import FavoritePage from "./pages/Favorite/Favorite";
import SearchResults from "./pages/SearchResults/SearchResults";
import RecommendedEventPage from "./pages/RecommendedEvent/RecommendedEventPage";
import PopularCommunityPage from "./pages/Community/PopularCommunityPage/PopularCommunityPage";
import EventPage from "./pages/Event/EventPage";
import CommunityPage from "./pages/Community/CommunityPage/CommunityPage";
import SectionsListPage from "./pages/SectionsList/SectionsListPage";
import SectionPage from "./pages/Section/SectionPage";
import ModeratorPage from "./pages/Moderator/ModeratorPage";

const router = createBrowserRouter([
    {
        path: '/test',
        element: <App/>
    },
    {
        path: '/',
        element: <MainPage/>
    },
    {
        path: '/favorite',
        element: <FavoritePage/>
    },
    {
        path: '/searchResults',
        element: <SearchResults/>
    },
    {
        path: '/recommended',
        element: <RecommendedEventPage/>
    },
    {
        path: '/popularCommunity',
        element: <PopularCommunityPage/>
    },
    {
        path: '/event/:id',
        element: <EventPage/>
    },
    {
        path: '/community/:id',
        element: <CommunityPage/>
    },
    {
        path: '/sectionsList',
        element: <SectionsListPage/>
    },
    {
        path: '/section',
        element: <SectionPage/>
    },
    {
        path: '/moderator',
        element: <ModeratorPage/>
    }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
    .render(
        <React.StrictMode>
            <RouterProvider router={router}/>
        </React.StrictMode>
    );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
