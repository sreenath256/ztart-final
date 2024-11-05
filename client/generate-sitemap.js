import { SitemapStream } from 'sitemap';
import { createWriteStream } from 'fs';
import { Readable } from 'stream';
import { streamToPromise } from 'sitemap'; // Import streamToPromise from the sitemap package
import axios from 'axios';


async function generateSitemap() {

  const baseUrl = 'http://localhost:3000'

  try {
    // Fetch dynamic data
    const [blogsResponse, visasResponse] = await Promise.all([
      axios.get(`${baseUrl}/api/1.0/user/blog/get-blog-slug`),   // Replace with your blogs pages API endpoint
      axios.get(`${baseUrl}/api/1.0/user/testimonial/get-visa-slug`)  // Replace with your visa API endpoint
    ]);
    // return console.log(blogsResponse.data, visasResponse.data);

    const blogLinks = blogsResponse.data.data.map(blog => ({
      url: `/blogs/${blog.slug}`,
      changefreq: 'monthly',
      priority: 0.7
    }));

    const visaLinks = visasResponse.data.data.map(visa => ({
      url: `/visa/${visa.slug}`,
      changefreq: 'monthly',
      priority: 0.7
    }));


    // Combine all links
    const links = [...blogLinks, ...visaLinks];

    // Create a sitemap stream
    const stream = new SitemapStream({ hostname: 'https://ztartvisa.com' });

    // Pipe the links into the stream
    Readable.from(links).pipe(stream).pipe(createWriteStream('./sitemap.xml'));

    // Write the sitemap to a file
    await streamToPromise(stream);
    console.log('Sitemap created successfully!');
  } catch (error) {
    console.error('Error generating sitemap:', error);
  }


}




// Run the function to generate the sitemap
generateSitemap();