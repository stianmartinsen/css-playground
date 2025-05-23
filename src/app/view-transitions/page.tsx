import classNames from "classnames";
import { IsSticky } from "./is-sticky";

/* eslint-disable @next/next/no-img-element */
export default function ViewTransitionsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">Blog</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Articles
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                About
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Contact
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Article Header */}
        <article className="bg-white rounded-lg shadow-sm">
          {/* Hero Image */}
          <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-t-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Article hero image"
              className="w-full h-64 sm:h-80 lg:h-96 object-cover"
            />
          </div>

          <div className="px-6 sm:px-10 py-8 relative">
            {/* Article Meta */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-semibold">JD</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      John Doe
                    </p>
                    <p className="text-xs text-gray-500">Software Engineer</p>
                  </div>
                </div>
              </div>
              <div className="text-sm text-gray-500">
                <time dateTime="2024-01-15">January 15, 2024</time>
                <span className="mx-2">•</span>
                <span>5 min read</span>
              </div>
            </div>

            {/* Article Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Understanding CSS View Transitions: A Modern Approach to Smooth UI
              Animations
            </h1>

            {/* Article Subtitle */}
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Learn how to implement smooth, native view transitions in your web
              applications using the new CSS View Transitions API for enhanced
              user experiences.
            </p>

            {/* Tags */}
            <IsSticky
              className={classNames(
                // Base styles
                "flex flex-wrap gap-2 mb-8 sticky top-0 bg-white -mx-6 sm:-mx-10 px-6 sm:px-10 py-4 z-10 overflow-auto whitespace-nowrap",

                // Sticky styles
                "data-sticky:!flex-nowrap"
              )}
            >
              <span
                className="px-3 py-1 bg-blue-100 text-blue-800 font-medium rounded-full [view-transition-name:tag1] animate-fade-in"
                style={{
                  animationRange: "entry 0% entry 100%",
                  animationTimeline: "view(inline)",
                }}
              >
                CSS
              </span>
              <span
                className="px-3 py-1 bg-green-100 text-green-800 font-medium rounded-full [view-transition-name:tag2] animate-fade-in"
                style={{
                  animationRange: "entry 0% entry 100%",
                  animationTimeline: "view(inline)",
                }}
              >
                Web Animations
              </span>
              <span
                className="px-3 py-1 bg-purple-100 text-purple-800 font-medium rounded-full [view-transition-name:tag3] animate-fade-in"
                style={{
                  animationRange: "entry 0% entry 100%",
                  animationTimeline: "view(inline)",
                }}
              >
                Frontend
              </span>
              <span
                className="px-3 py-1 bg-orange-100 text-orange-800 font-medium rounded-full [view-transition-name:tag5] animate-fade-in"
                style={{
                  animationRange: "entry 0% entry 100%",
                  animationTimeline: "view(inline)",
                }}
              >
                Modern CSS
              </span>
              <span
                className="px-3 py-1 bg-red-100 text-red-800 font-medium rounded-full [view-transition-name:tag6] animate-fade-in"
                style={{
                  animationRange: "entry 0% entry 100%",
                  animationTimeline: "view(inline)",
                }}
              >
                JavaScript
              </span>
              <span
                className="px-3 py-1 bg-indigo-100 text-indigo-800 font-medium rounded-full [view-transition-name:tag7] animate-fade-in"
                style={{
                  animationRange: "entry 0% entry 100%",
                  animationTimeline: "view(inline)",
                }}
              >
                Performance
              </span>
              <span
                className="px-3 py-1 bg-pink-100 text-pink-800 font-medium rounded-full [view-transition-name:tag8] animate-fade-in"
                style={{
                  animationRange: "entry 0% entry 100%",
                  animationTimeline: "view(inline)",
                }}
              >
                UX/UI
              </span>
              <span
                className="px-3 py-1 bg-teal-100 text-teal-800 font-medium rounded-full [view-transition-name:tag9] animate-fade-in"
                style={{
                  animationRange: "entry 0% entry 100%",
                  animationTimeline: "view(inline)",
                }}
              >
                React
              </span>
              <span
                className="px-3 py-1 bg-yellow-100 text-yellow-800 font-medium rounded-full [view-transition-name:tag10 animate-fade-in"
                style={{
                  animationRange: "entry 0% entry 100%",
                  animationTimeline: "view(inline)",
                }}
              >
                Next.js
              </span>
              <span
                className="px-3 py-1 bg-gray-100 text-gray-800 font-medium rounded-full [view-transition-name:tag11] animate-fade-in"
                style={{
                  animationRange: "entry 0% entry 100%",
                  animationTimeline: "view(inline)",
                }}
              >
                Responsive Design
              </span>
              <span
                className="px-3 py-1 bg-cyan-100 text-cyan-800 font-medium rounded-full [view-transition-name:tag12] animate-fade-in"
                style={{
                  animationRange: "entry 0% entry 100%",
                  animationTimeline: "view(inline)",
                }}
              >
                Browser APIs
              </span>
            </IsSticky>

            {/* Article Content */}
            <div className="prose prose-lg prose-gray max-w-none">
              <p>
                The web development landscape is constantly evolving, and one of
                the most exciting recent additions is the CSS View Transitions
                API. This powerful feature allows developers to create smooth,
                native transitions between different states of their
                applications without relying on complex JavaScript libraries or
                frameworks.
              </p>

              <p>
                For years, developers have struggled with creating seamless
                transitions between different views in single-page applications.
                Traditional approaches often required heavy animation libraries,
                complex state management, or compromise on performance. The View
                Transitions API changes this paradigm entirely, bringing native
                browser support for sophisticated animations that feel as smooth
                as native mobile applications.
              </p>

              <h2>What are View Transitions?</h2>
              <p>
                View Transitions provide a way to animate between different DOM
                states in a web application. Think of them as a native way to
                create the smooth transitions you see in mobile apps when
                navigating between screens or updating content.
              </p>

              <p>
                At its core, the View Transitions API works by taking snapshots
                of your page before and after a change, then automatically
                creating smooth animations between these states. This happens at
                the browser level, which means you get hardware acceleration and
                optimal performance without any additional overhead.
              </p>

              <h3>How View Transitions Work Under the Hood</h3>
              <p>
                When you initiate a view transition, the browser follows a
                specific sequence of steps:
              </p>
              <ol>
                <li>
                  <strong>Capture:</strong> Takes a snapshot of the current
                  state
                </li>
                <li>
                  <strong>Execute:</strong> Runs your DOM update function
                </li>
                <li>
                  <strong>Compare:</strong> Analyzes differences between old and
                  new states
                </li>
                <li>
                  <strong>Animate:</strong> Creates smooth transitions between
                  matching elements
                </li>
              </ol>

              <h3>Key Benefits</h3>
              <ul>
                <li>
                  <strong>Performance:</strong> Native browser implementation
                  means better performance and hardware acceleration
                </li>
                <li>
                  <strong>Simplicity:</strong> No need for complex animation
                  libraries or manual timeline management
                </li>
                <li>
                  <strong>Accessibility:</strong> Respects user preferences for
                  reduced motion automatically
                </li>
                <li>
                  <strong>Progressive Enhancement:</strong> Gracefully degrades
                  in unsupported browsers
                </li>
                <li>
                  <strong>Memory Efficient:</strong> Optimized resource usage
                  compared to JavaScript solutions
                </li>
                <li>
                  <strong>Seamless Integration:</strong> Works with any frontend
                  framework or vanilla JavaScript
                </li>
              </ul>

              <h2>Browser Support and Detection</h2>
              <p>
                Before implementing view transitions, it&apos;s crucial to
                understand current browser support. As of 2024, the View
                Transitions API is supported in modern Chromium-based browsers,
                with Firefox and Safari working on implementation.
              </p>

              <div className="bg-gray-50 rounded-lg p-6 my-6">
                <pre className="text-sm text-gray-800 overflow-x-auto">
                  <code>{`// Feature detection pattern
function supportsViewTransitions() {
  return 'startViewTransition' in document;
}

// Safe implementation with fallback
function safeViewTransition(updateFunction) {
  if (supportsViewTransitions()) {
    return document.startViewTransition(updateFunction);
  } else {
    // Fallback for unsupported browsers
    updateFunction();
    return Promise.resolve();
  }
}`}</code>
                </pre>
              </div>

              <h2>Getting Started</h2>
              <p>
                To implement view transitions, you&apos;ll primarily work with
                the <code>document.startViewTransition()</code>
                method. This method takes a callback function that contains the
                DOM changes you want to animate.
              </p>

              <div className="bg-gray-50 rounded-lg p-6 my-6">
                <pre className="text-sm text-gray-800 overflow-x-auto">
                  <code>{`// Basic view transition example
if (document.startViewTransition) {
  document.startViewTransition(() => {
    // Make your DOM changes here
    updateContent();
  });
} else {
  // Fallback for browsers without support
  updateContent();
}`}</code>
                </pre>
              </div>

              <h3>Your First View Transition</h3>
              <p>
                Let&apos;s create a practical example. Imagine you have a
                gallery where clicking on a thumbnail shows a larger version.
                Here&apos;s how you could implement smooth transitions:
              </p>

              <div className="bg-gray-50 rounded-lg p-6 my-6">
                <pre className="text-sm text-gray-800 overflow-x-auto">
                  <code>{`// HTML structure
<div class="gallery">
  <img src="thumb1.jpg" class="thumbnail" data-full="full1.jpg">
  <img src="thumb2.jpg" class="thumbnail" data-full="full2.jpg">
</div>
<div class="modal" id="modal">
  <img src="" id="modalImage">
</div>

// JavaScript implementation
document.querySelectorAll('.thumbnail').forEach(thumb => {
  thumb.addEventListener('click', () => {
    const fullSrc = thumb.dataset.full;
    
    document.startViewTransition(() => {
      document.getElementById('modalImage').src = fullSrc;
      document.getElementById('modal').classList.add('active');
    });
  });
});`}</code>
                </pre>
              </div>

              <h2>Advanced Techniques and Customization</h2>
              <p>
                While basic transitions are straightforward, the real power
                comes from customizing the animation behavior using CSS. You can
                target specific elements, control timing, and create complex
                choreographed animations.
              </p>

              <h3>Named View Transitions</h3>
              <p>
                For more control over which elements transition together, you
                can use named view transitions. This allows you to specify
                exactly which elements should animate to which destinations.
              </p>

              <div className="bg-gray-50 rounded-lg p-6 my-6">
                <pre className="text-sm text-gray-800 overflow-x-auto">
                  <code>{`/* CSS: Define view transition names */
.hero-image {
  view-transition-name: hero;
}

.article-title {
  view-transition-name: title;
}

.author-avatar {
  view-transition-name: avatar;
}

/* Customize the transition animations */
::view-transition-old(hero) {
  animation-duration: 0.5s;
  animation-timing-function: ease-in-out;
}

::view-transition-new(hero) {
  animation-duration: 0.5s;
  animation-timing-function: ease-in-out;
}`}</code>
                </pre>
              </div>

              <h3>Custom Animation Timing and Easing</h3>
              <p>
                You have complete control over the animation characteristics.
                Different elements can have different timing, easing functions,
                and even completely custom keyframe animations.
              </p>

              <div className="bg-gray-50 rounded-lg p-6 my-6">
                <pre className="text-sm text-gray-800 overflow-x-auto">
                  <code>{`/* Custom timing for different elements */
::view-transition-old(root) {
  animation: slideOutLeft 0.3s ease-in;
}

::view-transition-new(root) {
  animation: slideInRight 0.3s ease-out;
}

/* Define custom keyframes */
@keyframes slideOutLeft {
  from { transform: translateX(0); opacity: 1; }
  to { transform: translateX(-100%); opacity: 0; }
}

@keyframes slideInRight {
  from { transform: translateX(100%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}

/* Staggered animations for multiple elements */
::view-transition-old(card-1) { animation-delay: 0ms; }
::view-transition-old(card-2) { animation-delay: 100ms; }
::view-transition-old(card-3) { animation-delay: 200ms; }`}</code>
                </pre>
              </div>

              <h2>Real-World Use Cases</h2>

              <h3>1. Single Page Application Navigation</h3>
              <p>
                One of the most powerful applications is creating seamless
                navigation between routes in single-page applications.
                Here&apos;s how you might implement it with React Router:
              </p>

              <div className="bg-gray-50 rounded-lg p-6 my-6">
                <pre className="text-sm text-gray-800 overflow-x-auto">
                  <code>{`// React Router with View Transitions
import { useNavigate } from 'react-router-dom';

function NavigationLink({ to, children }) {
  const navigate = useNavigate();
  
  const handleClick = (e) => {
    e.preventDefault();
    
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        navigate(to);
      });
    } else {
      navigate(to);
    }
  };
  
  return (
    <a href={to} onClick={handleClick}>
      {children}
    </a>
  );
}`}</code>
                </pre>
              </div>

              <h3>2. Dynamic Content Loading</h3>
              <p>
                View transitions excel at making content updates feel instant
                and connected, even when loading data asynchronously.
              </p>

              <div className="bg-gray-50 rounded-lg p-6 my-6">
                <pre className="text-sm text-gray-800 overflow-x-auto">
                  <code>{`async function loadContent(url) {
  // Start the transition immediately
  const transition = document.startViewTransition(async () => {
    // Show loading state
    document.getElementById('content').innerHTML = 
      '<div class="loading">Loading...</div>';
    
    // Fetch new content
    const response = await fetch(url);
    const html = await response.text();
    
    // Update DOM with new content
    document.getElementById('content').innerHTML = html;
  });
  
  // Handle any errors
  transition.catch(error => {
    console.error('Transition failed:', error);
  });
}`}</code>
                </pre>
              </div>

              <h3>3. Interactive UI Components</h3>
              <p>
                Create engaging micro-interactions for tabs, accordions, modals,
                and other interactive components.
              </p>

              <div className="bg-gray-50 rounded-lg p-6 my-6">
                <pre className="text-sm text-gray-800 overflow-x-auto">
                  <code>{`// Tab switching with view transitions
class TabComponent {
  constructor(container) {
    this.container = container;
    this.bindEvents();
  }
  
  bindEvents() {
    this.container.addEventListener('click', (e) => {
      if (e.target.matches('.tab-button')) {
        this.switchTab(e.target.dataset.tab);
      }
    });
  }
  
  switchTab(tabId) {
    document.startViewTransition(() => {
      // Update active tab
      this.container.querySelectorAll('.tab-button').forEach(btn => {
        btn.classList.remove('active');
      });
      this.container.querySelector(\`[data-tab="\${tabId}"]\`)
        .classList.add('active');
      
      // Update content
      this.container.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
      });
      this.container.querySelector(\`#\${tabId}\`)
        .classList.add('active');
    });
  }
}`}</code>
                </pre>
              </div>

              <h2>Performance Considerations</h2>

              <h3>Optimizing for Large DOMs</h3>
              <p>
                When working with complex applications, it&apos;s important to
                understand how view transitions impact performance and how to
                optimize them.
              </p>

              <ul>
                <li>
                  <strong>Limit transition scope:</strong> Use named transitions
                  to control which elements animate
                </li>
                <li>
                  <strong>Avoid complex transforms:</strong> Stick to transform
                  and opacity changes when possible
                </li>
                <li>
                  <strong>Monitor memory usage:</strong> Large snapshots can
                  consume significant memory
                </li>
                <li>
                  <strong>Test on low-end devices:</strong> Ensure transitions
                  remain smooth across different hardware
                </li>
              </ul>

              <h3>Memory Management</h3>
              <p>
                The browser automatically manages snapshots, but you can help by
                keeping transitions focused and avoiding unnecessary DOM
                complexity during transitions.
              </p>

              <div className="bg-gray-50 rounded-lg p-6 my-6">
                <pre className="text-sm text-gray-800 overflow-x-auto">
                  <code>{`// Optimize by limiting transition scope
.non-transitioning-element {
  view-transition-name: none;
}

/* Or exclude entire sections */
.static-sidebar {
  view-transition-name: none;
}

/* Monitor transition performance */
document.startViewTransition(() => {
  updateContent();
}).finished.then(() => {
  console.log('Transition completed');
}).catch((error) => {
  console.log('Transition was skipped:', error);
});`}</code>
                </pre>
              </div>

              <h2>Best Practices and Common Pitfalls</h2>

              <h3>Best Practices</h3>
              <ol>
                <li>
                  <strong>Always provide fallbacks:</strong> Not all browsers
                  support view transitions yet
                </li>
                <li>
                  <strong>Respect user preferences:</strong> Honor
                  prefers-reduced-motion settings
                </li>
                <li>
                  <strong>Keep transitions purposeful:</strong> Don&apos;t
                  animate just for the sake of animation
                </li>
                <li>
                  <strong>Test extensively:</strong> Ensure transitions work
                  across different screen sizes and devices
                </li>
                <li>
                  <strong>Maintain semantic HTML:</strong> Transitions should
                  enhance, not replace, good markup
                </li>
              </ol>

              <h3>Common Pitfalls to Avoid</h3>
              <ul>
                <li>
                  <strong>Overusing transitions:</strong> Too many animations
                  can overwhelm users
                </li>
                <li>
                  <strong>Ignoring accessibility:</strong> Always consider users
                  with motion sensitivities
                </li>
                <li>
                  <strong>Complex timing chains:</strong> Keep animation logic
                  simple and predictable
                </li>
                <li>
                  <strong>Forgetting error handling:</strong> Transitions can
                  fail, plan for graceful degradation
                </li>
              </ul>

              <h2>Accessibility and User Preferences</h2>
              <p>
                View transitions automatically respect the user&apos;s
                <code>prefers-reduced-motion</code> setting, but you should also
                consider providing additional controls for users who want to
                customize their experience.
              </p>

              <div className="bg-gray-50 rounded-lg p-6 my-6">
                <pre className="text-sm text-gray-800 overflow-x-auto">
                  <code>{`/* CSS: Respect motion preferences */
@media (prefers-reduced-motion: reduce) {
  ::view-transition-old(*),
  ::view-transition-new(*) {
    animation: none !important;
  }
}

/* JavaScript: Additional user controls */
function getUserMotionPreference() {
  const stored = localStorage.getItem('motion-preference');
  if (stored) return stored;
  
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches 
    ? 'reduced' : 'full';
}

function safeViewTransition(updateFn) {
  const preference = getUserMotionPreference();
  
  if (preference === 'reduced' || !document.startViewTransition) {
    updateFn();
    return Promise.resolve();
  }
  
  return document.startViewTransition(updateFn);
}`}</code>
                </pre>
              </div>

              <h2>Integration with Modern Frameworks</h2>

              <h3>React Integration</h3>
              <p>
                View transitions work seamlessly with React&apos;s state
                updates. Here&apos;s a custom hook for easy integration:
              </p>

              <div className="bg-gray-50 rounded-lg p-6 my-6">
                <pre className="text-sm text-gray-800 overflow-x-auto">
                  <code>{`// Custom React hook for view transitions
import { useCallback } from 'react';

export function useViewTransition() {
  const startTransition = useCallback((updateFunction) => {
    if (document.startViewTransition) {
      return document.startViewTransition(() => {
        updateFunction();
      });
    } else {
      updateFunction();
      return Promise.resolve();
    }
  }, []);
  
  return startTransition;
}

// Usage in component
function MyComponent() {
  const [view, setView] = useState('list');
  const startTransition = useViewTransition();
  
  const switchView = (newView) => {
    startTransition(() => {
      setView(newView);
    });
  };
  
  return (
    <div>
      <button onClick={() => switchView('grid')}>
        Grid View
      </button>
      {/* Your content */}
    </div>
  );
}`}</code>
                </pre>
              </div>

              <h2>Future of View Transitions</h2>
              <p>
                The View Transitions API represents a significant step forward
                in web animation capabilities, offering developers a powerful
                tool for creating engaging user experiences with minimal code
                and maximum performance. As browser support continues to expand,
                we can expect to see this technology become a standard part of
                modern web development.
              </p>

              <p>
                Future developments may include enhanced cross-document
                transitions for multi-page applications, improved integration
                with CSS animations, and additional customization options for
                complex use cases. The API is designed to evolve with the web
                platform, ensuring that developers will have even more powerful
                tools at their disposal as the technology matures.
              </p>

              <h3>What&apos;s Next?</h3>
              <p>
                The web platform continues to evolve, and view transitions are
                just the beginning. Future enhancements being discussed include:
              </p>

              <ul>
                <li>
                  <strong>Cross-document transitions:</strong> Smooth animations
                  between different pages
                </li>
                <li>
                  <strong>Shared element transitions:</strong> More granular
                  control over element matching
                </li>
                <li>
                  <strong>Timeline integration:</strong> Better coordination
                  with other web animations
                </li>
                <li>
                  <strong>Performance insights:</strong> Built-in profiling and
                  optimization tools
                </li>
              </ul>

              <h2>Conclusion</h2>
              <p>
                CSS View Transitions represent a paradigm shift in how we
                approach web animations. By providing native browser support for
                sophisticated transitions, they enable developers to create
                engaging, performant user experiences without the complexity and
                overhead of traditional animation libraries.
              </p>

              <p>
                Whether you&apos;re building a simple marketing site or a
                complex single-page application, view transitions can enhance
                the user experience by providing visual continuity and reducing
                cognitive load. As you begin incorporating this powerful API
                into your projects, remember to prioritize accessibility,
                performance, and user preferences to create truly inclusive and
                delightful web experiences.
              </p>

              <p>
                The future of web animation is bright, and view transitions are
                leading the way toward more seamless, native, and performant
                user interfaces. Start experimenting with this technology today,
                and be part of the next evolution in web development.
              </p>
            </div>

            {/* Article Footer */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <button className="flex items-center space-x-2 text-gray-600 hover:text-red-500 transition-colors">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>42 likes</span>
                  </button>
                  <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition-colors">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                    <span>12 comments</span>
                  </button>
                  <button className="flex items-center space-x-2 text-gray-600 hover:text-green-500 transition-colors">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                      />
                    </svg>
                    <span>Share</span>
                  </button>
                </div>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Follow Author
                </button>
              </div>
            </div>
          </div>
        </article>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600">
            <p>&copy; 2024 Blog. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
