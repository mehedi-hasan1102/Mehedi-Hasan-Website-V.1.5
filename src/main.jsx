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
import MultiRepoGitJournal from '../components/MultiRepoGitJournal';

import ExperienceAndSocialWork from '../components/ExperienceAndSocialWork';
import Blog from '../components/Blogs';
import StatsSection from '../components/StatsSection';

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
           < StatsSection />
            <AboutMe />
            <ExperienceAndSocialWork />
            <SkillsSection />
            < GitHubActivitySection />
           < MultiRepoGitJournal />
           < ServiceSection />
            
            <ProjectSection />
           < Blog />
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