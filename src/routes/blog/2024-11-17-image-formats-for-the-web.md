---
title: 'Weekly learning review - image formats for the web'
date: 2024-11-17 13:15:00
---

This week's highlights was completing Lydia Hallie's Web Development Quiz - so much to learn!
Also discovered she has a JavaScript quiz that would be pretty cool to go through to test JavaScript knowledge from time to time.
Other things learned:

- A very light intro to domain driven design (likely a blog post for some other time)
- Finally looking at some PHP... after avoiding it for too long. Maybe it is time to pick up another language.

Today's review will be a quick summary of image formats for the web.

### Why image formats are important

Image sizes can get pretty big easily which can affect assets bundling size and optimisation - generally when we compress images, we tend to lose quality and thus images become more pixelated. Is there a way we could be able to preserve quality while also keeping size small so that our websites are still performant enough (and that users don't need to keep waiting for massive images to load)?
As always, pick what is best for your use case (whether it's sharing, or smaller images for thumbnails, or needing higher quality images).

There are certain features that different image formats support to help with this:

### Lossy and lossless compression

There are different ways of compressing data - and these are the two main ones seen for images and reducing sizes of digital files.

- **Lossy**: reduces file size by removing some of the original data
  - used when we can afford to lose data, or need to free up storage space (think of it like making the picture similar but not so much of a difference)
  - good for web use, small file sizes but quality degrades easily
- **Lossless**: reduces file size by removing metadata
  - this is used when image quality needs to be preserved, but allows image to still take up less space
  - reversible as no data is lost
  - slightly bigger than lossy, but quality will be preserved

### Progressive image rendering

On some websites, you may see images be pixelated, and then over a short period of time (a few seconds later) it becomes sharper and clearer. This is what is known as progressive image rendering - primarily used to give a better user experience rather than having to hide images, or wait for the whole image to load, or having to only load half the image as it comes through.

There are 2 ways to achieve this:

- progressive encoding - where browsers paint low-resolution encoded images to screen while the image is being downloaded
- placeholders - this means putting skeletons or empty spaces that match the dimensions of the image to be loaded, or low resolution versions of the images (such as thumbnails) before transitioning to the new image. This can be combined with lazy loading to provide a better user experience.

### Types of formats used for web

- **PNG** (Portable Network Graphics)

  - Lossless compression available, higher quality = larger file size
  - supports transparency
  - ideal for illustrations, graphics

- **JPEG** (Joint Photographic Experts Group)

  - Lossy compression available
  - supports progressive image rendering
  - Generally a choice for online images, or print

- **GIF** (Graphics Interchange Format)

  - used for simple animations or loops of animations
  - ideal for images with flat colours and hard edges (logos, illustrations with no gradients)
  - supports transparency

- **WEBP**

  - created by Google to help 'make web faster'
  - both lossy and lossless compression
  - supports transparency
  - supports progressive image rendering (but not through progressive encoding)
  - supports animation
  - generally picking up as a competitor to JPEG as its compression is a lot better compared to it
  - Still awaiting for full browser support
  - can be loaded with `<picture>` / `<source>` elements and use JPEG as a fallback
  - does not support HDR / WCG images, due to 8-bit colour precision limitation

- **AVIF** (AV1 image file format) - both lossy and lossless compression (better than JPEG) - supports transparency - if saving bandwidth is important, this is a good choice - supports HDR (high dynamic range) and WCG (wide color gamut) images - has limited browser support
  Both WEBP and AVIF were designed to help overcome limitations of JPEG and PNG mostly through as better compression image formats, and flexibility with other features.

### References

- Lydia Hallie's [Advanced Web Development Quiz](https://frontendmasters.com/courses/web-dev-quiz/) on FrontEnd Masters (question 26)
- Evgenii Ray's [Front End Systems Design](https://frontendmasters.com/courses/frontend-system-design/) course on FrontEnd Masters
- [Using Modern Image Formats: AVIF and WebP](https://www.smashingmagazine.com/2021/09/modern-image-formats-avif-webp/) - Addy Osmani via Smashing Magazine
- [WebP - An image format for the web](https://developers.google.com/speed/webp#:~:text=WebP%20is%20a%20modern%20image,that%20make%20the%20web%20faster.) - Google for Developers
- Adobe's [Lossy vs Lossless Compression Differences and When to Use](https://www.adobe.com/uk/creativecloud/photography/discover/lossy-vs-lossless.html#:~:text=What%20are%20the%20two%20types,size%20by%20removing%20unnecessary%20metadata.)
- Adobe's [guide to image file formats and image file types](https://www.adobe.com/acrobat/hub/guide-to-image-file-formats.html)
- [Progressive image rendering](https://blog.codinghorror.com/progressive-image-rendering/) - Coding Horror
- [An introduction to progressive image rendering](https://cloudinary.com/blog/an_introduction_to_progressive_image_rendering) - Cloudinary
- [Progressive image rendering](https://jmperezperez.com/renderconf17/#/8) - Jose M Perez (Render Conf 2017)
- COMM244: Design For the World Wide Web - [Web Graphic Formats](http://web.simmons.edu/~grovesd/comm244/notes/week5/image-formats)
