import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const Home = () => {
  const features = [
    {
      title: 'Task Management',
      description: 'Create, organize, and track your tasks with ease.',
      icon: '✅',
      path: '/tasks'
    },
    {
      title: 'API Integration',
      description: 'Explore data fetching with JSONPlaceholder API.',
      icon: '🌐',
      path: '/api-demo'
    },
    {
      title: 'Dark Mode',
      description: 'Toggle between light and dark themes for comfortable viewing.',
      icon: '🌙',
      path: '/'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-12">
      {/* Hero Section */}
      <section className="text-center py-16">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 dark:text-white mb-6">
          Welcome to{' '}
          <span className="text-blue-600 dark:text-blue-400">TaskFlow</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          A modern, responsive React application built with Tailwind CSS. 
          Experience seamless task management and API integration in a beautiful interface.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link to="/tasks">
            <Button variant="primary" size="lg">
              Get Started
            </Button>
          </Link>
          <Link to="/api-demo">
            <Button variant="secondary" size="lg">
              Explore API
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Grid */}
      <section>
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
          Features
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Link key={index} to={feature.path}>
              <Card className="h-full text-center hover:scale-105 transition-transform duration-300 cursor-pointer group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section>
        <Card className="text-center py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-bold text-blue-600">100%</div>
              <div className="text-gray-600 dark:text-gray-300">Responsive</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600">React 18</div>
              <div className="text-gray-600 dark:text-gray-300">Modern Hooks</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600">Tailwind</div>
              <div className="text-gray-600 dark:text-gray-300">CSS Framework</div>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
};

export default Home;