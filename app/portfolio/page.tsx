"use client";
import { Navigation } from "../components/nav";

export default function Portfolio() {
  return (
    <div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <Navigation />
      <div className="container min-h-screen px-4 mx-auto pb-10 md:pt-24 lg:pt-32">
        <div className="max-w-6xl mx-auto">
          {/* Skills */}
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Skills
          </h2>
          <div className="mt-8 text-zinc-400">
            <ul className="space-y-4">
              <li>
                <strong>Programming languages:</strong> Typescript, Python, C/
                C++, Java, PHP.
              </li>
              <li>
                <strong>Frameworks/ Libraries/ Concepts/ Tools:</strong>{" "}
                Colyseus, Serverless, ReactJS, NextJs NestJs, Strapi, Boostrap,
                Tailwind CSS, Laravel, Django, NextUI, MaterialUI, CharkraUI,
                Microservice, Domain-Driven-Architecture, RESTful, gRPC, OpenAI,
                AWS, Unix/ Linux, Nginx, CI/CD, Scrum, Agile, Docker, Vim,
                Message Queues, Elasticsearch, Jenkins, Redis, Snowflake,
                Firebase, Sentry, Blockchain (NFT, Crypto), MobX, Zustand,
                Spring, Angular.
              </li>
              <li>
                <strong>Database:</strong> MongoDB, MySQL, PostgreSQL.
              </li>
            </ul>
          </div>
          <div className="my-8 w-full h-px bg-zinc-800" />

          {/* Experience */}
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl mb-6">
            Experience
          </h2>
          <div className="space-y-10">
            <div className="border-l-2 border-zinc-700 pl-6">
              <h3 className="text-2xl font-bold tracking-tight text-zinc-300 sm:text-3xl">
                Blogger
              </h3>
              <p className="text-zinc-400 mt-1">May 2023 - Present</p>
              <ul className="mt-4 text-zinc-400 list-disc list-inside space-y-2">
                <li>
                  Beiryu Blog, Software Engineering, SWE Skits & Entertainment,
                  Tech Life, Coding, Career Advice, LeetCode
                </li>
              </ul>
            </div>
            <div className="border-l-2 border-zinc-700 pl-6">
              <h3 className="text-2xl font-bold tracking-tight text-zinc-300 sm:text-3xl">
                Frontend Engineer - Hachium - Hanoi, Vietnam
              </h3>
              <p className="text-zinc-400 mt-1">9/2024 - Current</p>
              <ul className="mt-4 text-zinc-400 list-disc list-inside space-y-2">
                <li>
                  Perform web and legacy system development, update and support,
                  delivery high level solutions or subsystems like custom APIs,
                  database modeling and design.
                </li>
                <li>
                  Build a scalable technology system supporting multiple
                  countries and languages, serving 200 national and territorial
                  regions, and meeting evolving business growth needs.
                </li>
                <li>
                  Ensure stable operation and maintenance of the technology
                  system.
                </li>
                <li>
                  Enhance the current codebase and system architecture for
                  improved maintainability, development potential, and both
                  horizontal and vertical scalability.
                </li>
              </ul>
              <h4 className="text-xl font-semibold text-zinc-200 mt-6 mb-3 italic underline">
                Edtech Startup
              </h4>
              <ul className="text-zinc-400 list-decimal list-inside space-y-2">
                <li>
                  General: Team size: 10/ Duration: 10/2024 - now/ Position:
                  Frontend/ Tech stacks: Typescript, ReactJs, React-Query,
                  Zustand, TailwindCSS, Figma.
                </li>
                <li>
                  Lead frontend development for the internal experimental
                  platform from inception to deployment
                </li>
                <li>
                  Collaborate with a cross-functional team to design and
                  implement scalable solutions supporting multiple countries and
                  languages
                </li>
                <li>
                  Contribute to the development of custom APIs and database
                  design to support frontend requirements
                </li>
                <li>
                  Key Contributions:
                  <ul className="pl-10 mt-2 space-y-1 list-[lower-alpha]">
                    <li>
                      Internal Application Development:
                      <ul className="pl-6 mt-2 space-y-1 list-disc">
                        <li>
                          Architected and implemented the frontend for the
                          experimental platform using React and TypeScript
                        </li>
                        <li>
                          Implemented internationalization (i18n) features,
                          enabling seamless multi-language support
                        </li>
                      </ul>
                    </li>
                    <li>
                      State Management and Data Fetching:
                      <ul className="pl-6 mt-2 space-y-1 list-disc">
                        <li>
                          Designed reusable custom hooks, enhancing code
                          reusability and maintainability
                        </li>
                      </ul>
                    </li>
                    <li>
                      UI/UX Design and Implementation:
                      <ul className="pl-6 mt-2 space-y-1 list-disc">
                        <li>
                          Collaborated with UX designers using Figma to create
                          intuitive user interfaces
                        </li>
                        <li>
                          Implemented responsive designs using TailwindCSS,
                          ensuring consistent user experience across devices
                        </li>
                        <li>
                          Developed a common component library, accelerating UI
                          development time by 30%
                        </li>
                      </ul>
                    </li>
                    <li>
                      Component Documentation with Storybook:
                      <ul className="pl-6 mt-2 space-y-1 list-disc">
                        <li>
                          Implemented Storybook for component documentation and
                          visual testing
                        </li>
                        <li>
                          Created comprehensive stories for all major UI
                          components, improving team collaboration and reducing
                          onboarding time for new developers by 50%
                        </li>
                        <li>
                          Utilized Storybook's addon ecosystem for accessibility
                          testing and responsive design checks
                        </li>
                      </ul>
                    </li>
                    <li>
                      Performance Optimization:
                      <ul className="pl-6 mt-2 space-y-1 list-disc">
                        <li>
                          Implemented code splitting and lazy loading
                          techniques, improving initial load time by 45%
                        </li>
                        <li>
                          Optimized render performance using React's useMemo and
                          useCallback hooks, enhancing overall application
                          responsiveness
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  Technical Achievements:
                  <ul className="pl-6 mt-2 space-y-1 list-disc">
                    <li>
                      Developed a custom theming solution, enabling easy
                      customization for different regional preferences
                    </li>
                    <li>
                      Implemented advanced form handling and validation using
                      React Hook Form, reducing form-related bugs by 60%
                    </li>
                  </ul>
                </li>
                <li>
                  Outcome:
                  <ul className="pl-6 mt-2 space-y-1 list-disc">
                    <li>
                      Successfully launched the internal experimental platform
                    </li>
                    <li>
                      Established a robust component library with Storybook,
                      accelerating UI development across multiple projects
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="border-l-2 border-zinc-700 pl-6">
              <h3 className="text-2xl font-bold tracking-tight text-zinc-300 sm:text-3xl">
                Backend Engineer - Gameloft - Ho Chi Minh
              </h3>
              <p className="text-zinc-400 mt-1">6/2024 - Current</p>
              <ul className="mt-4 text-zinc-400 list-disc list-inside space-y-2">
                <li>
                  Perform web and legacy system development, update and support,
                  delivery high level solutions or subsystems like custom API's,
                  database modeling and design.
                </li>
                <li>
                  Participle on the conception and setup of automation system to
                  facilitate the usage and project deployment on site and on
                  cloud.
                </li>
                <li>
                  Analyzes customer requirements and defines solutions and
                  architecture plus assistance to the team on problems and
                  technical roadblocks.
                </li>
                <li>
                  Create and maintain technical documentation linked with the
                  solution developed.
                </li>
                <li>
                  Work with infrastructure team to find innovative solution.
                </li>
                <li>
                  Contribute to continuous improvement by suggesting improvement
                  to user interface, software architecture or new technologies.
                </li>
                <li>
                  Coordinate roll-out of new applications and provides
                  production support.
                </li>
              </ul>

              <h4 className="text-xl font-semibold text-zinc-200 mt-6 mb-3 italic underline">
                Claynosaurs
              </h4>
              <ul className="text-zinc-400 list-decimal list-inside space-y-2">
                <li>
                  General: Team size: 10/ Duration: 9/2024 - now/ Position:
                  Backend/ Tech stacks: NestJs, MongoDB, Microservice, Domain
                  Driven Design, Redis, Colyseus, Sentry, ReactJs, AWS Cloud
                  Services (ECS, ...).
                </li>
                <li>
                  Play a crucial role in developing and optimizing game server
                  infrastructure using Colyseus
                </li>
                <li>
                  Lead the development and maintenance of key microservices
                  including Friend Service
                </li>
                <li>
                  Contribute to the improvement and expansion of the existing
                  microservice architecture
                </li>
                <li>
                  Key Contributions:
                  <ul className="pl-10 mt-2 space-y-1 list-[lower-alpha]">
                    <li>
                      Game Server Development:
                      <ul className="pl-6 mt-2 space-y-1 list-disc">
                        <li>
                          Engineered Colyseus playground schema, facilitating
                          seamless communication between game and backend teams
                        </li>
                        <li>
                          Reduced documentation overhead by 40% through
                          intuitive schema design
                        </li>
                        <li>
                          Improved development speed by 30% by streamlining
                          message validation processes
                        </li>
                      </ul>
                    </li>
                    <li>
                      Microservice Architecture:
                      <ul className="pl-6 mt-2 space-y-1 list-disc">
                        <li>
                          Contributed to the optimization of the existing
                          microservice ecosystem
                        </li>
                        <li>
                          Implemented Domain Driven Design principles, improving
                          system modularity and scalability
                        </li>
                      </ul>
                    </li>
                    <li>
                      Friend Service:
                      <ul className="pl-6 mt-2 space-y-1 list-disc">
                        <li>
                          Designed and implemented a scalable friend management
                          system
                        </li>
                        <li>
                          Optimized friend suggestion algorithms, increasing
                          user connections by 35%
                        </li>
                        <li>
                          Implemented real-time friend status updates using
                          WebSockets, enhancing user engagement
                        </li>
                        <li>
                          Implemented comprehensive unit tests for the Friend
                          Service, achieving 90% code coverage
                        </li>
                        <li>
                          Integrated unit tests into the CI/CD pipeline for the
                          Friend Service, reducing related bugs by 40%
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  Key Achievements:
                  <ul className="pl-6 mt-2 space-y-1 list-disc">
                    <li>
                      Contributed to the development of internal tools using
                      ReactJs, improving team productivity by 20%
                    </li>
                    <li>
                      Mentored junior developers, improving team knowledge
                      sharing and code quality
                    </li>
                  </ul>
                </li>
              </ul>
              <h4 className="text-xl font-semibold text-zinc-200 mt-6 mb-3 italic underline">
                Applaydu
              </h4>
              <ul className="text-zinc-400 list-decimal list-inside space-y-2">
                <li>
                  General: Team size: 6/ Duration: 6/2024 - 9/2024/ Position:
                  Backend/ Tech stacks: Javascript, Nodejs, ExpressJs,
                  Snowflake, ReactJs, AWS Cloud Service (Lambda, DynamoDB, S3,
                  Cloudwatch Log, Cloudfront).
                </li>
                <li>
                  Email System Optimization
                  <ul className="pl-6 mt-2 space-y-1 list-disc">
                    <li>
                      Engineered and implemented an optimized email delivery
                      system, significantly improving sending speed while
                      maintaining rate-limit compliance
                    </li>
                    <li>
                      Reduced email processing time by 80% without compromising
                      deliverability or violating service provider restrictions
                    </li>
                  </ul>
                </li>
                <li>
                  AI-Powered Story Reading Feature
                  <ul className="pl-6 mt-2 space-y-1 list-disc">
                    <li>
                      Spearheaded the development of an innovative AI-driven
                      story reading feature
                    </li>
                    <li>
                      Collaborated closely with DevOps and Infrastructure teams
                      to design and implement robust pipelines for story
                      generation and processing
                    </li>
                    <li>
                      Increased user engagement by 25% through the introduction
                      of this cutting-edge feature
                    </li>
                  </ul>
                </li>
                <li>
                  CRON System Performance Enhancement
                  <ul className="pl-6 mt-2 space-y-1 list-disc">
                    <li>
                      Identified and resolved critical memory leak issues in the
                      CRON job system
                    </li>
                    <li>
                      Optimized resource utilization, resulting in a 40%
                      reduction in server memory consumption
                    </li>
                  </ul>
                </li>
                <li>
                  Key Achievements:
                  <ul className="pl-6 mt-2 space-y-1 list-disc">
                    <li>
                      Boosted email delivery efficiency by 80% while ensuring
                      compliance with rate limits
                    </li>
                    <li>
                      Led cross-functional teams in implementing AI-powered
                      features, driving a 25% increase in user engagement
                    </li>
                    <li>
                      Optimized CRON systems, reducing memory usage by 40%
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="border-l-2 border-zinc-700 pl-6">
              <h3 className="text-2xl font-bold tracking-tight text-zinc-300 sm:text-3xl">
                Software Engineer - AgileOps - Ho Chi Minh
              </h3>
              <p className="text-zinc-400 mt-1">9/2023 - 6/2024</p>
              <ul className="mt-4 text-zinc-400 list-disc list-inside space-y-2">
                <li>
                  Experienced in full-stack software development, with a focus
                  on creating applications about web3, gaming and healthcare
                  domain.
                </li>
                <li>
                  Experienced in handling all stages of the development cycle
                  including requirement collection, database design,
                  architecture decision, and MVP creation.
                </li>
                <li>
                  Implemented APIs, monitored servers in different environments,
                  and integrated third-party services.
                </li>
                <li>
                  Developed features like user registration, portfolio
                  management, transaction management, real-time asset valuation,
                  and notification systems.
                </li>
                <li>
                  Worked on systems related to preventative healthcare,
                  integrating with various activity trackers, health parameters
                  providers, AI services, and other health-related systems.
                </li>
                <li>
                  Proven ability to deliver products with seamless user
                  experiences.
                </li>
              </ul>

              <h4 className="text-xl font-semibold text-zinc-200 mt-6 mb-3 italic underline">
                Web3App
              </h4>
              <ul className="text-zinc-400 list-decimal list-inside space-y-2">
                <li>
                  General: Team size: 4/ Duration: 12/2023 - 6/2024/ Position:
                  Fullstack/ Tech stacks: NestJs, PostgreSQL, ReactJs, Next.JS,
                  TailwindCSS, Websocket, Jenkins, AWS.
                </li>
                <li>
                  Led requirement gathering, database design, and architecture
                  planning for a new Web3 portfolio management application.
                </li>
                <li>
                  Developed MVP from scratch, reducing time-to-market by 30%
                  compared to initial estimates.
                </li>
                <li>
                  Implemented robust APIs and managed deployment across
                  development and production environments, achieving 99.9%
                  uptime
                </li>
                <li>
                  The main features are implements:
                  <ul className="pl-6 mt-2 space-y-1 list-disc">
                    <li>
                      User registration and authentication: Registration via
                      email, phone, or socials. / Basic profile management.
                    </li>
                    <li>
                      Portfolio management: Ability to add, edit and delete
                      assets. / Support for cryptocurrencies, fiat currencies,
                      exchanges, trading pairs. / Basic analysis: balance,
                      profit-loss, etc.
                    </li>
                    <li>
                      Transaction management: Handle all buy, sell, and transfer
                      transactions for different cryptocurrencies, support
                      multi-currency. / Basic analysis: determine profit-loss,
                      net cost, average cost, and total cost for each
                      transaction.
                    </li>
                    <li>
                      Real-time asset valuation: Integration with Coinmarketcap
                      for real-time asset values. / Portfolio value
                      visualization with Tradingview.
                    </li>
                    <li>
                      Alerts and notifications: Price change alerts for assets /
                      Basic push and in-app notifications with Firebase.
                    </li>
                    <li>
                      Marketplace: Monitor the changes in all coins (price,
                      volume, market cap, 1h%, 24h%, 7d%, etc.). / Filter coins
                      by categories (most visited, recently added, etc.) /
                      Integration with additional market data sources
                      (Coingecko).
                    </li>
                  </ul>
                </li>
                <li>
                  Key Achievements:
                  <ul className="pl-6 mt-2 space-y-1 list-disc">
                    <li>
                      Successfully launched the MVP within the 3-month
                      timeframe, meeting all key stakeholder requirements.
                    </li>
                    <li>
                      Achieved a 95% user satisfaction rate based on initial
                      feedback.
                    </li>
                  </ul>
                </li>
              </ul>

              <h4 className="text-xl font-semibold text-zinc-200 mt-6 mb-3 italic underline">
                Stellar
              </h4>
              <ul className="text-zinc-400 list-decimal list-inside space-y-2">
                <li>
                  General: Team size: 3/ Duration: 12/2023 - 6/2024/ Position:
                  Backend/ Tech stacks: Typescript, Serverless Framework,
                  OpenAI, AWS (S3, EC2, Lambda, DynamoDB, DAX, VPC, Route 53,
                  CloudWatch, CloudFormation, API Gateway ElastiCache, Amplify,
                  ...), Integration (Garmin, Polar, Apple Watch, Dexcom, Fitbit,
                  Withings, Spotify).
                </li>
                <li>
                  Stellar is an app where longevity and preventative healthcare
                  are seamlessly integrated into daily life. Key features
                  implemented:
                  <ul className="pl-6 mt-2 space-y-1 list-[lower-alpha]">
                    <li>
                      Activity Tracker Integration:
                      <ul className="pl-6 mt-2 space-y-1 list-disc">
                        <li>
                          Developed seamless integrations with Garmin, Polar,
                          Fitbit, Withings, and Apple Watch
                        </li>
                      </ul>
                    </li>
                    <li>
                      Health Metrics Collection:
                      <ul className="pl-6 mt-2 space-y-1 list-disc">
                        <li>
                          Integrated Withings API to collect comprehensive user
                          health parameters
                        </li>
                        <li>
                          Implemented real-time data synchronization, improving
                          data freshness by 75%
                        </li>
                      </ul>
                    </li>
                    <li>
                      AI-Powered Health Recommendations:
                      <ul className="pl-6 mt-2 space-y-1 list-disc">
                        <li>
                          Leveraged OpenAI to provide personalized health
                          insights and recommendations
                        </li>
                        <li>
                          Developed an AI coach feature, increasing user
                          engagement by 60%
                        </li>
                        <li>
                          Implemented image recognition for meal evaluations,
                          with 95% accuracy in food categorization
                        </li>
                      </ul>
                    </li>
                    <li>
                      Glucose Monitoring:
                      <ul className="pl-6 mt-2 space-y-1 list-disc">
                        <li>
                          Integrated Dexcom API for real-time blood sugar
                          monitoring
                        </li>
                        <li>
                          Developed alert system for glucose level anomalies,
                          potentially preventing 500+ health incidents
                        </li>
                      </ul>
                    </li>
                    <li>
                      Music Integration:
                      <ul className="pl-6 mt-2 space-y-1 list-disc">
                        <li>
                          Implemented Spotify API integration for personalized
                          playlist suggestions
                        </li>
                        <li>
                          Increased user workout duration by 25% through
                          tailored music recommendations
                        </li>
                      </ul>
                    </li>
                    <li>
                      Hydration Tracking:
                      <ul className="pl-6 mt-2 space-y-1 list-disc">
                        <li>
                          Integrated Fitbit and Hidrate Spark APIs for water
                          intake monitoring
                        </li>
                        <li>
                          Improved user hydration habits, with 70% of users
                          meeting daily water intake goals
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  Technical Achievements:
                  <ul className="pl-6 mt-2 space-y-1 list-disc">
                    <li>
                      Implemented a multi-layered caching strategy using AWS DAX
                      and ElastiCache, reducing database load by 60%
                    </li>
                    <li>
                      Implemented comprehensive logging and monitoring using
                      CloudWatch, improving issue detection and resolution time
                      by 70%.
                    </li>
                    <li>
                      Engineered robust integrations with multiple third-party
                      services, increasing data collection points by 300%
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="border-l-2 border-zinc-700 pl-6">
              <h3 className="text-2xl font-bold tracking-tight text-zinc-300 sm:text-3xl">
                Software Engineer - Netpower - Ho Chi Minh
              </h3>
              <p className="text-zinc-400 mt-1">9/2022 - 9/2023</p>
              <ul className="mt-4 text-zinc-400 list-disc list-inside space-y-2">
                <li>
                  Experienced full-stack software development with a
                  demonstrated history of working on marketplace applications in
                  Norway.
                </li>
                <li>
                  Experienced in data migration, system tracking, and
                  monitoring.
                </li>
                <li>
                  Proven abilities to design and develop data caching for
                  efficient data retrieval and implement cron jobs for data
                  synchronization across platforms.
                </li>
                <li>
                  Collaborated on international teams and conducted business in
                  English.
                </li>
              </ul>

              <h4 className="text-xl font-semibold text-zinc-200 mt-6 mb-3 italic underline">
                RockExchange
              </h4>
              <ul className="text-zinc-400 list-decimal list-inside space-y-2">
                <li>
                  General: Team size: 5/ Duration: 9/2022 - 3/2023/ Position:
                  Fullstack/ Tech stacks: Nestjs, ReactJs, MobX, PostgreSQL,
                  RabbitMQ, Elasticsearch, Redis.
                </li>
                <li>
                  The construction materials distribution exchange website is a
                  platform for contractors, owners, manufacturers, and suppliers
                  to search and connect with each other to carry out
                  construction materials transactions. The website provides the
                  following features:
                  <ul className="pl-6 mt-2 space-y-1 list-disc">
                    <li>
                      Post construction materials and related services for sale
                      or purchase.
                    </li>
                    <li>
                      Search and filter listings based on various criteria such
                      as location, type of materials, price, etc.
                    </li>
                    <li>
                      Contact relevant parties through the website to carry out
                      transactions.
                    </li>
                    <li>
                      Rate and provide feedback on transaction participants to
                      improve service quality.
                    </li>
                  </ul>
                </li>
                <li>
                  Implemented Elasticsearch to improve the speed of the
                  application by 200% compared to traditional SQL queries.
                </li>
                <li>
                  Implemented geospatial search using Mapbox, allowing users to
                  find materials within specific geographical areas
                </li>
                <li>
                  Implemented real-time notifications, increasing user response
                  rate by 50%
                </li>
                <li>
                  Technical Achievements:
                  <ul className="pl-6 mt-2 space-y-1 list-disc">
                    <li>
                      Collaborated with the team leader to implement a
                      sophisticated policy handler using RBAC and ABAC
                    </li>
                    <li>
                      Designed and implemented ACL rules, preparing the platform
                      for future modular sales strategies
                    </li>
                    <li>
                      Utilized Redis for caching frequently accessed data,
                      reducing database load by 40%
                    </li>
                    <li>
                      Implemented message queues with RabbitMQ, improving system
                      reliability and scalability
                    </li>
                  </ul>
                </li>
              </ul>
              <h4 className="text-xl font-semibold text-zinc-200 mt-6 mb-3 italic underline">
                Lokalmat & Specialty
              </h4>
              <ul className="text-zinc-400 list-decimal list-inside space-y-2">
                <li>
                  General: Duration: 3/2023 - 9/2023/ Position: Fullstack/ Team
                  size: 7/ Tech stacks: NestJs, PostgreSQL, ReactJs, Next.JS,
                  Strapi, Bootstrap.
                </li>
                <li>
                  Played a pivotal role in building a comprehensive food trading
                  platform from inception to launch
                </li>
                <li>
                  Implemented Strapi as a headless CMS, improving content
                  management efficiency by 50%
                </li>
                <li>
                  The food trading website is a platform where producers,
                  suppliers, and buyers can search and connect with each other
                  to carry out food trading transactions. The website provides
                  the following features:
                  <ul className="pl-6 mt-2 space-y-1 list-disc">
                    <li>Posting food trading ads and related services.</li>
                    <li>
                      Searching and filtering ads by various criteria, including
                      the type of food, location, price, etc.
                      <ul className="pl-6 mt-2 space-y-1 list-circle">
                        <li>
                          Improved search relevance by 75%, significantly
                          enhancing user experience
                        </li>
                      </ul>
                    </li>
                    <li>
                      Contacting relevant parties through the website to carry
                      out trading transactions.
                    </li>
                    <li>
                      Managing information of buyers, sellers, and producers.
                    </li>
                    <li>
                      Rating and providing feedback on participating parties to
                      improve service quality.
                      <ul className="pl-6 mt-2 space-y-1 list-circle">
                        <li>
                          Created a user-friendly rating and review system
                        </li>
                        <li>
                          Implemented algorithms to highlight top-rated sellers,
                          increasing their visibility by 50%
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  Technical Achievements:
                  <ul className="pl-6 mt-2 space-y-1 list-disc">
                    <li>
                      Developed RESTful APIs using NestJs, ensuring scalability
                      and maintainability
                    </li>
                    <li>
                      Implemented API versioning, facilitating smooth updates
                      without disrupting existing integrations
                    </li>
                    <li>
                      Utilized Next.JS for server-side rendering, improving
                      initial load times by 40%
                    </li>
                    <li>
                      Implemented lazy loading and code splitting, enhancing
                      overall application performance
                    </li>
                    <li>
                      Customized Strapi plugins to meet specific project
                      requirements
                    </li>
                  </ul>
                </li>
                <li>
                  Key Achievements:
                  <ul className="pl-6 mt-2 space-y-1 list-disc">
                    <li>
                      Successfully launched the platform within the 6-month
                      timeframe, exceeding stakeholder expectations
                    </li>
                    <li>
                      Achieved a 95% user satisfaction rate based on post-launch
                      surveys
                    </li>
                  </ul>
                </li>
              </ul>

              <h4 className="text-xl font-semibold text-zinc-200 mt-6 mb-3 italic underline">
                Nytnorge
              </h4>
              <ul className="text-zinc-400 list-decimal list-inside space-y-2">
                <li>
                  General: Duration: 6/2023 - 9/2023/ Position: Fullstack/ Team
                  size: 3/ Skills: Java, Spring, PostgreSQL, Angular.
                </li>
                <li>
                  The Nyt Norge website is the official brand for food and
                  drinks from Norway. The labeling plan will help consumers
                  easily choose Norwegian food products in stores. The website
                  provides the following features:
                  <ul className="pl-6 mt-2 space-y-1 list-disc">
                    <li>List Norwegian food and drink products.</li>
                    <li>
                      Provide information on origin, ingredients, prices, and
                      related product information.
                    </li>
                    <li>
                      Provide articles on Norwegian cuisine and traditional
                      recipes from the country.
                    </li>
                    <li>
                      Allow users to rate and provide feedback on products.
                    </li>
                    <li>
                      Provide information on events and activities related to
                      the Nyt Norge brand.
                    </li>
                  </ul>
                </li>
                <li>
                  Technical Achievements:
                  <ul className="pl-6 mt-2 space-y-1 list-disc">
                    <li>
                      Optimized database queries, contributing to a 15% overall
                      improvement in application performance
                    </li>
                    <li>
                      Implemented responsive design principles in Angular
                      components, ensuring consistent user experience across
                      devices
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="border-l-2 border-zinc-700 pl-6">
              <h3 className="text-2xl font-bold tracking-tight text-zinc-300 sm:text-3xl">
                Software Engineer Intern - Hybrid Technologies - Ho Chi Minh
              </h3>
              <p className="text-zinc-400 mt-1">10/2021 - 1/2022</p>
              <ul className="mt-4 text-zinc-400 list-disc list-inside space-y-2">
                <li>
                  Implemented media management and internal operation system.
                </li>
                <li>
                  Conducted business analysis, design, and system building with
                  the guidance of professional mentors.
                </li>
                <li>
                  Participated in product and project development following the
                  company's standard process, including design, code, and
                  testing.
                </li>
              </ul>

              <h4 className="text-xl font-semibold text-zinc-200 mt-6 mb-3 italic underline">
                Internal Media management
              </h4>
              <ul className="text-zinc-400 list-decimal list-inside space-y-2">
                <li>
                  General: Position: PHP Developer Internship/ Duration: 10/2021
                  - 1/2022/ Team size: 5/ Tech stacks: HTML, CSS, JavaScript,
                  Bootstrap 4, ReactJS, TypeScript, SASS/SCSS, PHP, Laravel,
                  MySQL, Git, CI/CD, Agile/Scrum, Waterfall
                </li>
                <li>
                  Key Responsibilities and Achievements:
                  <ul className="pl-6 mt-2 space-y-1 list-disc">
                    <li>
                      Contributed to the development of an internal media
                      management and operations system
                    </li>
                    <li>
                      Participated in full software development lifecycle,
                      including business analysis, design, implementation, and
                      testing
                    </li>
                    <li>
                      Collaborated with a team of 5 developers, improving
                      communication and teamwork skills
                    </li>
                  </ul>
                </li>
                <li>
                  Technical Contributions:
                  <ul className="pl-6 mt-2 space-y-1 list-disc">
                    <li>Implemented RESTful API endpoints using Laravel.</li>
                    <li>
                      Developed responsive UI components with ReactJS and
                      Bootstrap 4, enhancing user experience across devices
                    </li>
                    <li>
                      Implemented internationalization (i18n) for multi-language
                      support, expanding the system's accessibility
                    </li>
                  </ul>
                </li>
                <li>
                  Software Engineering Practices:
                  <ul className="pl-6 mt-2 space-y-1 list-disc">
                    <li>
                      Applied SOLID principles and object-oriented programming
                      concepts in PHP development
                    </li>
                    <li>
                      Created and maintained documentation including use case
                      diagrams, sequence diagrams, and database schemas
                    </li>
                    <li>
                      Participated in code reviews, improving overall code
                      quality and gaining valuable feedback from senior
                      developers
                    </li>
                  </ul>
                </li>
                <li>
                  Professional Development:
                  <ul className="pl-6 mt-2 space-y-1 list-disc">
                    <li>
                      Gained hands-on experience with Agile/Scrum methodologies,
                      participating in daily stand-ups and sprint planning
                    </li>
                    <li>
                      Learned and applied best practices in version control
                      using Git, including branching strategies and pull
                      requests
                    </li>
                    <li>
                      Explored advanced concepts such as GraphQL, RESTful API
                      design, and database optimization with PostgreSQL
                    </li>
                  </ul>
                </li>
                <li>
                  Outcome:
                  <ul className="pl-6 mt-2 space-y-1 list-disc">
                    <li>
                      Successfully delivered assigned modules within project
                      timelines, receiving positive feedback from mentors
                    </li>
                    <li>
                      Improved technical skills across full-stack development,
                      particularly in PHP, Laravel, and ReactJS
                    </li>
                    <li>
                      Gained valuable industry experience in software
                      development processes and best practices
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className="my-12 w-full h-px bg-zinc-800" />
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl mb-6">
            Education
          </h2>
          <div className="mt-8 text-zinc-400">
            <ul className="space-y-4">
              <li>
                <strong>Institution:</strong> University of Science, Vietnam
                National University - Ho Chi Minh City
              </li>
              <li>
                <strong>Degree:</strong> Bachelor of Science in Computer Science
              </li>
              <li>
                <strong>Duration:</strong> 2019 - 2024
              </li>
              <li>
                <strong>Current GPA:</strong> 3.4/4
              </li>
            </ul>
          </div>
          <div className="my-12 w-full h-px bg-zinc-800" />
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl mb-6">
            Honors & Awards
          </h2>
          <div className="space-y-6 text-zinc-400">
            <div>
              <h3 className="text-xl font-semibold text-zinc-200">2019</h3>
              <ul className="mt-2 list-disc list-inside">
                <li>
                  Third Prize in Mathematics Competition held to select
                  candidates for Vietnam National Mathematics Team
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-zinc-200">2018</h3>
              <ul className="mt-2 list-disc list-inside">
                <li>
                  Silver Medal at April 30th Traditional Olympic Competition
                </li>
                <li>
                  Second Prize in Mathematics Competition held to select
                  candidates for Vietnam National Mathematics Team
                </li>
                <li>Second Place at the American Mathematics Competition 12</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-zinc-200">2017</h3>
              <ul className="mt-2 list-disc list-inside">
                <li>
                  Consolation Prize in 2017 Hanoi Open Mathematics Competition
                </li>
                <li>
                  Bronze Medal in The Competition For Excellent Students Of
                  Major High Schools In The Northern Delta And Coastal Areas
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-zinc-200">2016</h3>
              <ul className="mt-2 list-disc list-inside">
                <li>
                  Third Prize in Mathematics Competition of Quang Nam Province
                </li>
                <li>
                  Consolation Prize in Casio Math Competition of Central Coast
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-zinc-200">2015</h3>
              <ul className="mt-2 list-disc list-inside">
                <li>
                  Gold Medal in Casio Mathematics Competition of Quang Nam
                  Province
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
