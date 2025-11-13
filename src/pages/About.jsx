import React from 'react';
import Card from '../components/ui/Card';

const About = () => {
  const techStack = [
    { name: 'React.js', description: 'Component-based UI library' },
    { name: 'Tailwind CSS', description: 'Utility-first CSS framework' },
    { name: 'React Router', description: 'Declarative routing for React' },
    { name: 'Vite', description: 'Next-generation frontend tooling' },
    { name: 'Context API', description: 'State management solution' },
    { name: 'Custom Hooks', description: 'Reusable stateful logic' },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
          About This Project
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          A comprehensive React.js application demonstrating modern frontend development practices.
        </p>
      </div>

      <Card>
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
          Project Overview
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          This application showcases the core concepts of React.js development including 
          component architecture, state management with hooks, API integration, and 
          responsive styling with Tailwind CSS.
        </p>
        <p className="text-gray-600 dark:text-gray-300">
          Built as part of a learning curriculum, it demonstrates best practices in 
          modern web development and provides a solid foundation for building 
          production-ready React applications.
        </p>
      </Card>

      <Card>
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
          Technology Stack
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                {tech.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {tech.description}
              </p>
            </div>
          ))}
        </div>
      </Card>

      <Card>
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
          Features Implemented
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
          <li>Responsive design with mobile-first approach</li>
          <li>Dark/light theme switcher with persistence</li>
          <li>Task management with local storage</li>
          <li>API integration with loading states</li>
          <li>Reusable component architecture</li>
          <li>Custom hooks for state management</li>
          <li>React Router for navigation</li>
          <li>Tailwind CSS for styling</li>
        </ul>
      </Card>
    </div>
  );
};

export default About;