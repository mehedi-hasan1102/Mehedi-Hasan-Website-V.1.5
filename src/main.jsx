import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';


import AboutMe from '../components/AboutMe';
import ProjectSection from '../components/ProjectSection';
import ContactMe from '../components/ContactMe';
import NotFound from '../components/NotFound';
import SkillsSection from '../components/SkillsSection';

import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import ServiceSection from '../components/ServiceSection';
import GitHubActivitySection from '../components/GitHubActivitySection';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { 
        index: true, 
        element: (
          <>
            <HeroSection />
            <AboutMe />
            <SkillsSection />
            < GitHubActivitySection />
           < ServiceSection />
            <ProjectSection />
            <ContactMe />
            <Footer />
          </>
        ) 
      }
    ],
  },
  { path: '*', element: <NotFound /> },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </StrictMode>
);