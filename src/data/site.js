// Single source of truth for all site content — sampled from the original site.

export const company = {
  name: 'The Plan D',
  tagline: 'Digital Marketing',
  domain: 'www.thepland.in',
  parent: 'Mahalakshmi Enterprises',
  email: 'thepland01@gmail.com',
  phone: '+91 99086 35700',
  phoneRaw: '919908635700',
  instagram: 'https://www.instagram.com/the_plan_d',
  whatsapp: 'https://wa.me/919908635700',
  facebook: '#',
  youtube: '#',
  copyright: '© 2026 The Plan D. All Rights Reserved.',
}

// EmailJS — reused from the original site's script.js
export const emailjs = {
  publicKey: '1dfcxRbRLal82wrGd',
  serviceId: 'service_zedqi13',
  templateId: 'template_mce0g9d',
}

export const stats = [
  { value: 250, suffix: '+', label: 'Global Clients' },
  { value: 500, suffix: '+', label: 'Projects Delivered' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
  { value: 11, suffix: '', label: 'Expert Team' },
]

// Icons are referenced by lucide-react name in the component.
export const services = [
  {
    slug: 'seo',
    icon: 'Search',
    title: 'SEO Optimization',
    short: 'Improve Google rankings and increase organic traffic.',
    hero: 'Increase your online visibility and grow your business with advanced search engine optimization strategies.',
    sections: [
      {
        heading: 'SEO — Search Engine Optimization',
        paragraphs: [
          'SEO helps websites rank higher on search engines like Google.',
          'The goal of SEO is to get free, sustainable traffic from Google.',
          'Example: If someone searches “best mobile shop in Vizag” and your website appears on the first page of Google, that happens because of SEO.',
        ],
      },
      {
        heading: 'On-Page SEO',
        text: 'On-Page SEO means optimizing everything inside the website.',
        list: ['Keywords', 'Website titles', 'Content optimization', 'Image optimization', 'Internal links', 'Fast loading speed'],
      },
      {
        heading: 'Off-Page SEO',
        text: 'Off-Page SEO focuses on improving website authority outside the website.',
        list: ['Backlinks', 'Social sharing', 'Guest posting', 'Brand mentions'],
      },
    ],
    why: [
      { icon: 'TrendingUp', title: 'Higher Rankings', text: 'We push the keywords that matter to the top of search results.' },
      { icon: 'Users', title: 'Quality Traffic', text: 'We attract visitors who are actively looking for your services.' },
      { icon: 'BarChart3', title: 'Measurable Growth', text: 'Transparent reporting on rankings, traffic and conversions.' },
    ],
  },
  {
    slug: 'meta-ads',
    icon: 'Megaphone',
    title: 'Meta Ads',
    short: 'High-converting Instagram & Facebook ad campaigns.',
    hero: 'Generate instant traffic, leads, and sales using powerful paid ad campaigns.',
    sections: [
      {
        heading: 'Meta Ads',
        text: 'Meta Ads are advertisements run on Meta platforms, created using Meta Ads Manager.',
        list: ['Instagram', 'Facebook', 'Messenger'],
      },
      {
        heading: 'What Meta Ads Are Used For',
        list: ['Website traffic', 'Product sales', 'Lead generation', 'WhatsApp messages', 'App installs', 'Reel promotion', 'Follower growth'],
      },
      {
        heading: 'Types of Meta Ads',
        list: [
          'Image Ads — single image advertisement',
          'Video / Reel Ads — short videos between reels & stories',
          'Carousel Ads — multiple images/videos in one ad',
          'Story Ads — full-screen vertical ads',
          'Lead Generation Ads — collect phone numbers & emails directly',
        ],
      },
      {
        heading: 'How We Run Meta Ads',
        list: ['Set up Facebook Page & Instagram', 'Define campaign objective', 'Build the target audience', 'Set budget', 'Design the creative', 'Publish & optimize'],
      },
    ],
    why: [
      { icon: 'Target', title: 'Precise Targeting', text: 'We target the right audience for maximum conversion rates.' },
      { icon: 'BarChart3', title: 'Performance Analytics', text: 'We continuously optimize campaigns using real-time data.' },
      { icon: 'TrendingUp', title: 'Better ROI', text: 'We focus on generating profitable and scalable growth.' },
    ],
  },
  {
    slug: 'social-media-marketing',
    icon: 'Share2',
    title: 'Social Media Marketing',
    short: 'Build engagement on Instagram, Facebook, LinkedIn & more.',
    hero: 'Build strong customer engagement and brand awareness through social platforms.',
    sections: [
      {
        heading: 'What is SMM?',
        text: 'SMM stands for Social Media Marketing — using platforms like Instagram, Facebook and YouTube to promote businesses, run ads, increase followers, generate leads and build audience engagement.',
        list: ['Instagram', 'Facebook', 'YouTube'],
      },
      {
        heading: 'Main Parts of SMM',
        list: [
          'Content Creation – posts, reels, stories, graphics',
          'Paid Ads – Meta, Instagram & Facebook ads',
          'Growth Strategy – hashtags, trends, engagement',
          'Analytics – tracking reach, clicks, conversions',
        ],
      },
      {
        heading: 'Example of SMM',
        text: 'A clothing store running Instagram reels and paid ads to sell products online is doing SMM.',
      },
    ],
    why: [
      { icon: 'Camera', title: 'Creative Content', text: 'We design visually engaging and modern social content.' },
      { icon: 'Users', title: 'Audience Engagement', text: 'We help brands build meaningful customer relationships.' },
      { icon: 'TrendingUp', title: 'Growth Focused', text: 'We focus on increasing followers, engagement and conversions.' },
    ],
  },
  {
    slug: 'social-media-optimization',
    icon: 'Hash',
    title: 'Social Media Optimization',
    short: 'Grow your social presence organically, without relying on ads.',
    hero: 'Improve your brand’s social media presence organically without mainly depending on paid advertisements.',
    sections: [
      {
        heading: 'What is SMO?',
        paragraphs: [
          'SMO stands for Social Media Optimization.',
          'It is the process of improving a brand’s social media presence organically.',
        ],
      },
      { heading: 'Platforms Commonly Used', list: ['Instagram', 'Facebook', 'YouTube'] },
      {
        heading: 'SMO Includes',
        list: [
          'Optimizing profile bio and page setup',
          'Posting quality content regularly',
          'Using hashtags properly',
          'Improving engagement (likes, comments, shares)',
          'Growing followers organically',
          'Creating attractive captions and thumbnails',
          'Best posting-time strategy',
        ],
      },
    ],
    why: [
      { icon: 'Hash', title: 'Organic Growth', text: 'We grow pages organically through engagement and optimization.' },
      { icon: 'Image', title: 'Creative Optimization', text: 'Attractive captions, thumbnails and optimized content for reach.' },
      { icon: 'Users', title: 'Better Engagement', text: 'We improve likes, comments, shares and follower interaction.' },
    ],
  },
  {
    slug: 'content-creation',
    icon: 'PenTool',
    title: 'Content Creation',
    short: 'Engaging content to attract audiences and grow your brand.',
    hero: 'Create engaging and valuable content to attract audiences, build brand awareness, and improve customer engagement.',
    sections: [
      {
        heading: 'What is Content Creation?',
        paragraphs: [
          'Content Creation is the process of creating digital content for online platforms to inform, engage, and attract audiences.',
          'Content can include posts, videos, reels, graphics, blogs, stories and promotional materials.',
        ],
      },
      { heading: 'Platforms Commonly Used', list: ['Instagram', 'Facebook', 'YouTube', 'LinkedIn', 'Websites & Blogs'] },
      {
        heading: 'Main Parts of Content Creation',
        list: ['Graphic Designing', 'Reels & Video Editing', 'Social Media Posts', 'Content Writing', 'Captions & Hashtags', 'Branding Content', 'Promotional Creatives'],
      },
    ],
    why: [
      { icon: 'PenTool', title: 'Creative Design', text: 'Professional, engaging content built for modern platforms.' },
      { icon: 'Film', title: 'High-Quality Creatives', text: 'Attractive graphics, reels, videos and promotional content.' },
      { icon: 'LineChart', title: 'Growth Strategy', text: 'Content built to improve reach, engagement and visibility.' },
    ],
  },
  {
    slug: 'social-media-management',
    icon: 'CalendarCheck',
    title: 'Social Media Management',
    short: 'End-to-end management of your social accounts and growth.',
    hero: 'Creating content, managing presence, growing brands.',
    sections: [
      {
        heading: 'What is Social Media Management?',
        text: 'We professionally manage your business accounts across social platforms — from content planning and publishing to audience engagement and account growth.',
      },
      { heading: 'Platforms We Manage', list: ['Instagram', 'Facebook', 'LinkedIn', 'YouTube', 'Threads'] },
      {
        heading: 'Our Services Include',
        list: ['Content Planning', 'Post & Reel Publishing', 'Account Management', 'Caption Writing', 'Hashtag Research', 'Audience Engagement', 'Monthly Content Calendar', 'Performance Monitoring'],
      },
    ],
    why: [
      { icon: 'CalendarDays', title: 'Consistent Posting', text: 'A regular posting schedule that keeps your audience engaged.' },
      { icon: 'Camera', title: 'Professional Content', text: 'High-quality posts, reels and branding content.' },
      { icon: 'TrendingUp', title: 'Business Growth', text: 'We focus on visibility, engagement and customer reach.' },
    ],
  },
  {
    slug: 'event-management',
    icon: 'PartyPopper',
    title: 'Event Management',
    short: 'End-to-end event planning, branding, photo & videography.',
    hero: 'From planning to perfection — we manage every detail.',
    sections: [
      {
        heading: 'What is Event Management?',
        text: 'Complete planning, coordination and execution of events, so clients can focus on their guests and objectives without worrying about operations.',
      },
      { heading: 'Events We Handle', list: ['Office Inaugurations', 'Corporate Events', 'Product Launches', 'Seminars & Workshops', 'College Events', 'Promotional Campaigns', 'Business Meetings'] },
      {
        heading: 'Services Included',
        list: ['Event Planning', 'Decoration & Setup', 'Photography', 'Videography', 'Branding Materials', 'Stage Management', 'Guest Coordination', 'Event Marketing', 'Technical Support'],
      },
    ],
    why: [
      { icon: 'ListChecks', title: 'End-to-End Management', text: 'We handle every stage from planning to completion.' },
      { icon: 'CameraIcon', title: 'Professional Coverage', text: 'Photography & videography to capture every moment.' },
      { icon: 'Star', title: 'Memorable Experiences', text: 'Professional, organized and impactful events.' },
    ],
  },
]

export const team = [
  {
    department: 'Administration',
    members: [
      { name: 'Yoganand Badidhaboni', role: 'Co-Founder, Mahalakshmi Enterprises · Business Manager', photo: '/photos/photo9.jpeg' },
      { name: 'Vamsi Krishna Yadav', role: 'Founder, Mahalakshmi Enterprises', photo: '/photos/photo10.jpeg' },
    ],
  },
  {
    department: 'Marketing & Content',
    members: [
      { name: 'Gollapalli Abhishikth', role: 'Founder, The Plan D · Content Creation · SMO Specialist', photo: '/photos/photo2.jpeg' },
      { name: 'Pinninti Rithwick Kumar', role: 'Co-Founder, The Plan D · Social Media Marketing Specialist', photo: '/photos/photo1.jpeg' },
      { name: 'Ravupalli Kusuma Varshini', role: 'Meta Ads Expert · SMM Specialist', photo: '/photos/photo5.jpeg' },
      { name: 'Aleti Augusteen', role: 'Co-Founder, The Plan D · Social Media Marketing Strategist', photo: '/photos/photo7.jpeg' },
      { name: 'Lolla Tarun Kumar', role: 'Content Strategist · SMO Expert', photo: '/photos/photo4.PNG' },
    ],
  },
  {
    department: 'SEO & Web',
    members: [
      { name: 'Bevara Varsha', role: 'SEO Expert · Web Designing Specialist', photo: '/photos/photo6.jpeg' },
      { name: 'Suman Brahma', role: 'Creative Web Designer · Content Creator', photo: '/photos/photo3.jpeg' },
      { name: 'Janu', role: 'SEO Executive · Web Designer', photo: '/photos/photo8.png' },
    ],
  },
  {
    department: 'Event Management & Photography',
    members: [{ name: 'Joy Daniel', role: 'Event Manager', photo: '/photos/photo11.jpeg' }],
  },
]

export const process = [
  { step: '01', title: 'Discover', text: 'We learn your business, goals and audience to build the right plan.' },
  { step: '02', title: 'Strategy', text: 'We design a data-driven roadmap across the channels that fit you.' },
  { step: '03', title: 'Execute', text: 'Our team builds, launches and manages every campaign and asset.' },
  { step: '04', title: 'Optimize', text: 'We track results and continuously refine for better ROI.' },
]
