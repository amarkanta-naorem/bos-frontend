import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Body from '../components/Dashboard/Body';
import Course from '../components/Dashboard/Body/Courses';
import Dashboard from '../components/Dashboard/Dashboard';

const WebRouter = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Body />,
                children: [
                    {
                        path: '/',
                        element: <Dashboard />
                    },
                    {
                        path: 'course',
                        element: <Course />
                    }
                ]
            },
        ],
    }
])

export default WebRouter;
