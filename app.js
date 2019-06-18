const download = require('image-downloader')
 
// Download to a directory and save with the original filename
const options = {
  url: 'http://farm4.static.flickr.com/3133/2714061502_f96fe89967.jpg',
  dest: '/Users/cognitifai/Documents/image-net'                  // Save to /path/to/dest/image.jpg
}
 
download.image(options)
  .then(({ filename, image }) => {
    console.log('File saved to', filename)
  })
  .catch((err) => {
    console.error(err)
  })