import { SitemapStream } from 'sitemap';
import { createWriteStream } from 'fs';
import { Readable } from 'stream';
import { streamToPromise } from 'sitemap'; // Import streamToPromise from the sitemap package

// Array of URLs to be included in the sitemap
const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'monthly', priority: 0.7 },
  { url: '/faq', changefreq: 'monthly', priority: 0.7 },
  { url: '/contact', changefreq: 'monthly', priority: 0.7 },
  { url: '/visa-consultant-in-dubai', changefreq: 'monthly', priority: 0.7 },
  { url: '/privacy-policy', changefreq: 'monthly', priority: 0.7 },
  // blog links
  { url: '/blogs', changefreq: 'monthly', priority: 0.7 },
  { url: '/blogs/applying-for-an-australian-tourist-visa-from-dubai', changefreq: 'monthly', priority: 0.7 },
  { url: '/blogs/best-time-to-visit-australia', changefreq: 'monthly', priority: 0.7 },
  { url: '/blogs/uk-adventure-more-than-just-london', changefreq: 'monthly', priority: 0.7 },
  { url: '/blogs/japan-visa-for-uae-residence-things-to-do-and-many-more', changefreq: 'monthly', priority: 0.7 },
  { url: '/blogs/is-travel-insurance-must-for-international-travelers', changefreq: 'monthly', priority: 0.7 },
  { url: '/blogs/how-to-get-schengen-visa-a-complete-guide-for-uae-travellers', changefreq: 'monthly', priority: 0.7 },
  { url: '/blogs/a-comprehensive-guide-on-us-visa-renewal-from-uae', changefreq: 'monthly', priority: 0.7 },
  { url: '/blogs/how-to-apply-for-a-turkey-tourist-visa-for-uae-residents', changefreq: 'monthly', priority: 0.7 },
  { url: '/blogs/common-reasons-for-uk-visa-refusals-and-how-to-prevent-them', changefreq: 'monthly', priority: 0.7 },
  { url: '/blogs/visa-requirements-for-popular-travel-destinations-in-2024', changefreq: 'monthly', priority: 0.7 },
  // visa link
  { url: '/visa/australia-visa-dubai', changefreq: 'monthly', priority: 0.7 },
  { url: '/visa/uk-visit-visa-from-dubai', changefreq: 'monthly', priority: 0.7 },
  { url: '/visa/italy-visit-visa-from-dubai', changefreq: 'monthly', priority: 0.7 },
  { url: '/visa/canada-tourist-visa-from-dubai', changefreq: 'monthly', priority: 0.7 },
  { url: '/visa/switzerland-visa-from-dubai', changefreq: 'monthly', priority: 0.7 },
  { url: '/visa/france-visa-dubai', changefreq: 'monthly', priority: 0.7 },
  { url: '/visa/spain-visa-dubai', changefreq: 'monthly', priority: 0.7 },
  { url: '/visa/turkey-visa-from-dubai', changefreq: 'monthly', priority: 0.7 },
  { url: '/visa/japan-visit-visa-from-dubai', changefreq: 'monthly', priority: 0.7 },
  { url: '/visa/usa-visit-visa-from-dubai', changefreq: 'monthly', priority: 0.7 },
];

// Create a stream to write to
const stream = new SitemapStream({ hostname: 'https://ztartvisa.com' });

// Stream the URLs to the stream
Readable.from(links).pipe(stream).pipe(createWriteStream('./sitemap.xml'));

// Generate the sitemap
streamToPromise(stream).then(() => console.log('Sitemap created successfully'));
